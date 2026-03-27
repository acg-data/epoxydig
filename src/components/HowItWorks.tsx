import { Phone, Search, Calendar, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    description: 'We learn about your business, your goals, and your current marketing challenges.',
    timeframe: '30 minutes'
  },
  {
    number: '02',
    icon: Search,
    title: 'Market Analysis',
    description: 'We research your competition, keywords, and opportunities in your service area.',
    timeframe: '1 week'
  },
  {
    number: '03',
    icon: Calendar,
    title: 'System Launch',
    description: 'We launch your new website, ads, and lead generation systems.',
    timeframe: '2-3 weeks'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimize & Scale',
    description: 'We continuously improve your campaigns and help you scale your business.',
    timeframe: 'Ongoing'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            How We Get You{' '}
            <span className="text-brand-red">More Jobs</span>
          </h2>
          <p className="text-lg text-brand-grey">
            A simple 4-step process from first call to flooded calendar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-brand-grey-lighter"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 border border-brand-grey-lighter hover:border-brand-red/30 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-brand-black rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-brand-grey-lighter">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {step.title}
                </h3>
                
                <p className="text-brand-grey mb-4">
                  {step.description}
                </p>
                
                <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-wider">
                  {step.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}