/**
 * app/page.tsx — Home Page
 * Intangible Heritage: Preserving Sri Lanka's Traditional Medical & Indigenous Healing Wisdom
 */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, BookOpen, CalendarDays, Sparkles, ShieldCheck } from 'lucide-react';
import museumData from '@/data/museum.json';
import eventsData from '@/data/events.json';
import articlesData from '@/data/articles.json';
import type { MuseumItem, Event, Article } from '@/lib/types';
import { formatDate, truncate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Home — Preserving Traditional Medical & Indigenous Heritage of Sri Lanka',
  description:
    'Intangible Heritage Sri Lanka — Documenting, preserving and celebrating Hela Wedakama, antique Thel Thulāva vessels, ancient palm-leaf medical manuscripts, and living healing traditions.',
};

const STATS = [
  { value: '2,500+', label: 'Years of Healing Heritage', desc: 'Continuous lineage since King Buddhadasa' },
  { value: '1,200+', label: 'Manuscript Formulations', desc: 'Digitized from sacred Puskola Poth' },
  { value: '80+',    label: 'Lineage Master Healers',   desc: 'Hereditary Wedamahathwaru network' },
  { value: '350+',   label: 'Conserved Implements',      desc: 'Thel Thulāva, Beheth Oru & mortars' },
];

const HERITAGE_PILLARS = [
  { icon: '🏺', label: 'Thel Thulāva & Implements', desc: 'Antique brass oil pourers, stone kalka gal, and sacred dispensing vessels.' },
  { icon: '🌿', label: 'Hela Wedakama & Ayurveda',  desc: 'Ancient indigenous herbal healing, pulse diagnosis, and decoction therapies.' },
  { icon: '📜', label: 'Puskola Poth Manuscripts',  desc: 'Palm-leaf medical treatises, Sarartha Sangrahaya, and secret lineage recipes.' },
  { icon: '🍶', label: 'Thel Sindima (Herbal Oils)',desc: 'Artisanal formulation of Pinda, Nilyadi, and classical restorative oils.' },
  { icon: '🏛️', label: 'Ancient Hospital Sites',     desc: 'Archaeological study of Mihintale and Polonnaruwa medicinal bath ruins.' },
  { icon: '🎭', label: 'Ritual Psychotherapy',       desc: 'Sanni Yakuma healing masks, fumigation rituals, and psycho-spiritual therapy.' },
];

