import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Eagerly trigger video buffering on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsLoading(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(e => {
            console.warn("Direct play failed, entering main directly:", e);
            onEnter();
          });
      } else {
        setIsPlaying(true);
        setIsLoading(false);
      }
    } else {
      onEnter();
    }
  };

  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name) 
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim() 
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-black">
      <video 
        ref={videoRef}
        muted 
        playsInline 
        preload="auto"
        poster="/video_poster.webp"
        onEnded={onEnter}
        onError={() => {
          console.warn("Video failed to load, skipping directly to invitation");
          onEnter();
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Wedding_envelope_opens_withk4_light_202608040131.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

      {/* Skip button visible while video is playing */}
      {isPlaying && (
        <button
          onClick={onEnter}
          className="absolute top-6 right-6 z-30 font-sans text-xs tracking-widest uppercase text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer active:scale-95"
        >
          Skip
        </button>
      )}
      
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-full flex flex-col justify-end items-center pb-24 h-full gap-6"
          >
            {guestNameString && (
              <div className="absolute top-16 sm:relative sm:top-auto flex flex-col items-center justify-center bg-transparent px-8 py-4 rounded-2xl backdrop-blur-sm border border-[#FFFFFF]/20 mb-4 sm:mb-8 z-20">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 font-sans text-stone-800 drop-shadow-md text-center">
                  We cordially invite
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] whitespace-nowrap text-center drop-shadow-lg">
                  {guestNameString}
                </p>
              </div>
            )}
            <button 
              onClick={handlePlay}
              disabled={isLoading}
              className="font-sans px-10 py-4 bg-transparent backdrop-blur-md text-[#FFFFFF] border border-[#FFFFFF]/50 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#FFFFFF] hover:text-black hover:scale-105 transition-all duration-300 uppercase tracking-[0.3em] text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
            >
              {isLoading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1" />
                  Opening...
                </>
              ) : (
                "Open Invitation"
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
