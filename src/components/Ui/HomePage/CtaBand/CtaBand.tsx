import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  heading?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}

const CtaBand = ({
  heading = "Let's Find Your Dream Property",
  subtitle = "Tell us what you're looking for and one of our agents will reach out within 24 hours.",
  buttonLabel = "Get Started Today",
  href = "/contact",
}: CtaBandProps) => (
  <section className="bg-brand-900 py-16 md:py-20">
    <div className="container flex flex-col items-center gap-5 text-center">
      <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
        {heading}
      </h2>
      <p className="max-w-xl text-brand-100/70">{subtitle}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600"
      >
        {buttonLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default CtaBand;
