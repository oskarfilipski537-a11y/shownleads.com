import React from 'react';
import { motion } from 'motion/react';

// Pure client brand vector logos with NO text elements
export const CLIENT_LOGOS = [
  // 1. Apex Construction & Roofing
  {
    id: 'apex',
    svg: (
      <svg viewBox="0 0 160 48" className="h-9 w-auto fill-current" aria-label="Apex">
        <path d="M22 6L40 38H4L22 6Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M22 17L31 34H13L22 17Z" fill="currentColor" />
        <path d="M52 14h6.5l8 22h-4.8l-1.8-5.2h-8.2L50 36h-4.6l6.6-22zm6.7 13.2l-2.6-7.8-2.6 7.8h5.2z" />
        <path d="M70 14h8.5c4.5 0 7.5 2.5 7.5 6.6 0 4.2-3 6.7-7.5 6.7h-4.5V36H70V14zm4 9.5h4c2.4 0 3.8-1.2 3.8-2.9 0-1.7-1.4-2.8-3.8-2.8h-4v5.7z" />
        <path d="M90 14h14.5v3.6h-10.3v5.6h9.2v3.6h-9.2v5.6h10.6V36H90V14z" />
        <path d="M109 14h4.8l4.8 7.5 4.8-7.5h4.8l-7.2 10.8 7.6 11.2h-5l-5-7.8-5 7.8h-4.9l7.4-11.2-7.3-10.8z" />
      </svg>
    ),
  },
  // 2. Sovereign Mechanical & Climate
  {
    id: 'sovereign',
    svg: (
      <svg viewBox="0 0 170 48" className="h-9 w-auto fill-current" aria-label="Sovereign">
        <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <polygon points="24,11 28,21 39,21 30,27 33,37 24,31 15,37 18,27 9,21 20,21" fill="currentColor" />
        <path d="M52 30.5c1.4 1.4 3.4 2.2 5.5 2.2 3 0 4.8-1.5 4.8-3.6 0-5-10.2-2.8-10.2-10 0-3.5 2.8-5.7 7.2-5.7 2.4 0 4.8.8 6.5 2.2l-1.8 2.8c-1.4-1.1-3.1-1.7-4.7-1.7-2.6 0-3.9 1.2-3.9 2.8 0 4.6 10.2 2.6 10.2 9.8 0 3.8-2.9 6.2-8.2 6.2-2.8 0-5.6-1-7.4-2.6l2.1-3.2z" />
        <path d="M83 13.5c6.5 0 11.2 4.9 11.2 11.5S89.5 36.5 83 36.5 71.8 31.6 71.8 25 76.5 13.5 83 13.5zm0 19.3c4.2 0 7-3.4 7-7.8s-2.8-7.8-7-7.8-7 3.4-7 7.8 2.8 7.8 7 7.8z" />
        <path d="M98 14h4.4l5.5 15.6 5.5-15.6h4.4l-7.8 22h-4.2L98 14z" />
        <path d="M123 14h13.5v3.4h-9.4v5.6h8.4v3.4h-8.4v6.2h9.8V36H123V14z" />
        <path d="M142 14h8.2c4.2 0 6.8 2.2 6.8 5.6 0 2.6-1.5 4.4-3.8 5.2l4.6 11.2h-4.6l-4-10.2h-3.2V36h-4V14zm4 8.6h3.8c2.2 0 3.4-1 3.4-2.5 0-1.5-1.2-2.5-3.4-2.5h-3.8v5z" />
      </svg>
    ),
  },
  // 3. Celtic Energy & Solar Group
  {
    id: 'celtic',
    svg: (
      <svg viewBox="0 0 160 48" className="h-9 w-auto fill-current" aria-label="Celtic">
        <path d="M22 8c8.8 0 16 7.2 16 16s-7.2 16-16 16S6 32.8 6 24 13.2 8 22 8zm0 5c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 14a10 10 0 0 1 10 10h-10V14zM22 34a10 10 0 0 1-10-10h10v10z" fill="currentColor" />
        <path d="M57 32c-4.8 0-8.5-3.6-8.5-8.8s3.7-8.8 8.5-8.8c2.6 0 5 1 6.8 2.8l-2.4 2.5c-1.2-1.2-2.6-1.8-4.4-1.8-3 0-5.1 2.3-5.1 5.3s2.1 5.3 5.1 5.3c1.8 0 3.2-.6 4.4-1.8l2.4 2.5c-1.8 1.8-4.2 2.8-6.8 2.8z" />
        <path d="M68 14.8h11.2v3.2h-7.8v5h7.2v3.2h-7.2v5.8h8v3.2H68V14.8z" />
        <path d="M84 14.8h3.5v17.2h8v3.2H84V14.8z" />
        <path d="M104 18h-4.8v-3.2h13.2V18h-4.8v17.2H104V18z" />
        <path d="M118 14.8h3.5v20.4h-3.5V14.8z" />
        <path d="M136 32c-4.8 0-8.5-3.6-8.5-8.8s3.7-8.8 8.5-8.8c2.6 0 5 1 6.8 2.8l-2.4 2.5c-1.2-1.2-2.6-1.8-4.4-1.8-3 0-5.1 2.3-5.1 5.3s2.1 5.3 5.1 5.3c1.8 0 3.2-.6 4.4-1.8l2.4 2.5c-1.8 1.8-4.2 2.8-6.8 2.8z" />
      </svg>
    ),
  },
  // 4. Vanguard Architectural Systems
  {
    id: 'vanguard',
    svg: (
      <svg viewBox="0 0 175 48" className="h-9 w-auto fill-current" aria-label="Vanguard">
        <path d="M8 36L22 8l14 28H8z" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 28L22 15l6 13H16z" fill="currentColor" />
        <path d="M48 14.5h4.2l6.2 16.4 6.2-16.4H69l-8.4 21.8h-4.2L48 14.5z" />
        <path d="M72 36.3l7-21.8h4.2l7 21.8h-4.2l-1.6-5.2h-6.6l-1.6 5.2H72zm8.8-8.8h4.6l-2.3-7.6-2.3 7.6z" />
        <path d="M95 14.5h3.8l8.2 14.2V14.5h3.6v21.8h-3.6l-8.4-14.5v14.5H95V14.5z" />
        <path d="M125 25.4h6.5v8.2c-1.8 1.8-4.5 2.8-7.5 2.8-6.2 0-10.8-4.5-10.8-11s4.6-11 10.8-11c3.2 0 5.8 1.2 7.6 3l-2.4 2.6c-1.4-1.4-3.2-2.2-5.2-2.2-4.2 0-7.2 3.2-7.2 7.6s3 7.6 7.2 7.6c1.8 0 3.4-.6 4.5-1.5v-3.7h-3.5v-3.4z" />
        <path d="M138 14.5h3.6v13.5c0 3.5 2.2 5.5 5.5 5.5s5.5-2 5.5-5.5V14.5h3.6v13.5c0 5.6-3.8 8.8-9.1 8.8s-9.1-3.2-9.1-8.8V14.5z" />
      </svg>
    ),
  },
  // 5. Emerald Civil & Groundworks (Irish client)
  {
    id: 'emerald',
    svg: (
      <svg viewBox="0 0 165 48" className="h-9 w-auto fill-current" aria-label="Emerald">
        <rect x="8" y="10" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="2.2" transform="rotate(45 21 23)" />
        <circle cx="21" cy="23" r="5" fill="currentColor" />
        <path d="M48 14.5h13.5v3.4h-9.5v5.5h8.5v3.4h-8.5v6.1h9.8v3.4H48V14.5z" />
        <path d="M66 14.5h4.2l4.8 13.8 4.8-13.8H84v21.8h-3.6v-15l-4.5 12.8h-3.4l-4.5-12.8v15H66V14.5z" />
        <path d="M89 14.5h13.5v3.4H93v5.5h8.5v3.4H93v6.1h9.8v3.4H89V14.5z" />
        <path d="M107 14.5h8.2c4.2 0 6.8 2.2 6.8 5.6 0 2.6-1.5 4.4-3.8 5.2l4.6 11h-4.6l-4-10h-3.2v10h-4V14.5zm4 8.5h3.8c2.2 0 3.4-1 3.4-2.5 0-1.5-1.2-2.5-3.4-2.5h-3.8v5z" />
        <path d="M126 36.3l6.8-21.8h4.2l6.8 21.8h-4.2l-1.5-5.2h-6.6l-1.5 5.2H126zm8.8-8.8h4.6l-2.3-7.6-2.3 7.6z" />
        <path d="M148 14.5h3.6v18.4h8.5v3.4H148V14.5z" />
      </svg>
    ),
  },
  // 6. Kestrel Commercial Electric
  {
    id: 'kestrel',
    svg: (
      <svg viewBox="0 0 160 48" className="h-9 w-auto fill-current" aria-label="Kestrel">
        <polygon points="12,8 28,8 20,22 32,22 10,40 16,24 8,24" fill="currentColor" />
        <path d="M46 14.5h3.8v9l7.5-9h4.8l-7.8 9 8.5 12.8h-4.8l-6.2-9.6-2 2.2v7.4H46V14.5z" />
        <path d="M66 14.5h13.2v3.4h-9.4v5.5h8.4v3.4h-8.4v6.1h9.8v3.4H66V14.5z" />
        <path d="M84 31.5c1.4 1.2 3.2 2 5.2 2 2.8 0 4.4-1.4 4.4-3.4 0-4.8-9.8-2.6-9.8-9.6 0-3.4 2.8-5.6 7-5.6 2.4 0 4.6.8 6.2 2.2l-1.8 2.8c-1.2-1-2.8-1.6-4.4-1.6-2.4 0-3.6 1.2-3.6 2.6 0 4.4 9.8 2.4 9.8 9.4 0 3.6-2.8 6-7.8 6-2.8 0-5.4-.9-7.2-2.5l2-3.3z" />
        <path d="M109 18h-4.8v-3.5h13.5V18h-4.8v18.3H109V18z" />
        <path d="M123 14.5h8.2c4.2 0 6.8 2.2 6.8 5.6 0 2.6-1.5 4.4-3.8 5.2l4.6 11h-4.6l-4-10h-3.2v10h-4V14.5zm4 8.5h3.8c2.2 0 3.4-1 3.4-2.5 0-1.5-1.2-2.5-3.4-2.5h-3.8v5z" />
        <path d="M142 14.5h13.2v3.4h-9.4v5.5h8.4v3.4h-8.4v6.1h9.8v3.4H142V14.5z" />
      </svg>
    ),
  },
  // 7. Summit Masonry & Stonework
  {
    id: 'summit',
    svg: (
      <svg viewBox="0 0 155 48" className="h-9 w-auto fill-current" aria-label="Summit">
        <path d="M6 34L18 14l10 16 7-10 12 14H6z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="18,14 24,24 14,24" fill="currentColor" />
        <path d="M60 31.5c1.4 1.2 3.2 2 5.2 2 2.8 0 4.4-1.4 4.4-3.4 0-4.8-9.8-2.6-9.8-9.6 0-3.4 2.8-5.6 7-5.6 2.4 0 4.6.8 6.2 2.2l-1.8 2.8c-1.2-1-2.8-1.6-4.4-1.6-2.4 0-3.6 1.2-3.6 2.6 0 4.4 9.8 2.4 9.8 9.4 0 3.6-2.8 6-7.8 6-2.8 0-5.4-.9-7.2-2.5l2-3.3z" />
        <path d="M78 14.5h3.6v13.5c0 3.5 2.2 5.5 5.5 5.5s5.5-2 5.5-5.5V14.5h3.6v13.5c0 5.6-3.8 8.8-9.1 8.8s-9.1-3.2-9.1-8.8V14.5z" />
        <path d="M100 14.5h4.2l4.8 13.8 4.8-13.8H118v21.8h-3.6v-15l-4.5 12.8h-3.4l-4.5-12.8v15H100V14.5z" />
        <path d="M123 14.5h4.2l4.8 13.8 4.8-13.8H141v21.8h-3.6v-15l-4.5 12.8h-3.4l-4.5-12.8v15H123V14.5z" />
        <path d="M146 14.5h3.6v21.8h-3.6V14.5z" />
      </svg>
    ),
  },
  // 8. Aeris Climate Engineering (Irish & US)
  {
    id: 'aeris',
    svg: (
      <svg viewBox="0 0 150 48" className="h-9 w-auto fill-current" aria-label="Aeris">
        <circle cx="22" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 24c4-7 16-7 20 0s-16 7-20 0z" fill="currentColor" />
        <path d="M46 36.3l6.8-21.8h4.2l6.8 21.8h-4.2l-1.5-5.2h-6.6l-1.5 5.2H46zm8.8-8.8h4.6l-2.3-7.6-2.3 7.6z" />
        <path d="M68 14.5h13.2v3.4h-9.4v5.5h8.4v3.4h-8.4v6.1h9.8v3.4H68V14.5z" />
        <path d="M86 14.5h8.2c4.2 0 6.8 2.2 6.8 5.6 0 2.6-1.5 4.4-3.8 5.2l4.6 11h-4.6l-4-10h-3.2v10h-4V14.5zm4 8.5h3.8c2.2 0 3.4-1 3.4-2.5 0-1.5-1.2-2.5-3.4-2.5h-3.8v5z" />
        <path d="M106 14.5h3.6v21.8h-3.6V14.5z" />
        <path d="M116 31.5c1.4 1.2 3.2 2 5.2 2 2.8 0 4.4-1.4 4.4-3.4 0-4.8-9.8-2.6-9.8-9.6 0-3.4 2.8-5.6 7-5.6 2.4 0 4.6.8 6.2 2.2l-1.8 2.8c-1.2-1-2.8-1.6-4.4-1.6-2.4 0-3.6 1.2-3.6 2.6 0 4.4 9.8 2.4 9.8 9.4 0 3.6-2.8 6-7.8 6-2.8 0-5.4-.9-7.2-2.5l2-3.3z" />
      </svg>
    ),
  },
  // 9. Cobalt Plumbing & Pipeline Infrastructure
  {
    id: 'cobalt',
    svg: (
      <svg viewBox="0 0 165 48" className="h-9 w-auto fill-current" aria-label="Cobalt">
        <rect x="8" y="10" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 17h14v14H14z" fill="currentColor" />
        <path d="M48 32c-4.8 0-8.5-3.6-8.5-8.8s3.7-8.8 8.5-8.8c2.6 0 5 1 6.8 2.8l-2.4 2.5c-1.2-1.2-2.6-1.8-4.4-1.8-3 0-5.1 2.3-5.1 5.3s2.1 5.3 5.1 5.3c1.8 0 3.2-.6 4.4-1.8l2.4 2.5c-1.8 1.8-4.2 2.8-6.8 2.8z" />
        <path d="M68 13.5c6.5 0 11.2 4.9 11.2 11.5S74.5 36.5 68 36.5 56.8 31.6 56.8 25 61.5 13.5 68 13.5zm0 19.3c4.2 0 7-3.4 7-7.8s-2.8-7.8-7-7.8-7 3.4-7 7.8 2.8 7.8 7 7.8z" />
        <path d="M84 14.5h7.8c3.8 0 6.2 1.8 6.2 4.8 0 1.8-1 3.2-2.6 4 2.2.8 3.4 2.4 3.4 4.5 0 3.4-2.6 5-6.8 5H84V14.5zm3.8 7.8h3.8c1.8 0 2.8-.8 2.8-2s-1-2-2.8-2h-3.8v4zm0 7h4c1.8 0 3-.9 3-2.2 0-1.4-1.2-2.2-3-2.2h-4v4.4z" />
        <path d="M104 36.3l6.8-21.8h4.2l6.8 21.8h-4.2l-1.5-5.2h-6.6l-1.5 5.2H104zm8.8-8.8h4.6l-2.3-7.6-2.3 7.6z" />
        <path d="M126 14.5h3.6v18.4h8.5v3.4H126V14.5z" />
        <path d="M145 18h-4.8v-3.5h13.5V18h-4.8v18.3H145V18z" />
      </svg>
    ),
  },
  // 10. Orion Outdoor & Estate Construction
  {
    id: 'orion',
    svg: (
      <svg viewBox="0 0 150 48" className="h-9 w-auto fill-current" aria-label="Orion">
        <circle cx="22" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="15" cy="18" r="2.5" fill="currentColor" />
        <circle cx="22" cy="24" r="3" fill="currentColor" />
        <circle cx="29" cy="30" r="2.5" fill="currentColor" />
        <path d="M48 13.5c6.5 0 11.2 4.9 11.2 11.5S54.5 36.5 48 36.5 36.8 31.6 36.8 25 41.5 13.5 48 13.5zm0 19.3c4.2 0 7-3.4 7-7.8s-2.8-7.8-7-7.8-7 3.4-7 7.8 2.8 7.8 7 7.8z" />
        <path d="M64 14.5h8.2c4.2 0 6.8 2.2 6.8 5.6 0 2.6-1.5 4.4-3.8 5.2l4.6 11h-4.6l-4-10H68v10h-4V14.5zm4 8.5h3.8c2.2 0 3.4-1 3.4-2.5 0-1.5-1.2-2.5-3.4-2.5H68v5z" />
        <path d="M83 14.5h3.6v21.8H83V14.5z" />
        <path d="M99 13.5c6.5 0 11.2 4.9 11.2 11.5S105.5 36.5 99 36.5 87.8 31.6 87.8 25 92.5 13.5 99 13.5zm0 19.3c4.2 0 7-3.4 7-7.8s-2.8-7.8-7-7.8-7 3.4-7 7.8 2.8 7.8 7 7.8z" />
        <path d="M115 14.5h3.8l8.2 14.2V14.5h3.6v21.8H127l-8.4-14.5v14.5h-3.6V14.5z" />
      </svg>
    ),
  },
];

export const ClientLogos: React.FC = () => {
  return (
    <section
      id="client-logos"
      aria-label="Client Brand Logos"
      className="relative py-12 sm:py-16 bg-[#000000] border-y border-[#1a1a1a] overflow-hidden"
    >
      {/* Left/Right Edge Fade Masks for Seamless Endless Animation */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

      {/* Infinite Seamless Scrolling Track - Hardware Composited on GPU */}
      <div className="flex select-none overflow-hidden">
        <div className="animate-marquee items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
          {/* First loop of client logos */}
          {CLIENT_LOGOS.map((client) => (
            <div
              key={`logo-1-${client.id}`}
              className="text-[#fffdf9]/45 hover:text-[#fffdf9] transition-colors duration-300 shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 filter drop-shadow-[0_0_12px_rgba(255,253,249,0.06)]"
            >
              {client.svg}
            </div>
          ))}

          {/* Duplicated loop for seamless infinite marquee loop */}
          {CLIENT_LOGOS.map((client) => (
            <div
              key={`logo-2-${client.id}`}
              className="text-[#fffdf9]/45 hover:text-[#fffdf9] transition-colors duration-300 shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 filter drop-shadow-[0_0_12px_rgba(255,253,249,0.06)]"
            >
              {client.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
