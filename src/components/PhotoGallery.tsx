import { useState } from 'react';
import { Camera, Sparkles, X, Maximize2, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryCategory, GalleryItem } from '../types';

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const getCategoryLabel = (category: GalleryCategory) => {
    switch (category) {
      case 'brunch-lunch':
        return 'Signature Dish';
      case 'salads':
        return 'Gourmet Salad';
      case 'interior':
        return 'Café Interior';
      case 'exterior':
        return 'Exterior & Venue';
    }
  };

  const brunchCount = GALLERY_ITEMS.filter((i) => i.category === 'brunch-lunch').length;
  const saladsCount = GALLERY_ITEMS.filter((i) => i.category === 'salads').length;
  const interiorCount = GALLERY_ITEMS.filter((i) => i.category === 'interior').length;
  const exteriorCount = GALLERY_ITEMS.filter((i) => i.category === 'exterior').length;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F9F6F0] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#1A1A1A] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#9E7719]" />
            <span className="text-xs font-bold tracking-wider uppercase">Fresh Dishes & Café Atmosphere</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Photo Gallery
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#9E7719] mb-3">
            "Good Food • Great People • Brighter Days"
          </p>

          <p className="text-[#1A1A1A]/75 text-sm sm:text-base leading-relaxed">
            Explore our signature Afro-Western dishes, crisp salads, cozy interior dining spaces, and our welcoming South Road shopfront.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                : 'bg-white text-[#1A1A1A]/75 border border-[#1A1A1A]/15 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
            }`}
          >
            All Photos ({GALLERY_ITEMS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('brunch-lunch')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'brunch-lunch'
                ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                : 'bg-white text-[#1A1A1A]/75 border border-[#1A1A1A]/15 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
            }`}
          >
            Signature Dishes ({brunchCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('salads')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'salads'
                ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                : 'bg-white text-[#1A1A1A]/75 border border-[#1A1A1A]/15 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
            }`}
          >
            Fresh Salads ({saladsCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('interior')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'interior'
                ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                : 'bg-white text-[#1A1A1A]/75 border border-[#1A1A1A]/15 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
            }`}
          >
            Café Interior ({interiorCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('exterior')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'exterior'
                ? 'bg-[#1A1A1A] text-[#F9F6F0] shadow-sm'
                : 'bg-white text-[#1A1A1A]/75 border border-[#1A1A1A]/15 hover:bg-[#C59B27]/10 hover:text-[#1A1A1A]'
            }`}
          >
            Café Exterior ({exteriorCount})
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1A1A1A]/15 hover:border-[#C59B27] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container with overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#e6e2da]">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#1A1A1A]/90 text-[#F9F6F0] backdrop-blur-xs border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#C59B27]" />
                      {item.badge}
                    </span>
                  )}
                  {item.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#C59B27] text-[#1A1A1A] shadow-xs"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                {/* Click to expand hover hint */}
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-xs text-xs font-semibold">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C59B27]" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#9E7719] mb-1">
                    {getCategoryLabel(item.category)}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-[#1A1A1A] leading-snug group-hover:text-[#9E7719] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/75 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs text-[#1A1A1A]/60">
                  <span className="font-medium">
                    {item.category === 'interior' || item.category === 'exterior' ? '1231 South Road' : 'Prepared fresh daily'}
                  </span>
                  <span className="text-[#9E7719] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Enlarge photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Enlarged Photo */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#F9F6F0] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E7719]">
                  {getCategoryLabel(selectedItem.category)}
                </span>
                {selectedItem.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#C59B27] text-[#1A1A1A]">
                    {selectedItem.badge}
                  </span>
                )}
                {selectedItem.dietary?.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded text-[10px] font-bold border border-[#1A1A1A]/20 bg-white text-[#1A1A1A]"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>

              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1A1A1A]">
                {selectedItem.name}
              </h3>
              
              <p className="text-sm sm:text-base text-[#1A1A1A]/80 mt-2 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#1A1A1A]/60 italic">
                    1231 South Road, St Marys SA
                  </span>
                  {selectedItem.originalUrl && (
                    <a
                      href={selectedItem.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#9E7719] hover:underline font-semibold ml-2"
                    >
                      <span>View on Imgur</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-lg bg-[#1A1A1A] text-white text-xs font-bold hover:bg-[#C59B27] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
