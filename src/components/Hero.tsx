import { ArrowRight, TrendingUp, Phone, Calendar, CheckCircle } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-grey-dark to-brand-black opacity-90"></div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-red"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-grey-dark"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              For Garage Floor & Coating Companies
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              More Leads.
              <br />
              <span className="text-brand-red">More Jobs.</span>
              <br />
              More Revenue.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-brand-grey-light mb-8 max-w-xl mx-auto lg:mx-0">
              The all-in-one marketing & sales system for epoxy flooring companies. We fill your calendar with high-ticket garage floor coating projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={onCtaClick}
                className="group px-8 py-4 bg-brand-red text-white font-bold text-lg hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-brand-red/25 flex items-center justify-center gap-2"
              >
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#results" 
                className="px-8 py-4 bg-white/10 text-white font-bold text-lg hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                See Results
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-brand-grey-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-red" />
                <span>500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-red" />
                <span>$10M+ Revenue Generated</span>
              </div>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-brand-red/20 blur-3xl rounded-full"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Card header */}
              <div className="bg-brand-black px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                  <span className="text-white font-semibold text-sm">Client Dashboard</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-brand-grey"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-grey"></div>
                </div>
              </div>

              <div className="p-6">
                {/* Revenue stat */}
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-grey uppercase tracking-wider mb-1">Revenue This Month</p>
                    <h3 className="text-4xl font-bold text-brand-black">$127,450</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-green-100 px-3 py-1.5 rounded-full text-green-700 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" /> +143%
                  </div>
                </div>

                {/* Bar chart */}
                <div className="h-48 flex items-end justify-between gap-2 mb-4">
                  <div className="w-full bg-brand-grey-lighter rounded-t-sm h-[25%] hover:bg-brand-grey transition-colors"></div>
                  <div className="w-full bg-brand-grey-lighter rounded-t-sm h-[35%] hover:bg-brand-grey transition-colors"></div>
                  <div className="w-full bg-brand-grey-lighter rounded-t-sm h-[30%] hover:bg-brand-grey transition-colors"></div>
                  <div className="w-full bg-brand-grey-lighter rounded-t-sm h-[45%] hover:bg-brand-grey transition-colors"></div>
                  <div className="w-full bg-brand-grey-lighter rounded-t-sm h-[55%] hover:bg-brand-grey transition-colors"></div>
                  <div className="w-full bg-brand-red rounded-t-sm h-[95%] shadow-lg shadow-brand-red/30"></div>
                </div>

                {/* Month labels */}
                <div className="flex justify-between text-xs text-brand-grey font-medium">
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span className="text-brand-red font-bold">Dec</span>
                </div>

                {/* Stats row */}
                <div className="mt-6 pt-6 border-t border-brand-grey-lighter grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-brand-grey uppercase tracking-wider mb-1">New Leads</p>
                    <p className="text-xl font-bold text-brand-black">47</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-grey uppercase tracking-wider mb-1">Booked</p>
                    <p className="text-xl font-bold text-brand-black">12</p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-grey uppercase tracking-wider mb-1">Avg Job</p>
                    <p className="text-xl font-bold text-brand-black">$8.5K</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -right-4 top-8 bg-white p-4 rounded-xl shadow-xl border border-brand-grey-lighter flex items-center gap-3 max-w-[260px]">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-black">New Lead!</p>
                <p className="text-[10px] text-brand-grey">"Need garage epoxy quote for 3-car..."</p>
              </div>
            </div>

            {/* Floating calendar */}
            <div className="absolute -left-4 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-brand-grey-lighter flex items-center gap-3 max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-black">Job Booked</p>
                <p className="text-[10px] text-brand-grey">3-car garage coating - $12,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}