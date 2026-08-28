import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
