import { Building2, Landmark, ShieldCheck, Home, Handshake, Scale } from "lucide-react";

// TODO: swap for real partner/MLS/lender logo marks once assets exist.
const PARTNERS = [
  { icon: Landmark, name: "National Mortgage Alliance" },
  { icon: Scale, name: "United Title & Escrow" },
  { icon: ShieldCheck, name: "HomeGuard Insurance" },
  { icon: Building2, name: "Metro Association of Realtors" },
  { icon: Home, name: "National MLS Network" },
  { icon: Handshake, name: "Certified Relocation Partners" },
];

const TrustedPartners = () => (
  <section className="border-y border-brand-900/10 bg-white py-14 md:py-16">
    <div className="container">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-900/40">
        Trusted by Leading Partners
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {PARTNERS.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 text-center text-brand-900/40 grayscale transition hover:text-brand-600 hover:grayscale-0"
          >
            <Icon size={26} />
            <span className="text-[11px] font-semibold leading-snug">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedPartners;
