import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  FileSignature,
  KeyRound,
  Landmark,
  Search,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Buyer's Guide",
  description:
    "A complete first-time buyer's guide — affordability, mortgage types, house hunting, offers, and closing — from Meridian Homes.",
};

const SECTIONS = [
  { id: "affordability", label: "Affordability", icon: Calculator },
  { id: "mortgage-types", label: "Mortgage Types", icon: Landmark },
  { id: "house-hunting", label: "House Hunting", icon: Search },
  { id: "making-an-offer", label: "Making an Offer", icon: FileSignature },
  { id: "closing", label: "Closing", icon: KeyRound },
  { id: "glossary", label: "Glossary", icon: BookOpen },
];

const GLOSSARY = [
  {
    term: "Pre-Approval",
    definition:
      "A lender's written estimate of how much you can borrow, based on a full review of your income, credit, and assets.",
  },
  {
    term: "Escrow",
    definition:
      "A neutral third party that holds funds and documents until every condition of the sale has been met.",
  },
  {
    term: "Contingency",
    definition:
      "A condition that must be met for the sale to proceed — common ones cover financing, inspection, and appraisal.",
  },
  {
    term: "PMI",
    definition:
      "Private mortgage insurance, typically required on conventional loans with less than 20% down.",
  },
  {
    term: "Appraisal",
    definition:
      "An independent estimate of a home's value, ordered by the lender to confirm it supports the loan amount.",
  },
  {
    term: "Title Insurance",
    definition:
      "A one-time policy that protects you and your lender against ownership disputes or liens on the property.",
  },
  {
    term: "Closing Costs",
    definition:
      "Fees due at closing beyond the down payment — typically 2–5% of the purchase price.",
  },
  {
    term: "Earnest Money",
    definition:
      "A deposit made with your offer to show you're serious — credited toward your down payment at closing.",
  },
];

export default function BuyersGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The Complete Buyer's Guide"
        subtitle="Everything a first-time buyer needs to know — affordability, mortgages, house hunting, offers, and closing — in one place."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Person reviewing a home buying guide with a laptop and coffee"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-14">
          {/* MOBILE PILL NAV */}
          <nav className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full border border-brand-900/15 px-4 py-2 text-xs font-semibold text-brand-900/70 transition hover:border-brand-600 hover:text-brand-600"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* DESKTOP STICKY NAV */}
          <nav className="hidden lg:sticky lg:top-28 lg:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-900/40">
              On This Page
            </p>
            <ul className="mt-4 space-y-1">
              {SECTIONS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-brand-900/70 transition hover:bg-brand-50 hover:text-brand-900"
                  >
                    <Icon size={15} className="shrink-0 text-brand-600" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/services/mortgage-calculator"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-brand-50 px-4 py-3 text-center text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
            >
              <Calculator size={14} />
              Try the Mortgage Calculator
            </Link>
          </nav>

          {/* CONTENT */}
          <div className="max-w-3xl space-y-16">
            <section id="affordability" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Step 1
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                How Much Home Can You Afford
              </h2>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                Before you look at a single listing, get a realistic number.
                Most lenders use two ratios: your total monthly debt
                (including the new mortgage) shouldn&apos;t exceed roughly
                36–43% of your gross monthly income, and housing costs alone
                are usually capped around 28%.
              </p>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                That number tells you your ceiling — not necessarily what you
                should spend. Leave room for closing costs, moving expenses,
                and an emergency fund after you close.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Check your credit score and fix errors before applying",
                  "Add up all recurring monthly debts (auto, student loans, credit cards)",
                  "Decide how much you can realistically put down",
                  "Get pre-approved, not just pre-qualified, before touring homes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-brand-900/75"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="mortgage-types" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Step 2
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                Understanding Mortgage Types
              </h2>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                The loan type you choose affects your down payment, your
                rate, and whether you carry mortgage insurance.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Conventional",
                    detail:
                      "Not government-backed. Typically needs a stronger credit profile; down payments start around 3–5%.",
                  },
                  {
                    name: "FHA",
                    detail:
                      "Government-insured with a lower credit bar. Down payments as low as 3.5%, but mortgage insurance is required.",
                  },
                  {
                    name: "VA",
                    detail:
                      "For eligible veterans and service members. Often zero down payment and no PMI.",
                  },
                  {
                    name: "Fixed vs. Adjustable",
                    detail:
                      "Fixed-rate loans lock your rate for the full term; adjustable-rate loans start lower but can change after an initial period.",
                  },
                ].map((loan) => (
                  <div
                    key={loan.name}
                    className="rounded-2xl border border-brand-900/10 p-5"
                  >
                    <h3 className="font-bold text-brand-900">{loan.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                      {loan.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="house-hunting" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Step 3
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                The Home Search
              </h2>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                Separate your must-haves from your nice-to-haves before you
                start touring — it keeps decision fatigue in check once
                you&apos;ve seen a dozen kitchens. Bring your agent a short,
                ranked list: location and commute, bedroom count, school
                district, and any deal-breakers like stairs or a shared wall.
              </p>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                Pay attention to things that are expensive to change later —
                layout, lot size, and location — over things that are easy to
                update, like paint or fixtures.
              </p>
            </section>

            <section id="making-an-offer" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Step 4
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                Making a Competitive Offer
              </h2>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                Your agent will pull recent comparable sales to help you land
                on a number that&apos;s competitive without overpaying. A
                strong offer isn&apos;t just about price — financing terms,
                contingencies, and your proposed closing date all factor into
                how a seller weighs it.
              </p>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                Once accepted, you&apos;ll typically put down earnest money —
                usually 1–3% of the purchase price — held in escrow and
                credited toward your down payment at closing.
              </p>
            </section>

            <section id="closing" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Step 5
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                Inspections, Appraisal & Closing
              </h2>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                A licensed inspector checks the property for issues that
                aren&apos;t obvious on a walkthrough — roof, foundation,
                electrical, plumbing, and HVAC. Around the same time, your
                lender orders an appraisal to confirm the home is worth the
                loan amount.
              </p>
              <p className="mt-4 text-brand-900/70 leading-relaxed">
                From accepted offer to closing day typically takes 30–45
                days. At closing, you&apos;ll sign the loan documents, pay
                closing costs, and get the keys — the home is officially
                yours.
              </p>
            </section>

            <section id="glossary" className="scroll-mt-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Reference
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
                Key Terms to Know
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {GLOSSARY.map((entry) => (
                  <div
                    key={entry.term}
                    className="rounded-2xl bg-brand-50/60 p-5"
                  >
                    <h3 className="font-bold text-brand-900">{entry.term}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                      {entry.definition}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Put This Into Practice?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Run your numbers, then browse homes in your budget or talk to an
            agent about next steps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services/mortgage-calculator"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              <Calculator size={16} />
              Estimate My Payment
            </Link>
            <Link
              href="/properties?intent=buy"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Homes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
