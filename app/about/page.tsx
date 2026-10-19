/**
 * app/about/page.tsx — About Us Page
 * Intangible Heritage: Preserving Sri Lanka's Traditional Medical & Indigenous Healing Wisdom
 */
import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Eye, Target, Sparkles, Award, BookOpen, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Preserving Traditional Medical Heritage',
  description:
    'Learn about Intangible Heritage Sri Lanka — our mission, history, and scientific commitment to documenting Hela Wedakama, antique Thel Thulāva vessels, and ancient palm-leaf medical texts.',
};

const HERITAGE_TYPES = [
  { emoji: '🌿', title: 'Hela Wedakama (Desheeya Chikitsa)', desc: 'Indigenous medicine systems developed over 2,500 years, focusing on plant phytotherapy and dietetics.' },
  { emoji: '🏺', title: 'Thel Thulāva & Healing Implements', desc: 'Antique brass oil vessels, stone grinding tables (kalka gal), and surgical tools of royal physicians.' },
  { emoji: '📜', title: 'Puskola Poth (Palm-Leaf Manuscripts)', desc: 'Ancient treatises like Sarartha Sangrahaya, detailing secret lineage formulations and pulse diagnostics.' },
  { emoji: '🍶', title: 'Thel Sindima (Artisanal Oils)', desc: 'The intricate bio-thermal decoction and distillation of classical medicated herbal oils.' },
  { emoji: '🏛️', title: 'Monastic Hospital Archaeology', desc: 'Preserving historical sites like the 9th-century Mihintale monastery hospital and stone medicinal baths (Beheth Oru).' },
  { emoji: '🎭', title: 'Sanni Yakuma & Ritual Psychotherapy', desc: 'The integration of psychodrama, herbal fumigation, and spiritual healing for psychosomatic ailments.' },
];

