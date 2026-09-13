# 🚀 Dotbey - Digital Marketing & Creative Agency Website

Welcome to the **Dotbey** official agency web application codebase. Dotbey is a full-service digital marketing agency providing Web Engineering, Video Production, Studio Photography, Video Editing & Motion Graphics, Graphic & Poster Design, Meta Ads Management, SEO, and Brand Strategy.

This application has been engineered to be **lightning-fast, SEO-optimized, fully responsive across all screen sizes**, and packed with **Apple-like SaaS animations**.

---

## 🎨 Design Identity & Typography

- **Primary Brand Color**: Royal Electric Blue (`#0052FF`, `#0038B8`, `#1E60FF`) with ambient glows, glassmorphism, and crisp light/dark contrasts.
- **Main Font**: **Satoshi** (loaded via Fontshare CDN for crisp display rendering).
- **Italic Serif Accent Font**: **Playfair Display** (loaded via `next/font/google` for elegant emphasis on keywords like *"growth"*, *"experts"*, and *"pricing"*).
- **Animation System**: Powered by `framer-motion` for fluid physics, micro-interactions, scroll triggers, and dynamic spring transitions.

---

## 📁 Modular Project Structure

```
Dotbeyweb/
├── backend/                  # Python FastAPI Microservice
│   ├── app.py                # Lead ingestion, automated proposal API & JSON logging
│   └── requirements.txt      # Python dependencies (fastapi, uvicorn, pydantic)
├── public/                   # Static assets, favicon, OG images
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/      # Next.js API route for lead submissions
│   │   │       └── route.ts
│   │   ├── globals.css       # Design tokens, electric blue gradients, Satoshi & Playfair imports
│   │   ├── layout.tsx        # SEO Metadata, OpenGraph, JSON-LD Schema, Google Analytics
│   │   ├── page.tsx          # Main assembled single-page agency experience
│   │   ├── robots.ts         # Automated search engine robots.txt configuration
│   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   └── components/
│       ├── BookCallModal.tsx # Glassmorphism strategy call modal + confetti + date selector
│       ├── Experts.tsx       # "Meet our experts" carousel (Matching Figma Screenshot 1)
│       ├── FAQ.tsx           # Interactive collapsible accordion Q&A
│       ├── Footer.tsx        # Electric blue footer with translucent watermark (Matching Figma Screenshot 4)
│       ├── GoogleAnalytics.tsx# GA4 event & pageview tracking script
│       ├── Hero.tsx          # High-impact hero section (Matching Figma Screenshot 3)
│       ├── Navbar.tsx        # Floating white pill header menu with responsive mobile drawer
│       ├── Pricing.tsx       # "Simple pricing" cards (Starter, Growth, Scale) (Matching Figma Screenshot 2)
│       ├── Services.tsx      # Interactive 8-service grid with hover micro-interactions
│       └── Stats.tsx         # Live metrics ticker (500+ Projects, 10x ROI)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🌟 Detailed Component & Page Arrangement

### 1. Floating Pill Navigation (`components/Navbar.tsx`)
- Floating rounded menu bar with `dotbey` logo and active pulse indicator.
- Navigation links (`Home`, `About`, `Services`, `Pricing`, `Experts`, `FAQ`).
- `Book a call` blue pill CTA button.
- Mobile drawer with Framer Motion spring physics animations.

### 2. Hero Section (`components/Hero.tsx`) - *Figma Image 3*
- Vibrant royal blue radial gradient backdrop with glowing ambient light mesh.
- Headline: **"We don't build brands, we build *growth.*"** (*growth.* in Playfair Display italic serif).
- Subtitle detailing Dotbey's agency mission.
- Twin CTA buttons (`Explore our services` & `Book a call`).
- Social proof trust metrics.

### 3. Key Metrics Ticker (`components/Stats.tsx`)
- Highlights: 500+ Projects Delivered, 98% Client Retention, 10.4x Average ROI, ₹5Cr+ Meta Ads Spend Managed.

### 4. Agency Services Grid (`components/Services.tsx`)
- Interactive cards featuring: Web Engineering, Meta Ads & Performance, Video Production, Video Editing & Motion, Studio Photography, Graphic & Poster Design, SEO, and Brand Strategy.

### 5. Experts Carousel (`components/Experts.tsx`) - *Figma Image 1*
- Headline: **"Meet our *experts*"** with top-right blue circular arrow controls.
- Slide 1: Electric Blue Feature Card for **John Newman** (CEO & Co-Founder) with bio and social links (`Insta`, `Face`, `X`).
- Slide 2: Photo Card for **Carter John** (Photographer cum Videographer).
- Slide 3: Photo Card for **Richard Mille** (Creative Director cum Developer).
- Slide 4: Photo Card for **Sarah Jenkins** (Senior Meta Ads Strategist).

### 6. Pricing Section (`components/Pricing.tsx`) - *Figma Image 2*
- Headline: **"Simple *pricing*"**.
- **Starter**: ₹9,999 / Month (For individuals scaling their business).
- **Growth** (*Popular Highlighted Card*): ₹24,999 / Month (For growing businesses).
- **Scale**: Custom Pricing (Enterprise multi-channel marketing solution).
- Blue action buttons that directly trigger the Strategy Booking Modal with the selected plan prefilled.

### 7. Interactive Strategy Call Modal (`components/BookCallModal.tsx`)
- Glassmorphism pop-up overlay.
- Date and time slot picker.
- Multi-select tag selector for required services.
- Confetti celebration burst upon submission (`canvas-confetti`).

### 8. Footer Section (`components/Footer.tsx`) - *Figma Image 4*
- Deep blue gradient background with 3 structured link columns (Quick Links, Company, Social).
- Copyright bar: `2026 dotbey all rights reserved` | `Designed and developed by - Dotbey`.
- Huge translucent `DOTBEY` watermark logo spanning the background.

---

## 🔍 SEO & Analytics Optimizations

1. **JSON-LD Structured Data**: Embedded `ProfessionalService` schema in `layout.tsx` for rich Google Search Snippets.
2. **OpenGraph & Twitter Cards**: Full meta tags for social media sharing previews.
3. **Google Analytics 4**: Integrated in `GoogleAnalytics.tsx` with dynamic pageview tracking. Configure `NEXT_PUBLIC_GA_ID` in `.env.local`.
4. **Sitemap & Robots**: Automated XML sitemap at `/sitemap.xml` and `/robots.txt`.

---

## 🐍 Python Backend Service Setup

Dotbey includes a Python FastAPI backend for lead ingestion and automated proposal generation:

### Running the Python Backend
```bash
# Navigate to backend folder
cd backend

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
python app.py
```
- API Endpoint: `http://localhost:8000`
- Interactive API Documentation: `http://localhost:8000/docs`
- Lead Ingestion Endpoint: `POST /api/lead`
- Instant Proposal Engine: `POST /api/generate-proposal`

---

## ⚡ Quick Start Instructions

### 1. Install Node Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

*Built for Dotbey Agency - Engineered with Next.js, TypeScript, Tailwind CSS, Framer Motion, Satoshi, Playfair Display, and Python.*
