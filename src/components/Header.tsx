import { useState } from 'react';
import { Menu, X, MapPin, Clock, ExternalLink } from 'lucide-react';
import CafeEmblem from './CafeEmblem';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Food Menu', href: '#food-menu' },
    { name: 'Drinks Menu', href: '#drinks-menu' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Location & Hours', href: '#location-hours' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 transition-all duration-200">
      {/* Top mini banner with location & exact trading hours */}
      <div className="bg-[#1A1A1A] text-[#F9F6F0] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
            <span className="font-medium">1231 South Road, St Marys SA 5042</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-[#F9F6F0]/80">Afro-Western Café Dining & Takeaway</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-[#F9F6F0]/90">
              <Clock className="w-3 h-3 text-[#C59B27]" />
              <span>Mon–Fri: 7:00 am – 3:00 pm • Sat–Sun: Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3.5 group text-left"
            id="brand-logo-link"
          >
            <CafeEmblem size={52} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl sm:text-2xl tracking-wider uppercase text-[#1A1A1A]">
                Joanna’s <span className="text-[#C59B27]">Café</span>
              </span>
              <span className="font-serif italic text-xs tracking-wide text-[#1A1A1A]/70">
                Modern Afro-Western Café • St Marys
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#1A1A1A]/85 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://imgur.com/z8BTwec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] hover:text-[#9E7719] px-2.5 py-1.5 transition-colors"
              title="View physical Food Menu on Imgur"
            >
              <span>Food Menu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://imgur.com/8uIwO0f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] hover:text-[#9E7719] px-2.5 py-1.5 transition-colors"
              title="View physical Drinks Menu on Imgur"
            >
              <span>Drink Menu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#location-hours"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#location-hours');
              }}
              id="header-find-us-btn"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#1A1A1A] text-[#F9F6F0] hover:bg-[#C59B27] hover:text-[#1A1A1A] font-semibold text-sm transition-all duration-200 shadow-xs active:scale-98"
            >
              <MapPin className="w-4 h-4 mr-1.5 text-[#C59B27]" />
              Find Us
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#location-hours"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#location-hours');
              }}
              id="mobile-quick-find-us"
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#1A1A1A] text-[#F9F6F0]"
            >
              Hours
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1A1A1A] hover:bg-[#1A1A1A]/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1A1A1A]/10 bg-[#F9F6F0] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#1A1A1A] hover:bg-[#C59B27]/15 hover:text-[#1A1A1A]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href="https://imgur.com/z8BTwec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-[#1A1A1A]/20 text-xs font-bold text-[#1A1A1A]"
              >
                <span>Food Menu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://imgur.com/8uIwO0f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-[#1A1A1A]/20 text-xs font-bold text-[#1A1A1A]"
              >
                <span>Drink Menu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <a
              href="#location-hours"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#location-hours');
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-[#1A1A1A] text-[#F9F6F0] font-semibold text-sm"
            >
              Find Us • 1231 South Road
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
