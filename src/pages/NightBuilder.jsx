import React, { useState } from 'react';
import { 
  Film, Utensils, Gamepad2, Sparkles, CheckCircle2, 
  ChevronRight, Plus, Trash2, Calendar, Clock, MapPin, X 
} from 'lucide-react';
import { READY_MADE_NIGHTS, CINEMAS_DATA } from '../data/cineportData';

export default function NightBuilder() {
  const [nightPlan, setNightPlan] = useState({
    movie: { name: "Devara: Part 1 (4K Laser)", time: "05:00 PM", price: 380 },
    dining: { name: "Eataliana Wood-Fired Dinner", time: "07:30 PM", price: 1100 },
    entertainment: null,
    nightlife: null
  });

  const [activeCategoryModal, setActiveCategoryModal] = useState(null);
  const [bookingPassModalOpen, setBookingPassModalOpen] = useState(false);

  const categoryOptions = {
    movie: [
      { name: "Devara: Part 1 (4K Laser)", time: "05:00 PM", price: 380, desc: "Action Epic in Dolby Atmos" },
      { name: "Mufasa: The Lion King (3D IMAX)", time: "06:00 PM", price: 420, desc: "Visual Masterpiece" },
      { name: "Joker: Folie à Deux", time: "07:15 PM", price: 380, desc: "Psychological Musical Drama" },
      { name: "Stree 2 (Recliner VIP)", time: "08:30 PM", price: 500, desc: "Horror Comedy Blockbuster" }
    ],
    dining: [
      { name: "Eataliana Wood-Fired Dinner", time: "07:30 PM", price: 1100, desc: "Burrata Pizza & Handcrafted Pasta for two" },
      { name: "Gateway of Punjab Feast", time: "08:00 PM", price: 950, desc: "Butter Chicken & Garlic Naan Platter" },
      { name: "My Asiana Sushi & Dim Sum", time: "07:00 PM", price: 1200, desc: "Truffle Edamame & Salmon Maki" },
      { name: "Food Hall Casual Sampling", time: "06:30 PM", price: 650, desc: "Street Food & Artisanal Bakery Bites" }
    ],
    entertainment: [
      { name: "Hello VR Park (60 Mins Quest)", time: "03:30 PM", price: 799, desc: "6-DOF Simulator & Multiplayer VR Quest" },
      { name: "Locker Room Match Viewing", time: "04:00 PM", price: 450, desc: "Giant 4K screen reservation with snacks" },
      { name: "CelebU Karaoke Private Suite (1 Hr)", time: "09:30 PM", price: 1200, desc: "VIP soundproof room with microphones" }
    ],
    nightlife: [
      { name: "Tiyatro Live Performance & Cocktails", time: "10:00 PM", price: 1500, desc: "Acoustic singer set & craft cocktails" },
      { name: "Bokata Microbrewery Tasting Flight", time: "09:00 PM", price: 900, desc: "4 Craft Beer Samplers + Brewhouse Pretzel" },
      { name: "Skyline Rooftop Lounge Table", time: "10:30 PM", price: 1800, desc: "Open-air cabana with sparkling wine" }
    ]
  };

  const handleSelectOption = (category, item) => {
    setNightPlan(prev => ({
      ...prev,
      [category]: item
    }));
    setActiveCategoryModal(null);
  };

  const handleRemoveOption = (category) => {
    setNightPlan(prev => ({
      ...prev,
      [category]: null
    }));
  };

  const loadReadyMadePackage = (pkg) => {
    if (pkg.id === 'movie-dinner') {
      setNightPlan({
        movie: { name: "Devara: Part 1 (4K Laser)", time: "05:00 PM", price: 380 },
        dining: { name: "Eataliana Wood-Fired Dinner", time: "07:30 PM", price: 1100 },
        entertainment: null,
        nightlife: null
      });
    } else if (pkg.id === 'family-fun') {
      setNightPlan({
        movie: { name: "Mufasa: The Lion King (3D IMAX)", time: "04:00 PM", price: 420 },
        dining: { name: "Food Hall Casual Sampling", time: "06:30 PM", price: 650 },
        entertainment: { name: "Hello VR Park (60 Mins Quest)", time: "02:30 PM", price: 799 },
        nightlife: null
      });
    } else if (pkg.id === 'friends-night') {
      setNightPlan({
        movie: null,
        dining: { name: "Gateway of Punjab Feast", time: "07:30 PM", price: 950 },
        entertainment: { name: "CelebU Karaoke Private Suite (1 Hr)", time: "09:30 PM", price: 1200 },
        nightlife: { name: "Bokata Microbrewery Tasting Flight", time: "11:00 PM", price: 900 }
      });
    } else if (pkg.id === 'premium-night') {
      setNightPlan({
        movie: { name: "Stree 2 (Recliner VIP)", time: "05:30 PM", price: 500 },
        dining: { name: "My Asiana Sushi & Dim Sum", time: "08:00 PM", price: 1200 },
        entertainment: null,
        nightlife: { name: "Tiyatro Live Performance & Cocktails", time: "10:00 PM", price: 1500 }
      });
    }
  };

  const totalCost = Object.values(nightPlan).reduce((acc, item) => acc + (item ? item.price : 0), 0);
  const selectedCount = Object.values(nightPlan).filter(Boolean).length;

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">B U I L D &nbsp; M Y &nbsp; N I G H T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              MOVIES. DINNER. <br />
              ENTERTAINMENT. <br />
              <span className="text-[#FF8A00]">ALL IN ONE PLAN.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Create your perfect Cineport experience. Combine a movie, great food, entertainment and nightlife — and turn an ordinary evening into an extraordinary night out.
            </p>
            <div className="pt-2">
              <a href="#builder-tool" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Start Building Your Night</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/friends_night_out.jpg"
                alt="Friends enjoying Cineport night out"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Movies • Dining • Gaming
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  NIGHTLIFE • EVENTS
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FIVE-STEP NAVIGATION RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-purple-100 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Choose Movie</h5>
                <p className="text-[10px] text-gray-500">Pick movie &amp; showtime</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Add Dining</h5>
                <p className="text-[10px] text-gray-500">Select restaurants &amp; cafes</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Add Entertainment</h5>
                <p className="text-[10px] text-gray-500">Gaming, VR &amp; karaoke</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center font-bold text-xs shrink-0">
                04
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Plan Nightlife</h5>
                <p className="text-[10px] text-gray-500">Bars &amp; live music</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                05
              </div>
              <div>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Review &amp; Book</h5>
                <p className="text-[10px] text-gray-500">One seamless reservation</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BUILDER TOOL: 4 CATEGORIES + DYNAMIC SUMMARY PANEL */}
      <section id="builder-tool" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Selectable Category Cards */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="section-tag">C H O O S E &nbsp; Y O U R &nbsp; E X P E R I E N C E</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
                PICK. COMBINE. <span className="text-[#FF8A00]">MAKE IT YOURS.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#554670] mt-1">
                Select from a range of options and create a personalised Cineport experience for your evening.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Category 1: Movies */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <Film className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#1C0B38]">MOVIES</h4>
                  <p className="text-xs text-gray-600">
                    Blockbuster releases, premium formats and a superior cinema experience.
                  </p>
                  {nightPlan.movie && (
                    <div className="bg-purple-50/70 p-2.5 rounded-xl border border-purple-100 text-xs">
                      <span className="font-bold text-[#1C0B38] block">{nightPlan.movie.name}</span>
                      <span className="text-gray-500">{nightPlan.movie.time} • ₹{nightPlan.movie.price}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveCategoryModal('movie')}
                    className="btn-outline w-full py-2 text-xs font-bold justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{nightPlan.movie ? 'Change Movie' : '+ Add Movie'}</span>
                  </button>
                </div>
              </div>

              {/* Category 2: Food & Drink */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#1C0B38]">FOOD &amp; DRINK</h4>
                  <p className="text-xs text-gray-600">
                    Choose from our Food Hall, signature restaurants and cafés.
                  </p>
                  {nightPlan.dining && (
                    <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 text-xs">
                      <span className="font-bold text-[#1C0B38] block">{nightPlan.dining.name}</span>
                      <span className="text-gray-500">{nightPlan.dining.time} • ₹{nightPlan.dining.price}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveCategoryModal('dining')}
                    className="btn-outline w-full py-2 text-xs font-bold justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{nightPlan.dining ? 'Change Dining' : '+ Add Dining'}</span>
                  </button>
                </div>
              </div>

              {/* Category 3: Entertainment */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#1C0B38]">ENTERTAINMENT</h4>
                  <p className="text-xs text-gray-600">
                    Gaming, VR Park, bowling and interactive experiences for all ages.
                  </p>
                  {nightPlan.entertainment && (
                    <div className="bg-purple-50/70 p-2.5 rounded-xl border border-purple-100 text-xs">
                      <span className="font-bold text-[#1C0B38] block">{nightPlan.entertainment.name}</span>
                      <span className="text-gray-500">{nightPlan.entertainment.time} • ₹{nightPlan.entertainment.price}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveCategoryModal('entertainment')}
                    className="btn-outline w-full py-2 text-xs font-bold justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{nightPlan.entertainment ? 'Change Entertainment' : '+ Add Entertainment'}</span>
                  </button>
                </div>
              </div>

              {/* Category 4: Nightlife */}
              <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#1C0B38]">NIGHTLIFE</h4>
                  <p className="text-xs text-gray-600">
                    Bars, live music, karaoke and late-night celebrations.
                  </p>
                  {nightPlan.nightlife && (
                    <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 text-xs">
                      <span className="font-bold text-[#1C0B38] block">{nightPlan.nightlife.name}</span>
                      <span className="text-gray-500">{nightPlan.nightlife.time} • ₹{nightPlan.nightlife.price}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveCategoryModal('nightlife')}
                    className="btn-outline w-full py-2 text-xs font-bold justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{nightPlan.nightlife ? 'Change Nightlife' : '+ Add Nightlife'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Dynamic Summary Panel "MAKE IT A NIGHT TO REMEMBER" */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border-2 border-purple-100 shadow-xl space-y-5 sticky top-24">
            <div>
              <span className="section-tag">Y O U R &nbsp; N I G H T &nbsp; P L A N</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                MAKE IT A NIGHT <br />
                <span className="text-[#FF8A00]">TO REMEMBER.</span>
              </h3>
            </div>

            {/* List of 4 Itinerary items */}
            <div className="space-y-2.5">
              
              {/* Movie */}
              <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-[#FF8A00]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Movie</span>
                    <span className="text-xs font-bold text-[#1C0B38]">
                      {nightPlan.movie ? nightPlan.movie.name : 'No movie chosen'}
                    </span>
                  </div>
                </div>
                {nightPlan.movie ? (
                  <button onClick={() => handleRemoveOption('movie')} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button onClick={() => setActiveCategoryModal('movie')} className="text-xs font-bold text-[#FF8A00]">
                    + Add
                  </button>
                )}
              </div>

              {/* Dining */}
              <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-[#FF8A00]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Dining</span>
                    <span className="text-xs font-bold text-[#1C0B38]">
                      {nightPlan.dining ? nightPlan.dining.name : 'No dining chosen'}
                    </span>
                  </div>
                </div>
                {nightPlan.dining ? (
                  <button onClick={() => handleRemoveOption('dining')} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button onClick={() => setActiveCategoryModal('dining')} className="text-xs font-bold text-[#FF8A00]">
                    + Add
                  </button>
                )}
              </div>

              {/* Entertainment */}
              <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Gamepad2 className="w-4 h-4 text-[#FF8A00]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Entertainment</span>
                    <span className="text-xs font-bold text-[#1C0B38]">
                      {nightPlan.entertainment ? nightPlan.entertainment.name : 'No entertainment chosen'}
                    </span>
                  </div>
                </div>
                {nightPlan.entertainment ? (
                  <button onClick={() => handleRemoveOption('entertainment')} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button onClick={() => setActiveCategoryModal('entertainment')} className="text-xs font-bold text-[#FF8A00]">
                    + Add
                  </button>
                )}
              </div>

              {/* Nightlife */}
              <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#FF8A00]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Nightlife</span>
                    <span className="text-xs font-bold text-[#1C0B38]">
                      {nightPlan.nightlife ? nightPlan.nightlife.name : 'No nightlife chosen'}
                    </span>
                  </div>
                </div>
                {nightPlan.nightlife ? (
                  <button onClick={() => handleRemoveOption('nightlife')} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button onClick={() => setActiveCategoryModal('nightlife')} className="text-xs font-bold text-[#FF8A00]">
                    + Add
                  </button>
                )}
              </div>

            </div>

            {/* Total & Action */}
            <div className="border-t border-purple-100 pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Estimated Total ({selectedCount} experiences):</span>
                <span className="font-heading font-extrabold text-xl text-[#1C0B38]">₹{totalCost}</span>
              </div>

              <button
                onClick={() => setBookingPassModalOpen(true)}
                disabled={selectedCount === 0}
                className="btn-primary w-full py-3 text-xs font-bold justify-center disabled:opacity-50"
              >
                <span>View Plan &amp; Book</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. POPULAR READY-MADE EXPERIENCES (4 Packages) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="section-tag">P O P U L A R &nbsp; N I G H T &nbsp; O U T &nbsp; P L A N S</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
            READY-MADE EXPERIENCES.
          </h2>
          <p className="text-xs sm:text-sm text-[#554670] mt-0.5">
            Curated experiences to help you make the most of your evening at Cineport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {READY_MADE_NIGHTS.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="font-heading font-extrabold text-sm text-[#1C0B38]">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-normal">
                    {pkg.subtitle}
                  </p>

                  <div className="space-y-1 pt-1 text-[11px] text-gray-600">
                    {pkg.items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#FF8A00] font-bold">✓</span> {it}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => {
                    loadReadyMadePackage(pkg);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="btn-outline w-full py-2 text-xs font-bold justify-center"
                >
                  Load Plan &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Selection Modal */}
      {activeCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#200B3F] to-[#36136B] text-white p-5 flex items-center justify-between">
              <h3 className="font-heading font-bold text-base uppercase tracking-wider">
                Select {activeCategoryModal} Option
              </h3>
              <button
                onClick={() => setActiveCategoryModal(null)}
                className="p-1 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-2.5 max-h-96 overflow-y-auto">
              {categoryOptions[activeCategoryModal]?.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(activeCategoryModal, opt)}
                  className="w-full text-left p-3.5 rounded-2xl border border-purple-100 hover:border-[#FF8A00] hover:bg-amber-50/30 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h5 className="font-heading font-bold text-xs text-[#1C0B38] group-hover:text-[#FF8A00]">
                      {opt.name}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-0.5">{opt.desc}</p>
                    <span className="text-[10px] text-purple-600 font-semibold">{opt.time}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-sm text-[#1C0B38]">₹{opt.price}</span>
                    <span className="block text-[10px] font-bold text-[#FF8A00] mt-1">Select</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Complete Night Itinerary Booking Pass Modal */}
      {bookingPassModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#200B3F] to-[#36136B] text-white p-6 relative">
              <button
                onClick={() => setBookingPassModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A00]">Cineport VIP Itinerary</span>
              <h3 className="font-heading font-bold text-2xl mt-1">Your Night Is Set!</h3>
              <p className="text-xs text-purple-200 mt-0.5">Booking reference: CP-NIGHT-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2 border-b border-purple-100 pb-4">
                {Object.entries(nightPlan).map(([cat, item]) => item && (
                  <div key={cat} className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-gray-400 uppercase font-bold text-[10px] block">{cat}</span>
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <span className="text-purple-600 text-[10px] block">{item.time}</span>
                    </div>
                    <span className="font-bold text-[#1C0B38]">₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">All-Inclusive Total:</span>
                <span className="font-heading font-extrabold text-2xl text-[#1C0B38]">₹{totalCost}</span>
              </div>

              <button
                onClick={() => {
                  alert("Night Plan booked successfully! E-vouchers and table reservations sent to your registered email & phone.");
                  setBookingPassModalOpen(false);
                }}
                className="btn-primary w-full py-3 text-xs font-bold"
              >
                Confirm Complete Night Reservation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
