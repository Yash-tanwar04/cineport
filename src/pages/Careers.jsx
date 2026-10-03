import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Flame, Heart, Smile, Sparkles, 
  MapPin, ChevronRight, CheckCircle2, Quote, X 
} from 'lucide-react';
import { CAREER_ROLES } from '../data/cineportData';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', exp: '2-5 Years' });

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedRole(null);
    }, 2500);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">C A R E E R S &nbsp; A T &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              BUILD A CAREER IN <br />
              <span className="text-[#FF8A00]">ENTERTAINMENT.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              At Cineport, we create more than movies — we create experiences, bring people together and build vibrant destinations. Join a team that is shaping the future of entertainment in India.
            </p>
            <div className="pt-2">
              <a href="#openings" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Explore Opportunities</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_team.jpg"
                alt="Cineport Team Careers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Movies • Food • Events
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  GAMING • NIGHTLIFE
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. EMPLOYEE BENEFITS RIBBON (6 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto mb-1">
              <Flame className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">GROW WITH US</h5>
            <p className="text-[10px] text-gray-500">Career opportunities across wide roles</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-1">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">LEARN &amp; DEVELOP</h5>
            <p className="text-[10px] text-gray-500">Training, mentorship &amp; growth</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto mb-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">SOMETHING BIG</h5>
            <p className="text-[10px] text-gray-500">Work on India's top destinations</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-1">
              <Heart className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">DIVERSE &amp; INCLUSIVE</h5>
            <p className="text-[10px] text-gray-500">A welcoming culture for all</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#FF8A00] flex items-center justify-center mx-auto mb-1">
              <Smile className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">PEOPLE FIRST</h5>
            <p className="text-[10px] text-gray-500">Workplace valuing well-being</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-xs text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-1">
              <Briefcase className="w-4 h-4" />
            </div>
            <h5 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">MAKE AN IMPACT</h5>
            <p className="text-[10px] text-gray-500">Create memories for millions</p>
          </div>

        </div>
      </section>

      {/* 3. LIFE AT CINEPORT: PASSIONATE PEOPLE (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="section-tag">L I F E &nbsp; A T &nbsp; C I N E P O R T</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              PASSIONATE PEOPLE. <br />
              <span className="text-[#FF8A00]">EXTRAORDINARY EXPERIENCES.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#554670] leading-relaxed">
              From cinemas and food halls to live events, gaming and nightlife, our teams bring creativity, energy and innovation to everything we do. At Cineport, you'll find a dynamic, collaborative and inspiring environment where your ideas can make a real impact.
            </p>
            <div className="pt-2">
              <button
                onClick={() => alert("Our culture celebrates individuality, hospitality excellence, and continuous learning with performance rewards.")}
                className="btn-outline text-xs py-2 px-5"
              >
                <span>Our Culture</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#FAF7FD] border border-purple-100 space-y-1.5">
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">CREATE MEMORABLE MOMENTS</h4>
              <p className="text-[11px] text-gray-500">Delight our guests every day with world-class experiences.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7FD] border border-purple-100 space-y-1.5">
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">WORK WITH GREAT TEAMS</h4>
              <p className="text-[11px] text-gray-500">Collaborate with passionate professionals across diverse fields.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7FD] border border-purple-100 space-y-1.5">
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">EXPLORE NEW POSSIBILITIES</h4>
              <p className="text-[11px] text-gray-500">Be part of innovation in cinema, gaming, events and more.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7FD] border border-purple-100 space-y-1.5">
              <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38]">GROW YOUR CAREER</h4>
              <p className="text-[11px] text-gray-500">Build a rewarding career in a fast-growing entertainment platform.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FIND A ROLE THAT FITS YOU (6 Job Cards) */}
      <section id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-tag">E X P L O R E &nbsp; O P P O R T U N I T I E S</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              FIND A ROLE THAT FITS YOU.
            </h2>
            <p className="text-xs sm:text-sm text-[#554670] mt-0.5">
              Roles across multiple business verticals and locations across India.
            </p>
          </div>
          <button
            onClick={() => setSelectedRole(CAREER_ROLES[0])}
            className="btn-outline text-xs py-2 px-4 self-start sm:self-auto"
          >
            <span>View All Jobs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREER_ROLES.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 border border-purple-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#FF8A00] uppercase bg-amber-50 px-2.5 py-0.5 rounded-full">
                    {role.openings} Openings
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{role.locations.join(', ')}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-base text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {role.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-purple-50">
                <button
                  onClick={() => setSelectedRole(role)}
                  className="w-full btn-outline py-2 text-xs font-bold justify-center"
                >
                  Apply for Role &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR PEOPLE SAY & JOIN OUR TEAM BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Testimonials */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xs space-y-4">
            <div>
              <span className="section-tag">O U R &nbsp; P E O P L E &nbsp; S A Y</span>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C0B38]">
                REAL PEOPLE. <span className="text-[#FF8A00]">REAL STORIES.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#FAF7FD] p-4 rounded-2xl border border-purple-100 text-xs text-gray-600 italic relative flex flex-col justify-between">
                <p className="mb-3">
                  "Cineport gives me the opportunity to work in a creative, fast-paced environment where no two days are the same. It's exciting to be part of a team that creates experiences people remember."
                </p>
                <span className="font-bold text-[#1C0B38] not-italic text-[11px]">— Team Member, Operations</span>
              </div>

              <div className="bg-[#FAF7FD] p-4 rounded-2xl border border-purple-100 text-xs text-gray-600 italic relative flex flex-col justify-between">
                <p className="mb-3">
                  "I love the energy and collaboration at Cineport. We get to work on amazing events, experiment with new ideas and bring entertainment to life."
                </p>
                <span className="font-bold text-[#1C0B38] not-italic text-[11px]">— Team Member, Events</span>
              </div>

              <div className="bg-[#FAF7FD] p-4 rounded-2xl border border-purple-100 text-xs text-gray-600 italic relative flex flex-col justify-between">
                <p className="mb-3">
                  "Cineport is more than a workplace — it's a community. The support, learning and growth opportunities here are unmatched."
                </p>
                <span className="font-bold text-[#1C0B38] not-italic text-[11px]">— Team Member, F&amp;B</span>
              </div>
            </div>
          </div>

          {/* Join Our Team Callout */}
          <div className="lg:col-span-4 bg-[#230B45] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-900 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#FF8A00] tracking-widest">Hiring Across India</span>
              <h4 className="font-heading font-extrabold text-2xl mt-1">
                JOIN OUR TEAM
              </h4>
              <p className="text-xs text-purple-200 mt-2 leading-relaxed">
                Be part of India's next generation of entertainment destinations. We are always looking for passionate people.
              </p>
            </div>

            <button
              onClick={() => setSelectedRole(CAREER_ROLES[0])}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              <span>Explore Opportunities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Role Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-gradient-to-r from-[#200B3F] to-[#36136B] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FF8A00]">Careers Application</span>
                <h3 className="font-heading font-bold text-lg">{selectedRole.title}</h3>
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {appliedSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#1C0B38]">Application Received!</h4>
                  <p className="text-xs text-gray-500">
                    Thank you, {applicant.name}. Our talent acquisition team will review your profile and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicant.name}
                      onChange={(e) => setApplicant({...applicant, name: e.target.value})}
                      placeholder="e.g. Siddharth Verma"
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={applicant.email}
                        onChange={(e) => setApplicant({...applicant, email: e.target.value})}
                        placeholder="siddharth@gmail.com"
                        className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={applicant.phone}
                        onChange={(e) => setApplicant({...applicant, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Total Experience</label>
                    <select
                      value={applicant.exp}
                      onChange={(e) => setApplicant({...applicant, exp: e.target.value})}
                      className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="2-5 Years">2-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-2.5 text-xs font-bold mt-2"
                  >
                    Submit Application
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
