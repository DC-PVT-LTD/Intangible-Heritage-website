'use client';

import React from 'react';

interface IllustrationBaseProps {
  color?: string;
  size?: number | string;
  className?: string;
}

/**
 * PalmLeafManuscriptIllustration
 * Authentic Sri Lankan ancient Ola palm-leaf manuscript (Puskola Potha)
 * with protective lacquered wooden covers (Kamba), binding cord (Nool Karuwa),
 * ancient Brahmi/Sinhala script lines, and brass Panhinda stylus.
 * Perfect for Scholarly, Scientific & Research sections!
 */
export function PalmLeafManuscriptIllustration({
  color = '#7A4B26',
  size = 460,
  className = '',
}: IllustrationBaseProps) {
  return (
    <svg
      width={size}
      height={Number(size) * 1.05}
      viewBox="0 0 440 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* ── Top Curved Manuscript Leaf (Puskola Pethi) ── */}
      <g transform="translate(220, 95) rotate(-6)">
        <rect
          x="-170"
          y="-24"
          width="340"
          height="48"
          rx="5"
          stroke={color}
          strokeWidth="2"
          fill={color}
          fillOpacity="0.1"
        />
        {/* Binding eyelets (Punchi Kodu) */}
        <circle cx="-90" cy="0" r="5" stroke={color} strokeWidth="1.5" fill="#FAF6F0" />
        <circle cx="90" cy="0" r="5" stroke={color} strokeWidth="1.5" fill="#FAF6F0" />
        {/* Text lines in ancient Sinhala script */}
        {[-12, -4, 4, 12].map((y, i) => (
          <line
            key={`script1-${i}`}
            x1="-150"
            y1={y}
            x2="150"
            y2={y}
            stroke={color}
            strokeWidth="1.2"
            strokeDasharray="8 3 14 3 6 3 20 4"
            opacity="0.75"
          />
        ))}
      </g>

      {/* ── Middle Fan-Spread Manuscript Leaf ── */}
      <g transform="translate(220, 160) rotate(4)">
        <rect
          x="-175"
          y="-24"
          width="350"
          height="48"
          rx="5"
          stroke={color}
          strokeWidth="2.2"
          fill={color}
          fillOpacity="0.14"
        />
        <circle cx="-95" cy="0" r="5" stroke={color} strokeWidth="1.5" fill="#FAF6F0" />
        <circle cx="95" cy="0" r="5" stroke={color} strokeWidth="1.5" fill="#FAF6F0" />
        {[-12, -4, 4, 12].map((y, i) => (
          <line
            key={`script2-${i}`}
            x1="-155"
            y1={y}
            x2="155"
            y2={y}
            stroke={color}
            strokeWidth="1.2"
            strokeDasharray="12 4 8 3 16 3 10 3"
            opacity="0.8"
          />
        ))}
      </g>

      {/* ── Main Lacquered Wooden Book Cover (Kamba) ── */}
      <g transform="translate(220, 240)">
        <rect
          x="-185"
          y="-28"
          width="370"
          height="56"
          rx="6"
          stroke={color}
          strokeWidth="2.6"
          fill={color}
          fillOpacity="0.22"
        />
        {/* Traditional Liyawela Floral Border on Cover */}
        <rect
          x="-175"
          y="-20"
          width="350"
          height="40"
          rx="3"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="6 3"
          fill="none"
        />
        {/* Center Traditional Kundirakkan Diamond Plaque */}
        <polygon
          points="0,-16 26,0 0,16 -26,0"
          stroke={color}
          strokeWidth="1.6"
          fill={color}
          fillOpacity="0.3"
        />
        <circle cx="0" cy="0" r="4" fill={color} />
        {/* Eyelet buttons */}
        <circle cx="-100" cy="0" r="7" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.3" />
        <circle cx="100" cy="0" r="7" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.3" />
        {/* Braided Binding Cord (Nool Karuwa) */}
        <path
          d="M -100 0 C -80 30, -50 65, 0 65 C 50 65, 80 30, 100 0"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="5 3"
          fill="none"
        />
      </g>

      {/* ── Traditional Brass Scribe Stylus (Panhinda) Resting Across ── */}
      <g transform="translate(260, 310) rotate(-35)">
        {/* Stylus Shaft */}
        <line x1="-120" y1="0" x2="80" y2="0" stroke={color} strokeWidth="3" strokeLinecap="round" />
        {/* Stylus Writing Nib (Kūra) */}
        <polygon points="-120,0 -140,-2 -140,2" fill={color} />
        {/* Stylus Ornamental Turned Ring Nodes */}
        <ellipse cx="-40" cy="0" rx="4" ry="7" stroke={color} strokeWidth="1.5" fill={color} />
        <ellipse cx="20" cy="0" rx="5" ry="8" stroke={color} strokeWidth="1.5" fill={color} />
        {/* Chathra Feather Finial at top */}
        <path
          d="M 80 0 C 95 -12, 115 -10, 110 0 C 115 10, 95 12, 80 0 Z"
          stroke={color}
          strokeWidth="1.8"
          fill={color}
          fillOpacity="0.35"
        />
      </g>
    </svg>
  );
}

