'use client';

import React from 'react';

interface MandalaIllustrationProps {
  className?: string;
  size?: number | string;
  color?: string;
  opacity?: number;
  position?: 'left' | 'right' | 'center';
  animate?: boolean;
}

/**
 * MandalaIllustration
 * Authentic Sri Lankan Sandakada Pahana (Moonstone) & Nelum Mal (Lotus Mandala)
 * Features traditional concentric rings: Gini Jala (fire flame rim), Liya Vela (foliage vine scroll),
 * sacred Hamsa/elephant procession ring, layered lotus petals (Nelum Pethi), and central Surya sun rosette.
 */
export default function MandalaIllustration({
  className = '',
  size = 560,
  color = '#7A4B26',
  opacity = 0.18,
  position = 'left',
  animate = true,
}: MandalaIllustrationProps) {

  // Positional alignment
  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
    opacity,
    ...(position === 'left' && {
      left: '-35px',
      maskImage: 'radial-gradient(ellipse at 40% 50%, black 70%, rgba(0,0,0,0.65) 86%, transparent 98%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 40% 50%, black 70%, rgba(0,0,0,0.65) 86%, transparent 98%)',
    }),
    ...(position === 'right' && {
      right: '-35px',
      maskImage: 'radial-gradient(ellipse at 60% 50%, black 70%, rgba(0,0,0,0.65) 86%, transparent 98%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, black 70%, rgba(0,0,0,0.65) 86%, transparent 98%)',
    }),
    ...(position === 'center' && {
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maskImage: 'radial-gradient(circle, black 50%, transparent 85%)',
      WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 85%)',
    }),
  };

  return (
    <div
      className={`heritage-mandala-container ${animate ? 'animate-mandala-drift' : ''} ${className}`}
      style={positionStyles}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          filter: 'drop-shadow(0 2px 12px rgba(201, 166, 107, 0.15))',
        }}
      >
        <defs>
          <radialGradient id="mandalaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="60%" stopColor={color} stopOpacity="0.08" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft background glow */}
        <circle cx="300" cy="300" r="280" fill="url(#mandalaGlow)" />

        {/* Outer Ring 1: Flame/Gini Jala Rim */}
        <circle cx="300" cy="300" r="285" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="300" cy="300" r="275" stroke={color} strokeWidth="1.5" />
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 360) / 48;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.round((300 + 275 * Math.cos(rad)) * 100) / 100;
          const y1 = Math.round((300 + 275 * Math.sin(rad)) * 100) / 100;
          const x2 = Math.round((300 + 288 * Math.cos(rad)) * 100) / 100;
          const y2 = Math.round((300 + 288 * Math.sin(rad)) * 100) / 100;
          return (
            <line
              key={`flame-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={i % 2 === 0 ? '1.8' : '1'}
              strokeLinecap="round"
            />
          );
        })}

        {/* Outer Ring 2: Traditional Liya-Vela Floral Vine Band */}
        <circle cx="300" cy="300" r="255" stroke={color} strokeWidth="1" />
        <circle cx="300" cy="300" r="240" stroke={color} strokeWidth="1.2" />
        {Array.from({ length: 24 }).map((_, i) => {
          const rot = (i * 360) / 24;
          return (
            <g key={`liyavela-${i}`} transform={`rotate(${rot} 300 300)`}>
              <path
                d="M 300 48 C 308 52, 314 58, 310 65 C 306 72, 298 70, 295 64 C 292 58, 296 52, 300 48 Z"
                stroke={color}
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="300" cy="65" r="2" fill={color} />
              <path
                d="M 300 45 Q 312 50 306 60 T 300 70"
                stroke={color}
                strokeWidth="0.8"
                fill="none"
              />
            </g>
          );
        })}

        {/* Ring 3: Sacred Hamsa / Four Animals Procession Emblems */}
        <circle cx="300" cy="300" r="220" stroke={color} strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="300" cy="300" r="205" stroke={color} strokeWidth="1" />
        {Array.from({ length: 16 }).map((_, i) => {
          const rot = (i * 360) / 16;
          return (
            <g key={`hamsa-${i}`} transform={`rotate(${rot} 300 300)`}>
              {/* Stylized auspicious swan/creeper crest */}
              <path
                d="M 300 85 C 306 88, 312 94, 308 99 C 304 103, 296 101, 294 95 C 292 90, 296 86, 300 85 Z"
                stroke={color}
                strokeWidth="1.2"
                fill={color}
                fillOpacity="0.2"
              />
              <circle cx="300" cy="95" r="2.5" fill={color} />
            </g>
          );
        })}

        {/* Ring 4: Grand Nelum Mal (Lotus Petals) — Tier 1 (32 Petals) */}
        <circle cx="300" cy="300" r="185" stroke={color} strokeWidth="1.2" />
        {Array.from({ length: 32 }).map((_, i) => {
          const rot = (i * 360) / 32;
          return (
            <g key={`lotus1-${i}`} transform={`rotate(${rot} 300 300)`}>
              <path
                d="M 300 115 Q 314 135 300 155 Q 286 135 300 115 Z"
                stroke={color}
                strokeWidth="1.3"
                fill={color}
                fillOpacity="0.12"
              />
              <line x1="300" y1="120" x2="300" y2="150" stroke={color} strokeWidth="0.8" />
              <circle cx="300" cy="118" r="1.5" fill={color} />
            </g>
          );
        })}

        {/* Ring 5: Inner Lotus Petals — Tier 2 (16 Petals, offset) */}
        <circle cx="300" cy="300" r="150" stroke={color} strokeWidth="1.5" />
        <circle cx="300" cy="300" r="135" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
        {Array.from({ length: 16 }).map((_, i) => {
          const rot = (i * 360) / 16 + 11.25;
          return (
            <g key={`lotus2-${i}`} transform={`rotate(${rot} 300 300)`}>
              <path
                d="M 300 148 Q 320 175 300 200 Q 280 175 300 148 Z"
                stroke={color}
                strokeWidth="1.5"
                fill={color}
                fillOpacity="0.18"
              />
              <path
                d="M 300 155 Q 312 175 300 195 Q 288 175 300 155 Z"
                stroke={color}
                strokeWidth="0.8"
                fill="none"
              />
              <circle cx="300" cy="175" r="2" fill={color} />
            </g>
          );
        })}

        {/* Ring 6: Intricate Geometric Rosette Band */}
        <circle cx="300" cy="300" r="105" stroke={color} strokeWidth="1.5" />
        <circle cx="300" cy="300" r="95" stroke={color} strokeWidth="1" />
        {Array.from({ length: 12 }).map((_, i) => {
          const rot = (i * 360) / 12;
          return (
            <g key={`rosette-${i}`} transform={`rotate(${rot} 300 300)`}>
              <path
                d="M 300 195 Q 315 210 300 225 Q 285 210 300 195 Z"
                stroke={color}
                strokeWidth="1.4"
                fill={color}
                fillOpacity="0.25"
              />
            </g>
          );
        })}

        {/* Ring 7: Sacred Core Surya Sun Rosette */}
        <circle cx="300" cy="300" r="75" stroke={color} strokeWidth="1.6" />
        <circle cx="300" cy="300" r="65" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
        {Array.from({ length: 8 }).map((_, i) => {
          const rot = (i * 360) / 8;
          return (
            <g key={`core-${i}`} transform={`rotate(${rot} 300 300)`}>
              <path
                d="M 300 230 C 310 240, 310 255, 300 265 C 290 255, 290 240, 300 230 Z"
                stroke={color}
                strokeWidth="1.5"
                fill={color}
                fillOpacity="0.35"
              />
            </g>
          );
        })}

        {/* Center Pearl Bindu */}
        <circle cx="300" cy="300" r="35" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.1" />
        <circle cx="300" cy="300" r="22" stroke={color} strokeWidth="1.2" />
        <circle cx="300" cy="300" r="10" fill={color} />
        <circle cx="300" cy="300" r="4" fill="#FAF6F0" />
      </svg>
    </div>
  );
}
