import { CalendarCheck, FileSignature, KeyRound, Search } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Search Listings",
    description:
      "Filter by location, budget, and property type to shortlist homes you love.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Schedule a Tour",
    description:
      "Book an in-person or virtual walkthrough at a time that works for you.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Make an Offer",
    description:
      "Your agent handles negotiation and paperwork so you don't have to.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Close & Move In",
    description:
      "Sign, get your keys, and start the next chapter in your new home.",
  },
];

const HowItWorks = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Simple Process
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
          How It Works
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, step, title, description }) => (
          <div key={step} className="rounded-2xl border border-brand-900/10 p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-gold-400">
                <Icon size={18} />
              </span>
              <span className="text-3xl font-bold text-brand-900/10">{step}</span>
            </div>
            <h3 className="mt-4 font-bold text-brand-900">{title}</h3>
            <p className="mt-1.5 text-sm text-brand-900/60 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
