/**
 * app/research/[slug]/page.tsx — Individual Article Page
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, BookOpen, Calendar, User, Building } from 'lucide-react';
import articlesData from '@/data/articles.json';
import type { Article } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (articlesData as Article[]).map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = (articlesData as Article[]).find(a => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.abstract.slice(0, 160),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = (articlesData as Article[]).find(a => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        paddingBlock: '3rem', color: '#fff',
      }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <Link href="/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem',
            marginBottom: '1.5rem', fontWeight: 500 }}>
            <ArrowLeft size={15} /> Back to Research
          </Link>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {article.heritageCategory && (
              <span style={{
                background: 'var(--color-accent)', color: 'var(--color-primary)',
                padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700,
              }}>
                {article.heritageCategory}
              </span>
            )}
            {article.tags.map(tag => (
              <span key={tag} style={{
                background: 'rgba(201,166,107,0.3)', color: 'var(--color-accent)',
                padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 600,
              }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 800, lineHeight: 1.25, marginBottom: '1.25rem' }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.75)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <User size={14} /> {article.author}
            </span>
            {article.authorAffiliation && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Building size={14} /> {article.authorAffiliation}
              </span>
            )}
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {formatDate(article.date)}
            </span>
            {article.journal && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <BookOpen size={14} />
                {article.journal}
                {article.volume && `, Vol. ${article.volume}`}
                {article.issue && `, No. ${article.issue}`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ paddingBlock: '4rem' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div className="heritage-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700,
              color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Abstract
            </h2>
            <p style={{ color: 'var(--color-secondary)', lineHeight: 1.85, fontSize: '1rem',
              marginBottom: '2rem' }}>
              {article.abstract}
            </p>

            {/* Publication notice */}
            <div style={{
              padding: '1.25rem', background: 'var(--color-brown-50)',
              borderRadius: '0.5rem', borderLeft: '4px solid var(--color-accent)',
              marginBottom: '2rem', fontSize: '0.88rem', color: 'var(--color-secondary)', lineHeight: 1.6,
            }}>
              <strong style={{ color: 'var(--color-primary)' }}>Full Text Available</strong><br />
              The complete article is available for download. If you are a researcher or institution requiring access, please{' '}
              <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>contact us</Link>.
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {article.downloadUrl && (
                <a href={article.downloadUrl} className="btn-primary" id="article-download-btn">
                  <Download size={15} /> Download PDF
                </a>
              )}
              <Link href="/research" className="btn-secondary" id="article-back-btn">
                <ArrowLeft size={15} /> All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
