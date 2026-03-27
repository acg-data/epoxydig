interface NavProps {
  onCtaClick?: () => void;
}

export function Nav({ onCtaClick }: NavProps) {
  return (
    <>
      {/* Top banner */}
      <div className="bg-brand-black text-brand-white text-center py-2 px-4 text-xs font-semibold tracking-wider uppercase">
        Now Booking Q1 2025 Projects — <strong className="text-brand-red">Limited Spots Available</strong>
      </div>
      
      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-md border-b border-brand-grey-lighter shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-black rounded-lg flex items-center justify-center">
                <span className="text-brand-white font-bold text-xl">EF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-brand-black leading-none">Epoxy Floor</span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-red">Digital</span>
              </div>
            </a>
            
            {/* CTA */}
            <button 
              onClick={onCtaClick}
              className="text-sm font-bold tracking-wider uppercase text-brand-white bg-brand-black px-5 py-2.5 hover:bg-brand-black-soft transition-all transform hover:-translate-y-px shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}