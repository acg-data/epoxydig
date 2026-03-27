export function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-brand-black border-y border-brand-grey-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From 3 Jobs/Month to 15+ Jobs/Month
          </h2>
          <p className="text-brand-grey-light">
            How one epoxy flooring company transformed their business with our growth system.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-white/5 rounded-2xl p-8 border border-brand-grey-dark">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Stats */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-grey-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <p className="text-brand-grey font-medium">Before: 3 Jobs/Month</p>
                    <p className="text-sm text-brand-grey-light">Struggling to get consistent leads</p>
                  </div>
                </div>
                
                <div className="w-px h-8 bg-brand-grey-dark ml-8"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                    15+
                  </div>
                  <div>
                    <p className="text-white font-bold">After: 15+ Jobs/Month</p>
                    <p className="text-sm text-brand-grey-light">3-month waitlist for new clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-grey-dark">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-grey">Revenue Growth</span>
                  <span className="text-brand-red font-bold">+400%</span>
                </div>
                <div className="h-2 bg-brand-grey-dark rounded-full overflow-hidden">
                  <div className="h-full bg-brand-red w-[80%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-brand-grey">$24K/mo</span>
                  <span className="text-white font-bold">$120K/mo</span>
                </div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="bg-brand-black rounded-xl p-6 border border-brand-grey-dark">
              <svg className="w-8 h-8 text-brand-red mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-white text-lg leading-relaxed mb-4">
                "Before Epoxy Floor Digital, I was relying on word of mouth. Now I have a 3-month waitlist and we're hiring our 4th crew. Best investment I've made in my business."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-grey-dark rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <p className="text-white font-bold">Mike Johnson</p>
                  <p className="text-sm text-brand-grey">Premier Garage Floors, Dallas TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}