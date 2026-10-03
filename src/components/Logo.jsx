import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Logo component using the official Cineport Cinemas SVG logo.
 * - light={true}  → /logo.svg      (white + orange, for dark backgrounds: footer, hero overlays)
 * - light={false} → /logo-dark.svg (dark purple + orange, for light backgrounds: navbar)
 */
export default function Logo({ className = "h-10", light = false }) {
  return (
    <Link to="/" className="inline-flex items-center select-none" aria-label="Cineport Cinemas – Home">
      <img
        src={light ? '/logo.svg' : '/logo-dark.svg'}
        alt="Cineport Cinemas"
        className={`${className} w-auto object-contain`}
      />
    </Link>
  );
}
