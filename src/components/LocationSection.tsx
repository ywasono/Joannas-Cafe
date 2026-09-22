import { MapPin, Clock, Mail, Navigation, Car, Coffee, Check } from 'lucide-react';
import CafeEmblem from './CafeEmblem';

export default function LocationSection() {
  const address = '1231 South Road, St Marys SA 5042';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=1231+South+Road,+St+Marys+SA+5042';
  const email = 'admin@joannascafe.com.au';

  const scheduleDays = [
    { day: 'Monday', hours: '7:00 am – 3:00 pm', isOpen: true },
    { day: 'Tuesday', hours: '7:00 am – 3:00 pm', isOpen: true },
    { day: 'Wednesday', hours: '7:00 am – 3:00 pm', isOpen: true },
    { day: 'Thursday', hours: '7:00 am – 3:00 pm', isOpen: true },
    { day: 'Friday', hours: '7:00 am – 3:00 pm', isOpen: true },
    { day: 'Saturday', hours: 'Closed', isOpen: false },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ];

  return (
    <section id="location-hours" className="py-16 md:py-24 bg-[#F2ECE0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#1A1A1A] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#9E7719]" />
            <span className="text-xs font-bold tracking-wider uppercase">St Marys, SA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Location & Trading Hours
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#9E7719] mb-3">
            "A welcoming space right on South Road"
          </p>

          <p className="text-[#1A1A1A]/75 text-sm sm:text-base leading-relaxed">
            Conveniently situated along the South Road corridor in St Marys. Easy parking, cozy dine-in seating, and fast takeaway counter service.
          </p>
        </div>

        {/* 2-Column Split: Details on Left, Embedded Google Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 cols): Address, Trading Hours, Email */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Direct Actions Card */}
            <div className="bg-[#F9F6F0] p-6 sm:p-7 rounded-2xl border border-[#1A1A1A]/15 shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <CafeEmblem size={44} />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#1A1A1A] leading-tight">
                    Joanna's Café
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/85 mt-1 font-medium">
                    {address}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/65 mt-0.5">
                    South Australia, Australia
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-wrap gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-get-directions-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1A1A1A] text-[#F9F6F0] text-xs font-bold hover:bg-[#C59B27] hover:text-[#1A1A1A] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#1A1A1A]/20 text-xs font-bold text-[#1A1A1A] hover:bg-black/5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9E7719]" />
                  <span>{email}</span>
                </a>
              </div>
            </div>

            {/* Trading Hours Card (Updated with exact times from user) */}
            <div className="bg-[#F9F6F0] p-6 sm:p-7 rounded-2xl border border-[#1A1A1A]/15 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#C59B27]" />
                  <h3 className="font-bold text-base text-[#1A1A1A] uppercase tracking-wide">
                    Trading Hours
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#C59B27]/20 text-[#1A1A1A]">
                  Open 5 Days
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {scheduleDays.map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-1.5 px-2 rounded-md ${
                      item.isOpen ? 'border-b border-[#1A1A1A]/5' : 'bg-black/5 text-[#1A1A1A]/60'
                    }`}
                  >
                    <span className={`font-semibold ${item.isOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/70'}`}>
                      {item.day}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm ${
                        item.isOpen ? 'font-bold text-[#1A1A1A]' : 'italic font-medium text-[#1A1A1A]/60'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 flex items-center gap-2 text-xs text-[#9E7719] font-medium">
                <Check className="w-4 h-4" />
                <span>Kitchen serves hot food daily during opening hours</span>
              </div>
            </div>

            {/* Parking & Direct Email Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#1A1A1A]/15 text-xs text-[#1A1A1A]/80 space-y-3">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  <strong>Convenient Parking:</strong> On-site and adjacent parking spaces available off South Road for easy in-and-out coffee and dining.
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-[#1A1A1A]/10">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  <strong>Email Inquiries:</strong> Contact us anytime at{' '}
                  <a href={`mailto:${email}`} className="text-[#1A1A1A] font-bold hover:underline">
                    {email}
                  </a>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border-2 border-[#1A1A1A]/20 shadow-md bg-[#e5e3df]">
              
              {/* Google Maps Embedded iframe targeting 1231 South Road, St Marys SA */}
              <iframe
                title="Google Maps - Joanna's Café, 1231 South Road, St Marys SA 5042"
                src="https://maps.google.com/maps?q=1231+South+Road,+St+Marys+SA+5042&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Floating map badge overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#1A1A1A]/15 shadow-md flex items-center gap-3">
                <CafeEmblem size={36} />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#1A1A1A] leading-tight">Joanna’s Café</p>
                  <p className="text-[11px] text-[#1A1A1A]/70">1231 South Road, St Marys</p>
                </div>
              </div>

              {/* Overlay button to open full Google Maps directions */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A1A1A] text-[#F9F6F0] text-xs font-bold hover:bg-[#C59B27] hover:text-[#1A1A1A] shadow-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
