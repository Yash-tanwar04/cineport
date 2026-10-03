import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Modals
import BookingModal from './components/BookingModal';
import SearchModal from './components/SearchModal';
import SignInModal from './components/SignInModal';

// 13 Pages matching PDF
import Home from './pages/Home';
import Cinemas from './pages/Cinemas';
import Experiences from './pages/Experiences';
import FoodDrink from './pages/FoodDrink';
import Events from './pages/Events';
import PartnerWithUs from './pages/PartnerWithUs';
import Investors from './pages/Investors';
import About from './pages/About';
import Club from './pages/Club';
import NightBuilder from './pages/NightBuilder';
import Careers from './pages/Careers';
import Stories from './pages/Stories';
import Contact from './pages/Contact';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8FD] text-[#1C0B38]">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenSignIn={() => setSignInModalOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={() => setBookingModalOpen(true)} />} />
            <Route path="/cinemas" element={<Cinemas onOpenBooking={() => setBookingModalOpen(true)} />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/food-drink" element={<FoodDrink />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/about" element={<About />} />
            <Route path="/club" element={<Club onOpenSignIn={() => setSignInModalOpen(true)} />} />
            <Route path="/night-builder" element={<NightBuilder />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/news" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback */}
            <Route path="*" element={<Home onOpenBooking={() => setBookingModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
        />
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
        <SignInModal
          isOpen={signInModalOpen}
          onClose={() => setSignInModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
