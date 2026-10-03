import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, ChevronDown, Sparkles, Film, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenBooking, onOpenSearch, onOpenSignIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cinemas", path: "/cinemas" },
    { name: "Experiences", path: "/experiences" },
    { name: "Food & Drink", path: "/food-drink" },
    { name: "Events", path: "/events" },
    { name: "Partner With Us", path: "/partner" },
    { name: "Investors", path: "/investors" },
    { name: "About", path: "/about" },
  ];

  const moreLinks = [
    { name: "Cineport Club", path: "/club", desc: "Exclusive rewards & membership tiers" },
    { name: "Night Builder", path: "/night-builder", desc: "Craft your complete custom night out" },
    { name: "Careers", path: "/careers", desc: "Join our fast-growing hospitality team" },
    { name: "Stories & News", path: "/stories", desc: "Latest launches and press releases" },
    { name: "Contact", path: "/contact", desc: "Connect with our offices across India" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100/70 py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-purple-100/40 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-5 text-[14px] font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#FF8A00] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF8A00] after:rounded-full'
                      : 'text-[#3E2F5B] hover:text-[#FF8A00]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* More Links Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className="flex items-center gap-1 py-1.5 text-[#3E2F5B] hover:text-[#FF8A00] transition-colors"
                aria-label="More navigation links"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-2.5 rounded-xl hover:bg-[#FAF6FD] transition-colors text-left group"
                    >
                      <div className="text-sm font-semibold text-[#1C0B38] group-hover:text-[#FF8A00]">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 font-normal">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#3E2F5B] hover:text-[#FF8A00] hover:bg-purple-50 rounded-full transition-colors"
              title="Search Cineport"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Sign In Button */}
            <button
              onClick={onOpenSignIn}
              className="flex items-center gap-1.5 text-sm font-medium text-[#3E2F5B] hover:text-[#FF8A00] px-3 py-1.5 rounded-full hover:bg-purple-50 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>

            {/* Book Tickets CTA Button */}
            <button
              onClick={onOpenBooking}
              className="btn-primary text-sm py-2 px-5 shadow-sm hover:shadow-md"
            >
              <Film className="w-3.5 h-3.5" />
              <span>Book Tickets</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-primary text-xs py-1.5 px-3.5 sm:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C0B38] hover:bg-purple-50 rounded-xl transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-purple-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-[#FF8A00] font-semibold'
                      : 'text-[#3E2F5B] hover:bg-purple-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-2 pb-1 border-t border-purple-100 my-1">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-purple-400">
                Explore More
              </span>
            </div>

            {moreLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 rounded-xl text-sm font-medium text-[#3E2F5B] hover:bg-purple-50"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-purple-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-purple-200 text-sm font-medium text-[#1C0B38]"
              >
                <Search className="w-4 h-4" />
                <span>Search Cineport</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-purple-200 text-sm font-medium text-[#1C0B38]"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Cineport Club</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-primary py-3 text-sm justify-center"
              >
                <Film className="w-4 h-4" />
                <span>Book Tickets Online</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
