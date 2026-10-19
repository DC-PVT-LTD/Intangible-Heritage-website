/**
 * app/shop/page.tsx — Shop Page (server component)
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Product } from '@/lib/types';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Purchase authentic Sri Lankan heritage crafts, books, and cultural products. Support local artisans and preserve living traditions.',
};

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        paddingBlock: '4rem 3rem', textAlign: 'center', color: '#fff',
      }}>
        <div className="container-site">
          <ShoppingBag size={40} style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Traditional Apothecary & Implements
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Authentic handcrafted Thel Thulāva brass vessels, classical Hela Wedakama medicated oils, apothecary mortars, and palm-leaf archival editions. Every purchase directly supports traditional physicians and herbal conservation.
          </p>
          <Link href="/cart" className="btn-accent" id="shop-view-cart">
            View Cart
          </Link>
        </div>
      </div>

      <div style={{ paddingBlock: '4rem' }}>
        <div className="container-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
            gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-title">All Products</h2>
            <Link href="/cart" className="btn-secondary" style={{ fontSize: '0.88rem' }} id="shop-cart-link">
              View Cart / Checkout
            </Link>
          </div>

          <ShopClient products={productsData as Product[]} />

          {/* Info notice */}
          <div style={{
            marginTop: '3rem', padding: '1.25rem', borderRadius: '0.75rem',
            background: 'var(--color-brown-50)', border: '1px solid var(--color-brown-100)',
          }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary)', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--color-primary)' }}>📦 Ordering:</strong> Add items to your cart, then proceed to checkout. We will contact you via WhatsApp or email to confirm your order, discuss shipping options, and share payment details. All prices are in Sri Lankan Rupees (LKR). Delivery available island-wide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
