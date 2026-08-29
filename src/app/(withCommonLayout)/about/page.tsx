import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  Clock,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meridian Homes is a full-service real estate brokerage connecting buyers, sellers, renters, and investors with homes they'll love.",
};

const STATS = [
  { icon: Building2, value: "180+", label: "Projects Completed" },
  { icon: Users, value: "3.5K+", label: "Happy Clients" },
  { icon: Award, value: "40+", label: "Awards Won" },
  { icon: Clock, value: "12+", label: "Years Experience" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency First",
    description:
      "No hidden fees, no surprise terms — you know exactly what's happening at every stage of your transaction.",
  },
  {
    icon: Compass,
    title: "Local Market Expertise",
    description:
      "Our agents live and work in the neighborhoods they serve, so pricing and advice are always grounded in real data.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "We measure success by whether you'd refer us to family — not by how fast we can close a deal.",
  },
  {
    icon: Sparkles,
    title: "Modern Tools, Real Service",
    description:
      "Smart search, instant valuations, and a mortgage calculator — backed by agents who actually pick up the phone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Making Real Estate Simple"
        subtitle="Meridian Homes exists to make buying, selling, renting, and managing property feel straightforward — backed by agents who know the market cold."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Meridian Homes team reviewing a property listing"
      />

      {/* STORY */}
      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=80&w=1000&auto=format&fit=crop"
              alt="Modern home representing Meridian Homes listings"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Founded on One Idea: Real Estate Shouldn&apos;t Be Confusing
            </h2>
            <p className="mt-4 text-brand-900/60 leading-relaxed">
              Meridian Homes started in 2014 with a small team of agents who
              were tired of watching clients get lost in paperwork and jargon.
              Today we&apos;re a full-service brokerage covering buying,
              selling, rentals, investment, and property management — but the
              goal hasn&apos;t changed.
            </p>
            <p className="mt-4 text-brand-900/60 leading-relaxed">
              Every listing, every offer, and every lease still goes through
              agents who explain what&apos;s happening and why, so you can
              make decisions with confidence instead of guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-50/50 py-14 md:py-16">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                <Icon size={20} />
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-brand-900">
                {value}
              </p>
              <p className="text-xs sm:text-sm text-brand-900/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              The Values Behind Every Transaction
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
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

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Want to Talk to a Real Person?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Meet the agents who&apos;ll actually handle your move, or reach
            out and we&apos;ll match you with the right one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about/agents"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Meet Our Agents
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
