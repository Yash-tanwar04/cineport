import React, { useState } from 'react';
import { 
  Building2, TrendingUp, DollarSign, Target, Award, Shield, 
  Layers, ChevronRight, ArrowRight, Quote, FileText 
} from 'lucide-react';
import InvestorDeckModal from '../components/InvestorDeckModal';

export default function Investors() {
  const [deckModalOpen, setDeckModalOpen] = useState(false);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">F O R &nbsp; I N V E S T O R S</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              BUILDING INDIA'S NEXT <br />
              <span className="text-[#FF8A00]">GENERATION OF ENTERTAINMENT ASSETS.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              A scalable platform combining cinema, food, entertainment, events and technology — backed by real estate and driven by strong fundamentals.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setDeckModalOpen(true)}
                className="btn-primary text-xs sm:text-sm py-2.5 px-6"
              >
                <span>Request Investor Deck</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="#thesis"
                className="btn-outline text-xs sm:text-sm py-2.5 px-6"
              >
                <span>Our Investment Thesis</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Cineport Investment Opportunity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-purple-100 shadow-xl">
                <Quote className="w-5 h-5 text-[#FF8A00] mb-1" />
                <p className="text-xs text-gray-700 italic leading-snug">
                  "Cineport is uniquely positioned to create a national platform of entertainment destinations, backed by real estate, diversified revenue streams and strong execution capabilities."
                </p>
                <div className="text-[11px] font-bold text-[#1C0B38] mt-1">— Cineport Leadership</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FIVE METRICS RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">25+</div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Target Locations</span>
              <span className="text-[11px] text-gray-500">in next phase</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">100+</div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Screens Targeted</span>
              <span className="text-[11px] text-gray-500">in 18 months</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="font-heading font-extrabold text-2xl text-[#FF8A00]">₹250 Cr</div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Initial Expansion</span>
              <span className="text-[11px] text-gray-500">investment pool</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">500</div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Long-Term Ambition</span>
              <span className="text-[11px] text-gray-500">nationwide scale</span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="font-heading font-bold text-base text-purple-900">High-Growth Sector</div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Hybrid Model</span>
              <span className="text-[11px] text-gray-500">Cinema-led multi-revenue</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THREE COLUMNS: OPPORTUNITY, PLATFORM, GROWTH ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Col 1: The Opportunity */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
            <div>
              <span className="section-tag">T H E &nbsp; O P P O R T U N I T Y</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                A LARGE AND UNDERPENETRATED MARKET.
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                India's growing urbanisation, rising disposable incomes and demand for experiential destinations create a significant opportunity for cinema-led entertainment assets across Tier 1, 2 and 3 cities.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="font-heading font-extrabold text-xl text-[#FF8A00]">₹1.20 Tn</div>
                <div className="text-[11px] text-gray-600">India's premium &amp; luxury retail market (2025 estimate)</div>
              </div>

              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="font-heading font-bold text-sm text-[#1C0B38]">Strong Demand</div>
                <div className="text-[11px] text-gray-600">for experiential entertainment formats over basic screens</div>
              </div>

              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="font-heading font-bold text-sm text-[#1C0B38]">Underserved Markets</div>
                <div className="text-[11px] text-gray-600">Across Tier 2 &amp; 3 cities with immense disposable spending power</div>
              </div>
            </div>
          </div>

          {/* Col 2: Our Platform */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
            <div>
              <span className="section-tag">O U R &nbsp; P L A T F O R M</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                MULTIPLE REVENUE ENGINES. STRONGER RETURNS.
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                Cinema is the anchor. F&amp;B, entertainment, events, advertising and sponsorships amplify footfalls, increase dwell time and drive higher value per visitor.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {[
                "Cinema Tickets", "Food & Beverage",
                "Events & Celebrations", "Bars & Nightlife",
                "Gaming & VR", "Advertising & Sponsorships",
                "Private Screenings", "Ancillary Retail"
              ].map((engine, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#FAF7FD] border border-purple-100 text-xs font-semibold text-[#1C0B38] text-center">
                  {engine}
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Our Growth Roadmap */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
            <div>
              <span className="section-tag">O U R &nbsp; G R O W T H &nbsp; R O A D M A P</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                A CLEAR PATH TO SCALE.
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                A phased expansion strategy to build a nationwide platform of entertainment destinations.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="text-[10px] font-bold text-[#FF8A00] uppercase">STEP 1 | 18 MONTHS</div>
                <div className="font-heading font-bold text-sm text-[#1C0B38] mt-0.5">25 Locations | 100+ Screens</div>
                <div className="text-[11px] text-gray-500">₹250 Cr initial institutional deployment</div>
              </div>

              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="text-[10px] font-bold text-purple-700 uppercase">STEP 2 | SCALE UP</div>
                <div className="font-heading font-bold text-sm text-[#1C0B38] mt-0.5">100 - 250 Locations</div>
                <div className="text-[11px] text-gray-500">Expand across key Tier 1 &amp; Tier 2 urban clusters</div>
              </div>

              <div className="p-3 bg-[#FAF7FD] rounded-xl border border-purple-100">
                <div className="text-[10px] font-bold text-[#FF8A00] uppercase">STEP 3 | NATIONAL PLATFORM</div>
                <div className="font-heading font-bold text-sm text-[#1C0B38] mt-0.5">500 Locations</div>
                <div className="text-[11px] text-gray-500">India's leading entertainment destination platform</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY INVEST IN CINEPORT & REQUEST INVESTOR DECK BOX */}
      <section id="thesis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#FAF6FE] to-[#F5EDFC] rounded-3xl p-6 sm:p-8 border border-purple-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 5 Thesis Pillars */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="section-tag">W H Y &nbsp; I N V E S T &nbsp; I N &nbsp; C I N E P O R T</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
                A COMPELLING INVESTMENT THESIS.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-purple-100 shadow-xs">
                <div className="font-heading font-bold text-xs uppercase text-[#1C0B38]">REAL ESTATE SECURITY</div>
                <div className="text-[11px] text-gray-500 mt-1">Strong underlying asset value and physical anchor resilience</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-purple-100 shadow-xs">
                <div className="font-heading font-bold text-xs uppercase text-[#1C0B38]">DIVERSIFIED REVENUE</div>
                <div className="text-[11px] text-gray-500 mt-1">Multiple income sources insulate against movie seasonality</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-purple-100 shadow-xs">
                <div className="font-heading font-bold text-xs uppercase text-[#1C0B38]">SCALABLE PLATFORM</div>
                <div className="text-[11px] text-gray-500 mt-1">Standardized, modular roll-out model across all Indian markets</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-purple-100 shadow-xs">
                <div className="font-heading font-bold text-xs uppercase text-[#1C0B38]">EXPERIENCED MANAGEMENT</div>
                <div className="text-[11px] text-gray-500 mt-1">Proven track record in real estate, retail, F&amp;B and entertainment</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-purple-100 shadow-xs sm:col-span-2 lg:col-span-2">
                <div className="font-heading font-bold text-xs uppercase text-[#1C0B38]">HIGH-GROWTH MARKET</div>
                <div className="text-[11px] text-gray-500 mt-1">Large and underpenetrated opportunity in India's booming experiential economy</div>
              </div>
            </div>
          </div>

          {/* Right Purple Card: REQUEST INVESTOR DECK */}
          <div className="lg:col-span-4 bg-[#230B45] text-white p-6 rounded-3xl shadow-xl border border-purple-900 space-y-4">
            <div className="flex items-center gap-2 text-[#FF8A00]">
              <FileText className="w-5 h-5" />
              <span className="font-heading font-bold text-xs uppercase tracking-wider">Institutional Brief</span>
            </div>

            <h4 className="font-heading font-extrabold text-xl">
              REQUEST INVESTOR DECK
            </h4>

            <p className="text-xs text-purple-200 leading-relaxed font-normal">
              Get detailed information on our business model, financials, pipeline and expansion plan.
            </p>

            <button
              onClick={() => setDeckModalOpen(true)}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              <span>Request Deck</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Modal */}
      <InvestorDeckModal isOpen={deckModalOpen} onClose={() => setDeckModalOpen(false)} />

    </div>
  );
}
