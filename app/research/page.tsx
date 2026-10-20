/**
 * app/research/page.tsx — Research & Articles Page
 */
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { Suspense } from 'react';
import articlesData from '@/data/articles.json';
import type { Article } from '@/lib/types';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
  title: 'Research & Scholarly Publications — Sri Lankan Intangible Cultural Heritage',
  description:
    'Scientific articles and research papers on Sri Lankan intangible cultural heritage — traditional art, metallurgy, crafts, masks, Hela Wedakama pharmacopeia, sacred landscapes, and festival rituals.',
};

export default function ResearchPage() {
  return (
    <>
      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        paddingBlock: '4rem 3rem', textAlign: 'center', color: '#fff',
      }}>
        <div className="container-site">
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

      <div style={{ paddingBlock: '4rem' }}>
        <div className="container-site" style={{ maxWidth: '960px' }}>
          <Suspense fallback={<p style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-secondary)' }}>Loading publications...</p>}>
            <ResearchClient articles={articlesData as Article[]} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
