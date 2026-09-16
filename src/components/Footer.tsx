import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-transparent text-stone-800 border-t border-[#FFFFFF]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-[#FFFFFF]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-[#FFFFFF] opacity-90 fill-transparent" strokeWidth={1} />
              <span className="text-4xl lg:text-5xl font-display text-[#FFFFFF] drop-shadow-sm" style={{ fontFamily: "'Great Vibes', cursive" }}>P &amp; C</span>
            </div>
            <p className="text-stone-800 leading-[1.8] font-serif text-justify tracking-wide text-sm md:text-base pr-4">
              Thank you for visiting our homecoming website and being part of our love story. The honor of your presence would mean the world to us.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-sans font-semibold text-[#FFFFFF] uppercase tracking-[0.2em]">Quick Links</h3>
            <div className="w-8 h-[1px] bg-[#FFFFFF]/40 mb-4"></div>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('details')} className="text-stone-800 hover:text-[#FFFFFF] transition-colors font-sans tracking-[0.1em] text-sm uppercase">
                  Details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rsvp')} className="text-stone-800 hover:text-[#FFFFFF] transition-colors font-sans tracking-[0.1em] text-sm uppercase">
                  RSVP
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-sans font-semibold text-[#FFFFFF] uppercase tracking-[0.2em]">Homecoming Details</h3>
            <div className="w-8 h-[1px] bg-[#FFFFFF]/40 mb-4"></div>
            <div className="space-y-3 text-stone-800 font-sans tracking-[0.1em] text-sm">
              <p>25th October 2026</p>
              <p>Grand Ballroom, Waters Edge</p>
              <p className="text-[#FFFFFF] italic mt-4 font-serif tracking-widest text-xs opacity-80">#Patum&amp;Chamodini2026</p>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-[#FFFFFF]/20 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FFFFFF]/50"></div>
            <span className="text-stone-800 font-sans tracking-[0.3em] uppercase text-[10px]">Made with love</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FFFFFF]/50"></div>
          </div>
          <p className="text-[#FFFFFF]/70 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
            © 2026 Patum &amp; Chamodini's Homecoming
          </p>
          <p className="text-[#FFFFFF] text-xs mt-2 font-sans tracking-wider">
            Want a beautiful event website like this? Create yours with <a target="_blank" rel="noreferrer" className="text-stone-800 hover:text-[#FFFFFF] underline" href="https://wa.me/94707819074">invitemint</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
