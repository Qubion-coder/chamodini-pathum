import React from 'react';

export const ImageSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-brand-ivory">
      <img 
        src="/ChatGPT Image Sep 2, 2026, 01_40_42 AM.png" 
        alt="Wedding background" 
        className="h-full w-full object-cover" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-transparent" />
    </section>
  );
};
