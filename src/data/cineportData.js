// Cineport Comprehensive Data Store - Extracted from the 13-Page Design Specification

export const SITE_INFO = {
  name: "Cineport",
  tagline: "CINEMA IS JUST THE BEGINNING.",
  subtagline: "Cineport builds next-generation entertainment destinations where movies, food, nightlife, events and technology come together.",
  phone: "+91 124 456 7890",
  email: "connect@cineport.in",
  corporateOffice: {
    company: "Premiere Outlet Malls Private Limited",
    group: "Village Groupe",
    city: "Gurugram, Haryana, India",
    hours: "Mon - Fri | 10:00 AM - 6:00 PM"
  },
  stats: {
    liveLocations: 1,
    underDevelopment: 7,
    pipeline: "25+",
    targetScreens: "100+",
    screensTimeframe: "in 18 months",
    initialInvestment: "₹250 Cr",
    longTermAmbition: "500",
    retailMarketVal: "₹1.20 Tn"
  }
};

export const NAVIGATION_LINKS = [
  { name: "Home", path: "/" },
  { name: "Cinemas", path: "/cinemas" },
  { name: "Experiences", path: "/experiences" },
  { name: "Food & Drink", path: "/food-drink" },
  { name: "Events", path: "/events" },
  { name: "Partner With Us", path: "/partner" },
  { name: "Investors", path: "/investors" },
  { name: "About", path: "/about" },
];

export const CATEGORIES_RIBBON = [
  { id: "watch", name: "WATCH", sub: "Movies & Premieres", icon: "Film", path: "/cinemas" },
  { id: "eat", name: "EAT", sub: "Food & Beverages", icon: "Utensils", path: "/food-drink" },
  { id: "play", name: "PLAY", sub: "Gaming & VR", icon: "Gamepad2", path: "/experiences" },
  { id: "celebrate", name: "CELEBRATE", sub: "Birthdays & Parties", icon: "PartyPopper", path: "/events" },
  { id: "sports", name: "WATCH SPORTS", sub: "Live Screenings", icon: "Trophy", path: "/experiences" },
  { id: "sing", name: "SING", sub: "Karaoke at CelebU", icon: "Mic2", path: "/experiences" },
  { id: "party", name: "PARTY", sub: "Nightlife & Rooftop", icon: "Sparkles", path: "/night-builder" },
  { id: "host", name: "HOST", sub: "Corporate Events", icon: "Briefcase", path: "/events" }
];

export const CINEMAS_DATA = [
  {
    id: "svh-83",
    name: "Cineport SVH 83 Metro",
    location: "Gurugram, Haryana",
    status: "LIVE",
    statusColor: "emerald",
    screens: "5 Screens",
    seats: "765 Seats",
    description: "A complete entertainment destination with movies, food, gaming and more.",
    image: "/images/cineport_exterior_hero.jpg",
    amenities: ["Food Hall", "Gaming", "Events", "Parking"],
    features: ["Dolby Atmos Sound", "4K Laser Projection", "VIP Luxury Recliners", "Food Hall Direct Service"],
    shows: [
      { movie: "Devara: Part 1", format: "4K Laser Dolby Atmos", times: ["10:30 AM", "01:45 PM", "05:00 PM", "08:30 PM", "11:15 PM"], price: 350 },
      { movie: "Mufasa: The Lion King", format: "3D IMAX Immersive", times: ["11:00 AM", "02:15 PM", "06:00 PM", "09:15 PM"], price: 420 },
      { movie: "Joker: Folie à Deux", format: "Dolby Atmos", times: ["12:30 PM", "03:45 PM", "07:15 PM", "10:30 PM"], price: 380 }
    ]
  },
  {
    id: "apex-park",
    name: "Cineport Apex Park Square",
    location: "Noida, Uttar Pradesh",
    status: "COMING SOON",
    statusColor: "amber",
    screens: "5 Screens",
    seats: "760 Seats",
    description: "Premium multiplex with dining, entertainment and event spaces.",
    image: "/images/cinema_auditorium.jpg",
    amenities: ["Restaurants", "Sports Bar", "Events", "Parking"],
    features: ["Next-Gen Laser Tech", "Locker Room Sports Bar", "Artisanal Concessions", "Valet Parking"]
  },
  {
    id: "dehradun",
    name: "Cineport Dehradun",
    location: "Dehradun, Uttarakhand",
    status: "COMING SOON",
    statusColor: "amber",
    screens: "4 Screens",
    seats: "503 Seats",
    description: "Cinema-led destination with curated food, rooftop and entertainment.",
    image: "/images/bokata_brewery.jpg",
    amenities: ["Food & Drink", "Rooftop", "Gaming", "Parking"],
    features: ["Scenic Rooftop Lounge", "Bokata Microbrewery", "Recliner Auditoriums", "Family Entertainment"]
  },
  {
    id: "najafgarh",
    name: "Cineport Najafgarh",
    location: "New Delhi",
    status: "IN PIPELINE",
    statusColor: "purple",
    screens: "4 Screens",
    seats: "500+ Seats",
    description: "Upcoming entertainment destination for West Delhi.",
    image: "/images/events_celebrations.jpg",
    amenities: ["Food Hall", "Karaoke", "Events", "Parking"],
    features: ["CelebU Karaoke Suite", "Interactive Food Counters", "Community Banquet Space"]
  }
];

