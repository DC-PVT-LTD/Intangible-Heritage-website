/**
 * app/research/page.tsx — Research & Articles Page
 */
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import articlesData from '@/data/articles.json';
import type { Article } from '@/lib/types';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
  title: 'Research & Articles',
  description: 'Scientific articles and research papers on Sri Lankan intangible cultural heritage — Kandyan dance, mask carving, traditional music, Vesak, and more.',
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
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            Peer-reviewed papers, archaeometallurgical analyses of implements like the Thel Thulāva, pharmacognosy of Hela Wedakama decoctions, and palm-leaf manuscript preservation studies.
          </p>
        </div>
      </div>

      <div style={{ paddingBlock: '4rem' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <ResearchClient articles={articlesData as Article[]} />
        </div>
      </div>
    </>
  );
}
