import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Logo component using the official Cineport Cinemas SVG logo.
 * - light={true}  → white logo (for dark/coloured backgrounds like footer, hero)
 * - light={false} → dark logo (for light backgrounds like navbar) via CSS inversion
 */
export default function Logo({ className = "h-10", light = false }) {
  return (
    <Link to="/" className="inline-flex items-center select-none" aria-label="Cineport Cinemas – Home">
      <img
        src="/logo.svg"
        alt="Cineport Cinemas"
        className={`${className} w-auto object-contain transition-all duration-200 ${
          light
            ? ''                                           // white logo on dark bg — use as-is
            : 'brightness-0 saturate-100 invert-[20%] hue-rotate-[240deg]'  // dark purple tint for light bg
        }`}
        style={
          light
            ? {}
            : { filter: 'brightness(0) saturate(100%) invert(13%) sepia(40%) saturate(800%) hue-rotate(240deg) brightness(0.8)' }
        }
      />
    </Link>
  );
}
