import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Percent, Receipt, Shield } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import MortgageCalculator from "@/src/components/Ui/ServicesPage/MortgageCalculator/MortgageCalculator";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment, including principal, interest, taxes, and insurance, with Meridian Homes' free mortgage calculator.",
};

const INFO_CARDS = [
  {
    icon: Percent,
    title: "Principal & Interest",
    description:
      "The core loan repayment — how much of your payment pays down the balance versus goes to interest each month.",
  },
  {
    icon: Receipt,
    title: "Property Taxes",
    description:
      "Set by your local county or municipality, usually billed annually and estimated here as a monthly amount.",
  },
  {
    icon: Shield,
    title: "Homeowners Insurance",
    description:
      "Typically required by lenders to protect the home against damage — costs vary by location and coverage level.",
  },
];

export default function MortgageCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Mortgage Calculator"
        subtitle="Estimate your monthly payment — including taxes, insurance, and HOA fees — before you start shopping for a home."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Small model house sitting on top of paperwork and a calculator"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <MortgageCalculator />
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-brand-900/45">
            This calculator provides an estimate for informational purposes
            only and does not constitute a loan offer or pre-approval. Actual
            rates, taxes, insurance costs, and payments will vary based on
            your lender, location, and credit profile.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Understanding Your Estimate
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
              What Goes Into Your Monthly Payment
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {INFO_CARDS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm"
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
            Like What You See?
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Browse homes in your budget or talk to one of our agents about
            getting pre-approved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              <Home size={16} />
              Browse Homes in Budget
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to a Lender
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
