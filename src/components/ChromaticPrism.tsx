import React from 'react';

interface ChromaticPrismProps {
  className?: string;
  position?: 'left' | 'right' | 'center';
}

export const ChromaticPrism: React.FC<ChromaticPrismProps> = ({
  className = '',
  position = 'left',
}) => {
  if (position === 'left') {
    return (
      <div
        aria-hidden="true"
        className={`relative select-none pointer-events-none flex flex-col items-start ${className}`}
      >
        {/* Soft atmospheric ambient glow */}
        <div
          className="absolute -top-12 -left-12 w-[340px] h-[340px] rounded-full pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(42, 127, 255, 0.14) 0%, rgba(42, 255, 42, 0.08) 45%, transparent 70%)',
          }}
        />

        {/* Telemetry HUD Badge (Top of Left Flank) */}
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-[#141414]/90 border border-[#403f3f]/80 backdrop-blur-sm text-[10px] font-display uppercase tracking-[0.1em] text-[#6f879c] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] animate-pulse" />
          <span className="text-[#fffdf9]">DUBLIN DISPATCH</span>
          <span className="text-[#6f879c]/60">•</span>
          <span>53.3° N // SPEED: &lt; 3M</span>
        </div>

        {/* Left-Side Geometric Prism Feature */}
        <svg
          viewBox="0 0 340 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[340px] h-auto overflow-visible transform-gpu"
        >
          <defs>
            <linearGradient id="prism-left-facet-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#495764" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#101010" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="prism-left-facet-left" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#101010" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#495764" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="prism-left-facet-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#101010" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="prism-left-beam-cyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a7fff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#2a7fff" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="prism-left-beam-lime" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2aff2a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2aff2a" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Caustic Refraction Light Wings pointing outward/downward */}
          <g opacity="0.65">
            <path d="M 120 160 L 0 260 L 60 330 Z" fill="url(#prism-left-beam-cyan)" />
            <path d="M 150 190 L 40 370 L 140 360 Z" fill="url(#prism-left-beam-lime)" />
          </g>

          {/* CUBE 1 (Upper Left Satellite) */}
          <g transform="translate(40, 20)">
            <path d="M 40 0 L 80 23 L 40 46 L 0 23 Z" fill="url(#prism-left-facet-top)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 0 23 L 40 46 L 40 92 L 0 69 Z" fill="url(#prism-left-facet-left)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 40 46 L 80 23 L 80 69 L 40 92 Z" fill="url(#prism-left-facet-right)" stroke="#403f3f" strokeWidth="1" />
            <path d="M -1 22 L 39 45 L 39 91" stroke="#2a7fff" strokeWidth="1.5" strokeOpacity="0.85" />
            <path d="M 41 47 L 81 24" stroke="#2aff2a" strokeWidth="1.5" strokeOpacity="0.85" />
          </g>

          {/* CUBE 2 (Anchor Center Cube - Largest) */}
          <g transform="translate(100, 100)">
            {/* Top Specular Face */}
            <path d="M 75 0 L 150 43 L 75 86 L 0 43 Z" fill="url(#prism-left-facet-top)" stroke="#fffdf9" strokeWidth="1" strokeOpacity="0.75" />
            {/* Left Face */}
            <path d="M 0 43 L 75 86 L 75 172 L 0 129 Z" fill="url(#prism-left-facet-left)" stroke="#403f3f" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 75 86 L 150 43 L 150 129 L 75 172 Z" fill="url(#prism-left-facet-right)" stroke="#403f3f" strokeWidth="1" />

            {/* Chromatic Edge Offsets */}
            <path d="M -2 41 L 73 84 L 73 170" stroke="#2a7fff" strokeWidth="1.8" strokeOpacity="0.9" />
            <path d="M 77 88 L 152 45 L 152 131" stroke="#2aff2a" strokeWidth="1.8" strokeOpacity="0.85" />
            <path d="M 75 -2 L 150 41 L 75 84 L 0 41 Z" stroke="#ff2a2a" strokeWidth="1.2" strokeOpacity="0.5" />

            {/* Specular Vertex Spot */}
            <circle cx="75" cy="86" r="2.5" fill="#fffdf9" />
            <line x1="75" y1="0" x2="75" y2="86" stroke="#fffdf9" strokeWidth="1" strokeOpacity="0.7" />
          </g>

          {/* CUBE 3 (Lower Flank Accent) */}
          <g transform="translate(20, 190)">
            <path d="M 35 0 L 70 20 L 35 40 L 0 20 Z" fill="url(#prism-left-facet-top)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 0 20 L 35 40 L 35 80 L 0 60 Z" fill="url(#prism-left-facet-left)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 35 40 L 70 20 L 70 60 L 35 80 Z" fill="url(#prism-left-facet-right)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 35 40 L 70 20" stroke="#2a7fff" strokeWidth="1.5" strokeOpacity="0.8" />
          </g>

          {/* Optical Framing Crosshairs & Reticle */}
          <g stroke="#403f3f" strokeWidth="1" strokeDasharray="3 3">
            <line x1="15" y1="140" x2="65" y2="140" />
            <line x1="40" y1="115" x2="40" y2="165" />
            <line x1="230" y1="280" x2="290" y2="280" />
            <line x1="260" y1="250" x2="260" y2="310" />
          </g>

          {/* Metric Coordinates */}
          <text x="15" y="320" fill="#6f879c" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            [NODE: 01 // DISPATCH ACTIVE]
          </text>
        </svg>
      </div>
    );
  }

  if (position === 'right') {
    return (
      <div
        aria-hidden="true"
        className={`relative select-none pointer-events-none flex flex-col items-end ${className}`}
      >
        {/* Soft atmospheric ambient glow */}
        <div
          className="absolute -top-12 -right-12 w-[340px] h-[340px] rounded-full pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 42, 42, 0.12) 0%, rgba(42, 127, 255, 0.08) 45%, transparent 70%)',
          }}
        />

        {/* Telemetry HUD Badge (Top of Right Flank) */}
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-[#141414]/90 border border-[#403f3f]/80 backdrop-blur-sm text-[10px] font-display uppercase tracking-[0.1em] text-[#6f879c] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a7fff] animate-pulse" />
          <span className="text-[#fffdf9]">US GROWTH CORRIDOR</span>
          <span className="text-[#6f879c]/60">•</span>
          <span>40.7° N // RETAINER: $0</span>
        </div>

        {/* Right-Side Geometric Prism Feature */}
        <svg
          viewBox="0 0 340 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[340px] h-auto overflow-visible transform-gpu"
        >
          <defs>
            <linearGradient id="prism-right-facet-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#495764" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#101010" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="prism-right-facet-left" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#101010" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#495764" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="prism-right-facet-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#101010" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="prism-right-beam-red" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff2a2a" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ff2a2a" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="prism-right-beam-cyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a7fff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#2a7fff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Caustic Refraction Light Wings pointing outward/rightward */}
          <g opacity="0.65">
            <path d="M 220 160 L 340 260 L 280 330 Z" fill="url(#prism-right-beam-red)" />
            <path d="M 190 190 L 300 370 L 200 360 Z" fill="url(#prism-right-beam-cyan)" />
          </g>

          {/* CUBE 1 (Upper Right Satellite) */}
          <g transform="translate(220, 20)">
            <path d="M 40 0 L 80 23 L 40 46 L 0 23 Z" fill="url(#prism-right-facet-top)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 0 23 L 40 46 L 40 92 L 0 69 Z" fill="url(#prism-right-facet-left)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 40 46 L 80 23 L 80 69 L 40 92 Z" fill="url(#prism-right-facet-right)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 41 47 L 81 24" stroke="#ff2a2a" strokeWidth="1.5" strokeOpacity="0.85" />
            <path d="M -1 22 L 39 45 L 39 91" stroke="#2a7fff" strokeWidth="1.5" strokeOpacity="0.85" />
          </g>

          {/* CUBE 2 (Anchor Center Cube - Largest) */}
          <g transform="translate(90, 100)">
            {/* Top Specular Face */}
            <path d="M 75 0 L 150 43 L 75 86 L 0 43 Z" fill="url(#prism-right-facet-top)" stroke="#fffdf9" strokeWidth="1" strokeOpacity="0.75" />
            {/* Left Face */}
            <path d="M 0 43 L 75 86 L 75 172 L 0 129 Z" fill="url(#prism-right-facet-left)" stroke="#403f3f" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 75 86 L 150 43 L 150 129 L 75 172 Z" fill="url(#prism-right-facet-right)" stroke="#403f3f" strokeWidth="1" />

            {/* Chromatic Edge Offsets */}
            <path d="M 77 88 L 152 45 L 152 131" stroke="#ff2a2a" strokeWidth="1.8" strokeOpacity="0.9" />
            <path d="M -2 41 L 73 84 L 73 170" stroke="#2a7fff" strokeWidth="1.8" strokeOpacity="0.85" />
            <path d="M 75 -2 L 150 41 L 75 84 L 0 41 Z" stroke="#2aff2a" strokeWidth="1.2" strokeOpacity="0.5" />

            {/* Specular Vertex Spot */}
            <circle cx="75" cy="86" r="2.5" fill="#fffdf9" />
            <line x1="75" y1="0" x2="75" y2="86" stroke="#fffdf9" strokeWidth="1" strokeOpacity="0.7" />
          </g>

          {/* CUBE 3 (Lower Flank Accent) */}
          <g transform="translate(235, 190)">
            <path d="M 35 0 L 70 20 L 35 40 L 0 20 Z" fill="url(#prism-right-facet-top)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 0 20 L 35 40 L 35 80 L 0 60 Z" fill="url(#prism-right-facet-left)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 35 40 L 70 20 L 70 60 L 35 80 Z" fill="url(#prism-right-facet-right)" stroke="#403f3f" strokeWidth="1" />
            <path d="M 0 20 L 35 40" stroke="#ff2a2a" strokeWidth="1.5" strokeOpacity="0.8" />
          </g>

          {/* Optical Framing Crosshairs & Reticle */}
          <g stroke="#403f3f" strokeWidth="1" strokeDasharray="3 3">
            <line x1="275" y1="140" x2="325" y2="140" />
            <line x1="300" y1="115" x2="300" y2="165" />
            <line x1="50" y1="280" x2="110" y2="280" />
            <line x1="80" y1="250" x2="80" y2="310" />
          </g>

          {/* Metric Coordinates */}
          <text x="180" y="320" fill="#6f879c" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            [NODE: 02 // 100% SHOWN BASIS]
          </text>
        </svg>
      </div>
    );
  }

  // Fallback if ever called without left/right
  return null;
};
