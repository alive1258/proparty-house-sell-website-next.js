import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  FileBarChart,
  Gavel,
  Megaphone,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ServicesFaqAccordion from "@/src/components/Ui/ServicesPage/ServicesFaqAccordion";

export const metadata: Metadata = {
  title: "Property Management",
  description:
    "Full-service property management — tenant screening, rent collection, maintenance, and financial reporting — from Meridian Homes.",
};

const SERVICES = [
  {
    icon: UserCheck,
    title: "Tenant Screening",
    description:
      "Credit, background, income, and eviction history checks on every applicant before they sign a lease.",
  },
  {
    icon: Wallet,
    title: "Rent Collection",
    description:
      "Online rent payments, automated late-fee enforcement, and on-time monthly disbursements to owners.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "24/7 maintenance requests handled by a vetted network of local contractors at pre-negotiated rates.",
  },
  {
    icon: FileBarChart,
    title: "Financial Reporting",
    description:
      "Monthly statements and year-end tax summaries available anytime through your owner portal.",
  },
  {
    icon: Gavel,
    title: "Legal Compliance",
    description:
      "Leases, notices, and evictions handled in line with current state and local landlord-tenant law.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Leasing",
    description:
      "Professional listings syndicated across major rental sites to keep vacancy periods short.",
  },
];

const PLANS = [
  {
    name: "Essential",
    price: "6%",
    priceNote: "of monthly rent",
    description: "For owners who just want rent collected and books kept.",
    features: [
      "Rent collection & disbursement",
      "Monthly financial statements",
      "Tenant communication",
      "Annual lease renewal",
    ],
    highlighted: false,
  },
  {
    name: "Full-Service",
    price: "9%",
    priceNote: "of monthly rent",
    description: "Our most popular plan — hands-off ownership.",
    features: [
      "Everything in Essential",
      "Tenant screening & placement",
      "24/7 maintenance coordination",
      "Marketing & vacancy listing",
      "Legal notice handling",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "12%",
    priceNote: "of monthly rent",
    description: "For portfolios that need a dedicated point of contact.",
    features: [
      "Everything in Full-Service",
      "Dedicated portfolio manager",
      "Quarterly property inspections",
      "Eviction protection",
      "Priority contractor scheduling",
    ],
    highlighted: false,
  },
];

const STATS = [
  { icon: Users, value: "1,200+", label: "Units Under Management" },
  { icon: BadgeCheck, value: "97%", label: "On-Time Rent Collection" },
  { icon: ClipboardList, value: "< 18 days", label: "Avg. Vacancy Period" },
  { icon: ShieldCheck, value: "24/7", label: "Maintenance Response" },
];

const FAQS = [
  {
    question: "What areas do you manage properties in?",
    answer:
      "We manage single-family homes, condos, and small multifamily properties across all the markets we serve. Reach out with your property's location and we'll confirm coverage.",
  },
  {
    question: "How do you screen tenants?",
    answer:
      "Every applicant goes through credit, criminal background, eviction history, and income verification checks against our minimum qualifying standards before a lease is offered.",
  },
  {
    question: "Who pays for repairs and maintenance?",
    answer:
      "Owners are billed at cost for repairs, with no markup on our end. You set an approval threshold — anything above it requires your sign-off before work begins.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your management plan at any renewal period with 30 days' notice — no long-term lock-in required.",
  },
];

export default function PropertyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Property Management"
        subtitle="Hands-off ownership. We handle tenants, maintenance, and rent so your investment runs itself."
        image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="Modern rental apartment building exterior"
      />

      {/* SERVICES */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Full-Service Management
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
              Everything Your Property Needs
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-brand-900/10 p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-900 py-14 md:py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon size={22} className="text-gold-400" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                {value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-brand-100/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-brand-50/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Pricing
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
              A Plan for Every Portfolio
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl p-7 ${
                  plan.highlighted
                    ? "bg-brand-900 text-white shadow-lg lg:-translate-y-3"
                    : "border border-brand-900/10 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-brand-900">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-white" : "text-brand-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-brand-100/70" : "text-brand-900/60"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-gold-400" : "text-brand-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-brand-100/70" : "text-brand-900/50"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.highlighted ? "text-white/85" : "text-brand-900/75"
                      }`}
                    >
                      <CheckCircle2
                        size={17}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-gold-400" : "text-brand-600"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-gold-500 text-brand-900 hover:bg-gold-400"
                      : "border border-brand-900/15 text-brand-900 hover:bg-brand-50"
                  }`}
                >
                  Get Started
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Owner FAQs
          </h2>
          <div className="mt-8">
            <ServicesFaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let Us Manage the Details
          </h2>
          <p className="max-w-lg text-brand-100/80">
            Request a free property assessment and we&apos;ll recommend the
            right plan for your portfolio.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            Request a Free Assessment
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
