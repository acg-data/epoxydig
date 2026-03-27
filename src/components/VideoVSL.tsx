import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoVSLProps {
  onCtaClick: () => void;
}

export function VideoVSL({ onCtaClick }: VideoVSLProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 0.3;
      setProgress(Math.min(current, 100));
      if (current >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <section className="relative bg-brand-cream border-y border-brand-grey-lighter shadow-2xl">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-black"></div>
      
      <div 
        className="relative w-full aspect-video max-h-[80vh] overflow-hidden cursor-pointer flex items-center justify-center bg-brand-cream"
        onClick={handlePlay}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-white to-brand-cream-dark"></div>
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(brand-black 1px, transparent 1px), linear-gradient(90deg, brand-black 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)'
          }}
        ></div>

        {/* Animated Data Streams - Dark */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-brand-black to-transparent"
              initial={{ opacity: 0, scaleX: 0, transformOrigin: 'left' }}
              animate={{ 
                opacity: [0, 0.4, 0], 
                scaleX: [0, 1, 0],
                x: ['-50%', '100%']
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${Math.random() * 20}%`,
                width: `${30 + Math.random() * 40}%`
              }}
            />
          ))}
        </div>

        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-brand-white/60 backdrop-blur-sm z-10 hover:bg-brand-white/40 transition-colors duration-500"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-black rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                <div className="w-24 h-24 rounded-full bg-brand-black flex items-center justify-center text-brand-white relative shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-center px-4 max-w-2xl">
                <span className="block text-xl md:text-2xl font-bold text-brand-black tracking-wide">
                  Why the Most Successful Epoxy Companies Are Switching to Our Growth System
                </span>
                <span className="block text-sm font-medium text-brand-grey mt-3 tracking-[0.15em] uppercase">
                  6 minutes &middot; Garage floor specialists &middot; No obligation
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fake Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-black to-brand-grey-dark transition-all duration-[100ms] linear z-20" style={{ width: `${progress}%` }}></div>
        
        {/* Time Badge */}
        <div className="absolute bottom-4 right-5 font-mono text-xs text-brand-grey bg-brand-white border border-brand-grey-lighter px-2.5 py-1 z-20 backdrop-blur-md">
          6:04
        </div>
      </div>

      <div className="bg-brand-white border-t border-brand-grey-lighter px-6 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-medium text-brand-grey">
          Ready to see how it works? <strong className="text-brand-black">Take the 60-second qualification quiz below.</strong>
        </div>
        <button 
          onClick={onCtaClick}
          className="text-sm font-bold tracking-widest uppercase text-brand-white bg-brand-black px-6 py-3 hover:bg-brand-black-soft transition-colors shadow-lg"
        >
          Check My Eligibility &rarr;
        </button>
      </div>
    </section>
  );
}