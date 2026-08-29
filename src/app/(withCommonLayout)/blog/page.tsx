import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import type { BlogPaginatedResponse } from "@/src/types/blogType";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Real estate insights from Meridian Homes — market updates, buying and selling tips, and neighborhood guides.",
};

const FALLBACK_HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1800&auto=format&fit=crop";

async function getActiveBlogPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog?status=true&limit=50&sort_by=created_at&sort_order=DESC`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) return [];

    const body: BlogPaginatedResponse = await res.json();
    return body.data ?? [];
  } catch {
    return [];
  }
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getActiveBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Real Estate Insights & Stories"
        subtitle="Market updates, buying and selling tips, and neighborhood guides from the Meridian Homes team."
        image={posts[0]?.image ?? FALLBACK_HERO_IMAGE}
        alt="Modern home representing Meridian Homes editorial content"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          {posts.length === 0 ? (
            <p className="text-center text-brand-900/60">
              No articles are published yet. Please check back soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className=" transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {article.category?.category_name && (
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-900 backdrop-blur-sm">
                        {article.category.category_name}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="flex items-center gap-1.5 text-xs text-brand-900/50">
                      <CalendarDays size={13} />
                      {formatDate(article.created_at)}
                    </span>
                    <h3 className="mt-2 font-bold text-brand-900 leading-snug transition-colors group-hover:text-brand-600">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="mt-2 text-sm text-brand-900/60 leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:text-brand-900">
                      View Details
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center text-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to See It for Yourself?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Browse current listings and find the home that fits your next
            move.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            Browse Properties
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
