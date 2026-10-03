import React, { useState } from 'react';
import { Search, X, Film, Utensils, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: "Devara: Part 1", category: "Movies", link: "/cinemas", icon: Film },
    { title: "Mufasa: The Lion King", category: "Movies", link: "/cinemas", icon: Film },
    { title: "Gateway Of Punjab", category: "Dining", link: "/food-drink", icon: Utensils },
    { title: "Hello VR Park", category: "Gaming", link: "/experiences", icon: Sparkles },
    { title: "Cineport SVH 83 Metro", category: "Location", link: "/cinemas", icon: MapPin },
    { title: "Cineport Club Membership", category: "Club", link: "/club", icon: Sparkles },
  ];

  const filteredLinks = quickLinks.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-top-6 duration-200">
        
        {/* Search Header Bar */}
        <div className="p-4 border-b border-purple-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FF8A00]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, restaurants, experiences, locations..."
            className="w-full text-base font-medium text-[#1C0B38] placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-96 overflow-y-auto">
          <div className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
            {query ? 'Matching Results' : 'Trending at Cineport'}
          </div>

          <div className="space-y-1.5">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F9F5FD] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-100/70 text-[#1C0B38] flex items-center justify-center group-hover:bg-[#FF8A00] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#1C0B38] group-hover:text-[#FF8A00]">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-400">{item.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF8A00] group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })
            ) : (
              <div className="text-center py-8 text-sm text-gray-400">
                No matching results found for "{query}".
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
