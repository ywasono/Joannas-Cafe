import { Coffee, CupSoda, Droplets, Sparkles, Sliders, ExternalLink } from 'lucide-react';
import { HOT_COFFEE_DRINKS, ICED_COLD_DRINKS, BOTTLED_DRINKS, DRINK_CUSTOMIZATIONS } from '../data/menuData';

export default function DrinksMenu() {
  const drinkMenuExternalLink = 'https://imgur.com/8uIwO0f';

  return (
    <section id="drinks-menu" className="py-16 md:py-24 bg-[#F2ECE0] border-t border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#1A1A1A] mb-3">
            <Coffee className="w-3.5 h-3.5 text-[#9E7719]" />
            <span className="text-xs font-bold tracking-wider uppercase">Barista & Beverage Bar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Coffee & Drinks Menu
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#9E7719] mb-3">
            "Exceptional Coffee • Crafted Daily"
          </p>
          <p className="text-[#1A1A1A]/75 text-sm sm:text-base leading-relaxed mb-6">
            Expertly extracted espresso roasted for rich depth, cold frappes and milkshakes, specialty teas, and our signature African Fruit Punch.
          </p>

          {/* Physical Drink Menu Link Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href={drinkMenuExternalLink}
              target="_blank"
              rel="noopener noreferrer"
              id="drink-menu-external-link-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-[#F9F6F0] font-semibold text-xs sm:text-sm hover:bg-[#C59B27] hover:text-[#1A1A1A] transition-all shadow-xs"
            >
              <span>View Original Drinks Menu</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B27] group-hover:text-[#1A1A1A]" />
            </a>
          </div>
        </div>

        {/* 2-Column Physical Café Board Layout: Hot Drinks & Cold Drinks (NO PRICES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Hot Coffee & Teas (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F9F6F0] rounded-2xl p-6 sm:p-8 border border-[#1A1A1A]/15 shadow-sm">
            <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] pb-3 mb-6">
              <div className="flex items-center gap-2.5">
                <Coffee className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1A1A1A] uppercase tracking-wide">
                  Hot Coffee & Drinks
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#1A1A1A]/60 font-mono">
                Small • Medium • Large
              </span>
            </div>

            {/* List of Hot Coffee items without prices */}
            <div className="divide-y divide-[#1A1A1A]/10">
              {HOT_COFFEE_DRINKS.map((drink) => (
                <div key={drink.id} className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4 group">
                  <div className="flex-1 pr-2">
                    <h4 className="font-sans font-semibold text-sm sm:text-base text-[#1A1A1A] group-hover:text-[#9E7719] transition-colors">
                      {drink.name}
                    </h4>
                    {drink.notes && (
                      <p className="text-xs text-[#1A1A1A]/65 mt-0.5 leading-snug">
                        {drink.notes}
                      </p>
                    )}
                  </div>
                  <div className="text-xs text-[#9E7719] font-medium shrink-0">
                    {drink.prices.l ? 'S / M / L' : 'Cup'}
                  </div>
                </div>
              ))}
            </div>

            {/* Loose leaf tea note */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#1A1A1A]/15 text-xs text-[#1A1A1A]/70 flex items-center justify-between">
              <span>* Tea selection includes English Breakfast, Earl Grey, Green or Peppermint</span>
              <span className="font-medium text-[#1A1A1A]">Served in fresh teapot</span>
            </div>
          </div>

          {/* Column 2: Iced, Cold Drinks & Bottled (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Iced & Cold Drinks Card */}
            <div className="bg-[#F9F6F0] rounded-2xl p-6 sm:p-7 border border-[#1A1A1A]/15 shadow-sm flex-1">
              <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-[#C59B27]" />
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#1A1A1A] uppercase tracking-wide">
                    Iced & Cold Drinks
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#1A1A1A]/60 font-mono">
                  Medium • Large
                </span>
              </div>

              <div className="divide-y divide-[#1A1A1A]/10">
                {ICED_COLD_DRINKS.map((drink) => (
                  <div key={drink.id} className="py-2.5 sm:py-3 flex items-baseline justify-between gap-3 group">
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sans font-semibold text-sm text-[#1A1A1A] group-hover:text-[#9E7719] transition-colors">
                          {drink.name}
                        </h4>
                        {drink.isSpecial && (
                          <span className="text-[9px] bg-[#C59B27] text-[#1A1A1A] font-extrabold px-1.5 py-0.2 rounded uppercase">
                            Signature
                          </span>
                        )}
                      </div>
                      {drink.notes && (
                        <p className="text-xs text-[#1A1A1A]/65 mt-0.5 leading-snug">
                          {drink.notes}
                        </p>
                      )}
                    </div>
                    <div className="text-xs text-[#9E7719] font-medium shrink-0">
                      Cold
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottled Drinks Card */}
            <div className="bg-[#F9F6F0] rounded-2xl p-6 border border-[#1A1A1A]/15 shadow-sm">
              <div className="flex items-center gap-2 border-b-2 border-[#1A1A1A] pb-3 mb-4">
                <CupSoda className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-sans font-bold text-lg text-[#1A1A1A] uppercase tracking-wide">
                  Bottled Drinks & Juices
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {BOTTLED_DRINKS.map((b) => (
                  <div key={b.name} className="p-2.5 rounded-lg bg-white/70 border border-[#1A1A1A]/10">
                    <div className="font-bold text-xs text-[#1A1A1A]">{b.name}</div>
                    <p className="text-[11px] text-[#1A1A1A]/65 mt-0.5">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Customization Callout ("Make It Yours") */}
        <div className="bg-[#1A1A1A] text-[#F9F6F0] rounded-2xl p-6 sm:p-8 border-2 border-[#C59B27]/40 shadow-lg relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-[#C59B27] mb-1.5">
                <Sliders className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Customization</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                "Make It Yours"
              </h3>
              <p className="text-xs sm:text-sm text-[#F9F6F0]/75 mt-1">
                Tailor your favorite hot or iced drink to match your exact taste, temperature, or dietary preferences.
              </p>
            </div>

            {/* Options Badges Grid - NO PRICES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full lg:w-auto">
              {DRINK_CUSTOMIZATIONS.map((custom) => (
                <div
                  key={custom.label}
                  className="bg-[#262626] p-3 rounded-xl border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-xs font-semibold text-white leading-tight">
                    {custom.label}
                  </span>
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] text-[#F9F6F0]/60">{custom.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F9F6F0]/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#C59B27]" />
              <span>Ask our baristas for personal milk temperature or extra hot requests.</span>
            </div>
            <a
              href={drinkMenuExternalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C59B27] hover:underline font-semibold"
            >
              View Drinks Card ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
