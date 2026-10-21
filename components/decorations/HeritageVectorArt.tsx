'use client';

import React from 'react';
import Image from 'next/image';

export type TraditionalVectorType =
  | 'sandakada-pahana'
  | 'pattirippuwa'
  | 'sri-lanka-map'
  | 'ruwanwelisaya'
  | 'makara-thorana'
  | 'none';

interface HeritageVectorArtProps {
  type: TraditionalVectorType;
  position?: 'left' | 'right' | 'center';
  theme?: 'light' | 'cream' | 'dark';
  opacity?: number;
  width?: number;
  height?: number;
  calligraphyText?: string;
  className?: string;
}

const VECTOR_ASSETS: Record<Exclude<TraditionalVectorType, 'none'>, { src: string; isDarkAsset: boolean; defaultAspect: number }> = {
  'sandakada-pahana': {
    src: '/images/decorations/sandakada-pahana.jpg',
    isDarkAsset: false,
    defaultAspect: 1, // square
  },
  'pattirippuwa': {
    src: '/images/decorations/pattirippuwa.jpg',
    isDarkAsset: false,
    defaultAspect: 3 / 4,
  },
  'sri-lanka-map': {
    src: '/images/decorations/sri-lanka-map-dark.jpg',
    isDarkAsset: true,
    defaultAspect: 3 / 4,
  },
  'ruwanwelisaya': {
    src: '/images/decorations/ruwanwelisaya-stupa.jpg',
    isDarkAsset: false,
    defaultAspect: 3 / 4,
  },
  'makara-thorana': {
    src: '/images/decorations/makara-thorana.jpg',
    isDarkAsset: false,
    defaultAspect: 3 / 4,
  },
};

/**
 * HeritageVectorArt
 * Authentic, museum-grade Sri Lankan traditional vector art & architectural sketches
 * seamlessly blended into section backgrounds matching the luxury heritage aesthetic.
 *
 * Uses:
 * - `mix-blend-mode: multiply` on light/cream backgrounds (pure white disappears, leaving crisp bronze lines).
 * - `mix-blend-mode: screen` on dark backgrounds (pure black disappears, leaving luminous gold cartography).
 */
export default function HeritageVectorArt({
  type,
  position = 'left',
  theme = 'light',
  opacity,
  width = 520,
  height,
  calligraphyText,
  className = '',
}: HeritageVectorArtProps) {
  if (!type || type === 'none') return null;

  const asset = VECTOR_ASSETS[type];
  if (!asset) return null;

  const isDark = theme === 'dark';
  // Compute default opacity: 0.35 - 0.45 for multiply/screen blend modes gives rich, visible, delicate heritage art
  const effectiveOpacity = opacity !== undefined ? opacity : (isDark ? 0.38 : (theme === 'cream' ? 0.32 : 0.28));
  const calcHeight = height || Math.round(width / asset.defaultAspect);

  const assetSrc = type === 'sri-lanka-map'
    ? (isDark ? '/images/decorations/sri-lanka-map-dark.jpg' : '/images/decorations/sri-lanka-map-light.jpg')
    : asset.src;
  const isAssetDark = type === 'sri-lanka-map' ? isDark : asset.isDarkAsset;

  const isLeft = position === 'left';
  const isRight = position === 'right';
  const isCenter = position === 'center';

  // Gradient fade masks so the artwork gently dissolves into the section
  const getMask = () => {
    if (type === 'sandakada-pahana') {
      if (isLeft) {
        return 'radial-gradient(ellipse at 40% 50%, black 60%, rgba(0,0,0,0.6) 80%, transparent 98%)';
      }
      if (isRight) {
        return 'radial-gradient(ellipse at 60% 50%, black 60%, rgba(0,0,0,0.6) 80%, transparent 98%)';
      }
      return 'radial-gradient(circle, black 65%, transparent 95%)';
    }

    if (type === 'pattirippuwa') {
      // Hide bottom text caption and fade gracefully towards content
      if (isRight) {
        return 'linear-gradient(to left, black 50%, rgba(0,0,0,0.6) 80%, transparent 98%), linear-gradient(to top, transparent 0%, black 12%, black 95%)';
      }
      return 'linear-gradient(to right, black 50%, rgba(0,0,0,0.6) 80%, transparent 98%), linear-gradient(to top, transparent 0%, black 12%, black 95%)';
    }

    if (type === 'ruwanwelisaya') {
      // Hide top and bottom label captions
      return 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%), linear-gradient(to right, black 60%, transparent 98%)';
    }

    if (type === 'makara-thorana') {
      if (isRight) {
        return 'linear-gradient(to left, black 55%, rgba(0,0,0,0.6) 80%, transparent 98%)';
      }
      return 'linear-gradient(to right, black 55%, rgba(0,0,0,0.6) 80%, transparent 98%)';
    }

    // sri-lanka-map
    if (isLeft) {
      return 'linear-gradient(to right, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)';
    }
    return 'linear-gradient(to left, black 65%, rgba(0,0,0,0.6) 85%, transparent 98%)';
  };

  const maskValue = getMask();

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
    opacity: effectiveOpacity,
    mixBlendMode: isAssetDark ? 'screen' : 'multiply',
    maskImage: maskValue,
    WebkitMaskImage: maskValue,
    ...(isLeft && { left: '-30px' }),
    ...(isRight && { right: '-30px' }),
    ...(isCenter && { left: '50%', transform: 'translate(-50%, -50%)' }),
  };

  return (
    <div
      className={`heritage-vector-layer animate-arch-float ${className}`}
      style={containerStyle}
      aria-hidden="true"
    >
      <div style={{ position: 'relative', width, height: calcHeight }}>
        <Image
          src={assetSrc}
          alt=""
          fill
          sizes={`${width}px`}
          priority
          style={{
            objectFit: 'contain',
            objectPosition: isLeft ? 'left center' : (isRight ? 'right center' : 'center'),
            ...(type === 'pattirippuwa' && { clipPath: 'inset(0 0 15% 0)' }),
            ...(type === 'ruwanwelisaya' && { clipPath: 'inset(8% 0 12% 0)' }),
          }}
        />

        {/* Optional elegant handwritten cursive calligraphy caption matching the reference image */}
        {calligraphyText && (
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              ...(isRight ? { left: '-40px' } : { right: '-40px' }),
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '1.25rem',
              color: isDark ? '#DFC18A' : '#7A4B26',
              whiteSpace: 'nowrap',
              transform: 'rotate(-4deg)',
              letterSpacing: '0.04em',
              textShadow: '0 1px 6px rgba(0,0,0,0.08)',
              pointerEvents: 'none',
            }}
          >
            {calligraphyText}
          </div>
        )}
      </div>
    </div>
  );
}
