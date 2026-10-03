import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#180833] text-purple-100 border-t border-purple-900/40">
      
      {/* Top Banner: Stay Connected & Newsletter */}
      <div className="border-b border-purple-900/60 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF8A00] font-bold">
              Stay Connected
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              LET'S STAY CONNECTED.
            </h3>
            <p className="text-sm text-purple-300 max-w-md mt-0.5">
              Latest movies, events, dining offers and exclusive member experiences delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2.5 rounded-full text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! You have subscribed to Cineport updates.</span>
              </div>
            ) : (
              <div className="flex rounded-full bg-purple-950/90 border border-purple-800/80 p-1 focus-within:border-[#FF8A00] transition-colors">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-transparent px-4 py-2 text-sm text-white placeholder-purple-400 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#FF8A00] hover:bg-[#FFA012] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2">
            <Logo light={true} />
            <p className="text-xs font-semibold tracking-wider text-purple-300 uppercase mt-2 mb-3">
              Cinema Is Just The Beginning.
            </p>
            <p className="text-sm text-purple-200/80 leading-relaxed max-w-sm mb-5">
              Cineport builds next-generation entertainment destinations where movies, food, nightlife, events and technology come together across India.
            </p>

            <div className="space-y-1.5 text-xs text-purple-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Village Groupe, Premiere Outlet Malls Pvt Ltd, Gurugram, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>+91 124 456 7890 (Mon-Fri 10am - 6pm)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>connect@cineport.in</span>
              </div>
            </div>

            {/* Social Icons SVGs */}
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-purple-900/60 hover:bg-[#FF8A00] flex items-center justify-center transition-colors text-purple-200 hover:text-white" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-purple-900/60 hover:bg-[#FF8A00] flex items-center justify-center transition-colors text-purple-200 hover:text-white" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-purple-900/60 hover:bg-[#FF8A00] flex items-center justify-center transition-colors text-purple-200 hover:text-white" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-purple-900/60 hover:bg-[#FF8A00] flex items-center justify-center transition-colors text-purple-200 hover:text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-purple-900/60 hover:bg-[#FF8A00] flex items-center justify-center transition-colors text-purple-200 hover:text-white" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Experiences & Entertainment */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Experiences
            </h4>
            <ul className="space-y-2 text-sm text-purple-300">
              <li><Link to="/cinemas" className="hover:text-[#FF8A00] transition-colors">Cineport Cinemas</Link></li>
              <li><Link to="/food-drink" className="hover:text-[#FF8A00] transition-colors">Cineport Food Hall</Link></li>
              <li><Link to="/experiences" className="hover:text-[#FF8A00] transition-colors">Locker Room Sports Bar</Link></li>
              <li><Link to="/experiences" className="hover:text-[#FF8A00] transition-colors">Tiyatro Performance Bar</Link></li>
              <li><Link to="/experiences" className="hover:text-[#FF8A00] transition-colors">Bokata Microbrewery</Link></li>
              <li><Link to="/experiences" className="hover:text-[#FF8A00] transition-colors">CelebU Karaoke Suite</Link></li>
              <li><Link to="/experiences" className="hover:text-[#FF8A00] transition-colors">Hello VR Park</Link></li>
              <li><Link to="/night-builder" className="text-[#FF8A00] hover:underline font-medium">Night Builder Plan</Link></li>
            </ul>
          </div>

          {/* Col 3: Business & Team */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Business &amp; Team
            </h4>
            <ul className="space-y-2 text-sm text-purple-300">
              <li><Link to="/about" className="hover:text-[#FF8A00] transition-colors">About Cineport</Link></li>
              <li><Link to="/partner" className="hover:text-[#FF8A00] transition-colors">Partner With Us</Link></li>
              <li><Link to="/investors" className="hover:text-[#FF8A00] transition-colors">Investor Relations</Link></li>
              <li><Link to="/club" className="hover:text-[#FF8A00] transition-colors">Cineport Club</Link></li>
              <li><Link to="/careers" className="hover:text-[#FF8A00] transition-colors">Careers &amp; Culture</Link></li>
              <li><Link to="/stories" className="hover:text-[#FF8A00] transition-colors">Newsroom &amp; Stories</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF8A00] transition-colors">Contact Corporate Office</Link></li>
            </ul>
          </div>

          {/* Col 4: Events & Venues */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Events &amp; Booking
            </h4>
            <ul className="space-y-2 text-sm text-purple-300">
              <li><Link to="/events" className="hover:text-[#FF8A00] transition-colors">Private Screenings</Link></li>
              <li><Link to="/events" className="hover:text-[#FF8A00] transition-colors">Corporate Conferences</Link></li>
              <li><Link to="/events" className="hover:text-[#FF8A00] transition-colors">Birthdays &amp; Anniversaries</Link></li>
              <li><Link to="/events" className="hover:text-[#FF8A00] transition-colors">Brand Activations</Link></li>
              <li><Link to="/events" className="hover:text-[#FF8A00] transition-colors">Rooftop Soirees</Link></li>
              <li><Link to="/cinemas" className="hover:text-[#FF8A00] transition-colors">SVH 83 Metro Gurugram</Link></li>
              <li><Link to="/cinemas" className="hover:text-[#FF8A00] transition-colors">Apex Park Square Noida</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400 gap-4">
          <p>© {new Date().getFullYear()} Cineport Entertainment Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-purple-200 cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-purple-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-200 cursor-pointer">Cookie Preferences</span>
            <span className="hover:text-purple-200 cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
