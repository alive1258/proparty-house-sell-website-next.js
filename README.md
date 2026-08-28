# Meridian Homes — Real Estate & Property Marketplace

A public-facing real estate marketing site — property search, featured listings, agent profiles, and lead-gen CTAs — built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. The frontend is being migrated from an earlier "yacht charter" template onto a real-estate domain; the public homepage and shared site chrome (Navbar, Footer, Logo, mobile nav, chat widget) have been fully rebranded, while some deeper routes and the CMS dashboard still carry code from that earlier project (see [Migration Status](#migration-status) below).

---

## Overview

| | |
|---|---|
| **Type** | Frontend (Next.js) consuming a REST API |
| **Audience** | Public property marketing site + internal content-management dashboard |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Redux Toolkit |
| **Rendering** | App Router with route groups for layout separation |

The codebase is organized into two experiences under a single Next.js App Router instance:

- **`(withCommonLayout)`** — the public site. The homepage (`/`) is a fully rebuilt real-estate landing page (see below); other routes under this group (yachts/destinations/experiences/booking/etc.) are inherited from the original template and have not yet been migrated to the property domain.
- **`(dashboardLayout)`** — the internal CMS: authenticated staff tooling. Currently still modeled around the original charter-platform content types (hero, testimonials, FAQs, blog, gallery, employees/roles, bookings, payments, live chat inbox). A property-listings module does not exist yet — the homepage's featured listings currently use typed static sample data instead.

---

## Homepage

`src/components/Ui/HomePage/RootHomePage/RootTemplet.tsx` composes the full real-estate landing page, in order:

1. **Hero** — Dubai skyline visual, headline, and an embedded property search card (Buy/Rent/Invest tabs, location, property type, price range)
2. **Property Categories** — Houses, Apartments, Villas, Penthouses, Townhouses, Land
3. **Featured Listings** — sample property cards (status badge, price, beds/baths/sqft)
4. **How It Works** — 4-step buying process
5. **Why Choose Us** — trust features + stats band
6. **Lifestyle** — image/copy split section
7. **Popular Locations** — city cards
8. **Testimonials** — auto-scrolling marquee
9. **Meet the Agents** — team grid
10. **FAQ** — accordion
11. **Final CTA band**

All homepage content is currently **static** (typed sample data colocated with each section, e.g. `FeaturedListings/data.ts`) rather than fetched from the backend — this avoided the previous issue where a stale `hero/active` record from the legacy backend was overriding the page copy, and keeps the homepage independent of a property-listings API that doesn't exist yet. Property photography is sourced from Unsplash (verified, stable CDN URLs) rather than placeholder/mockup images. See inline `TODO` comments in each section's data file for what a real backend integration should replace.

The single button/CTA accent color across the whole site is `#F54900` (Tailwind token `accent-500`, hover `accent-600`), defined in `src/app/globals.css`.

---

## Tech Stack

**Core**
- [Next.js 16](https://nextjs.org/) — App Router, file-based routing, image optimization, server/client component split
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing across pages, components, hooks, and API layer

**State & Data**
- [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux` — global state, RTK Query API slices
- `redux-persist` — persisted client state (e.g. auth session)
- [Axios](https://axios-http.com/) — typed HTTP client / API service layer
- `js-cookie` / `cookies-next` — cookie-based session handling
- `jwt-decode` — client-side token inspection

**Payments & Real-Time** *(inherited from the original charter platform — see Migration Status)*
- [Stripe Checkout](https://stripe.com/) — redirect-based payment flow
- [Socket.IO Client](https://socket.io/) — persistent WebSocket connection powering the live support chat widget and staff inbox

**UI & Forms**
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [react-hook-form](https://react-hook-form.com/) — form state and validation
- [react-datepicker](https://reactdatepicker.com/), `react-paginate`, `lucide-react`, `react-icons`
- `sweetalert2`, `react-toastify` — user feedback / alerts
- `recharts` — dashboard analytics and charts
- `html2canvas` + `jspdf` — client-side document/PDF export

**Tooling**
- ESLint 9 (flat config) with `eslint-config-next`
- `date-fns` for date formatting/manipulation

---

## Project Structure

```
src/
├── app/
│   ├── (withCommonLayout)/
│   │   ├── page.tsx               # Real-estate homepage (see Homepage section above)
│   │   └── yachts/ destinations/ experiences/ booking/ ...  # Legacy routes, not yet migrated
│   ├── (dashboardLayout)/
│   │   └── dashboard/             # Legacy CMS — see Migration Status
│   └── login/ signup/ otp/        # Authentication flows
├── components/
│   ├── Common/                    # Shared form controls, modals, auth UI
│   ├── Shared/
│   │   ├── MessageWidget/         # Floating real-time chat widget (public site)
│   │   └── Navbar/ Footer/ Logo/ MobileMenuSheet/ MobileBottomNav   # Rebranded — Meridian Homes
│   └── Ui/
│       ├── HomePage/              # Hero, PropertyCategories, FeaturedListings, HowItWorks,
│       │                          # WhyChooseUs, LifestyleSection, PopularLocations,
│       │                          # TestimonialsSection, MeetAgents, FaqSection, CtaBand
│       └── Dashboard/             # Legacy CMS modules — see Migration Status
├── redux/
│   ├── api/                    # RTK Query API slices (incl. chatApi)
│   └── features/auth/          # Auth state slice
├── services/                   # API service functions (Axios)
├── hooks/
│   └── useChatSocket.ts        # Socket.IO connection, message state, typing/read-receipt logic
├── helpers/ lib/ utils/        # Utilities, providers, shared constants/data
└── types/                      # Shared TypeScript types
```

---

## Migration Status

This project started as a yacht-charter platform and is being converted into a real-estate site. Current state:

**Done**
- Homepage (`/`) fully redesigned for the real-estate domain, static content, real property photography
- Shared site chrome rebranded: Navbar, Footer, Logo, mobile menu/bottom nav, chat widget copy and links
- Site-wide SEO metadata (`app/layout.tsx`) updated to Meridian Homes
- Single site-wide button accent color (`#F54900`)

**Not yet migrated** (still references the original yacht-charter domain, or is broken/incomplete pre-existing template code):
- `/yachts`, `/destinations`, `/experiences`, `/booking/*`, `/my-bookings` routes and their dashboard counterparts
- `dashboard/*` CMS modules (still modeled on yacht/booking/payment content types)
- No property-listings backend module exists — `/properties` is linked from the UI but not yet built
- Several `about/*` pages reference components that don't exist in the repo (pre-existing, unrelated to the rebrand)

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (recommended: latest LTS)
- npm (project is committed with `package-lock.json`)
- A running instance of the backend API

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=https://your-api-host/api
```

The Socket.IO client derives its connection origin from this same variable (stripping the `/api/v1` suffix), so no separate chat/socket URL needs to be configured.

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the public site, and `/dashboard` for the CMS (requires authentication).

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Deployment

The app builds as a standard Next.js application and deploys cleanly to [Vercel](https://vercel.com/) or any Node-compatible host. Ensure `NEXT_PUBLIC_API_URL` and any additional remote image hostnames (see `next.config.ts` → `images.remotePatterns` — currently includes Unsplash, Cloudinary, Picsum, and Pravatar) are configured per environment.

---

## Author

Built and maintained by **Zamirul Kabir** — frontend engineer specializing in Next.js/React platforms with integrated CMS tooling for non-technical stakeholders.
