export function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-brand-white border-y border-brand-grey-lighter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-black text-brand-white font-bold text-sm uppercase tracking-wider px-4 py-2 mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            From 3 Jobs/Month to 15+ Jobs/Month
          </h2>
          <p className="text-brand-grey">
            How one epoxy flooring company transformed their business with our growth system.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-brand-cream rounded-2xl p-8 border border-brand-grey-lighter shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Stats */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-grey-lighter rounded-full flex items-center justify-center text-brand-grey font-bold text-lg">
                    3
                  </div>
                  <div>
                    <p className="text-brand-grey-dark font-medium">Before: 3 Jobs/Month</p>
                    <p className="text-sm text-brand-grey">Struggling to get consistent leads</p>
                  </div>
                </div>
                
                <div className="w-px h-8 bg-brand-grey-lighter ml-8"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center text-brand-white font-bold text-lg">
                    15+
                  </div>
                  <div>
                    <p className="text-brand-black font-bold">After: 15+ Jobs/Month</p>
                    <p className="text-sm text-brand-grey">3-month waitlist for new clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-grey-lighter">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-grey">Revenue Growth</span>
                  <span className="text-brand-red font-bold">+400%</span>
                </div>
                <div className="h-2 bg-brand-grey-lighter rounded-full overflow-hidden">
                  <div className="h-full bg-brand-black w-[80%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-brand-grey">$24K/mo</span>
                  <span className="text-brand-black font-bold">$120K/mo</span>
                </div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="bg-brand-white rounded-xl p-6 border border-brand-grey-lighter shadow-md">
              <svg className="w-8 h-8 text-brand-black mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-brand-black text-lg leading-relaxed mb-4">
                "Before Epoxy Floor Digital, I was relying on word of mouth. Now I have a 3-month waitlist and we're hiring our 4th crew. Best investment I've made in my business."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-grey-lighter rounded-full flex items-center justify-center text-brand-grey font-bold">
                  MJ
                </div>
                <div>
                  <p className="text-brand-black font-bold">Mike Johnson</p>
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