import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

const AGENTS = [
  {
    name: "Olivia Brooks",
    role: "Senior Listing Agent",
    image: "https://i.pravatar.cc/300?img=45",
    phone: "+1 (202) 555-0142",
    email: "olivia@meridianhomes.com",
  },
  {
    name: "Marcus Reed",
    role: "Buyer's Agent",
    image: "https://i.pravatar.cc/300?img=13",
    phone: "+1 (202) 555-0187",
    email: "marcus@meridianhomes.com",
  },
  {
    name: "Aisha Malik",
    role: "Investment Specialist",
    image: "https://i.pravatar.cc/300?img=44",
    phone: "+1 (202) 555-0163",
    email: "aisha@meridianhomes.com",
  },
  {
    name: "Noah Bennett",
    role: "Property Manager",
    image: "https://i.pravatar.cc/300?img=15",
    phone: "+1 (202) 555-0129",
    email: "noah@meridianhomes.com",
  },
];

const MeetAgents = () => (
  <section className="bg-brand-50/40 py-16 md:py-24">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Meet the Agents Behind Every Move
          </h2>
        </div>
        <Link
          href="/about/agents"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          View All Agents
          <ArrowRight size={15} />
        </Link>
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
              <p className="mt-0.5 text-xs text-brand-900/50">{agent.role}</p>
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
);

export default MeetAgents;
