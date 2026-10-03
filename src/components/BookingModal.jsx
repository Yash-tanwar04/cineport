import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Film, CheckCircle2, Ticket, Sparkles } from 'lucide-react';
import { CINEMAS_DATA } from '../data/cineportData';

export default function BookingModal({ isOpen, onClose }) {
  const [selectedCinema, setSelectedCinema] = useState(CINEMAS_DATA[0].id);
  const [selectedMovie, setSelectedMovie] = useState("Devara: Part 1");
  const [selectedDate, setSelectedDate] = useState("Today, 3 Oct");
  const [selectedTime, setSelectedTime] = useState("05:00 PM");
  const [selectedSeats, setSelectedSeats] = useState(["E7", "E8"]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen) return null;

  const currentCinema = CINEMAS_DATA.find(c => c.id === selectedCinema) || CINEMAS_DATA[0];
  const ticketPrice = 380;
  const totalPrice = selectedSeats.length * ticketPrice;

  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length >= 6) {
        alert("You can select up to 6 seats per booking.");
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#200B3F] to-[#36136B] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <Ticket className="w-5 h-5 text-[#FF8A00]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg">Book Movie Tickets</h3>
              <p className="text-xs text-purple-200">Reserve your seats with instant confirmation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-purple-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF8A00] font-bold">Booking Confirmed</span>
              <h4 className="font-heading font-bold text-2xl text-[#1C0B38] mt-1">Enjoy the Experience!</h4>
              <p className="text-sm text-gray-500 mt-1">Your e-tickets have been issued. Present this pass at the Cineport box office.</p>
            </div>

            {/* Virtual Ticket Card */}
            <div className="bg-[#FAF7FD] border border-purple-200 rounded-2xl p-5 text-left relative overflow-hidden">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#FF8A00]/10 rounded-full blur-xl" />
              <div className="flex justify-between items-start border-b border-purple-100 pb-3 mb-3">
                <div>
                  <h5 className="font-bold text-[#1C0B38] text-base">{selectedMovie}</h5>
                  <p className="text-xs text-purple-600 font-medium">{currentCinema.name}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">Pass Code</span>
                  <div className="font-mono font-bold text-sm text-[#FF8A00]">CP-{Math.floor(100000 + Math.random() * 900000)}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                <div>
                  <span className="text-gray-400 block">Date</span>
                  <span className="font-semibold text-gray-800">{selectedDate}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Showtime</span>
                  <span className="font-semibold text-gray-800">{selectedTime}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Seats</span>
                  <span className="font-semibold text-[#1C0B38] bg-purple-100 px-1.5 py-0.5 rounded">
                    {selectedSeats.join(', ')}
                  </span>
                </div>
              </div>

              <div className="border-t border-purple-100 mt-3 pt-3 flex justify-between items-center text-xs">
                <span className="text-gray-500">Total Paid (incl. taxes):</span>
                <span className="font-bold text-sm text-[#1C0B38]">₹{totalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary w-full py-3"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Selection Screen */
          <div className="p-6 space-y-5 max-h-[78vh] overflow-y-auto">
            
            {/* Step 1: Select Cinema */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                1. Select Cinema Destination
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CINEMAS_DATA.map((cinema) => (
                  <button
                    key={cinema.id}
                    onClick={() => setSelectedCinema(cinema.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${
                      selectedCinema === cinema.id
                        ? 'border-[#FF8A00] bg-amber-50/40 shadow-xs'
                        : 'border-purple-100 hover:border-purple-300 bg-white'
                    }`}
                  >
                    <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${selectedCinema === cinema.id ? 'text-[#FF8A00]' : 'text-purple-400'}`} />
                    <div>
                      <div className="font-bold text-[#1C0B38]">{cinema.name}</div>
                      <div className="text-gray-500 text-[11px]">{cinema.location} • {cinema.screens}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Movie & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  2. Select Movie
                </label>
                <select
                  value={selectedMovie}
                  onChange={(e) => setSelectedMovie(e.target.value)}
                  className="w-full bg-[#FAF8FD] border border-purple-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#1C0B38] focus:outline-none focus:border-[#FF8A00]"
                >
                  <option value="Devara: Part 1">Devara: Part 1 (4K Atmos)</option>
                  <option value="Mufasa: The Lion King">Mufasa: The Lion King (3D IMAX)</option>
                  <option value="Joker: Folie à Deux">Joker: Folie à Deux (Dolby)</option>
                  <option value="Stree 2: Sarkate Ka Aatank">Stree 2 (Hindi)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  3. Select Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#FAF8FD] border border-purple-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#1C0B38] focus:outline-none focus:border-[#FF8A00]"
                >
                  <option value="Today, 3 Oct">Today, 3 Oct</option>
                  <option value="Tomorrow, 4 Oct">Tomorrow, 4 Oct</option>
                  <option value="Saturday, 5 Oct">Saturday, 5 Oct</option>
                  <option value="Sunday, 6 Oct">Sunday, 6 Oct</option>
                </select>
              </div>
            </div>

            {/* Step 3: Showtime */}
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                4. Select Showtime
              </label>
              <div className="flex flex-wrap gap-2">
                {["10:30 AM", "01:45 PM", "05:00 PM", "08:30 PM", "11:15 PM"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTime === time
                        ? 'bg-[#1C0B38] text-white border-[#1C0B38] shadow-sm'
                        : 'bg-white border-purple-100 text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Seat Picker Preview */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  5. Choose Seats ({selectedSeats.length} selected)
                </label>
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-gray-200 inline-block"></span> Available</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-[#FF8A00] inline-block"></span> Selected</span>
                </div>
              </div>

              {/* Curved Screen Indicator */}
              <div className="w-4/5 mx-auto h-2 bg-gradient-to-r from-purple-200 via-[#FF8A00]/50 to-purple-200 rounded-full mb-3 shadow-xs text-center">
                <span className="text-[9px] uppercase tracking-widest text-purple-400 font-bold block -mt-4">
                  Curved Silver Screen
                </span>
              </div>

              {/* Grid of Seats */}
              <div className="space-y-1.5 py-2 px-1 bg-[#FAF8FD] rounded-2xl border border-purple-100">
                {rows.slice(0, 5).map((row) => (
                  <div key={row} className="flex items-center justify-center gap-1 sm:gap-2">
                    <span className="text-[10px] font-bold text-gray-400 w-3">{row}</span>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                      const seatKey = `${row}${num}`;
                      const isSelected = selectedSeats.includes(seatKey);
                      return (
                        <button
                          key={seatKey}
                          onClick={() => toggleSeat(seatKey)}
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[10px] font-medium transition-all ${
                            isSelected
                              ? 'bg-[#FF8A00] text-white shadow-xs scale-105'
                              : 'bg-white border border-purple-100 hover:border-purple-300 text-gray-700'
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Summary & CTA */}
            <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">Total Amount:</span>
                <div className="font-heading font-bold text-xl text-[#1C0B38]">
                  ₹{totalPrice} <span className="text-xs font-normal text-gray-400">({selectedSeats.length} seats)</span>
                </div>
              </div>
              <button
                onClick={handleConfirm}
                className="btn-primary py-2.5 px-6 text-sm"
              >
                Confirm & Pay ₹{totalPrice}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
