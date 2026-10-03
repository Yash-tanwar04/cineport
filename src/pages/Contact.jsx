import React, { useState } from 'react';
import { 
  Film, Calendar, Building2, TrendingUp, Handshake, Users, 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import Logo from '../components/Logo';
import { PRESENCE_CITIES } from '../data/cineportData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Moviegoers & Ticket Support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const contactCategories = [
    {
      title: "Moviegoers",
      desc: "Ticket bookings, showtimes, member support and general enquiries.",
      icon: Film,
      categoryValue: "Moviegoers & Ticket Support"
    },
    {
      title: "Event Enquiries",
      desc: "Birthdays, corporate events, private screenings, premieres and celebrations.",
      icon: Calendar,
      categoryValue: "Event Enquiries"
    },
    {
      title: "Property Owners & Developers",
      desc: "Explore partnership opportunities and bring Cineport to your property.",
      icon: Building2,
      categoryValue: "Property Owners & Developers"
    },
    {
      title: "Investors",
      desc: "Learn about our investment thesis, expansion plans and growth opportunities.",
      icon: TrendingUp,
      categoryValue: "Investors"
    },
    {
      title: "Partnerships",
      desc: "Brand collaborations, sponsorships, content and strategic alliances.",
      icon: Handshake,
      categoryValue: "Partnerships"
    },
    {
      title: "Careers",
      desc: "Join our team and be part of India's leading entertainment platform.",
      icon: Users,
      categoryValue: "Careers"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', category: 'Moviegoers & Ticket Support', message: '' });
    }, 4000);
  };

  const handleSelectCategory = (catVal) => {
    setFormData(prev => ({ ...prev, category: catVal }));
    const formElem = document.getElementById('contact-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">C O N N E C T &nbsp; W I T H &nbsp; C I N E P O R T</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              LET'S CREATE EXTRAORDINARY <br />
              <span className="text-[#FF8A00]">EXPERIENCES TOGETHER</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Whether you want to book tickets, host an event, partner with us, explore investment opportunities or join our team — we're here to help.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Connect with Cineport"
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

      {/* 2. SIX ENQUIRY CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {contactCategories.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-4 border border-purple-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-50 group-hover:bg-[#FF8A00] text-purple-700 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-xs uppercase text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 leading-snug mt-1 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-50 mt-2">
                  <button
                    onClick={() => handleSelectCategory(item.categoryValue)}
                    className="text-xs font-bold text-[#FF8A00] hover:text-[#E07600] flex items-center gap-1"
                  >
                    <span>Get in Touch</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. THREE COLUMNS: OFFICES, INDIA MAP, CONTACT FORM */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Corporate Office Details (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-5">
            <div>
              <span className="section-tag">O U R &nbsp; O F F I C E S</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                VISIT US OR GET IN TOUCH.
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Our team is based in India and works with partners, investors and property owners across the country.
              </p>
            </div>

            <div className="pt-1">
              <Logo />
            </div>

            <div className="space-y-3.5 text-xs text-gray-600 pt-2 border-t border-purple-50">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1C0B38]">Corporate Office</div>
                  <div>Premiere Outlet Malls Private Limited</div>
                  <div>Village Groupe</div>
                  <div>Gurugram, Haryana, India</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span className="font-medium">+91 124 456 7890</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span className="font-medium">connect@cineport.in</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span className="font-medium">Mon - Fri | 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Expanding Across India Interactive Map (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
            <div>
              <span className="section-tag">O U R &nbsp; P R E S E N C E</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                EXPANDING ACROSS INDIA.
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Active &amp; pipeline destinations spanning primary and secondary metropolitan regions.
              </p>
            </div>

            {/* Simulated India Map Layout with Interactive Pins */}
            <div className="relative h-64 bg-[#FAF7FD] rounded-2xl border border-purple-100 p-3 overflow-hidden flex flex-col justify-between">
              
              <div className="flex flex-wrap gap-1.5 z-10">
                {PRESENCE_CITIES.map((city, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCity(city)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                      selectedCity?.name === city.name
                        ? 'bg-[#1C0B38] text-white shadow-xs'
                        : city.name === 'Delhi NCR'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-white text-gray-700 border border-purple-100 hover:border-purple-300'
                    }`}
                  >
                    📍 {city.name}
                  </button>
                ))}
              </div>

              {selectedCity ? (
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-purple-200 shadow-md text-xs space-y-0.5 animate-in fade-in">
                  <div className="font-bold text-[#1C0B38]">{selectedCity.name}</div>
                  <div className="text-[11px] text-[#FF8A00] font-semibold">{selectedCity.status}</div>
                  <p className="text-[10px] text-gray-500">Scheduled for Cineport multiplex &amp; food hall integration.</p>
                </div>
              ) : (
                <div className="text-center text-[11px] text-gray-400 py-4">
                  Click on any city to inspect Cineport destination status.
                </div>
              )}

              <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1 border-t border-purple-100">
                <span>🟢 Live Operations</span>
                <span>🟠 Upcoming / Fit-out</span>
                <span>🟣 Signed Pipeline</span>
              </div>
            </div>
          </div>

          {/* Col 3: Send Us A Message Form (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-purple-100 shadow-xl space-y-4">
            <div>
              <span className="section-tag">S E N D &nbsp; U S &nbsp; A &nbsp; M E S S A G E</span>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                HOW CAN WE HELP YOU?
              </h3>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#1C0B38]">Message Dispatched</h4>
                <p className="text-xs text-gray-500">
                  Thank you, {formData.name}. Your enquiry has been routed to our {formData.category} desk. We will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Kunal Kapoor"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="kunal@example.com"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Select Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  >
                    <option value="Moviegoers & Ticket Support">Moviegoers &amp; Ticket Support</option>
                    <option value="Event Enquiries">Event Enquiries</option>
                    <option value="Property Owners & Developers">Property Owners &amp; Developers</option>
                    <option value="Investors">Investors</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Careers">Careers</option>
                    <option value="General Corporate Enquiries">General Corporate Enquiries</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Your Message *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can our team assist you today?"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
