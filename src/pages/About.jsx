import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, Compass, Sparkles, Heart, Lightbulb, Award, Users, 
  TrendingUp, ChevronRight 
} from 'lucide-react';
import { SITE_INFO } from '../data/cineportData';

export default function About() {
  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">A B O U T &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              ENTERTAINMENT <br />
              <span className="text-[#FF8A00]">REIMAGINED.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Cineport builds next-generation entertainment destinations where movies, food, nightlife, events and technology come together.
            </p>
            <div className="pt-2">
              <a href="#our-story" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Our Story</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="About Cineport Entertainment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS & CATEGORY PILLS RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          
          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Cinemas</h5>
            <span className="text-[10px] text-gray-500">Multiplex experiences across India</span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Food &amp; Drink</h5>
            <span className="text-[10px] text-gray-500">Curated dining for every mood</span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Entertainment</h5>
            <span className="text-[10px] text-gray-500">Gaming, VR &amp; experiences</span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Events</h5>
            <span className="text-[10px] text-gray-500">Celebrations &amp; premieres</span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Nightlife</h5>
            <span className="text-[10px] text-gray-500">Bars, music &amp; social spaces</span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-purple-100 text-center">
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">Community</h5>
            <span className="text-[10px] text-gray-500">A destination for everyone</span>
          </div>

        </div>
      </section>

      {/* 3. MIDDLE SECTION: OUR STORY, 4-PHOTO GRID, VISION/MISSION/PURPOSE */}
      <section id="our-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Our Story */}
          <div className="lg:col-span-4 space-y-4">
            <span className="section-tag">O U R &nbsp; S T O R Y</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              MORE THAN A CINEMA. <br />
              <span className="text-[#FF8A00]">A COMPLETE DESTINATION.</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              <p>
                Cineport Entertainment Private Limited is an entertainment platform creating and operating next-generation cinema-led destinations across India.
              </p>
              <p>
                We don't simply operate cinemas. We build destinations that bring together movies, food, entertainment, nightlife, events and technology — all under one roof.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/experiences" className="btn-outline text-xs py-2 px-5">
                <span>Our Journey</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Middle Column: 4 Image Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xs group">
              <img
                src="/images/cinema_auditorium.jpg"
                alt="Cineport Cinemas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2.5 flex flex-col justify-end text-white">
                <span className="font-bold text-xs">Cineport Cinemas</span>
                <span className="text-[9px] text-gray-300">Immersive screens</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xs group">
              <img
                src="/images/food_hall.jpg"
                alt="Cineport Food Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2.5 flex flex-col justify-end text-white">
                <span className="font-bold text-xs">Food Hall</span>
                <span className="text-[9px] text-gray-300">Curated dining</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xs group">
              <img
                src="/images/hello_vr_park.jpg"
                alt="Gaming & VR"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2.5 flex flex-col justify-end text-white">
                <span className="font-bold text-xs">Gaming &amp; VR</span>
                <span className="text-[9px] text-gray-300">Next-gen fun</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xs group">
              <img
                src="/images/events_celebrations.jpg"
                alt="Nightlife & Events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2.5 flex flex-col justify-end text-white">
                <span className="font-bold text-xs">Nightlife &amp; Events</span>
                <span className="text-[9px] text-gray-300">Celebrate every day</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vision, Mission, Purpose */}
          <div className="lg:col-span-4 space-y-3">
            
            <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-xs flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">OUR VISION</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                  To be India's most loved entertainment platform, creating experiences that bring people together.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-xs flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">OUR MISSION</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                  To create and operate cinema-led destinations that deliver exceptional experiences, strong value for our partners, and long-term growth for all stakeholders.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-xs flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">OUR PURPOSE</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                  To make entertainment a bigger, richer and more meaningful part of everyday life.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR VALUES / WHAT DRIVES US (5 Value Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="section-tag">O U R &nbsp; V A L U E S</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
            WHAT DRIVES US
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
              <Heart className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">PEOPLE FIRST</h4>
            <p className="text-[11px] text-gray-500">Creating experiences for everyone</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">INNOVATION</h4>
            <p className="text-[11px] text-gray-500">Embracing new ideas &amp; technology</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">EXCELLENCE</h4>
            <p className="text-[11px] text-gray-500">In everything we do</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">COLLABORATION</h4>
            <p className="text-[11px] text-gray-500">Growing with our partners</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1.5 sm:col-span-2 lg:col-span-1">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">SUSTAINABLE GROWTH</h4>
            <p className="text-[11px] text-gray-500">Building long-term value</p>
          </div>

        </div>
      </section>

    </div>
  );
}