export const TODAY_HAPPENINGS = [
  {
    id: "evt-1",
    type: "Movies",
    title: "Devara: Part 1",
    time: "10:30 AM | 1:45 PM | 5:00 PM",
    badge: "Movies",
    badgeBg: "bg-purple-100 text-purple-800",
    image: "/images/cinema_auditorium.jpg",
    desc: "Action Thriller in 4K Laser Dolby Atmos"
  },
  {
    id: "evt-2",
    type: "Movies",
    title: "Mufasa: The Lion King",
    time: "11:00 AM | 2:15 PM | 6:00 PM",
    badge: "Movies",
    badgeBg: "bg-purple-100 text-purple-800",
    image: "/images/couple_cinema_club.jpg",
    desc: "Epic Animation Adventure in 3D Surround"
  },
  {
    id: "evt-3",
    type: "Dining",
    title: "Gateway Of Punjab",
    time: "12:00 PM - 12:00 AM",
    badge: "Dining",
    badgeBg: "bg-amber-100 text-amber-800",
    image: "/images/dish_punjab.jpg",
    desc: "Special Punjabi Kadhai & Naan Platter"
  },
  {
    id: "evt-4",
    type: "Live Sports",
    title: "Asia Cup Live Screening",
    time: "7:00 PM Onwards",
    badge: "Live Sports",
    badgeBg: "bg-blue-100 text-blue-800",
    image: "/images/locker_room.jpg",
    desc: "Giant 4K screen broadcast with craft beer deals"
  },
  {
    id: "evt-5",
    type: "Karaoke",
    title: "CelebU Karaoke Night",
    time: "9:00 PM Onwards",
    badge: "Karaoke",
    badgeBg: "bg-pink-100 text-pink-800",
    image: "/images/celebu_karaoke.jpg",
    desc: "Sing your heart out with VIP private rooms"
  }
];

