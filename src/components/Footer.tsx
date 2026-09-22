import { MapPin, Mail, Clock, ExternalLink } from 'lucide-react';
import CafeEmblem from './CafeEmblem';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = 'admin@joannascafe.com.au';
  const foodMenuUrl = 'https://imgur.com/z8BTwec';
  const drinkMenuUrl = 'https://imgur.com/8uIwO0f';

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F6F0] pt-16 pb-12 border-t-2 border-[#C59B27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <CafeEmblem size={56} />
              <div>
                <h3 className="font-sans font-bold text-xl tracking-wider text-white uppercase">
                  Joanna’s <span className="text-[#C59B27]">Café</span>
                </h3>
                <p className="font-serif italic text-xs text-[#C59B27]">
                  Modern Afro-Western Café • St Marys
                </p>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#C59B27]/90 pt-1">
              "Good Food • Great People • Brighter Days"
            </p>

            <p className="text-xs sm:text-sm text-[#F9F6F0]/75 leading-relaxed max-w-md">
              Serving hearty, flavorful Afro-Australian meals, specialty barista coffee, and warm hospitality in St Marys, South Australia.
            </p>

            <div className="pt-2 text-xs text-[#F9F6F0]/60 space-y-1">
              <p>• Dine-in tables & quick takeaway service</p>
              <p>• [V] Vegetarian | [GF] Gluten-free options</p>
              <p>• Convenient parking off South Road</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#F9F6F0]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll('#home')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll('#food-menu')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  Food Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll('#drinks-menu')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  Coffee & Drinks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll('#gallery')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll('#location-hours')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  Location & Hours
                </button>
              </li>
              <li className="pt-2 border-t border-white/10 space-y-1.5">
                <a
                  href={foodMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#C59B27] hover:underline"
                >
                  <span>View Food Menu (Imgur)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={drinkMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#C59B27] hover:underline"
                >
                  <span>View Drink Menu (Imgur)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Quick Card (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
              Visit & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F9F6F0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>1231 South Road, St Marys SA 5042</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <a href={`mailto:${email}`} className="hover:underline text-white font-medium">
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">Mon–Fri: 7:00 am – 3:00 pm</p>
                  <p className="text-white/60">Saturday: Closed</p>
                  <p className="text-white/60">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F6F0]/60 text-center sm:text-left">
          <p>
            © {currentYear} Joanna’s Café. All rights reserved. 1231 South Road, St Marys SA 5042.
          </p>
          <div className="flex items-center gap-1 text-[#C59B27]">
            <span>Modern Afro-Western hospitality in St Marys, South Australia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
