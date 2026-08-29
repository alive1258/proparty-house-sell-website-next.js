import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ClipboardCheck,
  Handshake,
  KeyRound,
  LineChart,
  Megaphone,
  PaintRoller,
  Sparkles,
  Tag,
  Timer,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ProcessTimeline from "@/src/components/Ui/ServicesPage/ProcessTimeline";
import ServicesFaqAccordion from "@/src/components/Ui/ServicesPage/ServicesFaqAccordion";

export const metadata: Metadata = {
  title: "Selling Guide",
  description:
    "A step-by-step home-selling guide covering pricing, staging, marketing, offers, and closing — from Meridian Homes.",
};

const STEPS = [
  {
    icon: LineChart,
    title: "Get a Valuation",
    description:
      "We run a comparative market analysis using recent local sales to price your home to sell, not sit.",
  },
  {
    icon: PaintRoller,
    title: "Prep & Stage",
    description:
      "Declutter, make small repairs, and stage key rooms — homes that show well consistently sell faster and closer to asking.",
  },
  {
    icon: Megaphone,
    title: "List & Market",
    description:
      "Professional photos, a compelling listing, and syndication across major portals put your home in front of serious buyers.",
  },
  {
    icon: Handshake,
    title: "Field Offers",
    description:
      "We review every offer with you side by side — price, financing, contingencies — and negotiate the best terms.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Appraisal",
    description:
      "We help you respond to inspection requests and make sure the appraisal supports the agreed sale price.",
  },
  {
    icon: KeyRound,
    title: "Close the Sale",
    description:
      "Sign the closing documents, hand over the keys, and get your proceeds — typically within 30–45 days of accepting an offer.",
  },
];

const STATS = [
  { value: "24", label: "Avg. Days on Market" },
  { value: "98%", label: "List-to-Sale Price Ratio" },
  { value: "3.2x", label: "More Views on Staged Listings" },
  { value: "45", label: "Days to Close, on Average" },
];

const TIPS = [
  {
    icon: Sparkles,
    title: "Boost Curb Appeal",
    description:
      "Fresh mulch, a clean walkway, and a tidy lawn make the first impression that gets buyers through the door.",
  },
  {
    icon: Camera,
    title: "Invest in Photography",
    description:
      "Listings with professional photos get significantly more online views than those shot on a phone.",
  },
  {
    icon: Tag,
    title: "Price It Right the First Time",
    description:
      "Overpricing leads to stale listings and price cuts — pricing at market value drives faster, stronger offers.",
  },
  {
    icon: Timer,
    title: "Be Flexible With Showings",
    description:
      "The more accessible your home is for showings, the faster it typically sells.",
  },
];

const FAQS = [
  {
    question: "How do you determine my home's listing price?",
    answer:
      "We pull recent comparable sales in your area, adjust for condition, upgrades, and lot size, and factor in current buyer demand to recommend a data-backed listing price.",
  },
  {
    question: "What repairs should I make before listing?",
    answer:
      "Focus on visible, low-cost fixes first — leaky faucets, chipped paint, broken fixtures — and let your agent flag anything a buyer's inspector is likely to catch.",
  },
  {
    question: "How much are closing costs for sellers?",
    answer:
      "Sellers typically pay agent commissions plus 1–3% of the sale price in closing costs, including title fees, transfer taxes, and any agreed-upon buyer concessions.",
  },
  {
    question: "Can I sell before I've bought my next home?",
    answer:
      "Yes — many sellers negotiate a rent-back period after closing, giving them extra time in the home while they finalize their next purchase.",
  },
];

export default function SellingGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Home Selling Guide"
        subtitle="Price it right, present it well, and close with confidence — here's how the sale process works from valuation to keys."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="For sale sign in front of a well-kept house"
      />

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              The Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Your Path to Selling, in Six Steps
            </h2>
          </div>
          <ProcessTimeline steps={STEPS} />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-900 py-14 md:py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gold-400">
                {value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-brand-100/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Sell for More
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
            Maximize Your Sale Price
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIPS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-900/10 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-bold text-brand-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Seller FAQs
          </h2>
          <div className="mt-8">
            <ServicesFaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Curious What Your Home Is Worth?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Get a free, no-obligation valuation from a local agent — usually
            within one business day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Get a Free Valuation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/management"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <TrendingUp size={16} />
              Renting It Out Instead?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
