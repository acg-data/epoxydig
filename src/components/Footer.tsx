import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white leading-none">Epoxy Floor</span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand-red">Digital</span>
              </div>
            </a>
            <p className="text-brand-grey-light text-sm mb-6">
              Full-service marketing agency for epoxy flooring, garage floor coatings, and concrete polishing companies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-grey hover:text-white hover:bg-brand-red transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-grey hover:text-white hover:bg-brand-red transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-grey hover:text-white hover:bg-brand-red transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-brand-grey hover:text-white transition-colors text-sm">Local SEO</a></li>
              <li><a href="#services" className="text-brand-grey hover:text-white transition-colors text-sm">Website Design</a></li>
              <li><a href="#services" className="text-brand-grey hover:text-white transition-colors text-sm">Lead Generation</a></li>
              <li><a href="#services" className="text-brand-grey hover:text-white transition-colors text-sm">Paid Advertising</a></li>
              <li><a href="#services" className="text-brand-grey hover:text-white transition-colors text-sm">Sales Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#results" className="text-brand-grey hover:text-white transition-colors text-sm">Results</a></li>
              <li><a href="#pricing" className="text-brand-grey hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#contact" className="text-brand-grey hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="/es" className="text-brand-grey hover:text-white transition-colors text-sm">Español</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-grey text-sm">
                <Phone className="w-4 h-4 text-brand-red" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-brand-grey text-sm">
                <Mail className="w-4 h-4 text-brand-red" />
                hello@epoxyfloordigital.com
              </li>
              <li className="flex items-start gap-3 text-brand-grey text-sm">
                <MapPin className="w-4 h-4 text-brand-red mt-0.5" />
                Serving epoxy contractors nationwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-grey text-sm">
            © 2025 Epoxy Floor Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-grey">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}