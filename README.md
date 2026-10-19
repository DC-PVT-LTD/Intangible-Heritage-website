# Intangible Heritage — Sri Lanka

A complete, production-ready Next.js 16 website for **Intangible Heritage**, a Sri Lankan cultural heritage organisation. Built with the App Router, TypeScript, Tailwind CSS v4, and `lucide-react`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display (headings) · Poppins (body) |
| Icons | lucide-react |
| Cart State | React Context + localStorage |
| Data | Local JSON files in `/data` |
| Email | Nodemailer (optional, via SMTP) |
| Images | next/image |

---

## Quick Start

```bash
# 1. Clone and install
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run development server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm run start
```

---

## Project Structure

```
intangible-heritage/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer + CartProvider)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us
│   ├── museum/
│   │   ├── page.tsx            # Museum page (server)
│   │   └── MuseumClient.tsx    # Gallery + lightbox + upload (client)
│   ├── events/page.tsx         # Events (upcoming & past)
│   ├── shop/
│   │   ├── page.tsx            # Shop page (server)
│   │   └── ShopClient.tsx      # Product grid + cart (client)
│   ├── cart/page.tsx           # Shopping cart
│   ├── research/
│   │   ├── page.tsx            # Articles list (server)
│   │   ├── ResearchClient.tsx  # Search + filter (client)
│   │   └── [slug]/page.tsx     # Individual article
│   ├── contact/page.tsx        # Contact form + info
│   ├── globals.css             # Global styles + Tailwind v4 theme
│   └── api/
│       ├── contact/route.ts    # Contact form API
│       └── upload/route.ts     # Photo upload API
├── components/
│   ├── Navbar.tsx              # Sticky header with hamburger menu
│   ├── Footer.tsx              # Site footer
│   └── CartContext.tsx         # Cart state (React Context)
├── data/
│   ├── museum.json             # Museum items
│   ├── events.json             # Events
│   ├── products.json           # Shop products
│   └── articles.json           # Research articles
├── lib/
│   ├── types.ts                # Shared TypeScript types
│   └── utils.ts                # Helper functions (formatting, etc.)
├── public/
│   ├── images/                 # Static site images
│   └── uploads/                # User-uploaded photos (gitignored)
└── .env.example                # Environment variable template
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|---|---|---|
| `UPLOAD_ADMIN_PASSWORD` | ✅ Yes | Password to protect the photo upload form |
| `SMTP_HOST` | Optional | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Optional | SMTP port (587 or 465) |
| `SMTP_USER` | Optional | SMTP username / email |
| `SMTP_PASS` | Optional | SMTP password / app password |
| `CONTACT_TO_EMAIL` | Optional | Where to send contact form submissions |

> If SMTP variables are not set, contact form submissions are logged to the server console only.

---

## Adding Content

### New Museum Item
Edit `data/museum.json` and add an entry:
```json
{
  "id": "7",
  "title": "Dumbara Mat Weaving",
  "description": "Traditional woven reed mats from the Dumbara valley...",
  "category": "Crafts",
  "image": "/images/dumbara-mats.jpg",
  "photographer": "Your Name",
  "year": 2026
}
```
Categories: `Dance` | `Crafts` | `Rituals` | `Music` | `Festivals`

### New Event
Edit `data/events.json`:
```json
{
  "id": "7",
  "title": "Craft Fair — Colombo 2027",
  "date": "2027-03-15",
  "endDate": "2027-03-17",
  "venue": "BMICH, Colombo",
  "description": "...",
  "image": "/images/your-image.jpg",
  "status": "upcoming",
  "category": "Fair"
}
```
Set `"status"` to `"upcoming"` or `"past"`.

### New Shop Product
Edit `data/products.json`:
```json
{
  "id": "7",
  "name": "Traditional Lacquer Box",
  "description": "Hand-painted lacquer box...",
  "price": 3500,
  "image": "/images/lacquer-box.jpg",
  "category": "Crafts",
  "inStock": true
}
```

### New Research Article
Edit `data/articles.json` and add a new entry with a unique `slug`. The slug becomes the URL: `/research/your-slug`.

---

## Photo Upload (Admin)

1. Set `UPLOAD_ADMIN_PASSWORD` in `.env.local`
2. Go to `/museum` → click **Upload Photo**
3. Fill in title, description, category, and select an image
4. Enter the admin password and submit
5. The image is saved to `public/uploads/` and appended to `data/museum.json`

> ⚠️ On serverless deployments (Vercel, Netlify), the filesystem is read-only. You will need to use a cloud storage solution (e.g. AWS S3, Cloudflare R2) and a database (e.g. Supabase, PlanetScale) to persist uploads permanently.

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Add environment variables in the Vercel dashboard.

### Self-hosted
```bash
npm run build
npm run start
```

---

## License

© 2026 Intangible Heritage Sri Lanka. All rights reserved.
