interface NavProps {
  onCtaClick?: () => void;
}

export function EsNav({ onCtaClick }: NavProps) {
  return (
    <>
      {/* Top banner */}
      <div className="bg-brand-black text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wider uppercase">
        Reservando Proyectos Q1 2025 — <strong className="text-brand-red">Cupos Limitados Disponibles</strong>
      </div>
      
      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-grey-lighter shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/es" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-brand-black leading-none">Epoxy Floor</span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-red">Digital</span>
              </div>
            </a>
            
            {/* Nav Links + Language + CTA */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#services" className="hidden md:block text-sm font-medium text-brand-grey hover:text-brand-black transition-colors">
                Servicios
              </a>
              <a href="#results" className="hidden md:block text-sm font-medium text-brand-grey hover:text-brand-black transition-colors">
                Resultados
              </a>
              <a href="#pricing" className="hidden md:block text-sm font-medium text-brand-grey hover:text-brand-black transition-colors">
                Precios
              </a>
              
              {/* Language Switcher */}
              <a href="/" className="text-sm font-medium text-brand-grey hover:text-brand-red transition-colors">
                EN
              </a>
              
              <button 
                onClick={onCtaClick}
                className="text-sm font-bold tracking-wider uppercase text-white bg-brand-red px-5 py-2.5 hover:bg-brand-red-dark transition-all transform hover:-translate-y-px shadow-md"
              >
                Empezar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}