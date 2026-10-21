'use client';
/**
 * app/cart/page.tsx — Shopping Cart Page
 */
import Image from 'next/image';

import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { formatLKR, buildWhatsAppUrl } from '@/lib/utils';
import SectionBackground from '@/components/decorations/SectionBackground';

export default function CartPage() {
  const { items, totalPrice, totalItems, removeFromCart, incrementItem, decrementItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="heritage-section-relative" style={{ paddingBlock: '8rem', textAlign: 'center', background: '#FAF6F0' }}>
        <SectionBackground theme="cream" leftDecor="punkalasa" rightDecor="crafts" opacity={0.18} />
        <div className="container-site heritage-section-content">
          <ShoppingBag size={60} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Your cart is empty
          </h1>
          <p style={{ color: 'var(--color-secondary)', marginBottom: '2rem' }}>
            Browse our shop and add some heritage items.
          </p>
          <Link href="/shop" className="btn-primary" id="cart-empty-shop-link">Browse Shop</Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = buildWhatsAppUrl(
    items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
    totalPrice
  );

  return (
    <>
      <div
        className="heritage-section-relative"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          paddingBlock: '3rem 2.5rem',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <SectionBackground theme="dark" leftDecor="brassware" rightDecor="crafts" opacity={0.25} />
        <div className="container-site heritage-section-content">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800, marginBottom: '0.5rem' }}>
            Shopping Cart
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="heritage-section-relative" style={{ paddingBlock: '3.5rem', background: '#FAF6F0' }}>
        <SectionBackground theme="cream" leftDecor="crafts" rightDecor="brassware" opacity={0.18} />
        <div className="container-site heritage-section-content">

          <div style={{ display: 'grid', gridTemplateColumns: '1fr min(340px, 100%)', gap: '2rem',
            alignItems: 'start' }}>

            {/* ── Items list ─────────────────────────────── */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {items.map(item => (
                  <div key={item.id} className="heritage-card"
                    style={{ padding: '1.1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '90px', height: '65px',
                      borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
                      <Image src={item.image} alt={item.name} fill
                        style={{ objectFit: 'cover' }} sizes="90px" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700,
                        color: 'var(--color-primary)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                        {item.name}
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                        {formatLKR(item.price)} each
                      </p>
                      {/* Quantity controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button onClick={() => decrementItem(item.id)} aria-label="Decrease quantity"
                          style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid var(--color-brown-100)',
                            background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-primary)' }}>
                          <Minus size={12} />
                        </button>
                        <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center', color: 'var(--color-primary)' }}>
                          {item.quantity}
                        </span>
                        <button onClick={() => incrementItem(item.id)} aria-label="Increase quantity"
                          style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid var(--color-brown-100)',
                            background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-primary)' }}>
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                        {formatLKR(item.price * item.quantity)}
                      </p>
                      <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444',
                          display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.8rem' }}>
                        <Trash2 size={13} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button onClick={clearCart} id="clear-cart-btn"
                  style={{ background: 'none', border: '1.5px solid #ef4444', color: '#ef4444',
                    padding: '0.4rem 1rem', borderRadius: '0.4rem', cursor: 'pointer',
                    fontSize: '0.85rem', fontWeight: 600 }}>
                  Clear Cart
                </button>
                <Link href="/shop" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* ── Order summary ──────────────────────────── */}
            <div className="heritage-card" style={{ padding: '1.75rem', position: 'sticky', top: '90px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700,
                color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Order Summary
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                {items.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between',
                    fontSize: '0.88rem', color: 'var(--color-secondary)' }}>
                    <span>{item.name} × {item.quantity}</span>
                    <span>{formatLKR(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-brown-100)', marginBottom: '1rem' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700,
                fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                <span>Total</span>
                <span>{formatLKR(totalPrice)}</span>
              </div>

              {/* WhatsApp checkout */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="whatsapp-checkout"
                className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex',
                  background: '#25d366', marginBottom: '0.75rem' }}>
                <MessageCircle size={16} /> Order via WhatsApp
              </a>

              {/* Email enquiry */}
              <a href={`mailto:shop@intangibleheritage.lk?subject=Shop Order Enquiry&body=Hello, I would like to order:\n${items.map(i => `- ${i.name} ×${i.quantity}`).join('\n')}\nTotal: ${formatLKR(totalPrice)}`}
                className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                id="email-checkout">
                Enquire by Email
              </a>

              <p style={{ fontSize: '0.78rem', color: 'var(--color-secondary)', marginTop: '1rem',
                textAlign: 'center', lineHeight: 1.5 }}>
                We will confirm availability and arrange payment after receiving your enquiry.
              </p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .cart-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