export const EXPERIENCES_DATA = [
  {
    id: "cinemas",
    title: "CINEPORT CINEMAS",
    tagline: "Immersive movie experiences across multiple screens with the latest technology, comfort and service.",
    image: "/images/cinema_auditorium.jpg",
    link: "/cinemas",
    details: "Equipped with RGB laser projection, Dolby Atmos sound architecture, plush recliners, in-seat gourmet dining service, and personalized cinema hospitality."
  },
  {
    id: "food-hall",
    title: "CINEPORT FOOD HALL",
    tagline: "Curated cuisines, live counters and signature brands - the perfect dining destination before or after your movie.",
    image: "/images/food_hall.jpg",
    link: "/food-drink",
    details: "A culinary journey featuring authentic street food, artisanal bakeries, live noodle bars, handcrafted burgers, and world gastronomy under one vibrant roof."
  },
  {
    id: "locker-room",
    title: "LOCKER ROOM",
    tagline: "Sports bar, live screenings, gaming and great food for every sports fan.",
    image: "/images/locker_room.jpg",
    link: "/experiences",
    details: "Massive stadium-grade LED video walls, craft brews on tap, gastropub snacks, arcade games, and electrifying matchday atmosphere."
  },
  {
    id: "tiyatro",
    title: "TIYATRO",
    tagline: "A high-energy performance bar with live music, DJ nights and unforgettable entertainment.",
    image: "/images/tiyatro_live_bar.jpg",
    link: "/experiences",
    details: "Intimate acoustic stages, weekend headline DJ sets, curated craft cocktails, and late-night nightlife energy."
  },
  {
    id: "bokata",
    title: "BOKATA",
    tagline: "A microbrewery and social destination with craft beers, great food and a vibrant atmosphere.",
    image: "/images/bokata_brewery.jpg",
    link: "/experiences",
    details: "Locally brewed wheat beers, ales, IPAs, rustic wood-fired grills, and open-air brewery terrace."
  },
  {
    id: "celebu",
    title: "CELEBU",
    tagline: "Karaoke, private rooms and celebration spaces for friends, families and special occasions.",
    image: "/images/celebu_karaoke.jpg",
    link: "/experiences",
    details: "State-of-the-art acoustics, digital touchscreen song catalogs in 12+ languages, ambient neon lighting, and personalized bottle service."
  },
  {
    id: "hello-vr",
    title: "HELLO VR PARK",
    tagline: "Next-generation VR gaming and immersive experiences for all ages.",
    image: "/images/hello_vr_park.jpg",
    link: "/experiences",
    details: "6-DOF motion simulators, multiplayer VR escape quests, racing rigs, and mixed reality arenas for gamers of every skill level."
  },
  {
    id: "events-celebrations",
    title: "EVENTS & CELEBRATIONS",
    tagline: "Birthdays, corporate events, premieres, private screenings and more.",
    image: "/images/events_celebrations.jpg",
    link: "/events",
    details: "Full turnkey event planning, customized red carpets, dedicated banquet managers, and flexible multipurpose auditorium rentals."
  }
];

export const RESTAURANTS_DATA = [
  {
    id: "gateway-punjab",
    name: "GATEWAY OF PUNJAB",
    cuisine: "North Indian & Mughlai",
    description: "Authentic North Indian flavours with a modern twist.",
    image: "/images/dish_punjab.jpg",
    specialties: ["Butter Chicken Makhani", "Dal Makhani", "Garlic Butter Naan", "Tandoori Jheenga"],
    hours: "11:30 AM - 11:30 PM",
    priceRange: "₹₹ (₹800 for two)"
  },
  {
    id: "gateway-south",
    name: "GATEWAY OF SOUTH",
    cuisine: "Coastal & Traditional South Indian",
    description: "Classic South Indian cuisine, reimagined for today.",
    image: "/images/dish_punjab.jpg",
    specialties: ["Ghee Roast Masala Dosa", "Chettinad Pepper Chicken", "Appam with Stew", "Filter Kaapi"],
    hours: "10:00 AM - 11:00 PM",
    priceRange: "₹₹ (₹600 for two)"
  },
  {
    id: "my-asiana",
    name: "MY ASIANA",
    cuisine: "Pan-Asian & Dim Sum",
    description: "Pan-Asian favourites inspired by global flavours.",
    image: "/images/food_hall.jpg",
    specialties: ["Truffle Edamame Dim Sum", "Spicy Salmon Maki", "Thai Green Curry", "Pad Thai Noodles"],
    hours: "12:00 PM - 12:00 AM",
    priceRange: "₹₹₹ (₹1,200 for two)"
  },
  {
    id: "my-mexicana",
    name: "MY MEXICANA",
    cuisine: "Cantina & Modern Mexican",
    description: "Vibrant Mexican cuisine and Cantina-style dining.",
    image: "/images/friends_night_out.jpg",
    specialties: ["Crispy Birria Tacos", "Sizzling Fajita Platters", "Loaded Guacamole", "Churros with Dulce de Leche"],
    hours: "12:00 PM - 12:00 AM",
    priceRange: "₹₹ (₹900 for two)"
  },
  {
    id: "eataliana",
    name: "EATALIANA",
    cuisine: "Artisan Italian",
    description: "Italian classics, wood-fired pizzas and handcrafted pastas.",
    image: "/images/food_hall.jpg",
    specialties: ["Burrata Margherita Pizza", "Wild Mushroom Risotto", "Handmade Fettuccine Alfredo", "Classic Tiramisu"],
    hours: "12:00 PM - 11:30 PM",
    priceRange: "₹₹₹ (₹1,100 for two)"
  },
  {
    id: "union-coffee",
    name: "UNION ARTISAN COFFEE",
    cuisine: "Specialty Roastery & Bakery",
    description: "Specialty coffee, gourmet brews and all-day favourites.",
    image: "/images/couple_cinema_club.jpg",
    specialties: ["Single Origin Pour Over", "Spanish Latte", "Flaky Almond Croissants", "Sourdough Avocado Toast"],
    hours: "08:00 AM - 11:00 PM",
    priceRange: "₹₹ (₹500 for two)"
  }
];

