import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, Utensils, Trophy, Music, Beer, Mic2, Gamepad2, PartyPopper, 
  ChevronRight, Sparkles, X 
} from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/cineportData';

export default function Experiences() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  const getIconForExperience = (id) => {
    switch (id) {
      case 'cinemas': return Film;
      case 'food-hall': return Utensils;
      case 'locker-room': return Trophy;
      case 'tiyatro': return Music;
      case 'bokata': return Beer;
      case 'celebu': return Mic2;
      case 'hello-vr': return Gamepad2;
      case 'events-celebrations': return PartyPopper;
      default: return Sparkles;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">O U R &nbsp; E X P E R I E N C E S</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              MORE THAN <br />
              <span className="text-[#FF8A00]">A MOVIE.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Cineport brings together cinema, food, entertainment, nightlife, events and technology — creating complete experiences for everyone.
            </p>
            <div className="pt-2">
              <Link to="/night-builder" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <Sparkles className="w-4 h-4" />
                <span>Plan Your Day with Night Builder</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Watch Eat Play Celebrate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Watch • Eat • Play • Celebrate
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  ALL UNDER ONE ROOF
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 8 EXPERIENCES GRID (2 rows of 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERIENCES_DATA.map((exp) => {
            const IconComp = getIconForExperience(exp.id);
            return (
              <div
                key={exp.id}
                className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-[#FF8A00] flex items-center justify-center shadow-xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-heading font-extrabold text-base text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {exp.tagline}
                    </p>
                  </div>
                </div>

                {/* Explore Link */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => setActiveModalItem(exp)}
                    className="text-xs font-bold text-[#FF8A00] hover:text-[#E07600] flex items-center gap-1 group/btn"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PLAN YOUR PERFECT DAY AT CINEPORT & BUILD MY NIGHT BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Step Progression */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="section-tag">A &nbsp; C O M P L E T E &nbsp; D E S T I N A T I O N</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
                PLAN YOUR PERFECT DAY <br className="hidden sm:inline" />
                <span className="text-[#FF8A00]">AT CINEPORT.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#554670] mt-1">
                Movies, dining, entertainment, events and more — all in one place.
              </p>
            </div>

            {/* Steps Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              
              <div className="text-center sm:text-left space-y-1">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto sm:mx-0">
                  <Film className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38]">Movie</div>
                <div className="text-[10px] text-gray-500">Watch the latest blockbusters</div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto sm:mx-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38]">Dinner</div>
                <div className="text-[10px] text-gray-500">Choose from curated cuisines</div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto sm:mx-0">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38]">Entertainment</div>
                <div className="text-[10px] text-gray-500">Gaming, VR and more</div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto sm:mx-0">
                  <Music className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38]">Nightlife</div>
                <div className="text-[10px] text-gray-500">Live music and bars</div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto sm:mx-0">
                  <PartyPopper className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38]">Events</div>
                <div className="text-[10px] text-gray-500">Make moments unforgettable</div>
              </div>

            </div>
          </div>

          {/* Right Purple Box: BUILD MY NIGHT */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#240B46] to-[#39126F] text-white p-6 rounded-3xl shadow-xl border border-purple-900 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-[#FF8A00] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="font-heading font-black text-sm uppercase tracking-wider">BUILD MY NIGHT</span>
              </div>
              <p className="text-xs text-purple-200 leading-relaxed font-normal">
                Create your own custom Cineport experience with movies, dining and entertainment in one reservation.
              </p>
            </div>

            <Link
              to="/night-builder"
              className="btn-primary text-xs py-2.5 px-5 w-full justify-center"
            >
              <span>Explore Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Experience Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] uppercase font-bold text-[#FF8A00] tracking-widest">
                Cineport Destination Feature
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                {activeModalItem.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {activeModalItem.details || activeModalItem.tagline}
              </p>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="btn-outline text-xs py-2 px-4"
                >
                  Close
                </button>
                <Link
                  to={activeModalItem.link}
                  className="btn-primary text-xs py-2 px-5"
                >
                  Visit Section &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
