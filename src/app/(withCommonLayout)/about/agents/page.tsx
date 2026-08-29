import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck, TrendingUp, Users } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Our Agents",
  description:
    "Meet the licensed agents behind Meridian Homes — buyer's agents, listing specialists, investment advisors, and property managers.",
};

const AGENTS = [
  {
    name: "Olivia Brooks",
    role: "Senior Listing Agent",
    specialty: "Luxury Homes",
    image: "https://i.pravatar.cc/300?img=45",
    phone: "+1 (202) 555-0142",
    email: "olivia@meridianhomes.com",
  },
  {
    name: "Marcus Reed",
    role: "Buyer's Agent",
    specialty: "First-Time Buyers",
    image: "https://i.pravatar.cc/300?img=13",
    phone: "+1 (202) 555-0187",
    email: "marcus@meridianhomes.com",
  },
  {
    name: "Aisha Malik",
    role: "Investment Specialist",
    specialty: "Multi-Family & ROI",
    image: "https://i.pravatar.cc/300?img=44",
    phone: "+1 (202) 555-0163",
    email: "aisha@meridianhomes.com",
  },
  {
    name: "Noah Bennett",
    role: "Property Manager",
    specialty: "Rentals & Leasing",
    image: "https://i.pravatar.cc/300?img=15",
    phone: "+1 (202) 555-0129",
    email: "noah@meridianhomes.com",
  },
  {
    name: "Sofia Ramirez",
    role: "Listing Agent",
    specialty: "New Developments",
    image: "https://i.pravatar.cc/300?img=32",
    phone: "+1 (202) 555-0154",
    email: "sofia@meridianhomes.com",
  },
  {
    name: "James Carter",
    role: "Relocation Specialist",
    specialty: "Out-of-State Buyers",
    image: "https://i.pravatar.cc/300?img=52",
    phone: "+1 (202) 555-0171",
    email: "james@meridianhomes.com",
  },
  {
    name: "Priya Nair",
    role: "Buyer's Agent",
    specialty: "Condos & Townhomes",
    image: "https://i.pravatar.cc/300?img=47",
    phone: "+1 (202) 555-0118",
    email: "priya@meridianhomes.com",
  },
  {
    name: "Daniel Kim",
    role: "Commercial & Investment",
    specialty: "Mixed-Use Properties",
    image: "https://i.pravatar.cc/300?img=59",
    phone: "+1 (202) 555-0136",
    email: "daniel@meridianhomes.com",
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Licensed & Vetted",
    description:
      "Every agent is fully licensed and carries continuing education well beyond the state minimum.",
  },
  {
    icon: TrendingUp,
    title: "Real Track Records",
    description:
      "We match you with an agent based on closed deals in your target neighborhood, not seniority.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description:
      "Your agent stays with you from first showing to closing day — no hand-offs, no confusion.",
  },
];

export default function OurAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Agents"
        subtitle="A team of licensed, local specialists — matched to your move, not just the next available desk."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Real estate agent shaking hands with a client"
      />

      {/* AGENT GRID */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Meet the Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Agents Behind Every Move
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AGENTS.map((agent) => (
              <div
                key={agent.name}
                className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white text-center shadow-sm"
              >
                <div className="relative aspect-square">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-bold text-brand-900">{agent.name}</p>
                  <p className="mt-0.5 text-xs text-brand-900/50">
                    {agent.role}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-600">
                    {agent.specialty}
                  </span>
                  <div className="mt-4 flex items-center justify-center gap-3 border-t border-brand-900/10 pt-4">
                    <a
                      href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                      aria-label={`Call ${agent.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      <Phone size={14} />
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      aria-label={`Email ${agent.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR AGENTS */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Why Clients Choose Our Agents
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {WHY_US.map(({ icon: Icon, title, description }) => (
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
            Not Sure Who to Talk To?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Tell us what you&apos;re looking to do and we&apos;ll match you
            with the right agent — usually within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            Get Matched With an Agent
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
