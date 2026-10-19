'use client';
/**
 * components/Navbar.tsx
 * Sticky top navigation bar with mobile hamburger menu.
 * Includes a cart icon badge linked to /cart.
 */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const NAV_LINKS = [
  { label: 'Home',                href: '/' },
  { label: 'About Us',            href: '/about' },
  { label: 'Museum',              href: '/museum' },
  { label: 'Events',              href: '/events' },
  { label: 'Shop',                href: '/shop' },
  { label: 'Research & Articles', href: '/research' },
  { label: 'Contact Us',          href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scrolled class for shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* Top institutional utility bar (IPM-inspired) */}
      <div style={{
        background: '#3d2413',
        color: '#FAF6F0',
        fontSize: '0.76rem',
        paddingBlock: '0.3rem',
        borderBottom: '1px solid rgba(201, 166, 107, 0.2)',
      }}>
        <div className="container-site" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>🌿 National Repository for Hela Wedakama & Traditional Healing</span>
            <span className="hidden-mobile" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="hidden-mobile">Specialized in Thel Thulāva & Ancient Pharmacopeia</span>
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
              Sri Lanka · Hela Wedakama & Culture
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', gap: '0.15rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}
              className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.3rem',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                    background: pathname === link.href ? 'var(--color-brown-50)' : 'transparent',
                    transition: 'color 0.15s, background 0.15s',
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      display: 'block',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '0.4rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                      background: pathname === link.href ? 'var(--color-brown-50)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <style>{`
        /* Show nav links on desktop, hide on mobile */
        .hidden-mobile { display: flex !important; }
        .mobile-controls { display: none !important; }
        .nav-link:hover { color: var(--color-primary) !important; background: var(--color-brown-50) !important; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
