/**
 * app/research/page.tsx — Research & Articles Page
 */
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { Suspense } from 'react';
import articlesData from '@/data/articles.json';
import type { Article } from '@/lib/types';
import ResearchClient from './ResearchClient';
import SectionBackground from '@/components/decorations/SectionBackground';

export const metadata: Metadata = {
  title: 'Research & Scholarly Publications — Sri Lankan Intangible Cultural Heritage',
  description:
    'Scientific articles and research papers on Sri Lankan intangible cultural heritage — traditional art, metallurgy, crafts, masks, Hela Wedakama pharmacopeia, sacred landscapes, and festival rituals.',
};

export default function ResearchPage() {
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
        <SectionBackground theme="dark" leftDecor="palm-leaf" rightDecor="stupa-monument" opacity={0.25} />
        <div className="container-site heritage-section-content">
          <BookOpen size={40} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Research & Scholarly Publications
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '660px', margin: '0 auto', lineHeight: 1.7 }}>
            Peer-reviewed papers, archaeometallurgical analyses of sacred brassware, mural pigment chemistry, pharmacognosy of Hela Wedakama decoctions, palm-leaf manuscript preservation, and sociological studies of living rituals.
          </p>
        </div>
      </div>

      <div className="heritage-section-relative" style={{ paddingBlock: '4.5rem', background: '#FAF6F0' }}>
        <SectionBackground
          theme="cream"
          leftDecor="palm-leaf"
          rightDecor="bo-leaf"
          opacity={0.18}
          leftSize={480}
          rightSize={440}
          calligraphyText="Scholarly Living Archives"
        />
        <div className="container-site heritage-section-content" style={{ maxWidth: '960px' }}>
          <Suspense fallback={<p style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-secondary)' }}>Loading publications...</p>}>
            <ResearchClient articles={articlesData as Article[]} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
