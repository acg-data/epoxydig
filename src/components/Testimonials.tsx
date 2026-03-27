import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Johnson',
    company: 'Premier Garage Floors',
    location: 'Dallas, TX',
    quote: "Before Epoxy Floor Digital, I was relying on word of mouth. Now I have a 3-month waitlist and we're hiring our 4th crew. Best investment I've made in my business.",
    results: 'Revenue up 340% in 8 months',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    company: 'Elite Coatings',
    location: 'Phoenix, AZ',
    quote: "The website they built for us is incredible. We get compliments on it all the time, and more importantly, it converts. Our lead volume tripled in the first 60 days.",
    results: '40+ leads per month',
    rating: 5
  },
  {
    name: 'David Rodriguez',
    company: 'Arizona Epoxy Pros',
    location: 'Tucson, AZ',
    quote: "I was skeptical about spending money on marketing, but these guys know the epoxy business. They understand exactly what customers are looking for and how to reach them.",
    results: 'Booking $8K+ average tickets',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-wider mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't Take Our Word For It
          </h2>
          <p className="text-lg text-brand-grey-light">
            Hear from epoxy flooring contractors who transformed their businesses with our marketing systems.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-brand-red/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-red/20" />
                <p className="text-brand-grey-light leading-relaxed pl-4">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Results badge */}
              <div className="inline-block bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                {testimonial.results}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-brand-grey">{testimonial.company}</p>
                  <p className="text-xs text-brand-grey-light">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}