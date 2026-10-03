import React, { useState } from 'react';
import { 
  Sparkles, Ticket, Percent, Utensils, Armchair, Gift, 
  Crown, Star, Smartphone, Check, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { CLUB_TIERS } from '../data/cineportData';

export default function Club({ onOpenSignIn }) {
  const [selectedTier, setSelectedTier] = useState(null);
  const [joinedSuccess, setJoinedSuccess] = useState(false);

  const handleJoinTier = (tier) => {
    setSelectedTier(tier);
    setJoinedSuccess(true);
    setTimeout(() => {
      setJoinedSuccess(false);
      setSelectedTier(null);
    }, 3000);
  };

  const clubBenefitsGlance = [
    { title: "Priority Booking", desc: "Be the first to book your favourite movies", icon: Ticket },
    { title: "Exclusive Offers", desc: "Special prices and member-only deals", icon: Percent },
    { title: "F&B Benefits", desc: "Enjoy dining privileges across restaurants and cafes", icon: Utensils },
    { title: "Lounge Access", desc: "Premium lounges and member zones", icon: Armchair },
    { title: "Birthday Rewards", desc: "Special treats to make your day brighter", icon: Gift },
    { title: "Invites & Premieres", desc: "Member-only screenings and exclusive events", icon: Crown },
    { title: "Earn Points", desc: "Spend, experience and earn rewards", icon: Star },
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="section-tag">C I N E P O R T &nbsp; C L U B</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C0B38] tracking-tight leading-[1.15]">
              MORE EXPERIENCES. <br />
              <span className="text-[#FF8A00]">MORE REWARDS.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#554670] leading-relaxed max-w-xl font-normal">
              Cineport Club is your all-access pass to a world of movies, dining, entertainment and exclusive experiences.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#tiers" className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                <span>Join Cineport Club</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenSignIn}
                className="btn-outline text-xs sm:text-sm py-2.5 px-6"
              >
                <span>Sign In</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] relative group">
              <img
                src="/images/couple_cinema_club.jpg"
                alt="Cineport Club Lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-400 text-[#1C0B38] font-heading font-black text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-1">
                Movies • Dining • Entertainment
                <span className="block text-[10px] font-bold text-purple-950 uppercase tracking-widest">
                  REWARDS. AND MORE.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CLUB BENEFITS AT A GLANCE (7 items) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="section-tag">A T &nbsp; A &nbsp; G L A N C E</span>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1C0B38]">
            CLUB BENEFITS AT A GLANCE
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {clubBenefitsGlance.map((benefit, idx) => {
            const IconComp = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3.5 border border-purple-100 text-center space-y-1.5 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-[#1C0B38]">
                    {benefit.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MEMBERSHIP TIERS (SILVER, GOLD, PLATINUM) + APP CARD */}
      <section id="tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-tag">M E M B E R S H I P &nbsp; T I E R S</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C0B38]">
              CHOOSE YOUR CINEPORT CLUB.
            </h2>
            <p className="text-xs sm:text-sm text-[#554670] mt-1">
              More movies, more flavours, more entertainment — curated benefits for every Cineport guest.
            </p>
          </div>
          <button
            onClick={() => alert("All 3 membership tiers offer priority booking, birthday treats, and point earnings. Gold adds lounge access & 10% F&B discount. Platinum includes 8 free tickets/year and private screening privileges.")}
            className="btn-outline text-xs py-2 px-4 self-start sm:self-auto"
          >
            <span>Compare Benefits</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {joinedSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs font-semibold">
              Congratulations! You have enrolled into <strong>Cineport {selectedTier?.name}</strong>. Enjoy your member privileges!
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Silver Tier */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[10px] font-bold uppercase text-gray-400">Entry Tier</div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C0B38]">SILVER</h3>
              <p className="text-xs text-gray-500 mb-3">For the regular movie lover</p>
              <div className="font-heading font-bold text-lg text-[#1C0B38] mb-4">Free with Signup</div>

              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Priority booking window</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Member-only offers</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Birthday treat voucher</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Earn points on every spend</li>
              </ul>
            </div>

            <button
              onClick={() => handleJoinTier(CLUB_TIERS[0])}
              className="btn-outline w-full py-2.5 text-xs font-bold justify-center"
            >
              Join Silver &gt;
            </button>
          </div>

          {/* Gold Tier (Highlighted) */}
          <div className="lg:col-span-3 bg-amber-50/60 rounded-3xl p-6 border-2 border-[#FF8A00] shadow-md flex flex-col justify-between space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8A00] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
              Most Popular
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase text-[#FF8A00]">Recommended</div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C0B38]">GOLD</h3>
              <p className="text-xs text-gray-600 mb-3">More experiences, more rewards</p>
              <div className="font-heading font-bold text-lg text-[#1C0B38] mb-4">₹999 / year</div>

              <ul className="space-y-2 text-xs text-gray-700 font-medium">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Priority booking + free upgrades</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> 10% F&amp;B benefits across all outlets</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Cineport Club Lounge access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Special event invitations</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> 2X higher points earning</li>
              </ul>
            </div>

            <button
              onClick={() => handleJoinTier(CLUB_TIERS[1])}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              Join Gold &gt;
            </button>
          </div>

          {/* Platinum Tier (VIP Dark Card) */}
          <div className="lg:col-span-3 bg-gradient-to-b from-[#220B44] to-[#130528] text-white rounded-3xl p-6 shadow-xl border border-purple-900 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[10px] font-bold uppercase text-[#FF8A00]">VIP Elite</div>
              <h3 className="font-heading font-extrabold text-2xl text-white">PLATINUM</h3>
              <p className="text-xs text-purple-200 mb-3">The ultimate Cineport experience</p>
              <div className="font-heading font-bold text-lg text-[#FF8A00] mb-4">₹2,499 / year</div>

              <ul className="space-y-2 text-xs text-purple-100">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Priority booking + 8 free tickets/yr</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Exclusive 15% F&amp;B privileges</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Premium lounge &amp; private screening access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Invites to premieres &amp; VIP events</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Maximum 3X points earning</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#FF8A00]" /> Dedicated concierge phone support</li>
              </ul>
            </div>

            <button
              onClick={() => handleJoinTier(CLUB_TIERS[2])}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              Join Platinum &gt;
            </button>
          </div>

          {/* Right Mobile App Card */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-purple-100 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#1C0B38]">
                ONE ACCOUNT. <br />
                <span className="text-[#FF8A00]">EVERY CINEPORT EXPERIENCE.</span>
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Book movies, reserve dining, explore events, manage your points and unlock exclusive benefits — all in one place.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSignIn}
                className="w-full py-2 text-xs font-bold text-purple-800 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
              >
                Access Member Portal
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS & JOIN TODAY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="section-tag">H O W &nbsp; I T &nbsp; W O R K S</span>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C0B38]">
                IT'S EASY TO BE A MEMBER.
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF8A00]">01</span>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Sign Up</h5>
                <p className="text-[10px] text-gray-500">Create your Cineport account in 30 seconds</p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-purple-700">02</span>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Choose Your Plan</h5>
                <p className="text-[10px] text-gray-500">Select the membership tier that suits you</p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#FF8A00]">03</span>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Start Experiencing</h5>
                <p className="text-[10px] text-gray-500">Book, dine, attend events and earn points</p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-purple-700">04</span>
                <h5 className="font-heading font-bold text-xs text-[#1C0B38]">Unlock More</h5>
                <p className="text-[10px] text-gray-500">Enjoy exclusive rewards, upgrades and events</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#230B45] text-white p-6 rounded-3xl shadow-xl border border-purple-900 space-y-3">
            <h4 className="font-heading font-extrabold text-lg">
              Join Cineport Club Today
            </h4>
            <p className="text-xs text-purple-200">
              Step into a bigger world of movies, food, entertainment and rewards.
            </p>
            <button
              onClick={onOpenSignIn}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              <span>Sign Up Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