/**
 * PunkalasaIllustration
 * The sacred Sri Lankan Punkalasa (Vessel of Plentiful Auspiciousness / Full Pot)
 * with blooming coconut flower branches (Pol Mal), betel leaves, and traditional Liya-vela creeper scrolls.
 * Traditional symbol of prosperity, welcome, and sacred beginnings! Perfect for Contact & Welcome sections.
 */
export function PunkalasaIllustration({
  color = '#7A4B26',
  size = 460,
  className = '',
}: IllustrationBaseProps) {
  return (
    <svg
      width={size}
      height={Number(size) * 1.15}
      viewBox="0 0 420 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* ── Auspicious Coconut Flower Sprays (Pol Mal Kula) Emerging from Pot ── */}
      <g transform="translate(210, 140)">
        {/* Central High Spathe */}
        <path
          d="M 0 0 C 5 -45, 12 -90, 0 -130 C -12 -90, -5 -45, 0 0 Z"
          stroke={color}
          strokeWidth="2"
          fill={color}
          fillOpacity="0.18"
        />
        {/* Left Radiating Flower Sprays */}
        <path
          d="M -15 -10 C -45 -50, -85 -75, -125 -70 C -95 -45, -55 -25, -15 -10"
          stroke={color}
          strokeWidth="1.8"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M -10 -20 C -35 -70, -60 -105, -95 -120 C -75 -85, -45 -50, -10 -20"
          stroke={color}
          strokeWidth="1.6"
          fill={color}
          fillOpacity="0.1"
        />
        {/* Right Radiating Flower Sprays */}
        <path
          d="M 15 -10 C 45 -50, 85 -75, 125 -70 C 95 -45, 55 -25, 15 -10"
          stroke={color}
          strokeWidth="1.8"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M 10 -20 C 35 -70, 60 -105, 95 -120 C 75 -85, 45 -50, 10 -20"
          stroke={color}
          strokeWidth="1.6"
          fill={color}
          fillOpacity="0.1"
        />
        {/* Flower Buds (Pol Mal Kekulu) */}
        {[-110, -80, -45, 0, 45, 80, 110].map((x, i) => (
          <circle
            key={`bud-${i}`}
            cx={x}
            cy={-65 - (3 - Math.abs(i - 3)) * 18}
            r="4"
            fill={color}
            opacity="0.8"
          />
        ))}
      </g>

      {/* ── Sacred Pot Rim & Turned Neck (Kalas Muka) ── */}
      <g transform="translate(210, 155)">
        <ellipse cx="0" cy="0" rx="65" ry="14" stroke={color} strokeWidth="2.4" fill={color} fillOpacity="0.25" />
        <ellipse cx="0" cy="0" rx="48" ry="9" stroke={color} strokeWidth="1.2" fill="none" />
        {/* Neck Rings */}
        <rect x="-42" y="8" width="84" height="20" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.1" />
        <ellipse cx="0" cy="28" rx="55" ry="10" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
      </g>

      {/* ── Grand Swelling Spherical Body (Punkalasa Kanda) ── */}
      <g transform="translate(210, 275)">
        <circle cx="0" cy="0" r="95" stroke={color} strokeWidth="2.8" fill={color} fillOpacity="0.12" />
        {/* Concentric Decorative Waist Band */}
        <ellipse cx="0" cy="0" rx="95" ry="24" stroke={color} strokeWidth="1.8" fill="none" />
        <ellipse cx="0" cy="0" rx="88" ry="18" stroke={color} strokeWidth="1.2" strokeDasharray="4 3" fill="none" />

        {/* Traditional Liya-Vela Floral Scroll across the pot waist */}
        {[-60, -20, 20, 60].map((x, i) => (
          <g key={`pot-flower-${i}`} transform={`translate(${x}, 0)`}>
            <circle cx="0" cy="0" r="6" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.4" />
            <path
              d="M 0 -12 C 6 -6, 6 6, 0 12 C -6 6, -6 -6, 0 -12 Z"
              stroke={color}
              strokeWidth="1"
              fill={color}
              fillOpacity="0.2"
            />
          </g>
        ))}

        {/* Lower Pot Girdle Lines */}
        <ellipse cx="0" cy="45" rx="75" ry="16" stroke={color} strokeWidth="1.4" fill="none" />
      </g>

      {/* ── Flared Circular Pedestal Base (Punkalas Pāda) ── */}
      <g transform="translate(210, 400)">
        <path
          d="M -50 -30 L -75 20 C -75 30, -50 35, 0 35 C 50 35, 75 30, 75 20 L 50 -30 Z"
          stroke={color}
          strokeWidth="2.4"
          fill={color}
          fillOpacity="0.18"
        />
        <ellipse cx="0" cy="22" rx="75" ry="12" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" />
        <ellipse cx="0" cy="34" rx="82" ry="14" stroke={color} strokeWidth="2.4" fill={color} fillOpacity="0.2" />
      </g>
    </svg>
  );
}

