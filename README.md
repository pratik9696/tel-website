## ThinkEasyLabs Landing Page

Modern, production-ready SaaS landing page built with **Next.js (App Router)** and **Tailwind CSS**.

Designed for an **AI-powered analytics product for MSME manufacturing companies in India**.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/`: App Router pages + global styles
- `src/components/landing/`: Landing page sections (hero, problem, pricing, etc.)
- `src/components/ui/`: Reusable UI primitives (button, container)
- `src/lib/`: Utilities

## Notes

- **Smooth scroll** is enabled via `src/app/globals.css`.
- **SEO metadata** is set in `src/app/layout.tsx`. Optionally set `NEXT_PUBLIC_SITE_URL` in production.

## Deploy on Vercel

Push to GitHub and import the repo into Vercel. No extra configuration needed.
