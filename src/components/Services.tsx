import { Search, Globe, MessageSquare, BarChart3, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Local SEO',
    description: 'Dominate Google for "garage floor epoxy near me" and other high-intent keywords in your service area.',
    features: ['Google Business optimization', 'Local citations', 'Review management']
  },
  {
    icon: Globe,
    title: 'High-Converting Websites',
    description: 'Custom websites built specifically for epoxy flooring companies that turn visitors into qualified leads.',
    features: ['Lead capture forms', 'Before/after galleries', 'Instant quote calculators']
  },
  {
    icon: MessageSquare,
    title: 'Lead Follow-Up Systems',
    description: 'Never lose another lead. Automated SMS, email, and call sequences that book appointments while you work.',
    features: ['Auto-responders', 'Appointment booking', 'CRM integration']
  },
  {
    icon: BarChart3,
    title: 'Paid Advertising',
    description: 'Google Ads and Facebook campaigns designed for epoxy flooring with proven ROI.',
    features: ['Google Ads management', 'Facebook/Instagram ads', 'Retargeting campaigns']
  },
  {
    icon: Users,
    title: 'Sales Training',
    description: 'Convert more inquiries into booked jobs with scripts and training for your team.',
    features: ['Call scripts', ' objection handling', 'Closing techniques']
  },
  {
    icon: Zap,
    title: 'Operations Systems',
    description: 'Streamline your business with tools for scheduling, invoicing, and team management.',
    features: ['Job scheduling', 'Automated invoicing', 'Team management']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Full-Service Marketing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Everything You Need to{' '}
            <span className="text-brand-red">Grow Your Business</span>
          </h2>
          <p className="text-lg text-brand-grey">
            From attracting leads to closing jobs — we handle the entire marketing and sales process so you can focus on delivering great work.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-brand-cream rounded-2xl border border-brand-grey-lighter hover:border-brand-red/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-brand-grey mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-brand-grey-dark">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}