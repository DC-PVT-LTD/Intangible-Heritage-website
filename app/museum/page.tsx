/**
 * app/museum/page.tsx — Museum Page (server component wrapper)
 */
import type { Metadata } from 'next';
import { Suspense } from 'react';
import museumData from '@/data/museum.json';
import type { MuseumItem } from '@/lib/types';
import MuseumClient from './MuseumClient';
import SectionBackground from '@/components/decorations/SectionBackground';

export const metadata: Metadata = {
  title: 'Museum — Sacred Implements, Art, Crafts & Cultural Artifacts',
  description:
    'Explore the Intangible Heritage virtual museum — a visual archive documenting classical temple murals, master crafts, brassware, ritual masks, ancient Hela Wedakama implements, sacred landscapes, and perahera traditions.',
};

export default function MuseumPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="heritage-section-relative"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          paddingBlock: '4rem 3rem',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <SectionBackground theme="dark" leftDecor="landscapes" rightDecor="pattirippuwa" opacity={0.25} />

        <div className="container-site heritage-section-content">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Virtual Museum & Archives
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Cultural & Sacred Heritage Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
            A curated visual archive preserving ancient Sri Lankan healing implements (including the sacred Thel Thulāva and Beheth Oruwa), classical temple murals, master craft traditions, ornate brass lamps, ritual masks, monumental landscapes, and sacred peraheras.
          </p>
        </div>
      </div>

      <div className="heritage-section-relative" style={{ paddingBlock: '3.5rem', background: '#FAF6F0' }}>
        <div className="container-site">
          <Suspense fallback={<p style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-secondary)' }}>Loading gallery...</p>}>
            <MuseumClient initialItems={museumData as MuseumItem[]} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
