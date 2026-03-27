import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

export function ContactQuiz() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceArea: '',
    monthlyRevenue: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Application Received!
          </h2>
          <p className="text-lg text-brand-grey-light mb-8">
            Thanks for reaching out, {formData.name}. We'll review your information and get back to you within 24 hours to schedule your free strategy call.
          </p>
          <div className="bg-white/5 rounded-xl p-6 text-left">
            <p className="text-brand-grey-light text-sm mb-4">While you wait, here's what happens next:</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-xs font-bold">1</span>
                We review your application (within 24 hours)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Schedule a 30-minute discovery call
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-xs font-bold">3</span>
                Get a custom growth plan for your business
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Free Strategy Call
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Epoxy Business?
          </h2>
          <p className="text-lg text-brand-grey-light">
            Fill out the form below and we'll get back to you within 24 hours to schedule your free strategy call.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-brand-black mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-black mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
                placeholder="Premier Epoxy Floors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-black mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-brand-black mb-2">
              Service Area *
            </label>
            <input
              type="text"
              name="serviceArea"
              required
              value={formData.serviceArea}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
              placeholder="e.g., Dallas, TX and surrounding areas"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-brand-black mb-2">
              Current Monthly Revenue (approximate)
            </label>
            <select
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red"
            >
              <option value="">Select range...</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-brand-black mb-2">
              What are your biggest marketing challenges or goals?
            </label>
            <textarea
              name="goals"
              rows={4}
              value={formData.goals}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-brand-grey-lighter rounded-lg focus:outline-none focus:border-brand-red resize-none"
              placeholder="Tell us about your current situation and what you want to achieve..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-red-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-sm text-brand-grey mt-4">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      </div>
    </section>
  );
}