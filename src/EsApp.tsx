import { useState } from 'react';
import { EsNav } from './components/EsNav';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactQuiz } from './components/ContactQuiz';
import { Footer } from './components/Footer';

function EsApp() {
  const [showSticky, setShowSticky] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowSticky(window.scrollY > 600);
    }, { passive: true });
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <EsNav onCtaClick={scrollToContact} />
      
      <main>
        <Hero onCtaClick={scrollToContact} />
        <Services />
        <Results />
        <HowItWorks />
        <Testimonials />
        <Pricing onCtaClick={scrollToContact} />
        <FAQ onCtaClick={scrollToContact} />
        <ContactQuiz />
      </main>

      <Footer />

      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-black border-t border-white/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-center md:text-left">
              <span className="text-sm font-bold">¿Listo para hacer crecer tu negocio de epoxi?</span>
              <span className="text-brand-grey-light text-sm ml-2">Cupos limitados para Q1 2025.</span>
            </div>
            <button 
              onClick={scrollToContact}
              className="w-full md:w-auto px-8 py-3 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-red-dark transition-colors"
            >
              Llamada Gratis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EsApp;