export default function HomePage() {
  const featured = (museumData as MuseumItem[]).slice(0, 4);
  const upcoming = (eventsData as Event[]).filter(e => e.status === 'upcoming').slice(0, 3);
  const latest = (articlesData as Article[]).slice(0, 3);

  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section aria-label="Hero banner" style={{ position: 'relative', height: 'min(92vh, 720px)', overflow: 'hidden' }}>
        <Image
          src="/images/thel-thulava.jpg"
          alt="Antique Sri Lankan brass Thel Thulava oil pourer with traditional Ayurvedic herbs"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div className="hero-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(43,27,16,0.92) 0%, rgba(43,27,16,0.78) 55%, rgba(43,27,16,0.4) 100%)',
          display: 'flex', alignItems: 'center',
        }}>
          <div className="container-site">
            <div style={{ maxWidth: '680px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(201, 166, 107, 0.2)', border: '1px solid rgba(201, 166, 107, 0.45)',
                padding: '0.35rem 0.85rem', borderRadius: '2rem', marginBottom: '1.25rem',
              }}>
                <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
                <span style={{
                  color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.82rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  Sri Lankan Traditional Medical Heritage
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)',
                color: '#fff', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem',
              }}>
                Living Wisdom of<br />
                <span style={{ color: 'var(--color-accent)' }}>Hela Wedakama</span> & Heritage
              </h1>

              <p style={{
                color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px',
              }}>
                Dedicated to the preservation, scientific documentation, and living practice of Sri Lanka’s ancient healing wisdom — from sacred Thel Thulāva vessels and palm-leaf manuscripts to hereditary medicinal oils.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/museum" className="btn-accent" id="hero-cta-museum">
                  Explore Museum & Implements <ArrowRight size={16} />
                </Link>
                <Link href="/shop" className="btn-secondary"
                  style={{ borderColor: 'rgba(255,255,255,0.7)', color: '#fff' }}
                  id="hero-cta-shop">
                  Traditional Apothecary & Oils
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IPM-Style Statistical Highlight Bar ────────────────── */}
      <section aria-label="Key statistics" style={{
        background: 'var(--color-primary)',
        borderBottom: '2px solid rgba(201,166,107,0.3)',
        paddingBlock: '2.5rem',
      }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}>
            {STATS.map(stat => (
              <div key={stat.label} style={{ color: '#fff' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Pillars ───────────────────────────────────── */}
      <section aria-label="Heritage pillars" style={{ background: '#FAF6F0', paddingBlock: '4.5rem' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <p style={{
              color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem',
            }}>
              Core Focus Areas
            </p>
            <h2 className="section-title">Domains of Intangible Healing Heritage</h2>
            <p style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Safeguarding the tangible implements and intangible knowledge systems that have healed generations for millennia.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}>
            {HERITAGE_PILLARS.map(p => (
              <div key={p.label} className="heritage-card" style={{
                padding: '1.75rem',
                background: '#fff',
                borderRadius: '0.75rem',
                border: '1px solid rgba(92,58,33,0.1)',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                <div style={{ fontSize: '2.4rem' }}>{p.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.15rem',
                  fontWeight: 700, color: 'var(--color-primary)',
                }}>
                  {p.label}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary)', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Intro: The Living Apothecary ─────────────────── */}
      <section aria-label="About Intangible Heritage" style={{ paddingBlock: '5rem', background: '#fff' }}>
        <div className="container-site">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem', alignItems: 'center',
          }}>
            <div>
              <p style={{
                color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem',
              }}>
                The Legacy of Hela Wedakama
              </p>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Custodians of Ancient Medical Science
              </h2>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Sri Lanka’s indigenous medical system, <strong>Hela Wedakama</strong>, predates modern pharmacopeias by over two millennia. Championed by historical physician-kings such as King Buddhadasa (author of the <em>Sarartha Sangrahaya</em>), it combines deep botanical knowledge, alchemy (Rasa Shastra), and holistic healing.
              </p>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We document rare ceremonial implements such as the <strong>Thel Thulāva</strong> (antique oil dispensing vessel), transcribe fragile palm-leaf manuscripts, and support living hereditary doctors (Wedamahathwaru) across Sri Lanka.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn-primary" id="home-about-link">
                  Our Mission & History <ChevronRight size={16} />
                </Link>
                <Link href="/research" className="btn-secondary" id="home-research-btn">
                  Read Research Papers
                </Link>
              </div>
            </div>

            <div style={{
              position: 'relative', borderRadius: '1rem', overflow: 'hidden',
              aspectRatio: '4/3', boxShadow: 'var(--shadow-hover)',
            }}>
              <Image
                src="/images/hela-wedakama.jpg"
                alt="Traditional Sri Lankan Hela Wedakama apothecary room with herbs and medicinal oils"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute', bottom: '1.25rem', left: '1.25rem',
                background: 'rgba(92,58,33,0.95)', color: '#fff',
                padding: '0.6rem 1.1rem', borderRadius: '0.5rem',
                fontSize: '0.82rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-accent)' }} />
                Authentic Heritage Documentation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Museum Items ──────────────────────────────── */}
      <section aria-label="Featured museum items" style={{ paddingBlock: '5rem', background: '#FAF6F0' }}>
        <div className="container-site">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
          }}>
            <div>
              <p style={{
                color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem',
              }}>
                Virtual Museum & Gallery
              </p>
              <h2 className="section-title">Featured Medical & Sacred Artifacts</h2>
            </div>
            <Link href="/museum" className="btn-secondary" id="home-museum-link">
              View All Exhibits <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.75rem',
          }}>
            {featured.map(item => (
              <article key={item.id} className="heritage-card">
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="card-img"
                  />
                  <div style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: 'var(--color-primary)', color: 'var(--color-accent)',
                    padding: '0.2rem 0.6rem', borderRadius: '0.3rem', fontSize: '0.72rem', fontWeight: 700,
                  }}>
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
                    {truncate(item.description, 20)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`.card-img:hover { transform: scale(1.05); }`}</style>
      </section>

      {/* ── Upcoming Events & Workshops ────────────────────────── */}
      <section aria-label="Upcoming events" style={{ paddingBlock: '5rem', background: '#fff' }}>
        <div className="container-site">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
          }}>
            <div>
              <p style={{
                color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem',
              }}>
                Education & Workshops
              </p>
              <h2 className="section-title">Upcoming Heritage Masterclasses</h2>
            </div>
            <Link href="/events" className="btn-secondary" id="home-events-link">
              All Workshops <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}>
            {upcoming.map(event => (
              <article key={event.id} className="heritage-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: 'var(--color-accent)', color: 'var(--color-primary)',
                    padding: '0.25rem 0.65rem', borderRadius: '0.3rem', fontSize: '0.75rem', fontWeight: 700,
                  }}>
                    {event.category}
                  </div>
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700,
                    color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.35,
                  }}>
                    {event.title}
                  </h3>
                  <div style={{
                    fontSize: '0.82rem', color: 'var(--color-secondary)', display: 'flex',
                    flexDirection: 'column', gap: '0.25rem', marginBottom: '0.85rem',
                  }}>
                    <span><CalendarDays size={13} style={{ display: 'inline', marginRight: '5px' }} />
                      {formatDate(event.date)}
                    </span>
                    <span>📍 {event.venue}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.6, flex: 1 }}>
                    {truncate(event.description, 20)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Research & Publications ─────────────────────── */}
      <section aria-label="Latest research articles" style={{ paddingBlock: '5rem', background: '#FAF6F0' }}>
        <div className="container-site">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
          }}>
            <div>
              <p style={{
                color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem',
              }}>
                Scientific & Heritage Research
              </p>
              <h2 className="section-title">Latest Academic Publications</h2>
            </div>
            <Link href="/research" className="btn-secondary" id="home-research-link">
              View All Research <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {latest.map(article => (
              <article key={article.id} className="heritage-card"
                style={{ padding: '1.75rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{
                  background: 'var(--color-primary)', color: 'var(--color-accent)',
                  borderRadius: '0.75rem', padding: '0.9rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <BookOpen size={26} />
                </div>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    {article.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="badge" style={{ fontSize: '0.72rem' }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--color-primary)', marginBottom: '0.35rem', lineHeight: 1.35,
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {article.author} · {formatDate(article.date)}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary)', lineHeight: 1.65 }}>
                    {truncate(article.abstract, 28)}
                  </p>
                  <Link href={`/research/${article.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center',
                    gap: '0.3rem', marginTop: '0.85rem', fontSize: '0.85rem', fontWeight: 600,
                    color: 'var(--color-primary)', textDecoration: 'none',
                  }}>
                    Read Full Paper <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section aria-label="Support medical heritage" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #3a1e0c 100%)',
        paddingBlock: '4.5rem',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div className="container-site">
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🏺</span>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
            color: '#fff', fontWeight: 700, marginBottom: '1rem',
          }}>
            Safeguarding Sri Lanka’s Living Healing Wisdom
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.85)', maxWidth: '620px', margin: '0 auto 2.25rem',
            lineHeight: 1.75, fontSize: '1.05rem',
          }}>
            Explore our curated traditional apothecary, acquire certified handcrafted Thel Thulāva replicas, or support the digital restoration of ancient palm-leaf medical texts.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn-accent" id="home-shop-cta">
              Visit Traditional Apothecary
            </Link>
            <Link href="/contact" className="btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }} id="home-contact-cta">
              Partner with the Institute
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
