import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { Results } from './components/Results';
import { QuizFunnel } from './components/QuizFunnel';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Lazy load VideoVSL for performance
const VideoVSL = lazy(() => import('./components/VideoVSL').then(module => ({ default: module.VideoVSL })));

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const vslRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToVSL = () => {
    vslRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-black font-sans text-brand-grey">
      <Nav onCtaClick={scrollToQuiz} />
      
      <main id="main-content">
        <Hero onWatchVideo={scrollToVSL} />
        
        {/* Video VSL Section */}
        <div ref={vslRef}>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center bg-brand-black" role="status" aria-label="Loading video section">
              <div className="w-24 h-4 bg-brand-grey-dark rounded animate-pulse"></div>
            </div>
          }>
            <VideoVSL onCtaClick={scrollToQuiz} />
          </Suspense>
        </div>
        
        <TrustTicker />
        <Results />
        <QuizFunnel onComplete={() => {}} />
        <FAQ onCtaClick={scrollToQuiz} />
      </main>

      <Footer />

      {/* Sticky Bottom Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-brand-black/95 backdrop-blur-md border-t border-brand-grey-dark px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="complementary"
        aria-label="Call to action"
      >
        <div className="text-[13px] font-medium text-brand-grey text-center md:text-left">
          Ready to scale your epoxy business? <strong className="text-white">Limited spots for Q1 2025.</strong>
        </div>
        <button 
          onClick={scrollToQuiz}
          className="text-[11px] font-bold tracking-widest uppercase text-brand-black bg-white px-6 py-2.5 hover:bg-brand-grey-lighter transition-all duration-200 transform hover:-translate-y-px shadow-sm"
        >
          Check Eligibility <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default App;