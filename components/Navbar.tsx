'use client';
/**
 * components/Navbar.tsx
 * Redesigned navigation system based on design references:
 * 1. Desktop: Floating glassmorphic capsule/pill navbar with active solid highlight and Museum flyout menu.
 * 2. Mobile: Fixed floating bottom navigation dock with circular active badge (Home, Museum, Shop, Events, More),
 *    plus an interactive "More" slide-up drawer for secondary pages & category navigation.
 */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  Home,
  Landmark,
  ShoppingBag,
  Calendar,
  LayoutGrid,
  ShoppingCart,
  ChevronDown,
  X,
  Info,
  BookOpen,
  Phone,
  ShieldCheck,
} from 'lucide-react';
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
  const [museumHovered, setMuseumHovered] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scrolled class for sticky header shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close "More" drawer on route change
  useEffect(() => {
    setMoreOpen(false);
    setMuseumHovered(false);
  }, [pathname]);

  // Determine active states
  const isHomeActive = pathname === '/';
  const isMuseumActive = pathname.startsWith('/museum');
  const isShopActive = pathname.startsWith('/shop');
  const isEventsActive = pathname.startsWith('/events');
  const isResearchActive = pathname.startsWith('/research');
  const isAboutActive = pathname.startsWith('/about');
  const isContactActive = pathname.startsWith('/contact');
  const isAdminActive = pathname.startsWith('/admin');

  // For the mobile bottom dock "More" tab, highlight if in one of the sub-pages
  const isMoreActive =
    moreOpen || isAboutActive || isResearchActive || isContactActive || isAdminActive;

  return (
    <>
      {/* ── TOP HEADER ── */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        {/* Top institutional utility bar */}
        <div
          style={{
            background: '#2E1B0E',
            color: '#FAF6F0',
            fontSize: '0.76rem',
            paddingBlock: '0.35rem',
            borderBottom: '1px solid rgba(201, 166, 107, 0.25)',
          }}
        >
          <div
            className="container-site"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="hidden-mobile">🌿 National Repository for Sri Lankan Intangible Cultural Heritage</span>
              <span className="mobile-only-topbar">🌿 Sri Lanka Intangible Cultural Heritage</span>
              <span className="hidden-mobile" style={{ color: 'var(--color-accent)' }}>•</span>
              <span className="hidden-mobile">Art · Crafts · Brassware · Masks · Ayurveda · Landscapes · Festivals</span>
            </div>
            <div
              style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
              className="hidden-mobile"
            >
              <span>📞 +94 11 234 5678</span>
              <span>✉️ info@intangibleheritage.lk</span>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="container-site">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '72px',
              position: 'relative',
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.1,
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                Intangible Heritage
              </span>
            </Link>

            {/* ── DESKTOP CAPSULE NAVBAR (Screenshot 1 Reference) ── */}
            <div className="hidden-mobile desktop-capsule-wrapper">
              <div className="desktop-capsule-nav">
                {/* Home */}
                <Link
                  href="/"
                  className={isHomeActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  Home
                </Link>

                {/* Museum with Flyout Dropdown */}
                <div
                  className="museum-nav-container"
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setMuseumHovered(true)}
                  onMouseLeave={() => setMuseumHovered(false)}
                >
                  <Link
                    href="/museum"
                    id="navbar-museum-link"
                    className={isMuseumActive ? 'capsule-btn active' : 'capsule-btn'}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <span>Museum</span>
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
                      top: 'calc(100% + 10px)',
                      left: '50%',
                      minWidth: '260px',
                      background: '#ffffff',
                      borderRadius: '1rem',
                      boxShadow: '0 16px 40px rgba(43,27,16,0.18), 0 4px 12px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(201, 166, 107, 0.35)',
                      padding: '0.65rem',
                      zIndex: 100,
                      flexDirection: 'column',
                      gap: '0.2rem',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.45rem 0.75rem 0.55rem',
                        borderBottom: '1px solid var(--color-brown-50)',
                        marginBottom: '0.35rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Link
                        href="/museum"
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          color: 'var(--color-primary)',
                          textDecoration: 'none',
                        }}
                        onClick={() => setMuseumHovered(false)}
                      >
                        🏛️ All Museum Exhibits
                      </Link>
                    </div>

                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--color-accent)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.2rem 0.75rem',
                      }}
                    >
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
                          padding: '0.45rem 0.75rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.86rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          textDecoration: 'none',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Shop */}
                <Link
                  href="/shop"
                  className={isShopActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  Shop
                </Link>

                {/* Events */}
                <Link
                  href="/events"
                  className={isEventsActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  Events
                </Link>

                {/* Research */}
                <Link
                  href="/research"
                  className={isResearchActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  Research
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className={isAboutActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  About
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className={isContactActive ? 'capsule-btn active' : 'capsule-btn'}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Desktop Right Controls (Clean spacer) */}
            <div className="hidden-mobile" style={{ width: '42px' }} />


          </nav>
        </div>
      </header>

      {/* ── MOBILE BOTTOM NAVIGATION DOCK (Screenshot 2 Reference) ── */}
      <nav aria-label="Mobile Navigation Dock" className="mobile-bottom-dock-container">
        <div className="mobile-bottom-dock">
          {/* Tab 1: Home */}
          <Link
            href="/"
            className={`dock-tab ${isHomeActive ? 'dock-active' : ''}`}
            aria-label="Home"
          >
            <div className="dock-icon-box">
              <Home
                size={20}
                color={isHomeActive ? '#111827' : '#6B7280'}
                strokeWidth={isHomeActive ? 2.4 : 1.9}
              />
            </div>
            <span className="dock-label">Home</span>
          </Link>

          {/* Tab 2: Museum */}
          <Link
            href="/museum"
            className={`dock-tab ${isMuseumActive ? 'dock-active' : ''}`}
            aria-label="Museum"
          >
            <div className="dock-icon-box">
              <Landmark
                size={20}
                color={isMuseumActive ? '#111827' : '#6B7280'}
                strokeWidth={isMuseumActive ? 2.4 : 1.9}
              />
            </div>
            <span className="dock-label">Museum</span>
          </Link>

          {/* Tab 3: Shop */}
          <Link
            href="/shop"
            className={`dock-tab ${isShopActive ? 'dock-active' : ''}`}
            aria-label="Shop"
          >
            <div className="dock-icon-box" style={{ position: 'relative' }}>
              <ShoppingBag
                size={20}
                color={isShopActive ? '#111827' : '#6B7280'}
                strokeWidth={isShopActive ? 2.4 : 1.9}
              />
              {totalItems > 0 && !isShopActive && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#E08A24',
                  }}
                />
              )}
            </div>
            <span className="dock-label">Shop</span>
          </Link>

          {/* Tab 4: Events */}
          <Link
            href="/events"
            className={`dock-tab ${isEventsActive ? 'dock-active' : ''}`}
            aria-label="Events"
          >
            <div className="dock-icon-box">
              <Calendar
                size={20}
                color={isEventsActive ? '#111827' : '#6B7280'}
                strokeWidth={isEventsActive ? 2.4 : 1.9}
              />
            </div>
            <span className="dock-label">Events</span>
          </Link>

          {/* Tab 5: More (4-square grid icon from screenshot) */}
          <button
            type="button"
            onClick={() => setMoreOpen(prev => !prev)}
            className={`dock-tab ${isMoreActive ? 'dock-active' : ''}`}
            aria-label="More navigation"
            aria-expanded={moreOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div className="dock-icon-box">
              <LayoutGrid
                size={20}
                color={isMoreActive ? '#111827' : '#6B7280'}
                strokeWidth={isMoreActive ? 2.4 : 1.9}
              />
            </div>
            <span className="dock-label">More</span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE "MORE" SLIDE-UP SHEET / DRAWER ── */}
      {moreOpen && (
        <div
          className="more-sheet-backdrop"
          onClick={() => setMoreOpen(false)}
          aria-hidden="true"
        >
          <div
            className="more-sheet-content"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Additional Navigation Menu"
          >
            {/* Grabber handle */}
            <div className="more-sheet-handle" />

            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '0.85rem',
                borderBottom: '1px solid var(--color-brown-50)',
                marginBottom: '1rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    margin: 0,
                  }}
                >
                  Explore Sri Lankan Heritage
                </h3>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                  Cultural exhibits, living traditions & services
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMoreOpen(false)}
                aria-label="Close menu"
                style={{
                  background: 'var(--color-brown-50)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Pages Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <Link
                href="/about"
                className="sheet-link-card"
                onClick={() => setMoreOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 0.5rem',
                  background: isAboutActive ? 'var(--color-brown-100)' : 'var(--color-cream-50)',
                  border: '1px solid rgba(201, 166, 107, 0.3)',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                <Info size={20} color="var(--color-accent)" />
                <span>About Us</span>
              </Link>

              <Link
                href="/research"
                className="sheet-link-card"
                onClick={() => setMoreOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 0.5rem',
                  background: isResearchActive ? 'var(--color-brown-100)' : 'var(--color-cream-50)',
                  border: '1px solid rgba(201, 166, 107, 0.3)',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                <BookOpen size={20} color="var(--color-accent)" />
                <span>Research</span>
              </Link>

              <Link
                href="/contact"
                className="sheet-link-card"
                onClick={() => setMoreOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 0.5rem',
                  background: isContactActive ? 'var(--color-brown-100)' : 'var(--color-cream-50)',
                  border: '1px solid rgba(201, 166, 107, 0.3)',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                <Phone size={20} color="var(--color-accent)" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Museum Categories Direct Access */}
            <div style={{ marginBottom: '0.5rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent)',
                  marginBottom: '0.65rem',
                }}
              >
                Heritage Categories
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem',
                }}
              >
                {MUSEUM_CATEGORIES.map(cat => (
                  <Link
                    key={cat.name}
                    href={`/museum?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => setMoreOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0.65rem',
                      borderRadius: '0.5rem',
                      background: '#FAF6F0',
                      border: '1px solid rgba(201, 166, 107, 0.2)',
                      fontSize: '0.8rem',
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    <span>{cat.icon}</span>
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── STYLES ── */}
      <style>{`
        /* Desktop Capsule Nav (Screenshot 1 Reference) */
        .desktop-capsule-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desktop-capsule-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(92, 58, 33, 0.06);
          border: 1.5px solid rgba(201, 166, 107, 0.45);
          border-radius: 9999px;
          padding: 0.28rem 0.35rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 18px rgba(43, 27, 16, 0.06);
        }

        .capsule-btn {
          padding: 0.45rem 1.05rem;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--color-text);
          background: transparent;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .capsule-btn:hover {
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.7);
        }

        /* Active solid white capsule item (Screenshot 1: Home) */
        .capsule-btn.active {
          background: #ffffff !important;
          color: var(--color-primary) !important;
          font-weight: 700 !important;
          box-shadow: 0 2px 10px rgba(43, 27, 16, 0.12);
        }

        .museum-flyout-menu {
          display: none;
          opacity: 0;
          transform: translateX(-50%) translateY(8px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .museum-flyout-menu::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
        }

        .museum-nav-container:hover .museum-flyout-menu,
        .museum-nav-container:focus-within .museum-flyout-menu {
          display: flex !important;
          opacity: 1 !important;
          transform: translateX(-50%) translateY(0) !important;
          pointer-events: auto !important;
        }

        .museum-cat-item:hover {
          background: var(--color-brown-50) !important;
          color: var(--color-primary) !important;
          transform: translateX(4px);
        }

        .desktop-cart-icon:hover {
          background: var(--color-brown-100) !important;
          transform: scale(1.05);
        }

        .desktop-admin-badge:hover {
          background: var(--color-brown-100) !important;
          color: var(--color-primary) !important;
        }

        /* ── Mobile Bottom Navigation Dock (Screenshot 2 Reference) ── */
        .mobile-bottom-dock-container {
          display: none;
        }

        .mobile-only-topbar {
          display: none;
        }

        .hidden-mobile {
          display: flex !important;
        }

        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }

          .mobile-only-topbar {
            display: inline-block !important;
            font-size: 0.74rem;
            letter-spacing: 0.01em;
          }

          /* Floating Bottom Dock Container */
          .mobile-bottom-dock-container {
            display: block !important;
            position: fixed;
            bottom: 1.1rem;
            left: 1rem;
            right: 1rem;
            z-index: 990;
            max-width: 440px;
            margin-inline: auto;
            pointer-events: none;
          }

          .mobile-bottom-dock {
            pointer-events: auto;
            background: #ffffff;
            border-radius: 2rem;
            border: 1.5px solid rgba(201, 166, 107, 0.35);
            box-shadow: 0 14px 40px rgba(43, 27, 16, 0.20), 0 2px 8px rgba(0, 0, 0, 0.06);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0.45rem 0.5rem 0.5rem;
          }

          .dock-tab {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            flex: 1;
            transition: all 0.2s ease;
          }

          .dock-icon-box {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            background: transparent;
          }

          .dock-label {
            font-size: 0.72rem;
            font-weight: 500;
            color: #6B7280;
            margin-top: 2px;
            line-height: 1.1;
            transition: color 0.2s ease;
          }

          /* Active item in Screenshot 2 (Circle orange badge + colored label) */
          .dock-tab.dock-active .dock-icon-box {
            background: #E08A24;
            box-shadow: 0 4px 12px rgba(224, 138, 36, 0.4);
            transform: translateY(-2px);
          }

          .dock-tab.dock-active .dock-label {
            color: #E08A24;
            font-weight: 700;
          }

          /* "More" Slide-up Drawer */
          .more-sheet-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(43, 27, 16, 0.55);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            z-index: 1000;
            display: flex;
            align-items: flex-end;
            animation: fadeIn 0.2s ease;
          }

          .more-sheet-content {
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            background: #ffffff;
            border-top-left-radius: 1.75rem;
            border-top-right-radius: 1.75rem;
            border: 1px solid rgba(201, 166, 107, 0.35);
            padding: 1.25rem 1.25rem 2rem;
            box-shadow: 0 -10px 40px rgba(43, 27, 16, 0.25);
            animation: slideUpSheet 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .more-sheet-handle {
            width: 44px;
            height: 5px;
            background: #D1D5DB;
            border-radius: 999px;
            margin: 0 auto 1.1rem;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes slideUpSheet {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