const TEAM = [
  { name: 'Prof. Ariyasena Wickramarachchi', title: 'Executive Director & Ethnobotanist', bg: '#5C3A21' },
  { name: 'Dr. (Wedamahathmaya) K. B. Rathnayake', title: 'Head of Traditional Pharmacopeia', bg: '#8B5E3C' },
  { name: 'Dr. Manel Hettiarachchi', title: 'Senior Curator of Medical Archaeology', bg: '#C9A66B' },
  { name: 'Ven. Medhananda Thero', title: 'Director of Palm-Leaf Manuscript Conservation', bg: '#A07850' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #3d2110 100%)',
        paddingBlock: '4.5rem 3.5rem',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div className="container-site">
          <p style={{
            color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem',
          }}>
            Institutional Overview
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15,
          }}>
            About Intangible Heritage
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', maxWidth: '680px', margin: '0 auto',
            lineHeight: 1.75, fontSize: '1.05rem',
          }}>
            A national institution dedicated to the preservation, scientific documentation, and living practice of Sri Lanka’s indigenous medical science (Hela Wedakama) and traditional material culture.
          </p>
        </div>
      </div>

      {/* ── Our Story ──────────────────────────────────────────── */}
      <section aria-label="Our story" style={{ paddingBlock: '5rem', background: '#fff' }}>
        <div className="container-site">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem', alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem',
              }}>
                <Sparkles size={14} /> Our Genesis & Mandate
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Rescuing Ancient Healing Science
              </h2>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Founded in 2008 by a council of Ayurvedic scholars, hereditary physicians (Wedamahathwaru), and archaeological curators, <strong>Intangible Heritage</strong> began as a nationwide initiative to rescue rapidly deteriorating palm-leaf (Puskola) medical manuscripts and rare healing implements across the island.
              </p>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Sri Lanka possesses an unparalleled medical heritage, exemplified by King Buddhadasa’s 4th-century CE treatise <em>Sarartha Sangrahaya</em>, the monastic hospitals of Mihintale, and the exquisite metalcraft of the <strong>Thel Thulāva</strong> (antique oil dispensing vessel).
              </p>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8 }}>
                Today, working in synergy with national universities and UNESCO frameworks, we maintain living archives, support botanical herb preservation in sanctuaries like Ritigala, and ensure the authentic intergenerational transfer of Hela Wedakama.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1/1' }}>
                <Image src="/images/thel-thulava.jpg" alt="Antique Sri Lankan Thel Thulava brass vessel" fill
                  style={{ objectFit: 'cover' }} sizes="300px" />
              </div>
              <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1/1', marginTop: '1.5rem' }}>
                <Image src="/images/hela-wedakama.jpg" alt="Traditional apothecary room" fill
                  style={{ objectFit: 'cover' }} sizes="300px" />
              </div>
              <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1/1', marginTop: '-1.5rem' }}>
                <Image src="/images/beheth-oruwa.jpg" alt="Beheth Oruwa ancient medicinal canoe" fill
                  style={{ objectFit: 'cover' }} sizes="300px" />
              </div>
              <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1/1' }}>
                <Image src="/images/puskola-poth.jpg" alt="Ancient medical palm-leaf manuscripts" fill
                  style={{ objectFit: 'cover' }} sizes="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────────────── */}
      <section aria-label="Mission and vision" style={{ background: '#FAF6F0', paddingBlock: '5rem' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: Target,
                label: 'Our Mission',
                color: 'var(--color-primary)',
                text: 'To scientifically document, conserve, and revitalize Sri Lanka’s traditional medical wisdom (Hela Wedakama), antique healing implements, and botanical pharmacopeias, ensuring that hereditary medical knowledge remains vibrant, verified, and accessible for modern healthcare.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                color: 'var(--color-secondary)',
                text: 'A global landscape where Sri Lanka’s ancient healing science, sacred implements like the Thel Thulāva, and medicinal flora are celebrated, safeguarded, and recognized as an invaluable treasure of humanity’s living heritage.',
              },
              {
                icon: Heart,
                label: 'Our Core Values',
                color: '#C9A66B',
                text: 'Scientific Integrity · Respect for Lineage Healers · Botanical Sustainability · Rigorous Archival Standards · Intergenerational Transmission · Community Empowerment and Ethical Research.',
              },
            ].map(({ icon: Icon, label, color, text }) => (
              <div key={label} className="heritage-card" style={{ padding: '2.25rem', background: '#fff' }}>
                <div style={{
                  width: '54px', height: '54px', borderRadius: '0.75rem',
                  background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700,
                  color: 'var(--color-primary)', marginBottom: '0.75rem',
                }}>
                  {label}
                </h3>
                <p style={{ color: 'var(--color-secondary)', lineHeight: 1.75, fontSize: '0.92rem' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domains of Medical Heritage ────────────────────────── */}
      <section aria-label="Domains of medical heritage" style={{ paddingBlock: '5rem', background: '#fff' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Domains of Intangible Medical Heritage</h2>
            <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0.75rem auto 0' }}>
              Recognized under UNESCO guidelines, traditional medical knowledge represents an intricate tapestry of botany, metallurgy, psychotherapy, and spirituality.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.75rem' }}>
            {HERITAGE_TYPES.map(h => (
              <div key={h.title} className="heritage-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.2rem', flexShrink: 0 }}>{h.emoji}</span>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.35rem', fontSize: '1.05rem' }}>
                    {h.title}
                  </h3>
                  <p style={{ color: 'var(--color-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership & Advisory Council ──────────────────────── */}
      <section aria-label="Leadership team" style={{ background: '#FAF6F0', paddingBlock: '5rem' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem',
            }}>
              Scholarly Leadership
            </p>
            <h2 className="section-title">Advisory Council & Board</h2>
            <p className="section-subtitle" style={{ maxWidth: '580px', margin: '0.75rem auto 0' }}>
              Comprising foremost Ayurvedic doctors, university professors, and heritage conservationists.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {TEAM.map(member => (
              <div key={member.name} className="heritage-card" style={{ padding: '2rem', textAlign: 'center', background: '#fff' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: member.bg, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 1.25rem',
                }}>
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700,
                  color: 'var(--color-primary)', marginBottom: '0.35rem',
                }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--color-accent)', fontSize: '0.83rem', fontWeight: 600 }}>
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
