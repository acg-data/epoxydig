import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Epoxy Companies Served',
    description: 'Across the US and Canada'
  },
  {
    icon: DollarSign,
    value: '$10M+',
    label: 'Revenue Generated',
    description: 'For our clients in 2024'
  },
  {
    icon: TrendingUp,
    value: '3.2x',
    label: 'Average ROI',
    description: 'Within first 6 months'
  },
  {
    icon: Target,
    value: '847',
    label: 'Leads Per Month',
    description: 'Average across all clients'
  }
];

export function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Numbers from{' '}
            <span className="text-brand-red">Real Clients</span>
          </h2>
          <p className="text-lg text-brand-grey-light">
            We measure success by the revenue we generate for your epoxy flooring business.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-red/30 transition-colors"
            >
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-brand-red" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-brand-grey text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                From 3 Jobs/Month to 15+ Jobs/Month
              </h3>
              <p className="text-brand-grey mb-6">
                Midwest Epoxy Coatings was struggling to get consistent leads. Within 90 days of working with us, they went from barely covering expenses to having a 3-month waitlist.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center text-white font-bold">
                    $8K
                  </div>
                  <div>
                    <p className="font-bold text-brand-black">Average Ticket Before</p>
                    <p className="text-sm text-brand-grey">Small residential jobs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold">
                    $15K
                  </div>
                  <div>
                    <p className="font-bold text-brand-black">Average Ticket After</p>
                    <p className="text-sm text-brand-grey">Large garage & commercial jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-cream rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-brand-black">Monthly Revenue</h4>
                <span className="text-brand-red font-bold">+400%</span>
              </div>
              <div className="h-48 flex items-end justify-between gap-3">
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-brand-grey-lighter rounded-t-lg h-[20%]"></div>
                  <span className="text-xs text-brand-grey">Jan</span>
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-brand-grey-lighter rounded-t-lg h-[25%]"></div>
                  <span className="text-xs text-brand-grey">Feb</span>
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-brand-red rounded-t-lg h-[100%]"></div>
                  <span className="text-xs text-brand-red font-bold">Mar</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-grey-lighter">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-brand-grey">Starting Revenue</p>
                    <p className="text-2xl font-bold text-brand-black">$24,000/mo</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brand-red">Current Revenue</p>
                    <p className="text-2xl font-bold text-brand-red">$120,000/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}