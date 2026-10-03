import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, Utensils, Gamepad2, PartyPopper, Trophy, Mic2, Sparkles, Briefcase, 
  MapPin, Calendar, Clock, Search, ChevronRight, ChevronLeft, ArrowRight 
} from 'lucide-react';
import { CATEGORIES_RIBBON, TODAY_HAPPENINGS, CINEMAS_DATA } from '../data/cineportData';

export default function Home({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('tickets');
  const [selectedLocation, setSelectedLocation] = useState('Gurugram (SVH 83 Metro)');
  const [selectedMovie, setSelectedMovie] = useState('Devara: Part 1');
  const [selectedDate, setSelectedDate] = useState('Today, 3 Oct');
  const [selectedTime, setSelectedTime] = useState('05:00 PM');

  const moreThanMovieCards = [
    {
      title: "CINEMAS",
      desc: "Immersive experiences across multiple screens",
      image: "/images/cinema_auditorium.jpg",
      link: "/cinemas"
    },
    {
      title: "FOOD & DRINK",
      desc: "Curated dining for every mood",
      image: "/images/food_hall.jpg",
      link: "/food-drink"
    },
    {
      title: "GAMING & VR",
      desc: "Next-generation entertainment",
      image: "/images/hello_vr_park.jpg",
      link: "/experiences"
    },
    {
      title: "EVENTS & PARTIES",
      desc: "Make every occasion extra special",
      image: "/images/events_celebrations.jpg",
      link: "/events"
    },
    {
      title: "NIGHTLIFE",
      desc: "Sports, music and celebrations",
      image: "/images/tiyatro_live_bar.jpg",
      link: "/experiences"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1C0B38] tracking-tight leading-[1.1]">
              CINEMA IS JUST <br />
              <span className="text-[#FF8A00]">THE BEGINNING.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#554670] leading-relaxed max-w-xl font-normal">
              Cineport builds next-generation entertainment destinations where movies, food, nightlife, events and technology come together.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-sm sm:text-base py-3 px-7"
              >
                <span>Book Tickets</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <Link
                to="/experiences"
                className="btn-outline text-sm sm:text-base py-3 px-6"
              >
                <span>Explore Experiences</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Cineport Entertainment Destination"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-purple-100 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Now Live</span>
                  <span className="text-xs font-semibold text-[#1C0B38]">SVH 83 Metro, Gurugram</span>
                </div>
                <Link to="/cinemas" className="text-xs font-bold text-[#FF8A00] hover:underline flex items-center gap-1">
                  View Cinema <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FLOATING BOOKING & SEARCH PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
          
          {/* Tabs */}
          <div className="flex border-b border-purple-100 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors shrink-0 ${
                activeTab === 'tickets'
                  ? 'border-b-2 border-[#FF8A00] text-[#FF8A00] bg-amber-50/30'
                  : 'text-gray-500 hover:text-[#1C0B38] hover:bg-purple-50/50'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Book Your Movie Tickets</span>
            </button>

            <Link
              to="/experiences"
              className="flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase text-gray-500 hover:text-[#1C0B38] hover:bg-purple-50/50 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Experiences</span>
            </Link>

            <Link
              to="/events"
              className="flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase text-gray-500 hover:text-[#1C0B38] hover:bg-purple-50/50 shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan an Event</span>
            </Link>

            <Link
              to="/cinemas"
              className="flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase text-gray-500 hover:text-[#1C0B38] hover:bg-purple-50/50 shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Find a Cinema</span>
            </Link>
          </div>

          {/* Form Filter Row */}
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
            
            {/* Location Selector */}
            <div className="relative">
              <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Location</label>
              <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2 bg-[#FAF7FD]">
                <MapPin className="w-4 h-4 text-[#FF8A00] mr-2 shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#1C0B38] focus:outline-none"
                >
                  <option value="Gurugram (SVH 83 Metro)">Gurugram (SVH 83 Metro)</option>
                  <option value="Noida (Apex Park Square)">Noida (Apex Park Square)</option>
                  <option value="Dehradun (Rajpur Road)">Dehradun (Rajpur Road)</option>
                  <option value="Delhi (Najafgarh)">Delhi (Najafgarh)</option>
                </select>
              </div>
            </div>

            {/* Movie Selector */}
            <div className="relative">
              <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Movie</label>
              <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2 bg-[#FAF7FD]">
                <Film className="w-4 h-4 text-[#FF8A00] mr-2 shrink-0" />
                <select
                  value={selectedMovie}
                  onChange={(e) => setSelectedMovie(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#1C0B38] focus:outline-none"
                >
                  <option value="Devara: Part 1">Devara: Part 1 (4K)</option>
                  <option value="Mufasa: The Lion King">Mufasa: The Lion King</option>
                  <option value="Joker: Folie à Deux">Joker: Folie à Deux</option>
                  <option value="Stree 2">Stree 2</option>
                </select>
              </div>
            </div>

            {/* Date Selector */}
            <div className="relative">
              <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Date</label>
              <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2 bg-[#FAF7FD]">
                <Calendar className="w-4 h-4 text-[#FF8A00] mr-2 shrink-0" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#1C0B38] focus:outline-none"
                >
                  <option value="Today, 3 Oct">Today, 3 Oct</option>
                  <option value="Tomorrow, 4 Oct">Tomorrow, 4 Oct</option>
                  <option value="Saturday, 5 Oct">Saturday, 5 Oct</option>
                  <option value="Sunday, 6 Oct">Sunday, 6 Oct</option>
                </select>
              </div>
            </div>

            {/* Showtime Selector */}
            <div className="relative">
              <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Showtime</label>
              <div className="flex items-center border border-purple-100 rounded-xl px-3 py-2 bg-[#FAF7FD]">
                <Clock className="w-4 h-4 text-[#FF8A00] mr-2 shrink-0" />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#1C0B38] focus:outline-none"
                >
                  <option value="10:30 AM">10:30 AM (Morning)</option>
                  <option value="01:45 PM">01:45 PM (Matinee)</option>
                  <option value="05:00 PM">05:00 PM (Evening)</option>
                  <option value="08:30 PM">08:30 PM (Night)</option>
                </select>
              </div>
            </div>

            {/* Search Shows CTA */}
            <div className="pt-3 sm:pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary w-full py-2.5 text-xs font-bold"
              >
                <Search className="w-4 h-4" />
                <span>Search Shows</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CATEGORY NAVIGATION RIBBON (8 ICONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES_RIBBON.map((cat) => {
            const IconMap = {
              Film,
              Utensils,
              Gamepad2,
              PartyPopper,
              Trophy,
              Mic2,
              Sparkles,
              Briefcase
            };
            const IconComp = IconMap[cat.icon] || Film;
            return (
              <Link
                key={cat.id}
                to={cat.path}
                className="bg-white hover:bg-[#F9F5FD] border border-purple-100 hover:border-[#FF8A00]/40 rounded-2xl p-4 text-center group transition-all shadow-xs hover:shadow-md flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 group-hover:bg-[#FF8A00] text-purple-700 group-hover:text-white flex items-center justify-center transition-colors mb-2">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-xs text-[#1C0B38] group-hover:text-[#FF8A00] uppercase tracking-wide">
                  {cat.name}
                </div>
                <div className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                  {cat.sub}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. "MORE THAN A MOVIE." SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              MORE THAN A MOVIE.
            </h2>
            <p className="text-sm text-[#554670] max-w-xl mt-1">
              From blockbuster films to world-class dining, gaming, nightlife and events — Cineport creates complete entertainment destinations for everyone.
            </p>
          </div>
          <Link
            to="/experiences"
            className="text-xs font-bold text-[#FF8A00] hover:underline flex items-center gap-1 shrink-0"
          >
            Explore All Experiences <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {moreThanMovieCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-md border border-purple-100"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0B38] via-[#1C0B38]/50 to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                <span className="font-heading font-bold text-base tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                  {card.title}
                </span>
                <p className="text-xs text-purple-200 line-clamp-2 mt-1 mb-2 font-normal">
                  {card.desc}
                </p>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-[#FF8A00] flex items-center justify-center self-end transition-colors text-white">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. "WHAT'S HAPPENING TODAY?" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              WHAT'S HAPPENING TODAY?
            </h2>
            <p className="text-sm text-[#554670] mt-1">
              Movies, sports, dining, events and more — plan your perfect day at Cineport.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/events"
              className="btn-outline text-xs py-2 px-4"
            >
              <span>View All Events</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <div className="hidden sm:flex items-center gap-1">
              <button className="w-8 h-8 rounded-full border border-purple-200 flex items-center justify-center text-gray-500 hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors" aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-purple-200 flex items-center justify-center text-gray-500 hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Today Happening Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TODAY_HAPPENINGS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-3.5">
                  <h4 className="font-heading font-bold text-sm text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                    {item.desc}
                  </div>
                </div>
              </div>

              <div className="px-3.5 pb-3.5 pt-1 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#FF8A00]">
                  {item.time}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-purple-700 hover:text-[#FF8A00] transition-colors"
                >
                  Book &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
