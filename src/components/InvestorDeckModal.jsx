import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Building2, Mail, User, Phone, Download } from 'lucide-react';

export default function InvestorDeckModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firm: '',
    investorType: 'Institutional Fund / Family Office'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-purple-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1C0838] to-[#341169] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-purple-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-[#FF8A00]" />
            <span className="text-xs uppercase tracking-widest text-[#FF8A00] font-bold">Confidential</span>
          </div>
          <h3 className="font-heading font-bold text-2xl">
            Request Investor Deck
          </h3>
          <p className="text-xs text-purple-200 mt-1">
            Institutional thesis, unit economics, ₹250 Cr deployment plan and pipeline assets.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#1C0B38]">
                Deck Access Approved
              </h4>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Thank you, {formData.name}. The Cineport Investor Presentation & Financial Model has been transmitted to <span className="font-semibold text-purple-900">{formData.email}</span>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-primary py-2.5 px-6 text-xs flex items-center justify-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Executive PDF Summary</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Rahul Singhal"
                  className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@fund.com"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Institution / Fund Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firm}
                  onChange={(e) => setFormData({...formData, firm: e.target.value})}
                  placeholder="e.g. Apex Horizon Capital / Family Office"
                  className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Investor Classification
                </label>
                <select
                  value={formData.investorType}
                  onChange={(e) => setFormData({...formData, investorType: e.target.value})}
                  className="w-full bg-[#FAF7FD] border border-purple-100 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#FF8A00]"
                >
                  <option value="Institutional Fund / PE">Institutional Fund / Private Equity</option>
                  <option value="Family Office / HNI">Family Office / Ultra HNI</option>
                  <option value="Real Estate Developer / Mall Owner">Real Estate Developer / Mall Owner</option>
                  <option value="Investment Banking / Strategic Advisory">Investment Banking / Advisory</option>
                </select>
              </div>

              <p className="text-[11px] text-gray-400">
                Information provided will remain strictly confidential under standard institutional protocol.
              </p>

              <button
                type="submit"
                className="btn-primary w-full py-2.5 text-xs font-bold"
              >
                Request Confidential Presentation & Deck
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
