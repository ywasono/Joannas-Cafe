import { ArrowRight, Coffee, Sparkles, UtensilsCrossed, Users, Camera, ExternalLink } from 'lucide-react';
import CafeEmblem from './CafeEmblem';
import heroImg from '../assets/images/jollof_chicken_coffee_hero_1790331229161.jpg';

export default function Hero() {
  const scrollToMenu = () => {
    const menuEl = document.querySelector('#food-menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const galleryEl = document.querySelector('#gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#1A1A1A] py-16 md:py-24 border-b border-[#1A1A1A]/10">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Joanna's Cafe - Jollof Rice with Grilled Chicken and Specialty Coffee Latte Art"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        {/* Soft, balanced gradient overlay so the food photo is bright and clearly visible while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25 md:to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/30 border border-[#C59B27]/70 text-[#F9F6F0] mb-5 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B83A]" />
              <span className="font-serif italic text-xs sm:text-sm font-semibold tracking-wider text-[#F9F6F0]">
                GOOD FOOD • GREAT PEOPLE • BRIGHTER DAYS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6 drop-shadow-md">
              Great food.{' '}
              <span className="relative inline-block text-[#E5B83A]">
                A welcoming space.
              </span>{' '}
              Right in your neighbourhood.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#F9F6F0] leading-relaxed max-w-2xl mb-8 font-normal drop-shadow-sm">
              Serving reliable, well-portioned Afro-Western meals, exceptional coffee, and warm hospitality in St Marys.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                id="hero-explore-menu-btn"
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#C59B27] text-[#1A1A1A] font-bold text-base shadow-xl hover:bg-[#d8ab2e] transition-all duration-200 active:scale-98 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                id="hero-photo-gallery-btn"
                onClick={scrollToGallery}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/40 text-white font-semibold text-base hover:bg-black/60 transition-all duration-200 cursor-pointer shadow-lg"
              >
                <Camera className="w-4 h-4 mr-2 text-[#E5B83A]" />
                <span>Photo Gallery</span>
              </button>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/20 w-full">
              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/30 flex items-center justify-center text-[#E5B83A] shrink-0 border border-[#C59B27]/40">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Afro-Western Kitchen</h4>
                  <p className="text-xs text-white/80">Signature Jollof & Stew</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/30 flex items-center justify-center text-[#E5B83A] shrink-0 border border-[#C59B27]/40">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Specialty Espresso</h4>
                  <p className="text-xs text-white/80">Silky lattes & teas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/30 flex items-center justify-center text-[#E5B83A] shrink-0 border border-[#C59B27]/40">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Welcoming Space</h4>
                  <p className="text-xs text-white/80">Dine-in & takeaway</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Glass Spotlight Card with Menu Links & Emblem (No Address) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-black/55 backdrop-blur-xl p-6 sm:p-7 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Gold corner accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C59B27]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C59B27]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C59B27]" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C59B27]" />

                {/* Header in spotlight card */}
                <div className="text-center pb-4 border-b border-white/15 mb-5">
                  <div className="flex justify-center mb-2.5">
                    <CafeEmblem size={60} />
                  </div>
                  <h3 className="font-serif italic text-lg text-[#E5B83A] font-normal">
                    "Good Food • Great People • Brighter Days"
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-white/70 font-sans mt-1">
                    Signature Afro-Western & Café Classics
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3 text-left text-xs sm:text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
                    <div>
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <span>West African Jollof Rice</span>
                        <span className="text-[10px] bg-[#C59B27] text-[#1A1A1A] font-extrabold px-1.5 py-0.5 rounded">STAR</span>
                      </div>
                      <p className="text-xs text-white/70">With grilled chicken breast & house chilli</p>
                    </div>
                    <span className="text-xs text-[#E5B83A] font-medium uppercase tracking-wider">Signature</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
                    <div>
                      <div className="font-semibold text-white">Spicy Red Beef Stew</div>
                      <p className="text-xs text-white/70">Slow-cooked rich tomato pepper sauce</p>
                    </div>
                    <span className="text-xs text-[#E5B83A] font-medium uppercase tracking-wider">Chef’s Pick</span>
                  </div>

                  <div className="flex justify-between items-center pb-1">
                    <div>
                      <div className="font-semibold text-white">Artisan Specialty Coffee</div>
                      <p className="text-xs text-white/70">Espresso, flat white, latte art & iced</p>
                    </div>
                    <span className="text-xs text-[#E5B83A] font-medium uppercase tracking-wider">Fresh Brew</span>
                  </div>
                </div>

                {/* Physical menu card links */}
                <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-center gap-6 text-xs text-white/90">
                  <a
                    href="https://imgur.com/z8BTwec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E5B83A] flex items-center gap-1.5 font-semibold transition-colors"
                  >
                    <span>Food Menu</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E5B83A]" />
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://imgur.com/8uIwO0f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E5B83A] flex items-center gap-1.5 font-semibold transition-colors"
                  >
                    <span>Drink Menu</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E5B83A]" />
                  </a>
                </div>
              </div>

              {/* Floating Coffee Badge on Top Right */}
              <div className="absolute -top-3 -right-3 bg-[#1A1A1A] text-white px-3.5 py-1.5 rounded-xl border border-[#C59B27]/60 shadow-xl flex items-center gap-1.5 z-20">
                <Coffee className="w-3.5 h-3.5 text-[#E5B83A]" />
                <span className="text-xs font-bold">Specialty Brews</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
