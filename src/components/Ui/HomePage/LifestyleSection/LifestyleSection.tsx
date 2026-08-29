import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Curated listings vetted by local experts",
  "Transparent pricing with no hidden fees",
  "Dedicated agent support from search to signing",
  "Flexible viewings that fit your schedule",
  "Verified property documents and ownership checks",
  "Neighborhood insights on schools, transit, and safety",
  "Personalized recommendations based on your budget",
  "Secure online paperwork and e-signing",
  "Post-move support for utilities and moving logistics",
  "No-pressure guidance at every step of the process",
  "Access to exclusive off-market properties",
  "Free property valuation and market analysis",
  "Financing and mortgage partner referrals",
  "Round-the-clock customer support via chat and phone",
];

const LifestyleSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1759238136854-a43787126db7?fm=jpg&q=80&w=1000&auto=format&fit=crop"
          alt="Modern living room with fireplace"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Your Next Chapter
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
          Step Into a Life You&apos;ll Love Coming Home To
        </h2>
        <p className="mt-4 text-brand-900/70 leading-relaxed">
          Whether you&apos;re buying, renting, or investing, our team helps
          you find a property that fits your lifestyle — and a process that
          respects your time.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-accent-500"
              />
              <span className="text-sm text-brand-900/70 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/properties"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          Get Started Today
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default LifestyleSection;
