import React, { useState } from 'react';
import { 
  Building2, TrendingUp, Sparkles, Wrench, ShieldCheck, 
  ChevronRight, CheckCircle2, ArrowRight, Layers, Award, Quote 
} from 'lucide-react';
import { SITE_INFO } from '../data/cineportData';

export default function PartnerWithUs() {
  const [propertyForm, setPropertyForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    propertyType: 'Mall Multiplex',
    area: '',
    floors: 'Ground + 1st Floor',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">P A R T N E R &nbsp; W I T H &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              TURN YOUR SPACE INTO <br />
              <span className="text-[#FF8A00]">A DESTINATION.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Cineport partners with property owners and developers to create next-generation, cinema-led entertainment destinations that drive footfall, enhance value and deliver long-term returns.
            </p>
            <div className="pt-2">
              <a href="#submit-property" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Submit Your Property</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Partner With Cineport"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-purple-100 shadow-xl">
                <span className="text-[10px] uppercase font-bold text-[#FF8A00] tracking-wider block mb-0.5">
                  A POWERFUL ENTERTAINMENT ANCHOR
                </span>
                <p className="text-xs text-gray-700 leading-snug">
                  Cineport transforms underutilised spaces into vibrant, high-footfall destinations with a mix of cinema, F&amp;B, entertainment and events.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FIVE PARTNER BENEFITS RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">HIGHER FOOTFALL</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Attract more visitors, all day long</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-2">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">DIVERSIFIED REVENUE</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Beyond traditional leasing models</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">PREMIUM EXPERIENCE</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Cinema, food, events &amp; entertainment</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-2">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">END-TO-END PARTNER</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Concept to operations with expert team</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white rounded-2xl p-4 border border-purple-100 shadow-xs flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">LONG-TERM VALUE</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Enhances commercial asset valuation</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MIDDLE SECTION: PARTNERSHIP MODELS & SUBMIT PROPERTY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Models and Process */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Partnership Models */}
            <div className="space-y-4">
              <div>
                <span className="section-tag">P A R T N E R S H I P &nbsp; M O D E L S</span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
                  FLEXIBLE MODELS. <br />
                  <span className="text-[#FF8A00]">STRONGER OUTCOMES.</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#554670] mt-1">
                  We work with developers, mall owners, commercial property owners and existing cinema assets through multiple partnership structures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs space-y-2">
                  <div className="text-[10px] font-bold uppercase text-[#FF8A00]">Model 01</div>
                  <h4 className="font-heading font-bold text-xs text-[#1C0B38]">
                    DEVELOPMENT PARTNERSHIP
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Cineport develops and operates the entertainment ecosystem with long-term operating arrangements.
                  </p>
                  <span className="text-[11px] font-bold text-purple-700 block pt-1">Know More &gt;</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs space-y-2">
                  <div className="text-[10px] font-bold uppercase text-purple-700">Model 02</div>
                  <h4 className="font-heading font-bold text-xs text-[#1C0B38]">
                    OPERATING PARTNERSHIP
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Property owner invests in the asset while Cineport provides concept, technology, programming and operations.
                  </p>
                  <span className="text-[11px] font-bold text-purple-700 block pt-1">Know More &gt;</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs space-y-2">
                  <div className="text-[10px] font-bold uppercase text-[#FF8A00]">Model 03</div>
                  <h4 className="font-heading font-bold text-xs text-[#1C0B38]">
                    ASSET / SCREEN ACQUISITION
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Cineport can acquire or secure long-term rights over existing or under-performing cinema assets.
                  </p>
                  <span className="text-[11px] font-bold text-purple-700 block pt-1">Know More &gt;</span>
                </div>
              </div>
            </div>

            {/* Our Process: 01 to 05 */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
              <div>
                <span className="section-tag">O U R &nbsp; P R O C E S S</span>
                <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                  FROM OPPORTUNITY TO OPERATION.
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  A structured and collaborative approach to delivering successful destinations.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#FF8A00]">01</span>
                  <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Evaluate</h5>
                  <p className="text-[10px] text-gray-500">Assess location, market potential &amp; commercial fit</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-purple-700">02</span>
                  <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Conceptualise</h5>
                  <p className="text-[10px] text-gray-500">Design right mix of cinema, F&amp;B, gaming &amp; events</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#FF8A00]">03</span>
                  <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Develop</h5>
                  <p className="text-[10px] text-gray-500">Execute fit-outs and technology infrastructure</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-purple-700">04</span>
                  <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Operate</h5>
                  <p className="text-[10px] text-gray-500">Centralised operations, marketing &amp; programming</p>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-xs font-mono font-bold text-[#FF8A00]">05</span>
                  <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Grow</h5>
                  <p className="text-[10px] text-gray-500">Drive footfall, revenue &amp; long-term asset value</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Submit Property Form */}
          <div id="submit-property" className="lg:col-span-5 bg-white rounded-3xl p-6 border border-purple-100 shadow-xl">
            <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
              SUBMIT YOUR PROPERTY
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 mb-4">
              Let's explore how we can create a Cineport destination at your location.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#1C0B38]">Property Submitted!</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Thank you, {propertyForm.name}. Our commercial development team will review your property specifications and connect within 3-5 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs py-2 px-5 mt-2"
                >
                  Submit Another Location
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={propertyForm.name}
                      onChange={(e) => setPropertyForm({...propertyForm, name: e.target.value})}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={propertyForm.company}
                      onChange={(e) => setPropertyForm({...propertyForm, company: e.target.value})}
                      placeholder="e.g. Varma Realty Ltd"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={propertyForm.email}
                      onChange={(e) => setPropertyForm({...propertyForm, email: e.target.value})}
                      placeholder="ramesh@varma.com"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={propertyForm.phone}
                      onChange={(e) => setPropertyForm({...propertyForm, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">City / Location *</label>
                    <input
                      type="text"
                      required
                      value={propertyForm.city}
                      onChange={(e) => setPropertyForm({...propertyForm, city: e.target.value})}
                      placeholder="e.g. Jaipur / Lucknow"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Property Type</label>
                    <select
                      value={propertyForm.propertyType}
                      onChange={(e) => setPropertyForm({...propertyForm, propertyType: e.target.value})}
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="Shopping Mall">Shopping Mall</option>
                      <option value="Commercial Complex">Commercial Complex</option>
                      <option value="Standalone Land/Building">Standalone Land/Building</option>
                      <option value="Existing Cinema Asset">Existing Cinema Asset</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Total Area (sq.ft.) *</label>
                    <input
                      type="text"
                      required
                      value={propertyForm.area}
                      onChange={(e) => setPropertyForm({...propertyForm, area: e.target.value})}
                      placeholder="e.g. 45,000"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Available Floors</label>
                    <select
                      value={propertyForm.floors}
                      onChange={(e) => setPropertyForm({...propertyForm, floors: e.target.value})}
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="Top Floor + Terrace">Top Floor + Terrace</option>
                      <option value="Multi-Floor Dedicated Anchor">Multi-Floor Dedicated Anchor</option>
                      <option value="Ground + 1st Floor">Ground + 1st Floor</option>
                      <option value="Full Standalone Structure">Full Standalone Structure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Additional Details</label>
                  <textarea
                    rows={2}
                    value={propertyForm.details}
                    onChange={(e) => setPropertyForm({...propertyForm, details: e.target.value})}
                    placeholder="e.g. site plan, current use, expected handover timeline"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 text-xs font-bold mt-1"
                >
                  Submit Property &gt;
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Our team will review and get in touch within 3-5 business days.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. WHY PARTNER STATS & TESTIMONIAL QUOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#FAF6FE] to-[#F5EDFC] rounded-3xl p-6 sm:p-8 border border-purple-100 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">25+</div>
              <span className="text-[10px] font-bold uppercase text-gray-400 block">Target Locations</span>
              <span className="text-[10px] text-gray-500">in next phase</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">100+</div>
              <span className="text-[10px] font-bold uppercase text-gray-400 block">Screens Targeted</span>
              <span className="text-[10px] text-gray-500">in 18 months</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#FF8A00]">₹250 Cr</div>
              <span className="text-[10px] font-bold uppercase text-gray-400 block">Initial Expansion</span>
              <span className="text-[10px] text-gray-500">investment pool</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#1C0B38]">500</div>
              <span className="text-[10px] font-bold uppercase text-gray-400 block">Long-Term Ambition</span>
              <span className="text-[10px] text-gray-500">locations across India</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-purple-200 shadow-xs relative">
            <Quote className="w-6 h-6 text-[#FF8A00]/40 absolute top-3 right-3" />
            <p className="text-xs text-gray-700 italic leading-relaxed">
              "Cineport brings a complete entertainment ecosystem that transforms a property into a high-footfall destination. They are a long-term partner, not just an operator."
            </p>
            <div className="mt-2 text-xs font-bold text-[#1C0B38]">
              — Developer Partner, NCR
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