export const EVENT_SPACES = [
  {
    id: "auditoriums",
    title: "CINEMA AUDITORIUMS",
    capacity: "50 - 500 seats",
    image: "/images/cinema_auditorium.jpg",
    description: "Massive silver screens, laser projectors, and stadium seating ideal for product launches, conferences, and private screenings."
  },
  {
    id: "lounges",
    title: "PRIVATE LOUNGES",
    capacity: "10 - 50 seats",
    image: "/images/couple_cinema_club.jpg",
    description: "Intimate, VIP lounge settings with dedicated bar service, bespoke hors d'oeuvres, and discreet executive treatment."
  },
  {
    id: "food-hall-space",
    title: "FOOD HALL",
    capacity: "50 - 300 guests",
    image: "/images/food_hall.jpg",
    description: "Vibrant communal dining venue with interactive live cooking counters and customizable food stations."
  },
  {
    id: "rooftop",
    title: "ROOFTOP",
    capacity: "50 - 500 guests",
    image: "/images/tiyatro_live_bar.jpg",
    description: "Stunning open-air skyline view with weather-proof cabanas, ambient fairy lighting, and outdoor cocktail bar."
  },
  {
    id: "bars-nightlife",
    title: "BARS & NIGHTLIFE",
    capacity: "50 - 300 guests",
    image: "/images/locker_room.jpg",
    description: "High-energy spaces equipped with pro audio-visual gear, stage setups, and craft cocktail capabilities."
  },
  {
    id: "custom-spaces",
    title: "CUSTOM SPACES",
    capacity: "Flexible layouts",
    image: "/images/events_celebrations.jpg",
    description: "Modular, reconfigurable event floors adaptable for brand popups, trade exhibitions, and private banquets."
  }
];

export const EVENT_OCCASIONS = [
  { id: "birthdays", title: "BIRTHDAY PARTIES", desc: "Fun, memorable celebrations for all ages with custom movie treats and arcade fun.", icon: "Cake" },
  { id: "corporate", title: "CORPORATE EVENTS", desc: "Conferences, product launches, annual town halls and team celebrations.", icon: "Briefcase" },
  { id: "screenings", title: "PRIVATE SCREENINGS", desc: "Exclusive movie screenings for your private group or family gathering.", icon: "Film" },
  { id: "premieres", title: "MOVIE PREMIERES", desc: "Red carpet moments, media photo ops, and star-studded VIP experiences.", icon: "Star" },
  { id: "sports", title: "LIVE SPORTS SCREENINGS", desc: "Big games, bigger excitement with giant screens, cold brews and gourmet food.", icon: "Trophy" },
  { id: "karaoke", title: "KARAOKE NIGHTS", desc: "Sing, celebrate and create unforgettable memories in private soundproof suites.", icon: "Mic2" },
  { id: "rooftop-evt", title: "ROOFTOP EVENTS", desc: "A stunning open-sky setting for cocktail soirees and sunset gatherings.", icon: "CloudSun" },
  { id: "activations", title: "BRAND ACTIVATIONS", desc: "Create maximum experiential impact with high-footfall brand installations.", icon: "Megaphone" },
  { id: "anniversaries", title: "ANNIVERSARIES & PROPOSALS", desc: "Make life's big romantic moments extra special on the grand screen.", icon: "Heart" },
  { id: "social", title: "SOCIAL CELEBRATIONS", desc: "Kitty parties, reunions, college festivals and community celebrations.", icon: "Users" }
];

