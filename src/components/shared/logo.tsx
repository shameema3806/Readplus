"use client";

import Link from "next/link";

/**
 * READ PLUS icon mark — recreated from brand reference.
 *
 * Anatomy:
 *  • 3 concentric teal pointed arches (Gothic/ogival form)
 *  • Gold 4-pointed sparkle at the focal centre
 *  • 4 navy arc-waves below (open-book / ripple motif)
 */
function IconMark({ size = 60 }: { size?: number }) {
  const h = Math.round(size * 0.92);
  return (
    <svg
      viewBox="0 0 100 92"
      width={size}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Teal arches (outer → inner) ──────────────────────────── */}
      {/* Each arch is two cubic-bezier halves meeting at the apex   */}
      {/* Outer arch */}
      <path
        d="M 7 61 C 7 17, 50 3, 50 3 C 50 3, 93 17, 93 61"
        stroke="#0E7E80" strokeWidth="3.4" strokeLinecap="round"
      />
      {/* Middle arch */}
      <path
        d="M 18 61 C 18 26, 50 13, 50 13 C 50 13, 82 26, 82 61"
        stroke="#0E7E80" strokeWidth="3.4" strokeLinecap="round"
      />
      {/* Inner arch */}
      <path
        d="M 29 61 C 29 35, 50 23, 50 23 C 50 23, 71 35, 71 61"
        stroke="#0E7E80" strokeWidth="3.4" strokeLinecap="round"
      />

      {/* ── Gold 4-pointed sparkle ─────────────────────────────────*/}
      {/* Positioned at the visual centre of the arch               */}
      <path
        d="M 50 43.5
           L 52.4 48.2
           L 57.5 49.8
           L 52.4 51.4
           L 50 56
           L 47.6 51.4
           L 42.5 49.8
           L 47.6 48.2 Z"
        fill="#D4991A"
      />

      {/* ── Navy arc-waves (below arch) ────────────────────────────*/}
      {/* Control points above endpoints → gentle upward ∩-curve    */}
      <path d="M 11 66  C 30 57, 70 57, 89 66"  stroke="#1E3272" strokeWidth="3.4" strokeLinecap="round"/>
      <path d="M 13 73  C 31 64, 69 64, 87 73"  stroke="#1E3272" strokeWidth="3.4" strokeLinecap="round"/>
      <path d="M 15 80  C 32 71, 68 71, 85 80"  stroke="#1E3272" strokeWidth="3.4" strokeLinecap="round"/>
      <path d="M 17 87  C 33 78, 67 78, 83 87"  stroke="#1E3272" strokeWidth="3.4" strokeLinecap="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Public components                                              */
/* ─────────────────────────────────────────────────────────────── */

/** Compact horizontal logo — navbar */
export function LogoNavbar() {
  return (
    <Link
      href="/"
      aria-label="READ PLUS Training Institute — home"
      className="flex items-center gap-2.5 group"
    >
      <div className="group-hover:drop-shadow-[0_0_10px_rgba(14,126,128,0.35)] transition-all duration-300">
        <IconMark size={38} />
      </div>
      <div className="flex flex-col leading-none select-none">
        <span className="font-extrabold text-[18px] tracking-tight">
          <span className="text-[#1E3272]">READ</span>
          <span className="text-[#0E7E80]"> PLUS</span>
        </span>
        <span className="text-[8px] font-semibold tracking-[0.22em] text-slate-400 uppercase mt-[3px]">
          Training Institute
        </span>
      </div>
    </Link>
  );
}

/** Slightly larger horizontal logo — footer */
export function LogoFooter() {
  return (
    <div className="flex items-center gap-3">
      <IconMark size={44} />
      <div className="flex flex-col leading-none select-none">
        <span className="font-extrabold text-[20px] tracking-tight">
          <span className="text-[#1E3272]">READ</span>
          <span className="text-[#0E7E80]"> PLUS</span>
        </span>
        <span className="text-[8px] font-semibold tracking-[0.22em] text-slate-400 uppercase mt-[3px]">
          Training Institute
        </span>
      </div>
    </div>
  );
}

/** Stacked (icon above wordmark) — about page feature card */
export function LogoStacked({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ""}`}>
      <IconMark size={96} />
      <div className="text-center leading-none select-none">
        <p className="font-extrabold text-2xl tracking-tight">
          <span className="text-[#1E3272]">READ</span>
          <span className="text-[#0E7E80]"> PLUS</span>
        </p>
        <p className="text-[8.5px] font-semibold tracking-[0.22em] text-slate-400 uppercase mt-1.5">
          Training Institute
        </p>
      </div>
    </div>
  );
}
