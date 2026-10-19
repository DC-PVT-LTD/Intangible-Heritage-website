import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

/* ── Google Fonts ── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

/* ── Site-wide Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL('https://intangibleheritage.lk'),
  title: {
    default: 'Intangible Heritage — Preserving Living Traditions of Sri Lanka',
    template: '%s | Intangible Heritage Sri Lanka',
  },
  description:
    'Intangible Heritage is a Sri Lankan cultural organization dedicated to preserving, documenting and celebrating the living intangible cultural heritage of Sri Lanka — from Kandyan dance and mask carving to Vesak lanterns and traditional music.',
  keywords: [
    'Sri Lanka', 'intangible heritage', 'Kandyan dance', 'cultural heritage',
    'UNESCO', 'mask carving', 'Ambalangoda', 'traditional music', 'Vesak', 'Perahera',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    siteName: 'Intangible Heritage Sri Lanka',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
