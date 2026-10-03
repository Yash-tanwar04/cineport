import React, { useState } from 'react';
import { 
  Cake, Briefcase, Film, Star, Trophy, Mic2, CloudSun, Megaphone, 
  Heart, Users, ChevronRight, CheckCircle2, X 
} from 'lucide-react';
import { EVENT_OCCASIONS, EVENT_SPACES } from '../data/cineportData';

export default function Events() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [bookingInquirySent, setBookingInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    guests: '20 - 50 Guests',
    date: ''
  });

  const getIconForOccasion = (id) => {
    switch (id) {
      case 'birthdays': return Cake;
      case 'corporate': return Briefcase;
      case 'screenings': return Film;
      case 'premieres': return Star;
      case 'sports': return Trophy;
      case 'karaoke': return Mic2;
      case 'rooftop-evt': return CloudSun;
      case 'activations': return Megaphone;
      case 'anniversaries': return Heart;
      case 'social': return Users;
      default: return Star;
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setBookingInquirySent(true);
    setTimeout(() => {
      setBookingInquirySent(false);
      setSelectedOccasion(null);
    }, 2500);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">E V E N T S &nbsp; &amp; &nbsp; C E L E B R A T I O N S &nbsp; A T &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              MAKE EVERY <br />
              <span className="text-[#FF8A00]">OCCASION BIGGER.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              From birthdays and private screenings to corporate events and brand activations — Cineport offers unique spaces, technology and experiences to make every event unforgettable.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSelectedOccasion(EVENT_OCCASIONS[0])}
                className="btn-primary text-xs sm:text-sm py-2.5 px-6"
              >
                <span>Plan an Event</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/events_celebrations.jpg"
                alt="Cineport Events and Celebrations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Birthdays • Parties • Premieres
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  CORPORATE. AND MORE.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPACES FOR EVERY SPECIAL MOMENT (10 Occasions Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-tag">O U R &nbsp; E V E N T &nbsp; E X P E R I E N C E S</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              SPACES FOR EVERY SPECIAL MOMENT.
            </h2>
          </div>
          <a
            href="#versatile-spaces"
            className="text-xs font-bold text-[#FF8A00] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            View All Event Spaces <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {EVENT_OCCASIONS.map((occ) => {
            const IconComp = getIconForOccasion(occ.id);
            return (
              <div
                key={occ.id}
                className="bg-white rounded-2xl border border-purple-100 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-[#FF8A00] text-purple-700 group-hover:text-white flex items-center justify-center transition-colors mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {occ.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-3">
                    {occ.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-50 mt-3">
                  <button
                    onClick={() => setSelectedOccasion(occ)}
                    className="text-xs font-bold text-[#FF8A00] hover:text-[#E07600] flex items-center gap-1"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. VERSATILE SPACES. ENDLESS POSSIBILITIES. (6 space cards) */}
      <section id="versatile-spaces" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-tag">O U R &nbsp; S P A C E S</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              VERSATILE SPACES. <br className="hidden sm:inline" />
              <span className="text-[#FF8A00]">ENDLESS POSSIBILITIES.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#554670] mt-1">
              Cinemas, lounges, food hall, rooftop, bars and custom event spaces — all under one roof, with end-to-end support.
            </p>
          </div>
          <button
            onClick={() => setSelectedOccasion(EVENT_OCCASIONS[1])}
            className="btn-outline text-xs py-2 px-4 self-start sm:self-auto"
          >
            <span>Explore Event Spaces</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {EVENT_SPACES.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[9px] font-bold">
                    {space.capacity}
                  </div>
                </div>

                <div className="p-3">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {space.title}
                  </h4>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    ({space.capacity})
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0">
                <button
                  onClick={() => setSelectedOccasion({ title: space.title, desc: space.description })}
                  className="w-full py-1 text-[11px] font-bold text-purple-700 hover:text-[#FF8A00] border border-purple-100 hover:border-[#FF8A00] rounded-lg transition-colors"
                >
                  Reserve Space
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Enquiry Modal */}
      {selectedOccasion && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#200B3F] to-[#36136B] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FF8A00] tracking-wider">Event Planning</span>
                <h3 className="font-heading font-bold text-lg">{selectedOccasion.title}</h3>
              </div>
              <button
                onClick={() => setSelectedOccasion(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {bookingInquirySent ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#1C0B38]">Inquiry Received</h4>
                  <p className="text-xs text-gray-500">
                    Our dedicated Cineport Event Concierge will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <p className="text-xs text-gray-600">
                    {selectedOccasion.desc}
                  </p>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                      placeholder="e.g. Ananya Mehra"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Expected Guests</label>
                      <select
                        value={inquiryData.guests}
                        onChange={(e) => setInquiryData({...inquiryData, guests: e.target.value})}
                        className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                      >
                        <option value="10 - 20 Guests">10 - 20 Guests</option>
                        <option value="20 - 50 Guests">20 - 50 Guests</option>
                        <option value="50 - 150 Guests">50 - 150 Guests</option>
                        <option value="150+ Guests">150+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-2.5 text-xs font-bold mt-2"
                  >
                    Submit Event Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
