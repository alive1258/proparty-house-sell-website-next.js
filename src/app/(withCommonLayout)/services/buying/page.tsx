import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Handshake,
  KeyRound,
  ListChecks,
  MapPinned,
  Percent,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ProcessTimeline from "@/src/components/Ui/ServicesPage/ProcessTimeline";
import ServicesFaqAccordion from "@/src/components/Ui/ServicesPage/ServicesFaqAccordion";

export const metadata: Metadata = {
  title: "Buying Guide",
  description:
    "A step-by-step home-buying guide covering pre-approval, house hunting, offers, inspections, and closing — from Meridian Homes.",
};

const STEPS = [
  {
    icon: Wallet,
    title: "Get Pre-Approved",
    description:
      "Talk to a lender to find out what you can borrow before you start touring — sellers take pre-approved buyers seriously.",
  },
  {
    icon: ListChecks,
    title: "Define Your Must-Haves",
    description:
      "List your non-negotiables — location, bedrooms, commute, school district — so your agent can narrow the search fast.",
  },
  {
    icon: MapPinned,
    title: "Tour Properties",
    description:
      "Your agent lines up showings and open houses, and flags anything that could affect resale value or cost you later.",
  },
  {
    icon: Handshake,
    title: "Make an Offer",
    description:
      "We build a competitive offer backed by comps, then negotiate price, contingencies, and closing timeline on your behalf.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Appraisal",
    description:
      "A licensed inspector checks the property and the lender orders an appraisal to confirm the home is worth the loan.",
  },
  {
    icon: KeyRound,
    title: "Close & Get Your Keys",
    description:
      "Sign the paperwork, fund the loan, and the home is officially yours — we'll be there for final walkthrough and closing.",
  },
];

const CHECKLIST = [
  "Government-issued photo ID",
  "Two years of tax returns and W-2s",
  "Recent pay stubs and proof of employment",
  "Two to three months of bank statements",
  "Down payment and closing cost funds",
  "Pre-approval letter from your lender",
];

const TIPS = [
  {
    icon: Percent,
    title: "Shop Your Rate",
    description:
      "Get quotes from at least three lenders — even a quarter-point difference adds up over a 30-year term.",
  },
  {
    icon: Banknote,
    title: "Budget for Closing Costs",
    description:
      "Set aside 2–5% of the purchase price for closing costs on top of your down payment.",
  },
  {
    icon: FileSearch,
    title: "Never Skip the Inspection",
    description:
      "A few hundred dollars now can save you from a costly surprise — roof, foundation, or HVAC — after you move in.",
  },
  {
    icon: ShieldCheck,
    title: "Keep Your Finances Steady",
    description:
      "Avoid new credit cards, large purchases, or job changes between pre-approval and closing.",
  },
];

const FAQS = [
  {
    question: "How much do I need for a down payment?",
    answer:
      "It depends on the loan program — conventional loans often allow as little as 3–5% down, while FHA loans start around 3.5%. Putting down 20% avoids private mortgage insurance (PMI).",
  },
  {
    question: "How long does the buying process take?",
    answer:
      "From your first showing to closing day, most buyers take 30–60 days once an offer is accepted — house hunting itself can take anywhere from a few weeks to a few months.",
  },
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is a quick estimate based on self-reported numbers. Pre-approval involves a lender verifying your income, credit, and assets — it carries far more weight with sellers.",
  },
  {
    question: "Do I need a buyer's agent if I'm just browsing listings online?",
    answer:
      "Yes — a buyer's agent doesn't cost you anything upfront in most transactions, and they'll negotiate on your behalf, coordinate inspections, and catch issues you might miss on your own.",
  },
];

export default function BuyingGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Home Buying Guide"
        subtitle="From your first pre-approval call to picking up the keys — here's exactly what to expect, step by step."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Couple reviewing paperwork in front of a new home"
      />

      {/* PROCESS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              The Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Your Path to Buying, in Six Steps
            </h2>
          </div>
          <ProcessTimeline steps={STEPS} />
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Get Ready
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
              What You&apos;ll Need Before You Apply
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-900/60">
              Gather these documents early so your pre-approval — and
              eventually your loan — doesn&apos;t stall waiting on paperwork.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-brand-900/80 shadow-sm"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIPS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Smart Buyer Tips
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIPS.map(({ icon: Icon, title, description }) => (
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

      {/* FAQ */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Buyer FAQs
          </h2>
          <div className="mt-8">
            <ServicesFaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Touring?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Browse current listings or run the numbers on a mortgage before
            you make an offer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/properties?intent=buy"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Browse Homes
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/mortgage-calculator"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Calculator size={16} />
              Estimate My Payment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
