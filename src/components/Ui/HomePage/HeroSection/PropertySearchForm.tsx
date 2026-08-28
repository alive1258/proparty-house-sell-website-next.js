"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Home, KeyRound, MapPin, TrendingUp } from "lucide-react";

const TABS = [
  { key: "buy", label: "Buy", icon: Home },
  { key: "rent", label: "Rent", icon: KeyRound },
  { key: "invest", label: "Invest", icon: TrendingUp },
] as const;

const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Villa",
  "Penthouse",
  "Townhouse",
  "Land",
];

const PRICE_RANGES = [
  { label: "$500 - $1,500", value: "500-1500" },
  { label: "$1,500 - $3,000", value: "1500-3000" },
  { label: "$3,000 - $5,000", value: "3000-5000" },
  { label: "$5,000+", value: "5000-plus" },
];

const PropertySearchForm = () => {
  const router = useRouter();

  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("intent", tab);
    if (location) params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (priceRange) params.set("price", priceRange);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative z-10 mt-10 rounded-2xl bg-white p-5 shadow-xl sm:p-6 lg:max-w-3xl">
      <h2 className="text-lg font-bold text-brand-900">Find Your Best Property</h2>

      <div className="mt-4 flex gap-2">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === key
                ? "bg-brand-900 text-white"
                : "text-brand-900/60 hover:bg-brand-50"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSearch}
        className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            <MapPin size={13} />
            Location
          </span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a city or neighborhood"
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-900/40 focus:border-brand-500 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Property Type
          </span>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          >
            <option value="">Select type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-900/60">
            Price Range
          </span>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
          >
            <option value="">Any price</option>
            {PRICE_RANGES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          Search Property
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <ArrowRight size={14} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default PropertySearchForm;
