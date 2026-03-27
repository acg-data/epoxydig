import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react';

interface QuizFunnelProps {
  onComplete: () => void;
}

const questions = [
  { 
    q: "What type of business do you run?", 
    opts: [
      "Garage floor epoxy / coatings", 
      "Commercial epoxy flooring", 
      "Concrete polishing", 
      "Other flooring / construction",
      "Not in flooring industry"
    ], 
    disqualify: [3, 4] 
  },
  { 
    q: "What's your current monthly revenue?", 
    opts: [
      "Under $10,000", 
      "$10,000 – $25,000", 
      "$25,000 – $50,000", 
      "$50,000 – $100,000",
      "$100,000+"
    ], 
    disqualify: [] 
  },
  { 
    q: "How many jobs do you book per month on average?", 
    opts: [
      "1-3 jobs", 
      "4-7 jobs", 
      "8-15 jobs", 
      "16+ jobs"
    ], 
    disqualify: [] 
  },
  { 
    q: "What's your biggest challenge right now?", 
    opts: [
      "Not enough leads / inconsistent flow", 
      "Leads aren't qualified (price shoppers)", 
      "Can't convert leads to booked jobs", 
      "Need to raise prices but scared to lose customers",
      "Operations chaos - can't handle more volume"
    ], 
    disqualify: [] 
  }
];

export function QuizFunnel({ onComplete }: QuizFunnelProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [status, setStatus] = useState<'playing' | 'complete' | 'disqualified'>('playing');
  const [direction, setDirection] = useState(1);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('epoxyQuizAnswers');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed);
    }
  }, []);

  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem('epoxyQuizAnswers', JSON.stringify(answers));
    }
  }, [answers]);

  const handleSelect = (idx: number) => {
    const newAnswers = [...answers];
    while (newAnswers.length <= currentStep) newAnswers.push(-1);
    newAnswers[currentStep] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentStep] === undefined) return;
    
    if (questions[currentStep].disqualify.includes(answers[currentStep])) {
      setStatus('disqualified');
      return;
    }

    if (currentStep === questions.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('complete');
    onComplete();
  };

  if (status === 'disqualified') {
    return (
      <section id="quiz" className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-brand-grey-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-10 h-10 text-brand-grey" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thanks for your interest!
          </h2>
          <p className="text-lg text-brand-grey mb-6">
            Based on your responses, our system might not be the right fit for your business at this time. We specialize in helping established epoxy flooring companies scale their operations.
          </p>
          <p className="text-brand-grey-light">
            If you'd like to discuss other options, feel free to email us at hello@epoxyfloordigital.com
          </p>
        </div>
      </section>
    );
  }

  if (status === 'complete') {
    return (
      <section id="quiz" className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Application Received!
          </h2>
          <p className="text-lg text-brand-grey mb-8">
            Thanks {contactInfo.name}! We'll review your application and reach out within 24 hours to schedule your free strategy call.
          </p>
          <div className="bg-white/5 rounded-xl p-6 text-left border border-brand-grey-dark">
            <p className="text-brand-grey text-sm mb-4">What happens next:</p>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                We review your answers (within 24 hours)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                Schedule a 30-minute strategy call
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                Get your custom growth plan
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Step {Math.min(currentStep + 1, questions.length + 1)} of {questions.length + 1}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Check Your Eligibility
          </h2>
          <p className="text-brand-grey">
            Answer 4 quick questions to see if our system is right for your business.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-brand-grey-dark rounded-full h-2 mb-12">
          <motion.div 
            className="bg-brand-red h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep) / (questions.length + 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Question Card */}
        <div className="bg-white/5 rounded-2xl p-8 border border-brand-grey-dark">
          <AnimatePresence mode="wait" custom={direction}>
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                custom={direction}
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  {questions[currentStep].q}
                </h3>

                <div className="space-y-3">
                  {questions[currentStep].opts.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        answers[currentStep] === idx
                          ? 'bg-brand-red/10 border-brand-red text-white'
                          : 'bg-brand-black border-brand-grey-dark text-brand-grey hover:border-brand-grey hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          answers[currentStep] === idx
                            ? 'border-brand-red bg-brand-red'
                            : 'border-brand-grey'
                        }`}>
                          {answers[currentStep] === idx && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        {opt}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      currentStep === 0
                        ? 'text-brand-grey-dark cursor-not-allowed'
                        : 'text-brand-grey hover:text-white'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={answers[currentStep] === undefined}
                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all ${
                      answers[currentStep] !== undefined
                        ? 'bg-brand-red text-white hover:bg-brand-red-dark'
                        : 'bg-brand-grey-dark text-brand-grey cursor-not-allowed'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Continue' : 'Next'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Great! You're qualified. Enter your info to schedule your strategy call.
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-grey mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-grey-dark rounded-lg text-white focus:outline-none focus:border-brand-red"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-grey mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-grey-dark rounded-lg text-white focus:outline-none focus:border-brand-red"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-grey mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-grey-dark rounded-lg text-white focus:outline-none focus:border-brand-red"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 px-6 py-3 rounded-lg font-medium text-brand-grey hover:text-white transition-colors border border-brand-grey-dark"
                    >
                      <ArrowLeft className="w-4 h-4 inline mr-2" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] px-8 py-3 bg-brand-red text-white font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Schedule My Call
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Privacy Note */}
        <p className="text-center text-brand-grey text-sm mt-6">
          Your information is secure and will never be shared. We respect your privacy.
        </p>
      </div>
    </section>
  );
}