"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light" | "blue";
  className?: string;
}

export default function Logo({ variant = "blue", className = "" }: LogoProps) {
  // Color determination: #035df7 for blue variant, white for light, slate-900 for dark
  const colorHex =
    variant === "light"
      ? "#FFFFFF"
      : variant === "dark"
      ? "#0F172A"
      : "#035DF7";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 py-0.5 group transition-transform active:scale-95 ${className}`}
      aria-label="Dotbey Home"
    >
      {/* Precision Vector SVG Logo in #035DF7 */}
      <svg
        width="130"
        height="32"
        viewBox="0 0 130 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 sm:h-8 w-auto transition-colors duration-200"
      >
        {/* Dotbey Monogram Icon Mark */}
        <g fill={colorHex}>
          {/* Main Left D-Quadrant Arc */}
          <path d="M 12 2 A 14 14 0 0 0 12 30 L 12 16 Z" />
          {/* Top Right Quarter Circle */}
          <path d="M 14 2 L 14 14 A 2 2 0 0 0 16 16 L 28 16 A 14 14 0 0 0 14 2 Z" />
          {/* Bottom Right Quarter Circle */}
          <path d="M 14 18 L 14 30 A 14 14 0 0 0 28 16 L 16 16 A 2 2 0 0 0 14 18 Z" />
          {/* Center Dot negative space hole */}
          <circle cx="13" cy="16" r="2.5" fill={variant === "light" ? "#0052FF" : "#FFFFFF"} />
        </g>

        {/* Geometric 'dotbey' Text Logo */}
        <text
          x="34"
          y="23"
          fill={colorHex}
          fontSize="22"
          fontWeight="800"
          fontFamily="'Satoshi', system-ui, -apple-system, sans-serif"
          letterSpacing="-0.04em"
        >
          dotbey
        </text>
      </svg>
    </Link>
  );
}
