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
    <section className="relative bg-brand-black border-y border-brand-grey-dark shadow-2xl">
      {/* Top glowing edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
      
      <div 
        className="relative w-full aspect-video max-h-[80vh] overflow-hidden cursor-pointer flex items-center justify-center bg-brand-black"
        onClick={handlePlay}
      >
        {/* Animated Background Canvas */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"></div>
        
        {/* High-tech Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(200,16,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)'
          }}
        ></div>

        {/* Animated Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent"
              initial={{ opacity: 0, scaleX: 0, transformOrigin: 'left' }}
              animate={{ 
                opacity: [0, 0.8, 0], 
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
          
          {/* Pulsing Nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full bg-brand-red shadow-[0_0_10px_rgba(200,16,46,0.5)]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`
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
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-brand-black/60 backdrop-blur-sm z-10 hover:bg-brand-black/40 transition-colors duration-500"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-red rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <div className="w-24 h-24 rounded-full bg-brand-red flex items-center justify-center text-white relative shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-center px-4 max-w-2xl">
                <span className="block text-xl md:text-2xl font-bold text-white tracking-wide">
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
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-red-dark to-brand-red transition-all duration-[100ms] linear z-20" style={{ width: `${progress}%` }}></div>
        
        {/* Time Badge */}
        <div className="absolute bottom-4 right-5 font-mono text-xs text-brand-grey bg-black/40 border border-brand-grey-dark px-2.5 py-1 z-20 backdrop-blur-md">
          6:04
        </div>
      </div>

      <div className="bg-brand-black border-t border-brand-grey-dark px-6 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-medium text-brand-grey">
          Ready to see how it works? <strong className="text-white">Take the 60-second qualification quiz below.</strong>
        </div>
        <button 
          onClick={onCtaClick}
          className="text-sm font-bold tracking-widest uppercase text-brand-black bg-white px-6 py-3 hover:bg-brand-grey-lighter transition-colors shadow-lg"
        >
          Check My Eligibility &rarr;
        </button>
      </div>
    </section>
  );
}