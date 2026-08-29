import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "News & Press",
  description:
    "Company news, market updates, and press mentions from Meridian Homes.",
};

const ARTICLES = [
  {
    title: "Meridian Homes Opens New Office in Austin",
    category: "Company",
    date: "June 2026",
    excerpt:
      "Our fifth regional office extends dedicated agent support across the greater Austin metro area.",
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
  {
    title: "Q2 Market Report: Prices Stabilize Across Our Core Markets",
    category: "Market Update",
    date: "May 2026",
    excerpt:
      "Inventory is up and days-on-market are down for the first time in a year — what it means for buyers and sellers this quarter.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
  {
    title: "Meridian Homes Named a Top Brokerage to Work For",
    category: "Awards",
    date: "March 2026",
    excerpt:
      "Recognized for agent commission structure, training, and culture in this year's regional brokerage rankings.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
  {
    title: "Property Management Division Passes 1,200 Units",
    category: "Company",
    date: "January 2026",
    excerpt:
      "Our management team now oversees more than 1,200 units across four states, up from 400 just two years ago.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
  {
    title: "New Mortgage Calculator Tool Launches on Meridianhomes.com",
    category: "Product",
    date: "November 2025",
    excerpt:
      "Buyers can now estimate monthly payments — including taxes, insurance, and HOA fees — directly from any listing.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
  {
    title: "Meridian Homes Sponsors Local First-Time Homebuyer Workshop",
    category: "Community",
    date: "September 2025",
    excerpt:
      "Free monthly workshops walk first-time buyers through financing, offers, and closing — no obligation to work with an agent.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=75&w=900&auto=format&fit=crop",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="News & Press"
        subtitle="Company announcements, market updates, and press mentions from across Meridian Homes."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Newspaper and coffee on a desk"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1.5 text-brand-900/40 normal-case tracking-normal">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-bold text-brand-900 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-900/60 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center text-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Media & Press Inquiries
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Working on a story about Meridian Homes? Reach out and we&apos;ll
            get you what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              <Mail size={16} />
              Contact Media Relations
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read the Blog
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
