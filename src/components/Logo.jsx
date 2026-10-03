import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "h-8", light = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2 group tracking-tight select-none">
      <div className="flex items-center">
        {/* Cineport stylized typography with star accent */}
        <span className={`font-heading font-black text-2xl tracking-tight transition-colors ${
          light ? 'text-white' : 'text-[#1C0B38]'
        }`}>
          cine<span className="relative inline-block text-[#FF8A00]">
            p
            <span className="absolute -top-1.5 -right-1 text-[#FF8A00] animate-pulse">✦</span>
          </span>ort
        </span>
      </div>
    </Link>
  );
}
