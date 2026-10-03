import React, { useState } from 'react';
import { 
  UtensilsCrossed, Flame, Globe2, Clock, Sparkles, Coffee, 
  ChevronRight, Heart, Users, Star, Calendar, X 
} from 'lucide-react';
import { RESTAURANTS_DATA } from '../data/cineportData';

export default function FoodDrink() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">F O O D &nbsp; &amp; &nbsp; D R I N K &nbsp; A T &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              GREAT FOOD <br />
              <span className="text-[#FF8A00]">MAKES GREAT MOMENTS.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              From quick bites to gourmet dining, artisanal coffee to craft beers — Cineport brings together a vibrant culinary world to complement your movie, entertainment and celebration experience.
            </p>
            <div className="pt-2">
              <a href="#food-hall" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Explore Food &amp; Drink</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/food_hall.jpg"
                alt="Cineport Food Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Come for the Movie.
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  STAY FOR THE FOOD.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CINEPORT FOOD HALL SIGNATURE DESTINATION */}
      <section id="food-hall" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <span className="section-tag">O U R &nbsp; S I G N A T U R E &nbsp; D E S T I N A T I O N</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
                CINEPORT FOOD HALL
              </h2>
              <p className="text-xs sm:text-sm text-[#554670] leading-relaxed">
                A vibrant culinary destination with live counters, artisanal products and global cuisines — thoughtfully curated for every mood, every time of day.
              </p>

              <button
                onClick={() => setSelectedRestaurant(RESTAURANTS_DATA[0])}
                className="btn-outline text-xs py-2 px-5"
              >
                <span>Explore Food Hall</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* 5 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38]">
                  <Flame className="w-4 h-4 text-[#FF8A00]" />
                  <span>Live Counters</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38]">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  <span>Artisanal Products</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38]">
                  <Globe2 className="w-4 h-4 text-[#FF8A00]" />
                  <span>Global Cuisines</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38]">
                  <Clock className="w-4 h-4 text-purple-700" />
                  <span>24/7 Convenience</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38]">
                  <UtensilsCrossed className="w-4 h-4 text-[#FF8A00]" />
                  <span>Fresh &amp; Local</span>
                </div>
              </div>
            </div>

            {/* Right 3 Stacked Feature Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <div className="bg-[#FAF7FD] rounded-2xl p-4 border border-purple-100 text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-[#FF8A00] flex items-center justify-center mx-auto">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                  LIVE KITCHENS
                </h4>
                <p className="text-[11px] text-gray-500">Freshly prepared, every day</p>
              </div>

              <div className="bg-[#FAF7FD] rounded-2xl p-4 border border-purple-100 text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                  ARTISANAL &amp; GOURMET
                </h4>
                <p className="text-[11px] text-gray-500">Premium and local products</p>
              </div>

              <div className="bg-[#FAF7FD] rounded-2xl p-4 border border-purple-100 text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-[#FF8A00] flex items-center justify-center mx-auto">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                  UNION ARTISAN COFFEE
                </h4>
                <p className="text-[11px] text-gray-500">Specialty coffee roasted in-house</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR RESTAURANTS SECTION (6 cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-tag">O U R &nbsp; R E S T A U R A N T S</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              DISTINCTIVE DINING EXPERIENCES, <br className="hidden sm:inline" />
              <span className="text-[#FF8A00]">ALL UNDER ONE ROOF.</span>
            </h2>
          </div>
          <button
            onClick={() => setSelectedRestaurant(RESTAURANTS_DATA[0])}
            className="text-xs font-bold text-[#FF8A00] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            View All Restaurants <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESTAURANTS_DATA.map((resto) => (
            <div
              key={resto.id}
              className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={resto.image}
                    alt={resto.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1C0B38] uppercase">
                    {resto.cuisine}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-heading font-extrabold text-base text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {resto.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-normal leading-relaxed">
                    {resto.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => setSelectedRestaurant(resto)}
                  className="text-xs font-bold text-[#FF8A00] hover:underline flex items-center gap-1"
                >
                  <span>View Menu</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUR DINING BENEFIT PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                SOMETHING FOR EVERY MOOD
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                From quick bites to fine dining, all in one destination.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                DINE WITH FRIENDS &amp; FAMILY
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Perfect for pre-movie meals, celebrations and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                PREMIUM QUALITY &amp; INGREDIENTS
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Curated menus and trusted brands you love.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">
                ALL DAY, EVERY DAY
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                From morning coffee to late-night dining — Cineport is always serving.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Restaurant Menu Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video">
              <img
                src={selectedRestaurant.image}
                alt={selectedRestaurant.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#FF8A00] tracking-widest">
                    {selectedRestaurant.cuisine}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#1C0B38]">
                    {selectedRestaurant.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-purple-900 bg-purple-50 px-2 py-1 rounded-lg">
                    {selectedRestaurant.priceRange}
                  </span>
                  <div className="text-[10px] text-gray-400 mt-1">{selectedRestaurant.hours}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Signature Specialties
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedRestaurant.specialties.map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-medium text-gray-800">
                      ✦ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="btn-primary text-xs py-2 px-6"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
