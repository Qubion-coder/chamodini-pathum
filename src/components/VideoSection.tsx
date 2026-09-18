import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-brand-ivory">
      <video 
        src="/Wedding_envelope_opens_withk4_light_202608040131.mp4" 
        className="h-full w-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className="absolute inset-0 bg-transparent" />
    </section>
  );
};