export const CLUB_TIERS = [
  {
    name: "SILVER",
    badge: "For the regular movie lover",
    fee: "Free with Registration",
    color: "from-slate-200 to-slate-400",
    bgClass: "bg-white border-purple-100",
    btnClass: "btn-outline",
    features: [
      "Priority online booking window",
      "Member-only discounted offers",
      "Special birthday ticket treat",
      "Earn 1 Cineport Point per ₹100 spent",
      "Access to standard member communications"
    ]
  },
  {
    name: "GOLD",
    badge: "More experiences, more rewards",
    fee: "₹999 / year",
    popular: true,
    color: "from-amber-400 to-amber-600",
    bgClass: "bg-amber-50/50 border-amber-300 ring-2 ring-amber-400/30",
    btnClass: "btn-primary",
    features: [
      "Priority booking + Free seat upgrades (subject to availability)",
      "10% off F&B benefits across all outlets & food hall",
      "Cineport Club Lounge access with complimentary tea/coffee",
      "Special invitations to pre-screenings and food festivals",
      "Higher points earning: 2 Points per ₹100 spent",
      "Quarterly complimentary regular popcorn"
    ]
  },
  {
    name: "PLATINUM",
    badge: "The ultimate Cineport experience",
    fee: "₹2,499 / year",
    color: "from-purple-600 to-indigo-800",
    bgClass: "bg-[#200B3F] text-white border-purple-900 shadow-xl",
    btnClass: "bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold hover:brightness-110",
    features: [
      "Priority booking + 2 complimentary movie tickets every quarter",
      "Exclusive 15% F&B privileges across all restaurants & bars",
      "Unlimited VIP Lounge access & private screening room discounts",
      "Guaranteed red carpet premiere invites & celebrity screenings",
      "Maximum points earning: 3 Points per ₹100 spent",
      "Personalised offers and dedicated concierge phone support",
      "Complimentary valet parking at all live locations"
    ]
  }
];

export const READY_MADE_NIGHTS = [
  {
    id: "movie-dinner",
    title: "MOVIE & DINNER",
    subtitle: "The perfect date night.",
    image: "/images/couple_cinema_club.jpg",
    items: ["Blockbuster in Recliner 4K", "3-Course Dinner at Eataliana", "Artisan Gelato Dessert"],
    price: "₹2,199 for two"
  },
  {
    id: "family-fun",
    title: "FAMILY FUN NIGHT",
    subtitle: "Movies, food and gaming for all ages.",
    image: "/images/hello_vr_park.jpg",
    items: ["Family Cinema Screen", "Food Hall Sharing Platter", "60 Mins Hello VR Park Passes"],
    price: "₹3,499 for four"
  },
  {
    id: "friends-night",
    title: "FRIENDS NIGHT OUT",
    subtitle: "Dinner, drinks and karaoke.",
    image: "/images/friends_night_out.jpg",
    items: ["Craft Beers at Bokata", "Mexican Cantina Feast", "2 Hours CelebU Private Karaoke"],
    price: "₹4,200 for group of four"
  },
  {
    id: "premium-night",
    title: "PREMIUM NIGHT",
    subtitle: "Fine dining, premium movie and rooftop celebrations.",
    image: "/images/tiyatro_live_bar.jpg",
    items: ["VIP Recliner Suite with Butler", "Chef's Tasting Menu at Asiana", "Reserved Table at Tiyatro Bar"],
    price: "₹5,500 for two"
  }
];

