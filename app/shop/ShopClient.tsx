'use client';
/**
 * app/shop/ShopClient.tsx — Interactive shop product grid with cart integration
 */
import Image from 'next/image';
import { ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import type { Product } from '@/lib/types';
import { formatLKR } from '@/lib/utils';
import { useState } from 'react';

interface Props { products: Product[]; }

export default function ShopClient({ products }: Props) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1800);
  };

  const cartQty = (id: string) => items.find(i => i.id === id)?.quantity ?? 0;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
      {products.map(product => (
        <article key={product.id} className="heritage-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
            <Image
              src={product.image} alt={product.name}
              fill style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="product-img"
            />
            {!product.inStock && (
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(43,27,16,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ background: '#fff', color: 'var(--color-primary)',
                  padding: '0.3rem 0.9rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.82rem' }}>
                  Out of Stock
                </span>
              </div>
            )}
            <span className="badge" style={{
              position: 'absolute', top: '0.75rem', left: '0.75rem',
              background: 'rgba(255,255,255,0.92)',
            }}>
              {product.heritageCategory || product.category}
            </span>
          </div>

          <div style={{ padding: '1.1rem 1.2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700,
              color: 'var(--color-primary)', lineHeight: 1.3 }}>
              {product.name}
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-secondary)', lineHeight: 1.6, flex: 1 }}>
              {product.description.slice(0, 110)}…
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                {formatLKR(product.price)}
              </span>
              {cartQty(product.id) > 0 && (
                <span style={{ fontSize: '0.78rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {cartQty(product.id)} in cart
                </span>
              )}
            </div>

            <button
              onClick={() => handleAdd(product)}
              disabled={!product.inStock || added === product.id}
              id={`add-to-cart-${product.id}`}
              className="btn-primary"
              style={{
                width: '100%', justifyContent: 'center',
                background: added === product.id ? '#16a34a' : undefined,
                opacity: !product.inStock ? 0.5 : 1,
              }}
            >
              {added === product.id
                ? <><CheckCircle size={15} /> Added!</>
                : product.inStock
                  ? <><ShoppingCart size={15} /> Add to Cart</>
                  : <><XCircle size={15} /> Out of Stock</>}
            </button>
          </div>
        </article>
      ))}
      <style>{`.product-img:hover { transform: scale(1.05); }`}</style>
    </div>
  );
}
