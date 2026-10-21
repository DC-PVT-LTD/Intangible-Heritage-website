'use client';

import React from 'react';

export type ArchitecturalVariant = 'pattirippuwa' | 'makara-thorana' | 'stupa-monument';

interface ArchitecturalSketchIllustrationProps {
  className?: string;
  variant?: ArchitecturalVariant;
  position?: 'left' | 'right';
  size?: number | string;
  color?: string;
  opacity?: number;
  calligraphyText?: string;
}

/**
 * ArchitecturalSketchIllustration
 * Authentic Sri Lankan heritage architectural sketches and monument illustrations for section edges.
 * Inspired by the reference image's heritage monument drawings fading into section backgrounds.
 * Supports:
 * - 'pattirippuwa': The legendary Kandyan Octagonal Pavilion with traditional tiered roof & Kot finial.
 * - 'makara-thorana': The ancient sculpted Makara Archway with mythical motifs and carved pillars.
 * - 'stupa-monument': Ancient Vatadage / Ruwanwelisaya with concentric stone pillars.
 */
export default function ArchitecturalSketchIllustration({
  className = '',
  variant = 'pattirippuwa',
  position = 'right',
  size = 460,
  color = '#7A4B26',
  opacity = 0.20,
  calligraphyText,
}: ArchitecturalSketchIllustrationProps) {

  const isRight = position === 'right';

  const containerStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
    opacity,
    ...(isRight
      ? {
          right: '-25px',
          maskImage: 'linear-gradient(to left, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to left, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
        }
      : {
          left: '-25px',
          maskImage: 'linear-gradient(to right, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to right, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)',
        }),
  };

  return (
    <div
      className={`heritage-arch-container animate-arch-float ${className}`}
      style={containerStyles}
      aria-hidden="true"
    >
      <div style={{ position: 'relative' }}>
        {variant === 'pattirippuwa' && (
          <svg
            width={size}
            height={Number(size) * 1.15}
            viewBox="0 0 400 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            {/* ── Sacred Pinnacle / Kotha (Golden Finial) ── */}
            <circle cx="200" cy="18" r="3.5" fill={color} />
            <polygon points="200,8 203,18 197,18" fill={color} />
            <line x1="200" y1="21" x2="200" y2="40" stroke={color} strokeWidth="2" />
            <ellipse cx="200" cy="30" rx="6" ry="3" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" />
            <ellipse cx="200" cy="38" rx="10" ry="4" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.2" />

            {/* ── Top Octagonal Roof (Tier 1) ── */}
            {/* Sloping Kandyan Ridge Lines */}
            <path
              d="M 200 40 L 270 85 L 290 92 C 285 96, 275 97, 260 95 L 200 78 L 140 95 C 125 97, 115 96, 110 92 L 130 85 Z"
              stroke={color}
              strokeWidth="1.8"
              fill={color}
              fillOpacity="0.08"
            />
            {/* Tile texture on upper roof */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`top-tile-${i}`}
                x1={135 + i * 14}
                y1={86 + (i <= 4 ? -i * 8 : (i - 9) * 8) + 35}
                x2={142 + i * 14}
                y2={92 + (i <= 4 ? -i * 8 : (i - 9) * 8) + 35}
                stroke={color}
                strokeWidth="0.8"
                opacity="0.6"
              />
            ))}
            {/* Carved eaves drops (Bo-leaf pendants) */}
            {Array.from({ length: 13 }).map((_, i) => (
              <path
                key={`pendant1-${i}`}
                d={`M ${122 + i * 13} 94 Q ${124 + i * 13} 99 ${122 + i * 13} 102 Q ${120 + i * 13} 99 ${122 + i * 13} 94 Z`}
                fill={color}
                opacity="0.75"
              />
            ))}

            {/* Upper Lantern / Clerestory Level */}
            <rect x="155" y="96" width="90" height="28" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.05" />
            {Array.from({ length: 5 }).map((_, i) => (
              <g key={`clerestory-window-${i}`} transform={`translate(${162 + i * 16}, 100)`}>
                <rect x="0" y="0" width="11" height="20" rx="3" stroke={color} strokeWidth="1" />
                <line x1="5.5" y1="0" x2="5.5" y2="20" stroke={color} strokeWidth="0.6" />
              </g>
            ))}

            {/* ── Main Sweeping Kandyan Tiered Roof (Tier 2) ── */}
            <path
              d="
                M 150 124
                L 200 120
                L 250 124
                L 335 178
                C 345 186, 355 190, 360 196
                C 350 200, 330 198, 310 194
                L 200 168
                L 90 194
                C 70 198, 50 200, 40 196
                C 45 190, 55 186, 65 178
                Z
              "
              stroke={color}
              strokeWidth="2.2"
              fill={color}
              fillOpacity="0.1"
            />
            {/* Roof Ridge Hips */}
            <line x1="200" y1="120" x2="200" y2="168" stroke={color} strokeWidth="1.4" strokeDasharray="2 2" />
            <line x1="150" y1="124" x2="90" y2="194" stroke={color} strokeWidth="1.2" />
            <line x1="250" y1="124" x2="310" y2="194" stroke={color} strokeWidth="1.2" />
            <line x1="175" y1="122" x2="145" y2="182" stroke={color} strokeWidth="0.8" opacity="0.6" />
            <line x1="225" y1="122" x2="255" y2="182" stroke={color} strokeWidth="0.8" opacity="0.6" />

            {/* Sweeping Eaves Bo-leaf Frills */}
            {Array.from({ length: 23 }).map((_, i) => (
              <path
                key={`pendant2-${i}`}
                d={`M ${50 + i * 13.5} 195 Q ${53 + i * 13.5} 201 ${50 + i * 13.5} 205 Q ${47 + i * 13.5} 201 ${50 + i * 13.5} 195 Z`}
                fill={color}
                opacity="0.8"
              />
            ))}

            {/* ── Main Octagonal Pavilion Gallery (Pattirippuwa Archways) ── */}
            {/* Upper Architrave & Lotus Cornice */}
            <rect x="75" y="202" width="250" height="12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
            {Array.from({ length: 18 }).map((_, i) => (
              <circle key={`cornice-dentil-${i}`} cx={84 + i * 13.5} cy={208} r="2.5" fill={color} opacity="0.6" />
            ))}

            {/* Classical Carved Wooden Columns & Arched Openings */}
            {/* Pillars */}
            {[80, 125, 170, 225, 270, 315].map((colX, idx) => (
              <g key={`pillar-${idx}`}>
                {/* Pillar Capital (Pekada lotus bracket) */}
                <path
                  d={`M ${colX - 8} 214 L ${colX + 16} 214 L ${colX + 12} 224 L ${colX - 4} 224 Z`}
                  stroke={color}
                  strokeWidth="1.2"
                  fill={color}
                  fillOpacity="0.2"
                />
                {/* Pillar Shaft */}
                <rect x={colX} y="224" width="8" height="110" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.08" />
                <line x1={colX + 4} y1="226" x2={colX + 4} y2="332" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" />
                {/* Pillar Base */}
                <rect x={colX - 4} y="334" width="16" height="8" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.2" />
              </g>
            ))}

            {/* Decorative Arched Openings Between Columns */}
            {[88, 133, 178, 233, 278].map((archX, idx) => (
              <g key={`arch-${idx}`}>
                {/* Trefoil Arched Opening */}
                <path
                  d={`
                    M ${archX} 265
                    L ${archX} 242
                    Q ${archX + 18} 222 ${archX + 37} 242
                    L ${archX + 37} 265
                  `}
                  stroke={color}
                  strokeWidth="1.2"
                  fill="none"
                />
                {/* Arched Window Grill */}
                <path
                  d={`M ${archX + 18.5} 226 L ${archX + 18.5} 265`}
                  stroke={color}
                  strokeWidth="0.7"
                />
                <circle cx={archX + 18.5} cy={242} r="4" stroke={color} strokeWidth="0.8" fill="none" />
              </g>
            ))}

            {/* Traditional Kandyan Balustrade Railing (Wewa Bamma / Diya Rella Motifs) */}
            <rect x="75" y="270" width="250" height="64" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.04" />
            <line x1="75" y1="278" x2="325" y2="278" stroke={color} strokeWidth="1" />
            <line x1="75" y1="326" x2="325" y2="326" stroke={color} strokeWidth="1" />
            {/* Balustrade pierced lattice pattern */}
            {Array.from({ length: 15 }).map((_, i) => (
              <g key={`baluster-${i}`} transform={`translate(${88 + i * 15.5}, 282)`}>
                <polygon points="6,0 12,18 6,36 0,18" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
                <circle cx="6" cy="18" r="2" fill={color} />
              </g>
            ))}

            {/* ── Base Terrace (Adishtanaya & Stone Steps) ── */}
            <rect x="60" y="342" width="280" height="18" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.12" />
            <rect x="45" y="360" width="310" height="18" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.15" />
            <rect x="30" y="378" width="340" height="20" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.18" />

            {/* Water Wave (Diya Rella) Parapet Detail at Base */}
            {Array.from({ length: 22 }).map((_, i) => (
              <path
                key={`water-wave-${i}`}
                d={`M ${32 + i * 15} 398 Q ${39.5 + i * 15} 390 ${47 + i * 15} 398`}
                stroke={color}
                strokeWidth="1.2"
                fill="none"
              />
            ))}

            {/* Ground Baseline & Reflection / Shadow Hatching */}
            <line x1="15" y1="412" x2="385" y2="412" stroke={color} strokeWidth="1.4" />
            {Array.from({ length: 30 }).map((_, i) => (
              <line
                key={`ground-hatch-${i}`}
                x1={25 + i * 12}
                y1={416}
                x2={15 + i * 12}
                y2={428}
                stroke={color}
                strokeWidth="0.8"
                opacity="0.4"
              />
            ))}
          </svg>
        )}

        {variant === 'makara-thorana' && (
          <svg
            width={size}
            height={Number(size) * 1.15}
            viewBox="0 0 400 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            {/* ── Kirthimukha (Face of Glory / Central Crest) ── */}
            <circle cx="200" cy="50" r="14" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
            <circle cx="200" cy="50" r="8" stroke={color} strokeWidth="1.2" />
            {/* Crown Plumes */}
            <path d="M 200 35 L 200 15" stroke={color} strokeWidth="1.8" />
            <path d="M 194 38 Q 185 24 178 18" stroke={color} strokeWidth="1.4" />
            <path d="M 206 38 Q 215 24 222 18" stroke={color} strokeWidth="1.4" />

            {/* ── Sweeping Mythical Makara Arch (Dragon Torana) ── */}
            {/* Outer Dragon Arch Band */}
            <path
              d="
                M 85 170
                C 90 100, 140 60, 200 60
                C 260 60, 310 100, 315 170
              "
              stroke={color}
              strokeWidth="3.2"
              fill="none"
            />
            {/* Inner Arch Band */}
            <path
              d="
                M 115 175
                C 120 120, 155 88, 200 88
                C 245 88, 280 120, 285 175
              "
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            {/* Radiating Arch Segments & Florals */}
            {Array.from({ length: 19 }).map((_, i) => {
              const angle = 180 + i * 10;
              const rad = (angle * Math.PI) / 180;
              const x1 = Math.round((200 + 85 * Math.cos(rad)) * 100) / 100;
              const y1 = Math.round((170 + 85 * Math.sin(rad)) * 100) / 100;
              const x2 = Math.round((200 + 115 * Math.cos(rad)) * 100) / 100;
              const y2 = Math.round((170 + 115 * Math.sin(rad)) * 100) / 100;
              return (
                <line
                  key={`arch-rad-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth="1.2"
                />
              );
            })}

            {/* Makara Dragon Heads on Left & Right Arches */}
            {/* Left Makara Head */}
            <g transform="translate(85, 170)">
              <path
                d="M 0 0 C -25 -15, -45 5, -30 25 C -15 45, 10 35, 15 15 Z"
                stroke={color}
                strokeWidth="1.8"
                fill={color}
                fillOpacity="0.18"
              />
              <circle cx="-15" cy="10" r="4" stroke={color} strokeWidth="1.2" fill={color} />
              <path d="M -30 18 C -45 22, -50 12, -40 5" stroke={color} strokeWidth="1.4" fill="none" />
            </g>
            {/* Right Makara Head */}
            <g transform="translate(315, 170) scale(-1, 1)">
              <path
                d="M 0 0 C -25 -15, -45 5, -30 25 C -15 45, 10 35, 15 15 Z"
                stroke={color}
                strokeWidth="1.8"
                fill={color}
                fillOpacity="0.18"
              />
              <circle cx="-15" cy="10" r="4" stroke={color} strokeWidth="1.2" fill={color} />
              <path d="M -30 18 C -45 22, -50 12, -40 5" stroke={color} strokeWidth="1.4" fill="none" />
            </g>

            {/* ── Flanking Guardian Pillars (Muragala & Carved Columns) ── */}
            {/* Left Column */}
            <g transform="translate(85, 200)">
              {/* Capital */}
              <polygon points="-16,0 24,0 16,14 -8,14" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.2" />
              {/* Shaft */}
              <rect x="-4" y="14" width="16" height="180" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />
              <line x1="4" y1="16" x2="4" y2="192" stroke={color} strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Carved Rings */}
              <line x1="-6" y1="60" x2="14" y2="60" stroke={color} strokeWidth="1.2" />
              <line x1="-6" y1="120" x2="14" y2="120" stroke={color} strokeWidth="1.2" />
              {/* Base */}
              <rect x="-12" y="194" width="32" height="18" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
            </g>

            {/* Right Column */}
            <g transform="translate(307, 200)">
              {/* Capital */}
              <polygon points="-16,0 24,0 16,14 -8,14" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.2" />
              {/* Shaft */}
              <rect x="-4" y="14" width="16" height="180" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />
              <line x1="4" y1="16" x2="4" y2="192" stroke={color} strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Carved Rings */}
              <line x1="-6" y1="60" x2="14" y2="60" stroke={color} strokeWidth="1.2" />
              <line x1="-6" y1="120" x2="14" y2="120" stroke={color} strokeWidth="1.2" />
              {/* Base */}
              <rect x="-12" y="194" width="32" height="18" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
            </g>

            {/* Central Portal Opening */}
            <path
              d="M 125 412 L 125 210 Q 200 170 275 210 L 275 412"
              stroke={color}
              strokeWidth="1.2"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.45"
            />

            {/* Ancient Moonstone (Sandakada Pahana) at Threshold Entrance */}
            <path
              d="M 130 412 A 70 30 0 0 1 270 412 Z"
              stroke={color}
              strokeWidth="1.6"
              fill={color}
              fillOpacity="0.12"
            />
            <path
              d="M 145 412 A 55 22 0 0 1 255 412 Z"
              stroke={color}
              strokeWidth="1"
              strokeDasharray="3 2"
              fill="none"
            />
            <circle cx="200" cy="412" r="10" fill={color} opacity="0.4" />

            {/* Stepped Stone Base */}
            <rect x="40" y="412" width="320" height="12" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.12" />
            <rect x="20" y="424" width="360" height="12" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.18" />
          </svg>
        )}

        {variant === 'stupa-monument' && (
          <svg
            width={size}
            height={Number(size) * 1.15}
            viewBox="0 0 400 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            {/* ── Spire Finial & Radiance Rays ── */}
            <line x1="200" y1="20" x2="200" y2="60" stroke={color} strokeWidth="2.4" />
            <circle cx="200" cy="18" r="4.5" fill={color} />
            <circle cx="200" cy="18" r="9" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />

            {/* Koth Kerella Rings (Conical Spire) */}
            <polygon points="200,60 216,130 184,130" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.1" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={`stupa-ring-${i}`}
                x1={188 + i * 1}
                y1={65 + i * 5.2}
                x2={212 - i * 1}
                y2={65 + i * 5.2}
                stroke={color}
                strokeWidth="1"
              />
            ))}

            {/* Devatha Kotuwa (Cylindrical Chamber) */}
            <rect x="180" y="130" width="40" height="22" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.15" />
            {/* Hathares Kotuwa (Square Relic Chamber) */}
            <rect x="170" y="152" width="60" height="30" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
            <circle cx="200" cy="167" r="6" stroke={color} strokeWidth="1.2" fill="none" />

            {/* ── Grand Stupa Dome (Garbhaya / Bell Shape) ── */}
            <path
              d="
                M 70 340
                C 70 200, 130 182, 200 182
                C 270 182, 330 200, 330 340
                Z
              "
              stroke={color}
              strokeWidth="2.4"
              fill={color}
              fillOpacity="0.08"
            />
            {/* Contour Hatching on Dome */}
            <path
              d="M 95 340 C 95 230, 142 205, 200 205 C 258 205, 305 230, 305 340"
              stroke={color}
              strokeWidth="0.8"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.5"
            />

            {/* ── Surrounding Ancient Vatadage Concentric Stone Pillars ── */}
            {/* Leaning and standing monolithic octagonal pillars */}
            {[-120, -90, -60, 60, 90, 120].map((offset, idx) => {
              const px = 200 + offset;
              const angle = offset < 0 ? -2.5 : 2.5;
              return (
                <g key={`vatadage-pillar-${idx}`} transform={`rotate(${angle} ${px} 350)`}>
                  {/* Pillar Lotus Capital */}
                  <polygon
                    points={`${px - 8},255 ${px + 8},255 ${px + 5},266 ${px - 5},266`}
                    stroke={color}
                    strokeWidth="1.2"
                    fill={color}
                    fillOpacity="0.3"
                  />
                  {/* Pillar Shaft */}
                  <rect x={px - 4} y="266" width="8" height="90" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.1" />
                </g>
              );
            })}

            {/* ── Three Terraced Rings (Pesawa) ── */}
            <rect x="55" y="340" width="290" height="15" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.15" />
            <rect x="42" y="355" width="316" height="15" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.18" />
            <rect x="30" y="370" width="340" height="18" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.22" />

            {/* Stone Paved Courtyard & Sand Terrace (Salapathala Maluwa) */}
            <line x1="10" y1="388" x2="390" y2="388" stroke={color} strokeWidth="2" />
            <rect x="15" y="392" width="370" height="24" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.06" />
            {Array.from({ length: 25 }).map((_, i) => (
              <line
                key={`pavement-${i}`}
                x1={25 + i * 14}
                y1={392}
                x2={25 + i * 14}
                y2={416}
                stroke={color}
                strokeWidth="0.8"
                opacity="0.4"
              />
            ))}
          </svg>
        )}

        {/* Optional elegant heritage calligraphy badge flourish like the reference image ("Good People Great Journeys") */}
        {calligraphyText && (
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              ...(isRight ? { left: '-30px' } : { right: '-30px' }),
              transform: isRight ? 'rotate(-6deg)' : 'rotate(6deg)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color,
              opacity: 0.85,
              fontSize: '1.25rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              textShadow: '0 1px 8px rgba(255,255,255,0.8)',
            }}
          >
            {calligraphyText}
          </div>
        )}
      </div>
    </div>
  );
}
