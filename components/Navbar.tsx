'use client';
/**
 * components/Navbar.tsx
 * Sticky top navigation bar with mobile hamburger menu.
 * Includes a hover dropdown for Museum categories and cart icon badge.
 */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from './CartContext';

const MUSEUM_CATEGORIES = [
  { name: 'Art', icon: '🎨' },
  { name: 'Crafts', icon: '🧵' },
  { name: 'Brassware', icon: '🪔' },
  { name: 'Masks', icon: '🎭' },
  { name: 'Ayurveda', icon: '🌿' },
  { name: 'Heritage Landscapes', icon: '🏞️' },
  { name: 'Perahera & Festivals', icon: '🥁' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMuseumOpen, setMobileMuseumOpen] = useState(false);
  const [museumHovered, setMuseumHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scrolled class for shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMuseumHovered(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* Top institutional utility bar */}
      <div style={{
        background: '#3d2413',
        color: '#FAF6F0',
        fontSize: '0.76rem',
        paddingBlock: '0.35rem',
        borderBottom: '1px solid rgba(201, 166, 107, 0.2)',
      }}>
        <div className="container-site" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🌿 National Repository for Sri Lankan Intangible Cultural Heritage</span>
            <span className="hidden-mobile" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="hidden-mobile">Art · Crafts · Brassware · Masks · Ayurveda · Landscapes · Festivals</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="hidden-mobile">
            <span>📞 +94 11 234 5678</span>
            <span>✉️ info@intangibleheritage.lk</span>
          </div>
        </div>
      </div>

      <div className="container-site">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              letterSpacing: '-0.01em',
            }}>
              Intangible Heritage
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Sri Lanka · Cultural Heritage & Living Traditions
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', gap: '0.2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}
              className="hidden-mobile">
            {/* Home */}
            <li>
              <Link
                href="/"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                href="/about"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/about' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/about' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                About Us
              </Link>
            </li>

            {/* Museum (Click navigates to /museum, Hover displays categories dropdown) */}
            <li
              className="museum-nav-container"
              style={{ position: 'relative' }}
              onMouseEnter={() => setMuseumHovered(true)}
              onMouseLeave={() => setMuseumHovered(false)}
            >
              <Link
                href="/museum"
                id="navbar-museum-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname.startsWith('/museum') ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname.startsWith('/museum') ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Museum
                <ChevronDown
                  size={14}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: museumHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Link>

              {/* Flyout Categories Dropdown */}
              <div
                className="museum-flyout-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  minWidth: '240px',
                  background: '#fff',
                  borderRadius: '0.75rem',
                  boxShadow: '0 12px 36px rgba(43,27,16,0.18)',
                  border: '1px solid var(--color-brown-100)',
                  padding: '0.6rem',
                  zIndex: 100,
                  display: museumHovered ? 'flex' : 'none',
                  flexDirection: 'column',
                  gap: '0.15rem',
                }}
              >
                <div style={{
                  padding: '0.4rem 0.65rem 0.5rem',
                  borderBottom: '1px solid var(--color-brown-50)',
                  marginBottom: '0.35rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <Link
                    href="/museum"
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                    }}
                    onClick={() => setMuseumHovered(false)}
                  >
                    🏛️ All Museum Exhibits
                  </Link>
                </div>

                <div style={{ fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.2rem 0.65rem' }}>
                  Filter by Category:
                </div>

                {MUSEUM_CATEGORIES.map(cat => (
                  <Link
                    key={cat.name}
                    href={`/museum?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => setMuseumHovered(false)}
                    className="museum-cat-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.4rem',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem' }}>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </li>

            {/* Events */}
            <li>
              <Link
                href="/events"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/events' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/events' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Events
              </Link>
            </li>

            {/* Shop */}
            <li>
              <Link
                href="/shop"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/shop' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/shop' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Shop
              </Link>
            </li>

            {/* Research */}
            <li>
              <Link
                href="/research"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/research' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/research' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Research & Articles
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/contact' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/contact' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Contact Us
              </Link>
            </li>

            {/* Admin */}
            <li>
              <Link
                href="/admin"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.3rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === '/admin' ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === '/admin' ? 'var(--color-brown-50)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                className="nav-link"
              >
                Admin
              </Link>
            </li>

            {/* Cart icon */}
            <li>
              <Link href="/cart" aria-label={`Shopping cart, ${totalItems} items`}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '0.4rem 0.6rem',
                  color: 'var(--color-primary)', textDecoration: 'none' }}>
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute', top: '-2px', right: '-2px',
                    background: 'var(--color-accent)', color: 'var(--color-primary)',
                    borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700,
                    width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile right: cart + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
            <Link href="/cart" aria-label="Cart"
              style={{ position: 'relative', display: 'flex', color: 'var(--color-primary)', textDecoration: 'none' }}>
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute', top: '-4px', right: '-4px',
                  background: 'var(--color-accent)', color: 'var(--color-primary)',
                  borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700,
                  width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', display: 'flex' }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav aria-label="Mobile navigation" style={{
            borderTop: '1px solid var(--color-brown-100)',
            paddingBlock: '0.75rem',
          }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>
                <Link
                  href="/"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/about' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/about' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  About Us
                </Link>
              </li>

              {/* Mobile Museum Accordion */}
              <li>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', background: pathname.startsWith('/museum') ? 'var(--color-brown-50)' : 'transparent' }}>
                  <Link
                    href="/museum"
                    style={{ fontWeight: 500, textDecoration: 'none', color: pathname.startsWith('/museum') ? 'var(--color-primary)' : 'var(--color-text)' }}
                  >
                    Museum
                  </Link>
                  <button
                    onClick={() => setMobileMuseumOpen(o => !o)}
                    aria-label="Toggle Museum categories"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', padding: '0.2rem' }}
                  >
                    <ChevronDown size={18} style={{ transform: mobileMuseumOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                </div>
                {mobileMuseumOpen && (
                  <ul style={{ listStyle: 'none', margin: '0.25rem 0 0.5rem 1rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem', borderLeft: '2px solid var(--color-brown-100)', paddingLeft: '0.5rem' }}>
                    <li>
                      <Link href="/museum" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'block', padding: '0.3rem 0' }}>
                        All Exhibits
                      </Link>
                    </li>
                    {MUSEUM_CATEGORIES.map(cat => (
                      <li key={cat.name}>
                        <Link
                          href={`/museum?category=${encodeURIComponent(cat.name)}`}
                          style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0' }}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/events"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/events' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/events' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/shop' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/shop' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/research' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/research' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Research & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/contact' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/contact' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  style={{ display: 'block', padding: '0.6rem 0.75rem', borderRadius: '0.4rem', fontWeight: 500, textDecoration: 'none', color: pathname === '/admin' ? 'var(--color-primary)' : 'var(--color-text)', background: pathname === '/admin' ? 'var(--color-brown-50)' : 'transparent' }}
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <style>{`
        /* Show nav links on desktop, hide on mobile */
        .hidden-mobile { display: flex !important; }
        .mobile-controls { display: none !important; }
        .nav-link:hover { color: var(--color-primary) !important; background: var(--color-brown-50) !important; }
        
        .museum-nav-container:hover .museum-flyout-menu {
          display: flex !important;
        }

        .museum-cat-item:hover {
          background: var(--color-brown-50) !important;
          color: var(--color-primary) !important;
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
