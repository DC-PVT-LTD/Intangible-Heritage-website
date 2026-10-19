'use client';
/**
 * app/museum/MuseumClient.tsx
 * Client component for gallery filtering, lightbox, and upload form.
 */
import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Filter } from 'lucide-react';
import type { MuseumItem } from '@/lib/types';

const CATEGORIES = ['All', 'Medical Implements', 'Indigenous Medicine', 'Manuscripts', 'Ritual Healing'] as const;

interface Props { initialItems: MuseumItem[]; }

export default function MuseumClient({ initialItems }: Props) {
  const [items] = useState<MuseumItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightbox, setLightbox] = useState<MuseumItem | null>(null);

  // ── Filter ──────────────────────────────────────────────────────
  const filtered = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory);

  return (
    <>
      {/* ── Category filter ─────────────────────────────── */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
        <Filter size={16} style={{ color: 'var(--color-secondary)' }} />
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600,
              border: '1.5px solid',
              borderColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-brown-100)',
              background: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
              color: activeCategory === cat ? '#fff' : 'var(--color-text)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Gallery grid ─────────────────────────────────── */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--color-secondary)', padding: '3rem' }}>
          No items in this category yet.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(item => (
            <article key={item.id} className="heritage-card" style={{ cursor: 'pointer' }}
              onClick={() => setLightbox(item)}
              onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} in lightbox`}
            >
              <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                <Image src={item.image} alt={item.title} fill
                  style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img"
                />
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(43,27,16,0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.25s',
                }} className="gallery-overlay">
                  <ZoomIn size={36} style={{ color: '#fff', opacity: 0, transition: 'opacity 0.25s' }} className="zoom-icon" />
                </div>
              </div>
              <div style={{ padding: '1rem 1.1rem' }}>
                <span className="badge" style={{ marginBottom: '0.4rem' }}>{item.category}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.98rem', fontWeight: 700,
                  color: 'var(--color-primary)', lineHeight: 1.3, marginBottom: '0.3rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
                  {item.description.slice(0, 100)}…
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true"
          aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '1rem', overflow: 'hidden',
            maxWidth: '860px', width: '100%', maxHeight: '90vh',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', flexShrink: 0 }}>
              <Image src={lightbox.image} alt={lightbox.title} fill
                style={{ objectFit: 'cover' }} sizes="860px" priority />
              <button onClick={() => setLightbox(null)} aria-label="Close lightbox"
                style={{
                  position: 'absolute', top: '0.75rem', right: '0.75rem',
                  background: 'rgba(43,27,16,0.7)', color: '#fff', border: 'none',
                  borderRadius: '50%', width: '38px', height: '38px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                <X size={20} />
              </button>
              <span style={{
                position: 'absolute', top: '0.75rem', left: '0.75rem',
                background: 'var(--color-accent)', color: 'var(--color-primary)',
                padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700,
              }}>
                {lightbox.category}
              </span>
            </div>
            <div style={{ padding: '1.5rem 2rem', overflowY: 'auto' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700,
                color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                {lightbox.title}
              </h2>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                {lightbox.description}
              </p>
              {lightbox.photographer && (
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  📷 {lightbox.photographer}{lightbox.year ? ` · ${lightbox.year}` : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-img { transform: scale(1); }
        article:hover .gallery-img { transform: scale(1.06); }
        article:hover .gallery-overlay { background: rgba(43,27,16,0.35) !important; }
        article:hover .zoom-icon { opacity: 1 !important; }
      `}</style>
    </>
  );
}