/**
 * PeraheraDrumsIllustration
 * Traditional Sri Lankan ceremonial drums: Geta-Bera (Kandyan barrel drum) & Davula (Low-country ceremonial cylinder drum)
 * with drumsticks (Kadippu), sacred royal Sesath umbrella banners, and ceremonial Horanawa horn.
 * Perfect for Events, Exhibitions & Festivals!
 */
export function PeraheraDrumsIllustration({
  color = '#7A4B26',
  size = 460,
  className = '',
}: IllustrationBaseProps) {
  return (
    <svg
      width={size}
      height={Number(size) * 1.15}
      viewBox="0 0 440 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* ── Royal Ceremonial Sesath Sun-Shade Banner at Top Left ── */}
      <g transform="translate(130, 110)">
        {/* Circular Sun-Disc with radiating rays */}
        <circle cx="0" cy="0" r="58" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.12" />
        <circle cx="0" cy="0" r="46" stroke={color} strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
        <circle cx="0" cy="0" r="32" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
        {/* Radiating Ray Flakes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.round(48 * Math.cos(rad) * 100) / 100;
          const y1 = Math.round(48 * Math.sin(rad) * 100) / 100;
          const x2 = Math.round(58 * Math.cos(rad) * 100) / 100;
          const y2 = Math.round(58 * Math.sin(rad) * 100) / 100;
          return <line key={`sesath-ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.4" />;
        })}
        {/* Sesath Pole */}
        <line x1="0" y1="58" x2="0" y2="280" stroke={color} strokeWidth="3" />
        {/* Ceremonial Tassels */}
        <path d="M -52 25 C -65 50, -50 70, -45 80" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M 52 25 C 65 50, 50 70, 45 80" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
      </g>

      {/* ── Grand Kandyan Geta-Bera Drum (Tapered Barrel Drum) ── */}
      <g transform="translate(230, 230) rotate(-18)">
        {/* Bulbar Asymmetrical Drum Body */}
        <path
          d="M -110 -22 C -40 -40, 40 -40, 110 -22 L 110 22 C 40 40, -40 40, -110 22 Z"
          stroke={color}
          strokeWidth="2.6"
          fill={color}
          fillOpacity="0.18"
        />
        {/* Left Drum Head (Thiththa Vadiya) */}
        <ellipse cx="-110" cy="0" rx="9" ry="22" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.35" />
        {/* Right Drum Head (Bera Potha) */}
        <ellipse cx="110" cy="0" rx="9" ry="22" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.35" />
        {/* Traditional Wara Leather Lacing across body */}
        {[-85, -60, -35, -10, 15, 40, 65, 90].map((x, i) => (
          <line
            key={`bera-lace-${i}`}
            x1={x - 8}
            y1={-28}
            x2={x + 8}
            y2={28}
            stroke={color}
            strokeWidth="1.2"
            opacity="0.75"
          />
        ))}
        {/* Center Waist Ring Band */}
        <ellipse cx="0" cy="0" rx="6" ry="34" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.25" />
      </g>

      {/* ── Davula Drum (Cylinder Temple Drum) & Curved Drumstick (Kadippu) ── */}
      <g transform="translate(250, 370)">
        {/* Straight Barrel Body */}
        <rect
          x="-75"
          y="-30"
          width="150"
          height="60"
          rx="6"
          stroke={color}
          strokeWidth="2.4"
          fill={color}
          fillOpacity="0.15"
        />
        {/* Brass Ring Bands */}
        <line x1="-75" y1="-10" x2="75" y2="-10" stroke={color} strokeWidth="1.4" strokeDasharray="4 2" />
        <line x1="-75" y1="10" x2="75" y2="10" stroke={color} strokeWidth="1.4" strokeDasharray="4 2" />
        {/* Drum Heads */}
        <ellipse cx="-75" cy="0" rx="10" ry="30" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.35" />
        <ellipse cx="75" cy="0" rx="10" ry="30" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.35" />
        {/* Traditional Curved Drumstick (Kadippuwa) */}
        <path
          d="M 65 -45 C 90 -65, 115 -45, 105 -25 L 85 -5"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="70" cy="-45" r="4" fill={color} />
      </g>
    </svg>
  );
}

