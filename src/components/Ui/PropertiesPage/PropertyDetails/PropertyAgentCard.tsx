import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import type { PropertyAgent } from "./propertyDetails";

const PropertyAgentCard = ({ agent }: { agent: PropertyAgent }) => (
  <div className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
    <p className="text-xs font-semibold uppercase tracking-widest text-brand-900/40">
      Listing Agent
    </p>

    <div className="mt-4 flex items-center gap-4">
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-brand-100">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
      <div>
        <p className="font-bold text-brand-900">{agent.name}</p>
        <p className="text-xs text-brand-900/50">{agent.role}</p>
      </div>
    </div>

    <div className="mt-5 space-y-2.5">
      <a
        href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
        className="flex items-center gap-2.5 rounded-lg border border-brand-900/10 px-3.5 py-2.5 text-sm text-brand-900 transition hover:bg-brand-50"
      >
        <Phone size={15} className="text-brand-600" />
        {agent.phone}
      </a>
      <a
        href={`mailto:${agent.email}`}
        className="flex items-center gap-2.5 rounded-lg border border-brand-900/10 px-3.5 py-2.5 text-sm text-brand-900 transition hover:bg-brand-50"
      >
        <Mail size={15} className="text-brand-600" />
        {agent.email}
      </a>
    </div>

    <Link
      href="/contact"
      className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
    >
      <CalendarCheck size={16} />
      Schedule a Tour
    </Link>
  </div>
);

export default PropertyAgentCard;
