import { useState, useMemo } from 'react';
import { Sparkles, Utensils, Search, Check, AlertCircle, ExternalLink } from 'lucide-react';
import { FOOD_ITEMS, FOOD_MENU_CATEGORIES } from '../data/menuData';
import { DietaryTag, FoodItem } from '../types';

export default function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryTag>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const foodMenuExternalLink = 'https://imgur.com/z8BTwec';

  const filteredItems = useMemo(() => {
    return FOOD_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter !== 'all') {
        if (!item.dietary || !item.dietary.includes(dietaryFilter)) {
          return false;
        }
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Group items by category when showing "all" or single category
  const categoriesToRender = useMemo(() => {
    if (activeCategory !== 'all') {
      const cat = FOOD_MENU_CATEGORIES.find((c) => c.id === activeCategory);
      return cat ? [cat] : [];
    }
    return FOOD_MENU_CATEGORIES.filter((c) => c.id !== 'all');
  }, [activeCategory]);

  return (
    <section id="food-menu" className="py-16 md:py-24 bg-[#F9F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#1A1A1A] mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#C59B27]" />
            <span className="text-xs font-bold tracking-wider uppercase">Afro-Western Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Food Menu
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#9E7719] mb-3">
            "Good Food • Great People • Brighter Days"
          </p>
          <p className="text-[#1A1A1A]/75 text-sm sm:text-base leading-relaxed mb-6">
            From toasted breakfast rolls to fragrant West African Jollof Rice, crispy chicken schnitzels, and fresh gourmet salads — cooked fresh daily in St Marys.
          </p>

          {/* Physical Food Menu Link Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href={foodMenuExternalLink}
              target="_blank"
              rel="noopener noreferrer"
              id="food-menu-external-link-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-[#F9F6F0] font-semibold text-xs sm:text-sm hover:bg-[#C59B27] hover:text-[#1A1A1A] transition-all shadow-xs"
            >
              <span>View Original Food Menu</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B27] group-hover:text-[#1A1A1A]" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] font-semibold text-xs sm:text-sm hover:bg-[#1A1A1A]/5 transition-all"
            >
              <span>Browse Photo Gallery</span>
            </a>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {FOOD_MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                      : 'bg-white/80 text-[#1A1A1A]/80 border border-[#1A1A1A]/10 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub-bar: Search and Dietary filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food items or ingredients..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-[#1A1A1A]/15 rounded-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary tags quick filter */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold text-[#1A1A1A]/60 uppercase tracking-wider">
                Filter:
              </span>
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:bg-black/5'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter(dietaryFilter === 'V' ? 'all' : 'V')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold border flex items-center gap-1 transition-colors cursor-pointer ${
                  dietaryFilter === 'V'
                    ? 'bg-[#C59B27] text-[#1A1A1A] border-[#C59B27]'
                    : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:bg-black/5'
                }`}
              >
                <span>[V] Vegetarian</span>
                {dietaryFilter === 'V' && <Check className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter(dietaryFilter === 'GF' ? 'all' : 'GF')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold border flex items-center gap-1 transition-colors cursor-pointer ${
                  dietaryFilter === 'GF'
                    ? 'bg-[#C59B27] text-[#1A1A1A] border-[#C59B27]'
                    : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:bg-black/5'
                }`}
              >
                <span>[GF] Gluten-Free</span>
                {dietaryFilter === 'GF' && <Check className="w-3 h-3" />}
              </button>
            </div>

          </div>

        </div>

        {/* Menu Cards Display */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/70 rounded-2xl border border-[#1A1A1A]/10 p-8">
            <p className="text-base text-[#1A1A1A]/70 mb-2">No food items matched your current filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#C59B27] hover:underline uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {categoriesToRender.map((category) => {
              const categoryItems = filteredItems.filter((i) => i.category === category.id);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category.id} className="relative">
                  {/* Category Header Bar */}
                  <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] pb-2.5 mb-6">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1A1A1A] uppercase tracking-wide">
                      {category.label}
                    </h3>
                    <span className="text-xs font-semibold text-[#1A1A1A]/60 font-mono">
                      {categoryItems.length} {categoryItems.length === 1 ? 'dish' : 'dishes'}
                    </span>
                  </div>

                  {/* Grid of Food Items - NO PRICES */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {categoryItems.map((item) => (
                      <FoodMenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Dietary Information Notice Footer */}
        <div className="mt-14 pt-8 border-t-2 border-[#1A1A1A]/20">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#1A1A1A]/15 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Dietary & Allergy Notice
                </h4>
                <p className="text-xs text-[#1A1A1A]/80 mt-0.5">
                  <span className="font-semibold">[V]</span> Vegetarian | <span className="font-semibold">[GF]</span> Gluten-free recipe or supplied product.
                </p>
                <p className="text-xs text-[#1A1A1A]/70 mt-1">
                  Please notify our staff of any severe allergies prior to placing your order. We prepare food in a kitchen handling gluten, dairy, nuts, and sesame.
                </p>
              </div>
            </div>
            
            <div className="text-left sm:text-right shrink-0 bg-[#F9F6F0] px-4 py-2.5 rounded-lg border border-[#1A1A1A]/10 w-full sm:w-auto">
              <a
                href={foodMenuExternalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] hover:text-[#C59B27] transition-colors"
              >
                <span>View Full Menu Card</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="block text-[11px] text-[#1A1A1A]/75 mt-0.5">
                Available for dine-in or takeaway
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FoodMenuCard({ item }: { item: FoodItem }) {
  const isSignature = item.isSignature;

  // Clean description to remove any dollar prices if present
  const cleanedDescription = item.description.replace(/\(\+\$[0-9.]+\)/g, '').replace(/\+\$[0-9.]+/g, '');

  return (
    <div
      className={`group relative bg-white p-5 rounded-xl border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        isSignature
          ? 'border-[#C59B27] ring-1 ring-[#C59B27]/30 bg-linear-to-br from-white to-[#F9F6F0]'
          : 'border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
      }`}
    >
      <div>
        {/* Top badges & Title row - NO PRICE */}
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              {item.badge && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27] text-[#1A1A1A]">
                  <Sparkles className="w-2.5 h-2.5" />
                  {item.badge}
                </span>
              )}
              {item.dietary?.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded text-[10px] font-bold border border-[#1A1A1A]/20 bg-[#F9F6F0] text-[#1A1A1A]"
                >
                  [{tag}]
                </span>
              ))}
            </div>

            <h4 className="font-sans font-bold text-base sm:text-lg text-[#1A1A1A] leading-snug group-hover:text-[#9E7719] transition-colors">
              {item.name}
            </h4>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed mt-1">
          {cleanedDescription}
        </p>
      </div>

      {/* Subtle bottom detail */}
      <div className="mt-3 pt-2 border-t border-[#1A1A1A]/5 flex items-center justify-between text-[11px] text-[#1A1A1A]/60">
        <span className="italic">Dine-in or takeaway</span>
        {item.category === 'kids' && (
          <span className="text-[#9E7719] font-medium">
            Kids' drink or babyccino available
          </span>
        )}
        {item.name.includes('Caesar') && (
          <span className="text-[#9E7719] font-medium">Option to add grilled chicken</span>
        )}
        {item.name.includes('Banana Bread') && (
          <span className="text-[#9E7719] font-medium">Served with whipped butter or ice cream</span>
        )}
      </div>
    </div>
  );
}