/**
 * BoLeafIllustration
 * Sacred Bodhi Tree Leaf (Bo Patha) with auspicious Liya-Vela vine tendrils
 * and temple boundary flag emblems.
 * Represents wisdom, spirituality, peace, and sacred living heritage.
 */
export function BoLeafIllustration({
  color = '#7A4B26',
  size = 440,
  className = '',
}: IllustrationBaseProps) {
  return (
    <svg
      width={size}
      height={Number(size) * 1.15}
      viewBox="0 0 400 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      {/* ── Sacred Bo Leaf Silhouette with Extended Slender Tip (Agra) ── */}
      <g transform="translate(200, 220)">
        <path
          d="
            M 0 -170
            C 10 -110, 45 -70, 95 -30
            C 135 5, 140 65, 105 110
            C 75 145, 30 160, 0 160
            C -30 160, -75 145, -105 110
            C -140 65, -135 5, -95 -30
            C -45 -70, -10 -110, 0 -170
            Z
          "
          stroke={color}
          strokeWidth="2.6"
          fill={color}
          fillOpacity="0.12"
        />

        {/* Central Vein (Medha Rekhava) */}
        <line x1="0" y1="-165" x2="0" y2="155" stroke={color} strokeWidth="2.2" />

        {/* Lateral Veins (Sirā) Radiating Curvaceously */}
        {[
          { y1: -70, dy: -25, w: 55 },
          { y1: -30, dy: -20, w: 85 },
          { y1: 15, dy: -10, w: 105 },
          { y1: 60, dy: 5, w: 95 },
          { y1: 105, dy: 15, w: 65 },
        ].map((v, i) => (
          <g key={`leaf-vein-${i}`}>
            {/* Right Vein */}
            <path
              d={`M 0 ${v.y1} Q ${v.w * 0.6} ${v.y1 + v.dy} ${v.w} ${v.y1 + v.dy - 10}`}
              stroke={color}
              strokeWidth="1.4"
              fill="none"
            />
            {/* Left Vein */}
            <path
              d={`M 0 ${v.y1} Q ${-v.w * 0.6} ${v.y1 + v.dy} ${-v.w} ${v.y1 + v.dy - 10}`}
              stroke={color}
              strokeWidth="1.4"
              fill="none"
            />
          </g>
        ))}

        {/* Auspicious Inner Nelum Rosette */}
        <circle cx="0" cy="35" r="28" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
        <circle cx="0" cy="35" r="14" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <circle cx="0" cy="35" r="6" fill={color} />
      </g>
    </svg>
  );
}
