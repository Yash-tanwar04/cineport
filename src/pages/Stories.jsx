import React, { useState } from 'react';
import { 
  Eye, Calendar, ArrowRight, ChevronRight, CheckCircle2, 
  Send, Sparkles, X 
} from 'lucide-react';
import { NEWS_STORIES, LATEST_NEWS_UPDATES } from '../data/cineportData';

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    'All Stories', 'Launches', 'Experiences', 'Food & Drink', 
    'Events', 'Partnerships', 'Company Updates', 'In The Media'
  ];

  const filteredStories = NEWS_STORIES.filter(s => {
    if (activeCategory === 'All Stories') return true;
    return s.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSent(false), 4000);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">N E W S R O O M</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              STORIES BEYOND <br />
              <span className="text-[#FF8A00]">THE BIG SCREEN.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Stay updated with the latest launches, experiences, partnerships and stories from across the Cineport world — where cinema, food, entertainment and lifestyle come together.
            </p>
            <div className="pt-2">
              <a href="#stories-feed" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Explore All Stories</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/cineport_exterior_hero.jpg"
                alt="Cineport Newsroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                New Launches • Partnerships
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  EXPERIENCES. AND MORE.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY FILTER PILLS */}
      <section id="stories-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#1C0B38] text-white shadow-xs'
                  : 'bg-white border border-purple-100 text-gray-600 hover:border-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. STORIES MAIN GRID & LATEST UPDATES SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Articles Grid (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Featured Hero Story (SVH 83 Metro) */}
            {filteredStories.length > 0 && (
              <div 
                onClick={() => setSelectedArticle(filteredStories[0])}
                className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={filteredStories[0].image}
                    alt={filteredStories[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF8A00] text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {filteredStories[0].category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors">
                    {filteredStories[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {filteredStories[0].summary}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-purple-50">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-purple-400" /> {filteredStories[0].date}</span>
                    <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-purple-400" /> {filteredStories[0].views}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Stories in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredStories.slice(1).map((story) => (
                <div
                  key={story.id}
                  onClick={() => setSelectedArticle(story)}
                  className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[#1C0B38] font-bold text-[9px] uppercase px-2.5 py-0.5 rounded-full">
                        {story.category}
                      </div>
                    </div>

                    <div className="p-4 space-y-1.5">
                      <h4 className="font-heading font-extrabold text-sm text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors leading-snug">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {story.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between text-[11px] text-gray-400 border-t border-purple-50 mt-2">
                    <span>{story.date}</span>
                    <span className="font-bold text-[#FF8A00] group-hover:translate-x-1 transition-transform">Read &gt;</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Sidebar: Latest Updates */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                <h4 className="font-heading font-extrabold text-sm uppercase text-[#1C0B38] tracking-wider">
                  LATEST UPDATES
                </h4>
                <span className="text-xs font-bold text-[#FF8A00] hover:underline cursor-pointer">
                  View All &gt;
                </span>
              </div>

              <div className="space-y-3.5">
                {LATEST_NEWS_UPDATES.map((update, idx) => (
                  <div key={idx} className="space-y-0.5 group cursor-pointer pb-2 border-b border-purple-50 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold text-[#FF8A00] uppercase block">
                      {update.date}
                    </span>
                    <p className="text-xs font-semibold text-[#1C0B38] group-hover:text-[#FF8A00] transition-colors leading-snug">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Callout Card in Sidebar */}
            <div className="bg-gradient-to-br from-[#240C46] to-[#3B156E] text-white p-6 rounded-3xl shadow-xl border border-purple-900 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A00]">Press &amp; Media</span>
              <h4 className="font-heading font-extrabold text-lg">
                GET CINEPORT UPDATES
              </h4>
              <p className="text-xs text-purple-200 font-normal leading-relaxed">
                Be the first to know about new launches, events, offers and exclusive stories.
              </p>

              {newsletterSent ? (
                <div className="p-2.5 rounded-xl bg-emerald-900/50 border border-emerald-500 text-xs text-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed! Stay tuned for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex rounded-full bg-purple-950/90 border border-purple-700/80 p-1">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-purple-400 focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-[#FF8A00] hover:bg-[#FFA012] flex items-center justify-center text-white shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 4. IN THE NEWS: SPOTLIGHT & MEDIA LOGOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="section-tag">I N &nbsp; T H E &nbsp; N E W S</span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1C0B38]">
              CINEPORT IN THE SPOTLIGHT.
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Our journey is being featured across leading media platforms.
            </p>
          </div>

          {/* Media Publication Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 font-heading font-bold text-xs sm:text-sm">
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">The Economic Times</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">BusinessLine</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">CNBC TV18</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">Forbes</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">LiveMint</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#FAF7FD] border border-purple-100 hover:text-[#1C0B38]">NDTV</span>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-[#FF8A00] tracking-widest bg-amber-50 px-2 py-0.5 rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-[11px] text-gray-400">{selectedArticle.date}</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#1C0B38]">
                {selectedArticle.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {selectedArticle.summary}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed font-normal pt-1">
                With a focus on curated gastronomy, high-tech projection, and lifestyle experiences, Cineport is pioneering an all-in-one entertainment district model that caters to families, urban youth, and corporate communities across the country.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-primary text-xs py-2 px-6"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
