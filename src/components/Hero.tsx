import { ArrowRight, Coffee, Sparkles, UtensilsCrossed, Users, Camera, ExternalLink } from 'lucide-react';
import CafeEmblem from './CafeEmblem';

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
    <section id="home" className="relative overflow-hidden bg-[#F9F6F0] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#1A1A1A]/10">
      {/* Subtle warm decorative background geometry */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#1A1A1A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#1A1A1A] mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="font-serif italic text-xs sm:text-sm font-semibold tracking-wider text-[#1A1A1A]">
                GOOD FOOD • GREAT PEOPLE • BRIGHTER DAYS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] leading-[1.12] mb-6">
              Great food.{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1A1A1A]">A welcoming space.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C59B27]/30 -z-0 transform -rotate-1"></span>
              </span>{' '}
              Right in your neighbourhood.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed max-w-2xl mb-8 font-normal">
              Serving reliable, well-portioned Afro-Australian meals, exceptional coffee, and warm hospitality in St Marys.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                id="hero-explore-menu-btn"
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#1A1A1A] text-[#F9F6F0] font-semibold text-base shadow-sm hover:bg-[#C59B27] hover:text-[#1A1A1A] transition-all duration-200 active:scale-98 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                id="hero-photo-gallery-btn"
                onClick={scrollToGallery}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-base hover:bg-[#1A1A1A]/5 transition-all duration-200 cursor-pointer"
              >
                <Camera className="w-4 h-4 mr-2 text-[#C59B27]" />
                <span>Photo Gallery</span>
              </button>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1A1A1A]/10 w-full">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#9E7719] shrink-0">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Afro-Western Kitchen</h4>
                  <p className="text-xs text-[#1A1A1A]/70">Signature Jollof Rice & Beef Stew</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#9E7719] shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Specialty Espresso</h4>
                  <p className="text-xs text-[#1A1A1A]/70">Silky lattes, iced drinks & teas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#9E7719] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Local Gathering</h4>
                  <p className="text-xs text-[#1A1A1A]/70">1231 South Road, St Marys</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Café Menu Board Aesthetic Preview (NO PRICES) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative layered frame echoing physical menu card */}
              <div className="bg-[#1A1A1A] text-[#F9F6F0] p-6 sm:p-7 rounded-2xl shadow-xl border-2 border-[#C59B27]/40 relative overflow-hidden">
                {/* Gold corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C59B27]" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C59B27]" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C59B27]" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C59B27]" />

                {/* Header in menu card */}
                <div className="text-center pb-4 border-b border-[#C59B27]/30 mb-5">
                  <div className="flex justify-center mb-2">
                    <CafeEmblem size={64} />
                  </div>
                  <h3 className="font-serif italic text-lg text-[#C59B27] font-normal">
                    "Good Food • Great People • Brighter Days"
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#F9F6F0]/70 font-sans mt-1">
                    Daily Specials & Café Favorites
                  </p>
                </div>

                {/* Sample menu snapshot items - NO PRICES */}
                <div className="space-y-3.5 text-left text-sm">
                  <div className="flex justify-between items-center border-b border-[#F9F6F0]/10 pb-2">
                    <div>
                      <div className="font-semibold text-[#F9F6F0] flex items-center gap-1.5">
                        <span>West African Jollof Rice</span>
                        <span className="text-[10px] bg-[#C59B27] text-[#1A1A1A] font-bold px-1.5 py-0.5 rounded">STAR</span>
                      </div>
                      <p className="text-xs text-[#F9F6F0]/70">With grilled chicken & house chilli</p>
                    </div>
                    <span className="text-xs text-[#C59B27] font-medium uppercase tracking-wider">Signature</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#F9F6F0]/10 pb-2">
                    <div>
                      <div className="font-semibold text-[#F9F6F0]">Spicy Red Beef Stew</div>
                      <p className="text-xs text-[#F9F6F0]/70">Slow-cooked rich tomato pepper sauce</p>
                    </div>
                    <span className="text-xs text-[#C59B27] font-medium uppercase tracking-wider">Chef’s Pick</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#F9F6F0]/10 pb-2">
                    <div>
                      <div className="font-semibold text-[#F9F6F0]">Chicken & Avocado Panini</div>
                      <p className="text-xs text-[#F9F6F0]/70">Melted cheese, herb mayonnaise</p>
                    </div>
                    <span className="text-xs text-[#C59B27] font-medium uppercase tracking-wider">Toasted</span>
                  </div>

                  <div className="flex justify-between items-center pb-1">
                    <div>
                      <div className="font-semibold text-[#F9F6F0]">Classic Caesar Salad</div>
                      <p className="text-xs text-[#F9F6F0]/70">Cos lettuce, bacon, parmesan & croutons</p>
                    </div>
                    <span className="text-xs text-[#C59B27] font-medium uppercase tracking-wider">Fresh Salad</span>
                  </div>
                </div>

                {/* Physical menu card links inside hero board */}
                <div className="mt-5 pt-3 border-t border-[#C59B27]/30 flex items-center justify-between text-[11px] text-[#F9F6F0]/80">
                  <a
                    href="https://imgur.com/z8BTwec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C59B27] flex items-center gap-1 font-semibold"
                  >
                    <span>Food Menu</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://imgur.com/8uIwO0f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C59B27] flex items-center gap-1 font-semibold"
                  >
                    <span>Drink Menu</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-white/30">•</span>
                  <span>1231 South Road</span>
                </div>
              </div>

              {/* Floating review/accreditation chip */}
              <div className="absolute -bottom-4 -left-4 bg-[#F9F6F0] text-[#1A1A1A] px-4 py-2.5 rounded-xl border border-[#1A1A1A]/15 shadow-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center font-bold text-white text-xs">
                  SA
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">1231 South Road</p>
                  <p className="text-[10px] text-[#1A1A1A]/70">St Marys SA 5042</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
