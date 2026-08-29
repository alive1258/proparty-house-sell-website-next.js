import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Bath,
  Bed,
  Heart,
  Ruler,
  ShieldCheck,
  Users,
} from "lucide-react";
import PropertySearchForm from "./PropertySearchForm";

// Static content — no backend call. Swap for a CMS-driven fetch once a
// `/hero/active` record exists that's actually maintained for this site.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=80&w=1800&auto=format&fit=crop";

const HIGHLIGHT_LISTING = {
  image:
    "https://images.unsplash.com/photo-1784456794764-910ad9d48a60?fm=jpg&q=70&w=500&auto=format&fit=crop",
  title: "Marina View Penthouse",
  price: "$2,500",
  period: "/month",
  location: "Dubai Marina, UAE",
  beds: 4,
  baths: 3,
  sqft: 2500,
};

const TRUST_POINTS = [
  { icon: BadgeCheck, label: "Verified Properties" },
  { icon: Users, label: "Trusted by Thousands" },
  { icon: Award, label: "Expert Agents" },
  { icon: ShieldCheck, label: "Best Price Guarantee" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gray-900 pb-16 pt-10 md:pb-24 md:pt-16">
    <Image
      src={"/images/caption.jpg"}
      alt="Downtown Dubai skyline at dusk"
      fill
      priority
      sizes="100vw"
      className="o"
    />
    <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/20 to-gray-900/10" />
    {/* <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" /> */}

    <div className="container relative">
      <div className="max-w-xl pt-4 md:pt-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          <BadgeCheck size={13} />
          Find Your Perfect Property
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
          Where Dreams Turn Into
          <br />
          <span className="font-script text-5xl sm:text-6xl lg:text-7xl font-normal text-gold-400">
            Addresses
          </span>
        </h1>

        <p className="mt-6 text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
          Discover premium properties in prime locations and make your next move
          with confidence.
        </p>
      </div>

      <PropertySearchForm />

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs font-medium text-white/70 sm:justify-between">
        {TRUST_POINTS.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-2">
            <Icon size={15} className="text-gold-400" />
            {label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
