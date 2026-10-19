'use client';
/**
 * app/research/ResearchClient.tsx
 * Client component with search + topic filter for articles.
 */
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, BookOpen, Download, ChevronRight } from 'lucide-react';
import type { Article } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface Props { articles: Article[]; }

const ALL_TAGS = ['All', 'Kandyan Dance', 'Crafts', 'Music', 'Batik', 'Festivals', 'Buddhist Heritage', 'Oral Tradition'];

export default function ResearchClient({ articles }: Props) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const q = query.toLowerCase();
      const matchesQuery = !q ||
        a.title.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.abstract.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q));
      const matchesTag = activeTag === 'All' || a.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [articles, query, activeTag]);

  return (
    <>
      {/* ── Search + filter ─────────────────────────────── */}
      <div style={{ marginBottom: '2.5rem' }}>
        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <Search size={18} style={{
            position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
            color: 'var(--color-secondary)', pointerEvents: 'none',
          }} />
          <input
            id="research-search"
            type="search"
            placeholder="Search articles by title, author, or keyword…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.75rem', fontSize: '1rem', padding: '0.75rem 1rem 0.75rem 2.75rem' }}
            aria-label="Search research articles"
          />
        </div>

        {/* Tag filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Filter size={15} style={{ color: 'var(--color-secondary)' }} />
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              id={`tag-filter-${tag.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                padding: '0.3rem 0.85rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600,
                border: '1.5px solid',
                borderColor: activeTag === tag ? 'var(--color-primary)' : 'var(--color-brown-100)',
                background: activeTag === tag ? 'var(--color-primary)' : 'transparent',
                color: activeTag === tag ? '#fff' : 'var(--color-text)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results count ───────────────────────────────── */}
      <p style={{ color: 'var(--color-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Showing <strong>{filtered.length}</strong> of {articles.length} articles
        {query && <> matching &quot;<strong>{query}</strong>&quot;</>}
      </p>

      {/* ── Article list ────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', paddingBlock: '4rem' }}>
          <BookOpen size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
          <p style={{ color: 'var(--color-secondary)' }}>No articles match your search. Try different keywords or clear the filter.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filtered.map(article => (
            <article key={article.id} className="heritage-card" style={{ padding: '1.75rem' }}>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                {article.tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag === activeTag ? 'All' : tag)}
                    className="badge"
                    style={{ cursor: 'pointer', border: 'none', background: activeTag === tag ? 'var(--color-primary)' : undefined,
                      color: activeTag === tag ? '#fff' : undefined }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700,
                color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                {article.title}
              </h2>

              {/* Meta */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem',
                color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.85rem' }}>
                <span>👤 {article.author}</span>
                {article.authorAffiliation && <span>🏛 {article.authorAffiliation}</span>}
                <span>📅 {formatDate(article.date)}</span>
                {article.journal && (
                  <span>📚 {article.journal}{article.volume && `, Vol. ${article.volume}`}{article.issue && `, No. ${article.issue}`}</span>
                )}
              </div>

              {/* Abstract */}
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.75, fontSize: '0.92rem',
                marginBottom: '1.25rem' }}>
                {article.abstract}
              </p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={`/research/${article.slug}`} className="btn-primary"
                  style={{ fontSize: '0.88rem' }} id={`read-more-${article.id}`}>
                  Read More <ChevronRight size={14} />
                </Link>
                {article.downloadUrl && (
                  <a href={article.downloadUrl} className="btn-secondary"
                    style={{ fontSize: '0.88rem' }} id={`download-${article.id}`}
                    aria-label={`Download PDF for ${article.title}`}>
                    <Download size={14} /> Download PDF
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
