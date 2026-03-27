import { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly will I start seeing results?',
    answer: 'Most clients start seeing leads within 2-4 weeks of launching their campaigns. SEO results typically take 3-6 months to fully mature, but paid advertising can generate leads immediately. We set realistic expectations based on your market and competition.'
  },
  {
    question: 'Do you work with epoxy companies outside the US?',
    answer: 'We primarily work with epoxy flooring companies in the United States and Canada. We understand the local markets, search behavior, and competition in these regions, which allows us to deliver the best results.'
  },
  {
    question: 'What makes you different from other marketing agencies?',
    answer: 'We specialize exclusively in epoxy flooring, garage floor coatings, and concrete polishing. We understand your customers, your pricing, your seasonality, and your competition. Generic agencies don\'t have this deep industry knowledge.'
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No. Our Growth and Scale packages are month-to-month after the initial setup. We\'re confident you\'ll stay because of the results we deliver, not because of a contract. The Starter package has a 6-month minimum commitment.'
  },
  {
    question: 'How do I know if my market is a good fit?',
    answer: 'During our discovery call, we\'ll analyze your market size, competition, and current online presence. We only work with clients where we\'re confident we can deliver results. If we don\'t think we can help, we\'ll tell you upfront.'
  },
  {
    question: 'What if I don\'t have a website yet?',
    answer: 'That\'s perfect! We\'ll build you a high-converting website from scratch as part of your package. Our sites are designed specifically for epoxy flooring companies with lead capture forms, before/after galleries, and instant quote calculators.'
  }
];

interface FAQProps {
  onCtaClick?: () => void;
}

export function FAQ({ onCtaClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-brand-grey">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-brand-grey-lighter overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-cream transition-colors"
              >
                <span className="font-bold text-brand-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-grey shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-brand-grey leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-brand-black rounded-2xl p-8 text-center">
          <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-7 h-7 text-brand-red" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Still Have Questions?
          </h3>
          <p className="text-brand-grey-light mb-6">
            Book a free strategy call and we'll answer everything specific to your business.
          </p>
          <button 
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-red-dark transition-colors"
          >
            Book Free Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}