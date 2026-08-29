import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Handshake,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Buying, selling, property management, and mortgage tools from Meridian Homes — everything you need for your next move, in one place.",
};

const SERVICES = [
  {
    icon: KeyRound,
    title: "Buying Guide",
    description:
      "A step-by-step walkthrough of the home-buying process, from pre-approval to closing day.",
    href: "/services/buying",
  },
  {
    icon: Handshake,
    title: "Selling Guide",
    description:
      "Price it right, stage it well, and close with confidence with our proven selling playbook.",
    href: "/services/selling",
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    description:
      "Full-service leasing, maintenance, and rent collection so your investment runs itself.",
    href: "/services/management",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculator",
    description:
      "Estimate your monthly payment, interest cost, and affordability in a couple of clicks.",
    href: "/services/mortgage-calculator",
  },
];

const VALUE_PROPS = [
  {
    icon: Users,
    title: "Expert Local Agents",
    description:
      "Every client is paired with an agent who knows their target neighborhoods inside and out.",
  },
  {
    icon: TrendingUp,
    title: "Data-Backed Pricing",
    description:
      "We use live market comps, not guesswork, to price homes and evaluate offers.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, End-to-End",
    description:
      "No hidden fees. You know exactly what happens next at every stage of the transaction.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Real Estate Services, Start to Finish"
        subtitle="Whether you're buying, selling, managing an investment property, or just running the numbers — we've got a service built for it."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Modern home exterior with a for-sale sign"
      />

      {/* SERVICE CARDS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Pick the Service You Need
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-4 rounded-2xl border border-brand-900/10 p-6 transition hover:border-brand-600/30 hover:shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-brand-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                    {description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Why Work With Meridian Homes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
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

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Not Sure Where to Start?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Tell us what you&apos;re trying to do and we&apos;ll point you to
            the right service — or the right agent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Talk to an Agent
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
