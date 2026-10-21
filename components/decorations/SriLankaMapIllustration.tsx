'use client';

import React from 'react';

interface SriLankaMapIllustrationProps {
  className?: string;
  size?: number | string;
  color?: string;
  opacity?: number;
  position?: 'left' | 'right' | 'center';
  showAncientSites?: boolean;
}

/**
 * SriLankaMapIllustration
 * Elegant Sri Lankan geographical island map and contour line art for dark-colored heritage sections.
 * Displays the iconic teardrop island silhouette, topographic elevation contours,
 * ancient kingdom heritage nodes, maritime navigation compass, and celestial coordinate lines.
 */
export default function SriLankaMapIllustration({
  className = '',
  size = 520,
  color = '#DFC18A',
  opacity = 0.25,
  position = 'left',
  showAncientSites = true,
}: SriLankaMapIllustrationProps) {

  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
    opacity,
    ...(position === 'left' && {
      left: '-25px',
      maskImage: 'linear-gradient(to right, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
      WebkitMaskImage: 'linear-gradient(to right, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
    }),
    ...(position === 'right' && {
      right: '-25px',
      maskImage: 'linear-gradient(to left, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
      WebkitMaskImage: 'linear-gradient(to left, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
    }),
    ...(position === 'center' && {
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maskImage: 'radial-gradient(circle, black 65%, transparent 92%)',
      WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 92%)',
    }),
  };

  return (
    <div
      className={`heritage-map-container animate-map-float ${className}`}
      style={positionStyles}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={Number(size) * 1.3}
        viewBox="0 0 450 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          filter: 'drop-shadow(0 0 16px rgba(201, 166, 107, 0.2))',
        }}
      >
        <defs>
          <linearGradient id="mapGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="50%" stopColor={color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
          <radialGradient id="compassGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Background Grid & Navigation Lat/Long Coordinates ── */}
        <g stroke={color} strokeWidth="0.5" strokeDasharray="4 6" opacity="0.6">
          <line x1="40" y1="120" x2="410" y2="120" />
          <line x1="40" y1="220" x2="410" y2="220" />
          <line x1="40" y1="320" x2="410" y2="320" />
          <line x1="40" y1="420" x2="410" y2="420" />
          <line x1="40" y1="520" x2="410" y2="520" />

          <line x1="100" y1="40" x2="100" y2="560" />
          <line x1="180" y1="40" x2="180" y2="560" />
          <line x1="260" y1="40" x2="260" y2="560" />
          <line x1="340" y1="40" x2="340" y2="560" />
        </g>

        {/* Coordinate Text Labels */}
        <g fill={color} opacity="0.5" fontSize="8" fontFamily="monospace">
          <text x="45" y="115">8° 00' N</text>
          <text x="45" y="315">7° 00' N</text>
          <text x="45" y="515">6° 00' N</text>
          <text x="185" y="570">80° 30' E</text>
          <text x="265" y="570">81° 00' E</text>
        </g>

        {/* ── Ancient Maritime Compass Rose (Top Right) ── */}
        <g transform="translate(340, 110)">
          <circle cx="0" cy="0" r="42" fill="url(#compassGlow)" />
          <circle cx="0" cy="0" r="38" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" />
          <circle cx="0" cy="0" r="32" stroke={color} strokeWidth="1" />
          <circle cx="0" cy="0" r="16" stroke={color} strokeWidth="0.6" />
          {/* Compass Points */}
          <path d="M 0 -34 L 5 -12 L 0 0 L -5 -12 Z" fill={color} opacity="0.8" />
          <path d="M 0 34 L 5 12 L 0 0 L -5 12 Z" fill={color} opacity="0.5" />
          <path d="M -34 0 L -12 -5 L 0 0 L -12 5 Z" fill={color} opacity="0.5" />
          <path d="M 34 0 L 12 -5 L 0 0 L 12 5 Z" fill={color} opacity="0.5" />
          {/* Diagonal Points */}
          <path d="M 22 -22 L 8 -6 L 0 0 L 6 -8 Z" fill={color} opacity="0.35" />
          <path d="M -22 -22 L -8 -6 L 0 0 L -6 -8 Z" fill={color} opacity="0.35" />
          <path d="M 22 22 L 8 6 L 0 0 L 6 8 Z" fill={color} opacity="0.35" />
          <path d="M -22 22 L -8 6 L 0 0 L -6 8 Z" fill={color} opacity="0.35" />
          <text x="-4" y="-38" fill={color} fontSize="9" fontWeight="bold">N</text>
        </g>

        {/* ── Main Sri Lanka Coastline Contour (Accurate Island Silhouette) ── */}
        <path
          d="
            M 195 50
            C 202 54, 212 60, 215 72
            C 218 84, 206 95, 208 108
            C 210 120, 225 128, 235 142
            C 245 156, 255 172, 260 195
            C 265 218, 268 245, 275 275
            C 282 305, 290 335, 288 368
            C 286 400, 276 430, 268 455
            C 260 480, 245 502, 228 522
            C 215 536, 198 548, 175 550
            C 152 552, 138 540, 126 525
            C 114 510, 110 488, 108 465
            C 106 442, 112 418, 115 390
            C 118 362, 112 335, 110 305
            C 108 275, 105 245, 112 215
            C 118 185, 132 160, 142 135
            C 152 110, 160 88, 172 70
            C 180 58, 188 48, 195 50
            Z
          "
          stroke={color}
          strokeWidth="1.8"
          fill="url(#mapGlowGrad)"
          strokeLinejoin="round"
        />

        {/* Secondary Shoreline Ripple / Wave Contours */}
        <path
          d="
            M 198 42
            C 208 48, 220 56, 224 70
            C 228 85, 214 98, 216 112
            C 219 125, 236 135, 246 150
            C 257 166, 268 184, 273 208
            C 278 232, 281 260, 289 292
            C 297 324, 304 356, 301 390
            C 298 425, 287 458, 278 484
            C 269 510, 252 534, 233 556
            C 218 572, 198 584, 172 585
            C 146 586, 128 572, 114 555
            C 100 538, 96 514, 94 489
            C 92 464, 98 438, 101 408
            C 104 378, 98 349, 96 317
            C 94 285, 91 253, 99 221
            C 106 189, 122 162, 133 135
            C 144 108, 153 84, 166 64
            C 176 50, 186 40, 198 42
            Z
          "
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="5 4"
          fill="none"
          opacity="0.45"
        />

        {/* Jaffna Peninsula and Northern Islands Detail */}
        <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15">
          {/* Jaffna Peninsula */}
          <path d="M 180 32 C 190 26, 205 28, 210 38 C 212 45, 204 54, 195 56 C 186 58, 175 48, 180 32 Z" />
          {/* Delft & Mannar Islands chain */}
          <path d="M 152 48 Q 160 52 155 58 Q 148 56 152 48 Z" strokeWidth="0.8" />
          <path d="M 136 68 Q 146 72 142 80 Q 132 76 136 68 Z" strokeWidth="0.8" />
        </g>

        {/* ── Topographic Elevation Contours (Central Hill Country & Sacred Peaks) ── */}
        <g stroke={color} strokeWidth="0.8" opacity="0.6" fill="none">
          {/* Outer Hill Contour */}
          <path d="M 160 280 C 175 260, 215 260, 230 285 C 245 310, 240 355, 225 385 C 210 415, 175 410, 160 380 C 145 350, 145 300, 160 280 Z" strokeDasharray="3 2" />
          {/* Mid Hill Contour (Kandy / Matale) */}
          <path d="M 172 300 C 185 285, 208 288, 220 305 C 230 322, 226 355, 215 375 C 202 395, 180 392, 170 370 C 160 345, 160 315, 172 300 Z" />
          {/* Central High Peaks (Nuwara Eliya / Sri Pada / Knuckles) */}
          <path d="M 185 320 C 194 310, 206 312, 212 325 C 218 338, 214 360, 206 370 C 196 380, 185 375, 180 360 C 175 345, 176 330, 185 320 Z" strokeWidth="1.2" />
          {/* Sri Pada Sacred Peak symbol */}
          <polygon points="196,334 200,342 192,342" fill={color} opacity="0.8" />
        </g>

        {/* ── Ancient Stupa Line Art Watermark in Dark Section ── */}
        <g transform="translate(315, 360)" opacity="0.75">
          {/* Stupa Base Terraces (Pesawa) */}
          <line x1="-36" y1="90" x2="36" y2="90" stroke={color} strokeWidth="1.6" />
          <line x1="-32" y1="84" x2="32" y2="84" stroke={color} strokeWidth="1.4" />
          <line x1="-28" y1="78" x2="28" y2="78" stroke={color} strokeWidth="1.2" />
          {/* Stupa Dome (Garbhaya / Bell Shape) */}
          <path
            d="M -26 78 C -26 35, 26 35, 26 78 Z"
            stroke={color}
            strokeWidth="1.4"
            fill={color}
            fillOpacity="0.08"
          />
          {/* Hathares Kotuwa (Square Chamber) */}
          <rect x="-8" y="24" width="16" height="11" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" />
          {/* Devatha Kotuwa (Cylindrical Neck) */}
          <rect x="-6" y="16" width="12" height="8" stroke={color} strokeWidth="1" />
          {/* Koth Kerella (Conical Conical Spire Rings) */}
          <polygon points="0,-8 5,16 -5,16" stroke={color} strokeWidth="1.2" fill="none" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`spire-${i}`}
              x1={-4 + i * 0.6}
              y1={14 - i * 3.5}
              x2={4 - i * 0.6}
              y2={14 - i * 3.5}
              stroke={color}
              strokeWidth="0.8"
            />
          ))}
          {/* Chuda Manikya (Crest Gem / Pinnacle) */}
          <circle cx="0" cy="-10" r="2.5" fill={color} />
          {/* Radiance Rays from Pinnacle */}
          <line x1="0" y1="-14" x2="0" y2="-18" stroke={color} strokeWidth="1" />
          <line x1="-3" y1="-13" x2="-6" y2="-16" stroke={color} strokeWidth="0.8" />
          <line x1="3" y1="-13" x2="6" y2="-16" stroke={color} strokeWidth="0.8" />
        </g>

        {/* ── Ancient Kingdom Heritage Nodes ── */}
        {showAncientSites && (
          <g>
            {/* Anuradhapura */}
            <g transform="translate(176, 190)">
              <circle cx="0" cy="0" r="4.5" stroke={color} strokeWidth="1.5" fill="#FAF6F0" />
              <circle cx="0" cy="0" r="8" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" />
              <text x="12" y="3" fill={color} fontSize="8.5" fontWeight="600" letterSpacing="0.04em">Anuradhapura</text>
            </g>

            {/* Sigiriya Rock */}
            <g transform="translate(202, 240)">
              <circle cx="0" cy="0" r="4" stroke={color} strokeWidth="1.4" fill="#FAF6F0" />
              <text x="11" y="3" fill={color} fontSize="8.5" fontWeight="600">Sigiriya</text>
            </g>

            {/* Polonnaruwa */}
            <g transform="translate(225, 230)">
              <circle cx="0" cy="0" r="4" stroke={color} strokeWidth="1.4" fill="#FAF6F0" />
              <text x="11" y="3" fill={color} fontSize="8.5" fontWeight="600">Polonnaruwa</text>
            </g>

            {/* Kandy (Dalada Maligawa) */}
            <g transform="translate(196, 325)">
              <circle cx="0" cy="0" r="5" stroke={color} strokeWidth="1.8" fill="var(--color-accent, #C9A66B)" />
              <circle cx="0" cy="0" r="10" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
              <text x="14" y="3.5" fill={color} fontSize="9" fontWeight="700">Kandy</text>
            </g>

            {/* Galle */}
            <g transform="translate(136, 505)">
              <circle cx="0" cy="0" r="4" stroke={color} strokeWidth="1.4" fill="#FAF6F0" />
              <text x="11" y="3" fill={color} fontSize="8.5" fontWeight="600">Galle</text>
            </g>

            {/* Connecting Sacred Pilgrim Routes */}
            <path
              d="M 176 190 L 202 240 L 225 230 L 196 325 L 136 505"
              stroke={color}
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.4"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
