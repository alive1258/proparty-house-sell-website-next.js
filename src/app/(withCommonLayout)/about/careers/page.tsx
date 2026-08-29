import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Building2,
  GraduationCap,
  Headset,
  LineChart,
  Megaphone,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Meridian Homes — licensed agent roles, property management, marketing, and client success positions across our offices.",
};

const ROLE_CATEGORIES = [
  {
    icon: Building2,
    title: "Listing & Buyer's Agents",
    description:
      "Licensed agents guiding clients through purchases, sales, and everything in between — commission-based with room to grow a book of business.",
  },
  {
    icon: Users,
    title: "Property Management",
    description:
      "Portfolio managers and maintenance coordinators keeping owner properties leased, maintained, and compliant.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Design",
    description:
      "Photographers, copywriters, and designers who make every listing look like the best one on the block.",
  },
  {
    icon: Headset,
    title: "Client Success & Operations",
    description:
      "Transaction coordinators and support staff keeping paperwork, closings, and client communication on track.",
  },
];

const BENEFITS = [
  {
    icon: BadgePercent,
    title: "Competitive Commission Splits",
    description:
      "Transparent, tiered commission structures that improve as you close more deals — no hidden desk fees.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Training & Mentorship",
    description:
      "New agents are paired with a senior mentor and get access to our full onboarding and CE curriculum.",
  },
  {
    icon: LineChart,
    title: "Real Growth Paths",
    description:
      "Move from agent to team lead to office manager — our senior leadership started exactly where you are.",
  },
  {
    icon: Sparkles,
    title: "Modern Tools & CRM",
    description:
      "Lead routing, e-signatures, and a CRM that actually works, so you spend time with clients, not paperwork.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Join the Team"
        subtitle="We hire licensed agents and shoreside staff who care about the same thing we do: a genuinely good client experience, every time."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Real estate team collaborating in an office"
      />

      {/* ROLE CATEGORIES */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Where You&apos;d Fit
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Roles Across the Brokerage
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ROLE_CATEGORIES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-brand-900/10 p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-brand-900/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Why Agents Choose Meridian Homes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-bold text-brand-900">{title}</h3>
                <p className="mt-1.5 text-sm text-brand-900/60 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center text-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Apply?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Send us your resume and the role you&apos;re interested in — our
            team will follow up directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Send Your Resume
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about/agents"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
