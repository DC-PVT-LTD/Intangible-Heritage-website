import type { Metadata } from 'next';
import { Suspense } from 'react';
import categoriesData from '@/data/categories.json';
import museumData from '@/data/museum.json';
import productsData from '@/data/products.json';
import eventsData from '@/data/events.json';
import articlesData from '@/data/articles.json';
import AdminClient from './AdminClient';
import type { HeritageCategoryItem, MuseumItem, Product, Event, Article } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Heritage Admin Portal',
  description: 'Manage Sri Lankan cultural heritage categories, exhibits, products, events, and research publications.',
};

export default function AdminPage() {
  return (
    <div style={{ minHeight: '80vh', paddingBlock: '3rem 5rem' }}>
      <div className="container-site">
        <Suspense fallback={<p style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-secondary)' }}>Loading admin portal...</p>}>
          <AdminClient
            initialCategories={categoriesData as HeritageCategoryItem[]}
            initialMuseum={museumData as MuseumItem[]}
            initialProducts={productsData as Product[]}
            initialEvents={eventsData as Event[]}
            initialArticles={articlesData as Article[]}
          />
        </Suspense>
      </div>
    </div>
  );
}
