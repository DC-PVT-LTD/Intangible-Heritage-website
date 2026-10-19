/**
 * app/museum/page.tsx — Museum Page (server component wrapper)
 */
import type { Metadata } from 'next';
import museumData from '@/data/museum.json';
import type { MuseumItem } from '@/lib/types';
import MuseumClient from './MuseumClient';

export const metadata: Metadata = {
  title: 'Museum',
  description: 'Explore the Intangible Heritage virtual museum — a gallery of photographs documenting Kandyan dance, mask carving, Vesak lanterns, batik, traditional music and more.',
};

export default function MuseumPage() {
  return (
    <>
      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        paddingBlock: '4rem 3rem',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div className="container-site">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Virtual Museum
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Medical & Sacred Heritage Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            A curated visual archive documenting ancient Sri Lankan healing implements (including the sacred Thel Thulāva and Beheth Oruwa), medical palm-leaf treatises, indigenous apothecaries, and ritual healing traditions.
          </p>
        </div>
      </div>

      <div style={{ paddingBlock: '3rem' }}>
        <div className="container-site">
          <MuseumClient initialItems={museumData as MuseumItem[]} />
        </div>
      </div>
    </>
  );
}
