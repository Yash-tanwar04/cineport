import React, { useState } from 'react';
import { 
  Building2, Construction, MapPin, MonitorPlay, Map, LayoutGrid, 
  Utensils, Gamepad2, Calendar, Car, Bell, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { CINEMAS_DATA, SITE_INFO } from '../data/cineportData';

export default function Cinemas({ onOpenBooking }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [notifiedCinemas, setNotifiedCinemas] = useState([]);
  const [searchCity, setSearchCity] = useState('All Cities');

  const handleNotifyMe = (cinemaId) => {
    if (!notifiedCinemas.includes(cinemaId)) {
      setNotifiedCinemas([...notifiedCinemas, cinemaId]);
      alert("Thank you! You will be notified the moment booking opens for this destination.");
    }
  };

  const filteredCinemas = CINEMAS_DATA.filter((cinema) => {
    if (selectedFilter === 'Live') return cinema.status === 'LIVE';
    if (selectedFilter === 'Coming Soon') return cinema.status === 'COMING SOON';
    if (selectedFilter === 'Pipeline') return cinema.status === 'IN PIPELINE';
    return true;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. CINEMA HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">O U R &nbsp; C I N E M A S</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              A GROWING NETWORK OF <br />
              <span className="text-[#FF8A00]">ENTERTAINMENT DESTINATIONS</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl">
              Discover Cineport cinemas across India, where movies, food, nightlife, events and technology come together.
            </p>

            {/* Filter / Search Bar inside Hero */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-purple-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Select City / Location</label>
                <select 
                  value={searchCity} 
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-2 text-xs font-semibold text-[#1C0B38] focus:outline-none"
                >
                  <option value="All Cities">All Locations</option>
                  <option value="Gurugram">Gurugram, Haryana</option>
                  <option value="Noida">Noida, Uttar Pradesh</option>
                  <option value="Dehradun">Dehradun, Uttarakhand</option>
                  <option value="New Delhi">New Delhi</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">All Cinemas</label>
                <select className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-2 text-xs font-semibold text-[#1C0B38] focus:outline-none">
                  <option>All Formats & Screens</option>
                  <option>Laser 4K Atmos</option>
                  <option>IMAX Immersive</option>
                  <option>VIP Recliner Suites</option>
                </select>
              </div>

              <div className="sm:pt-5">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary w-full py-2 text-xs font-bold justify-center"
                >
                  Find Cinemas
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Cineport Cinemas Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1C0B38] shadow-md border border-purple-100">
                100+ Screens in Pipeline
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATISTICS & EXPANDING ACROSS INDIA RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Live Locations</span>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">1</div>
              <span className="text-[11px] text-gray-500">& counting</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Construction className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Under Development</span>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">7</div>
              <span className="text-[11px] text-gray-500">in fit-out</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Pipeline</span>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">25+</div>
              <span className="text-[11px] text-gray-500">in next phase</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <MonitorPlay className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Target Screens</span>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">100+</div>
              <span className="text-[11px] text-gray-500">in 18 months</span>
            </div>
          </div>

          {/* Expanding Across India Card */}
          <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#FAF5FF] to-[#F3EBFC] rounded-2xl p-3.5 border border-purple-200 shadow-xs flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C0B38] uppercase tracking-wide mb-1">
              <Map className="w-4 h-4 text-[#FF8A00]" />
              <span>EXPANDING ACROSS INDIA</span>
            </div>
            <p className="text-[11px] text-gray-600 leading-tight">
              Delhi NCR | Haryana | Punjab | Uttar Pradesh | Uttarakhand | Himachal | Rajasthan and beyond
            </p>
          </div>

        </div>
      </section>

      {/* 3. FILTERS & VIEW MODE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-purple-100">
          
          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {[
              { id: 'All', label: 'All Locations (1)' },
              { id: 'Live', label: 'Live (1)' },
              { id: 'Coming Soon', label: 'Coming Soon (7)' },
              { id: 'Pipeline', label: 'Pipeline (25+)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#1C0B38] text-white shadow-xs'
                    : 'bg-white border border-purple-100 text-gray-600 hover:border-purple-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* View As Toggle */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-gray-500">
            <span>View as:</span>
            <div className="flex border border-purple-200 rounded-xl overflow-hidden p-0.5 bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold ${
                  viewMode === 'grid' ? 'bg-[#1C0B38] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold ${
                  viewMode === 'map' ? 'bg-[#1C0B38] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Map</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CINEMA CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === 'map' ? (
          /* Interactive Map View */
          <div className="bg-[#F8F5FD] rounded-3xl p-8 border border-purple-100 text-center relative overflow-hidden">
            <h3 className="font-heading font-bold text-xl text-[#1C0B38] mb-2">
              Cineport Pan-India Network Map
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto mb-6">
              Expanding aggressively across North and Western India with premier real estate developers.
            </p>
            <div className="relative max-w-xl mx-auto h-72 bg-white rounded-2xl border border-purple-200 shadow-inner p-4 flex items-center justify-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Gurugram SVH 83 Metro — Live & Operational
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>✦ Noida Apex Park Square — Fit-out Phase (Opening Q1 2027)</div>
                  <div>✦ Dehradun Mall Destination — Structural Works (Opening Q2 2027)</div>
                  <div>✦ West Delhi Najafgarh Hub — Lease Executed (Opening Q3 2027)</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 4 Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCinemas.map((cinema) => (
              <div
                key={cinema.id}
                className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cinema.image}
                      alt={cinema.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        cinema.status === 'LIVE'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : cinema.status === 'COMING SOON'
                          ? 'bg-[#FF8A00] text-white shadow-xs'
                          : 'bg-purple-700 text-white shadow-xs'
                      }`}>
                        {cinema.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-heading font-bold text-base text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                      {cinema.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                      <span>{cinema.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-purple-900 font-semibold pt-1">
                      <span className="bg-purple-50 px-2 py-0.5 rounded-md">{cinema.screens}</span>
                      <span className="bg-purple-50 px-2 py-0.5 rounded-md">{cinema.seats}</span>
                    </div>

                    <p className="text-xs text-gray-600 font-normal leading-relaxed pt-1">
                      {cinema.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions & Amenities */}
                <div className="p-4 pt-0 space-y-3">
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    {cinema.status === 'LIVE' ? (
                      <>
                        <button
                          onClick={onOpenBooking}
                          className="btn-primary w-full py-2 text-xs justify-center"
                        >
                          Book Tickets &gt;
                        </button>
                        <button
                          onClick={onOpenBooking}
                          className="btn-outline py-2 px-3 text-xs"
                        >
                          Explore
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleNotifyMe(cinema.id)}
                          className="btn-primary w-full py-2 text-xs justify-center flex items-center gap-1.5"
                        >
                          <Bell className="w-3.5 h-3.5" />
                          <span>Notify Me</span>
                        </button>
                        <button
                          onClick={() => alert(`Details for ${cinema.name}:\n${cinema.description}\nLocation: ${cinema.location}`)}
                          className="btn-outline py-2 px-3 text-xs whitespace-nowrap"
                        >
                          View Details
                        </button>
                      </>
                    )}
                  </div>

                  {/* Amenities Icons Row */}
                  <div className="border-t border-purple-50 pt-2.5 grid grid-cols-4 gap-1 text-center">
                    <div className="flex flex-col items-center">
                      <Utensils className="w-3.5 h-3.5 text-purple-400 mb-0.5" />
                      <span className="text-[9px] text-gray-500">Food Hall</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Gamepad2 className="w-3.5 h-3.5 text-purple-400 mb-0.5" />
                      <span className="text-[9px] text-gray-500">Gaming</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Calendar className="w-3.5 h-3.5 text-purple-400 mb-0.5" />
                      <span className="text-[9px] text-gray-500">Events</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Car className="w-3.5 h-3.5 text-purple-400 mb-0.5" />
                      <span className="text-[9px] text-gray-500">Parking</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
