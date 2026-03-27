import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onCtaClick?: () => void;
}

const plans = [
  {
    name: 'Starter',
    price: '$1,997',
    setup: '+ $497/mo',
    description: 'Perfect for solo operators just getting started with marketing.',
    features: [
      'Custom website (3 pages)',
      'Google Business Profile optimization',
      'Basic SEO setup',
      'Lead capture forms',
      'Monthly reporting',
      'Email support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: '$2,997',
    setup: '+ $997/mo',
    description: 'For established companies ready to scale their lead generation.',
    features: [
      'Everything in Starter, plus:',
      'Google Ads management ($1K/mo ad spend included)',
      'Facebook/Instagram ads',
      'Lead follow-up automation',
      'CRM integration',
      'Call tracking & recording',
      'Weekly strategy calls',
      'Priority support'
    ],
    cta: 'Most Popular',
    popular: true
  },
  {
    name: 'Scale',
    price: '$4,997',
    setup: '+ $1,997/mo',
    description: 'Full-service marketing & sales system for aggressive growth.',
    features: [
      'Everything in Growth, plus:',
      'Unlimited website pages',
      'Advanced SEO & content marketing',
      'Sales training for your team',
      'Operations system setup',
      'Reputation management',
      'Dedicated account manager',
      '24/7 support'
    ],
    cta: 'Schedule Call',
    popular: false
  }
];

export function Pricing({ onCtaClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Simple, Transparent{' '}
            <span className="text-brand-red">Pricing</span>
          </h2>
          <p className="text-lg text-brand-grey">
            Choose the package that fits your business. No hidden fees. No long-term contracts.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-brand-black text-white border-2 border-brand-red' 
                  : 'bg-brand-cream border border-brand-grey-lighter'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-brand-black'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-brand-grey-light' : 'text-brand-grey'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-brand-black'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-brand-grey-light' : 'text-brand-grey'}`}>
                    setup
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-brand-grey-light' : 'text-brand-grey'}`}>
                  {plan.setup}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${plan.popular ? 'text-brand-red' : 'text-brand-red'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onCtaClick}
                className={`w-full py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-brand-red text-white hover:bg-brand-red-dark'
                    : 'bg-brand-black text-white hover:bg-brand-grey-dark'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-brand-grey">
            <span className="font-bold text-brand-black">30-Day Money-Back Guarantee:</span> If you're not satisfied with our service in the first 30 days, we'll refund 100% of your money. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}