export const NEWS_STORIES = [
  {
    id: "story-1",
    category: "LAUNCHES",
    title: "Cineport Opens 5-Screen Multiplex at SVH 83 Metro",
    summary: "A new benchmark in cinema and entertainment with immersive auditoriums, a vibrant food hall and exciting new experiences.",
    date: "12 Sep 2026",
    views: "2.4K Views",
    image: "/images/cineport_exterior_hero.jpg",
    featured: true
  },
  {
    id: "story-2",
    category: "PARTNERSHIPS",
    title: "Cineport Partners with Leading Developers for 25 New Locations",
    summary: "Strategic partnerships to bring next-generation entertainment destinations across India.",
    date: "05 Sep 2026",
    views: "1.8K Views",
    image: "/images/cinema_auditorium.jpg"
  },
  {
    id: "story-3",
    category: "EXPERIENCES",
    title: "A Culinary Journey at Cineport Food Hall",
    summary: "From Indian favourites to global flavours, explore our world-class dining experiences at Cineport.",
    date: "28 Aug 2026",
    views: "1.6K Views",
    image: "/images/food_hall.jpg"
  },
  {
    id: "story-4",
    category: "EVENTS",
    title: "A Night to Remember at Cineport Live",
    summary: "Music, performances and celebrations that bring people together under one roof.",
    date: "25 Aug 2026",
    views: "1.2K Views",
    image: "/images/tiyatro_live_bar.jpg"
  },
  {
    id: "story-5",
    category: "FOOD & DRINK",
    title: "Behind the Flavours",
    summary: "Meet our chefs and explore the stories behind our signature restaurants and cafés.",
    date: "18 Aug 2026",
    views: "980 Views",
    image: "/images/dish_punjab.jpg"
  },
  {
    id: "story-6",
    category: "COMPANY UPDATES",
    title: "Cineport Club Sets New Standard in Premium Cinema",
    summary: "A closer look at how Cineport Club is redefining the movie-going experience with luxury and personalisation.",
    date: "10 Aug 2026",
    views: "1.1K Views",
    image: "/images/couple_cinema_club.jpg"
  },
  {
    id: "story-7",
    category: "IN THE MEDIA",
    title: "Cineport in the Spotlight",
    summary: "Featured in leading publications for our innovative entertainment destinations and growth plans.",
    date: "10 Aug 2026",
    views: "1.4K Views",
    image: "/images/cineport_team.jpg"
  }
];

export const LATEST_NEWS_UPDATES = [
  { date: "20 Sep 2026", text: "Cineport Launches New VR Gaming Zone at Gurugram" },
  { date: "15 Sep 2026", text: "Cineport Club Introduces Exclusive Member Benefits" },
  { date: "10 Sep 2026", text: "Red Carpet Premiere of Blockbuster Release Hosted at Cineport" },
  { date: "05 Sep 2026", text: "New F&B Concepts Now Open at Cineport Food Hall" },
  { date: "01 Sep 2026", text: "Cineport Expands Operations to Tier 2 & 3 Cities Across India" }
];

export const CAREER_ROLES = [
  {
    title: "Cinema Operations",
    desc: "Projection, auditorium management, guest services, safety and ticketing.",
    openings: 14,
    locations: ["Gurugram", "Noida", "Dehradun"]
  },
  {
    title: "Food & Beverage",
    desc: "Restaurants, cafés, bars, central kitchen, line cooks, mixologists and floor captains.",
    openings: 22,
    locations: ["Gurugram", "Noida"]
  },
  {
    title: "Events & Entertainment",
    desc: "Live events, programming, artist management, acoustic production and host coordinators.",
    openings: 8,
    locations: ["Gurugram", "Delhi NCR"]
  },
  {
    title: "Gaming & Technology",
    desc: "VR simulator operations, interactive experiences, hardware maintenance and IT infrastructure.",
    openings: 6,
    locations: ["Gurugram"]
  },
  {
    title: "Sales & Marketing",
    desc: "Brand marketing, corporate sales, brand activations, digital media and community outreach.",
    openings: 10,
    locations: ["Gurugram Corporate Office"]
  },
  {
    title: "Corporate Functions",
    desc: "Finance, legal, human resources, real estate acquisition, architecture and interior design.",
    openings: 7,
    locations: ["Gurugram Corporate Office"]
  }
];

export const PRESENCE_CITIES = [
  { name: "Delhi NCR", status: "Live & Expanding", x: 48, y: 32 },
  { name: "Jaipur", status: "Upcoming", x: 42, y: 38 },
  { name: "Lucknow", status: "Upcoming", x: 56, y: 36 },
  { name: "Bhopal", status: "Pipeline", x: 50, y: 48 },
  { name: "Ahmedabad", status: "Upcoming", x: 36, y: 50 },
  { name: "Mumbai", status: "Pipeline", x: 38, y: 62 },
  { name: "Bengaluru", status: "Pipeline", x: 47, y: 78 },
  { name: "Hyderabad", status: "Pipeline", x: 52, y: 66 },
  { name: "Chennai", status: "Pipeline", x: 55, y: 80 },
  { name: "Kolkata", status: "Pipeline", x: 74, y: 48 }
];
