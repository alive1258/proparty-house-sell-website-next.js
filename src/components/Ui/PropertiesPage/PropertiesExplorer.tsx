"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Building2, Home, KeyRound, LayoutGrid, TrendingUp } from "lucide-react";
import { PROPERTIES, type PropertyIntent, type PropertyType } from "./data";
import PropertyListingCard from "./PropertyListingCard";

const INTENT_TABS: { key: PropertyIntent | "all"; label: string; icon: typeof Home }[] = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "buy", label: "Buy", icon: Home },
  { key: "rent", label: "Rent", icon: KeyRound },
  { key: "invest", label: "Invest", icon: TrendingUp },
  { key: "new", label: "New Developments", icon: Building2 },
];

const PROPERTY_TYPES: PropertyType[] = [
  "House",
  "Apartment",
  "Villa",
  "Penthouse",
  "Townhouse",
  "Land",
];

const SALE_PRICE_RANGES = [
  { label: "Under $500K", value: "0-500000" },
  { label: "$500K - $1M", value: "500000-1000000" },
  { label: "$1M+", value: "1000000-plus" },
];

const RENT_PRICE_RANGES = [
  { label: "$500 - $1,500", value: "500-1500" },
  { label: "$1,500 - $3,000", value: "1500-3000" },
  { label: "$3,000+", value: "3000-plus" },
];

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const PAGE_SIZE = 8;

const isValidIntent = (v: string | null): v is PropertyIntent =>
  v === "buy" || v === "rent" || v === "invest" || v === "new";

const PropertiesExplorer = () => {
  const searchParams = useSearchParams();

  const [intent, setIntent] = useState<PropertyIntent | "all">(() => {
    const v = searchParams.get("intent");
    return isValidIntent(v) ? v : "all";
  });
  const [location, setLocation] = useState(() => searchParams.get("location") ?? "");
  const [type, setType] = useState(() => searchParams.get("type") ?? "");
  const [priceBucket, setPriceBucket] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const priceRanges = intent === "rent" ? RENT_PRICE_RANGES : SALE_PRICE_RANGES;

  const filtered = useMemo(() => {
    let results = PROPERTIES.filter((p) => {
      if (intent !== "all" && p.intent !== intent) return false;
      if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false;
      if (type && p.type !== type) return false;
      if (priceBucket) {
        const [minStr, maxStr] = priceBucket.split("-");
        const min = Number(minStr);
        const max = maxStr === "plus" ? Infinity : Number(maxStr);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    });

    if (sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);

    return results;
  }, [intent, location, type, priceBucket, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap gap-2">
          {INTENT_TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setIntent(key);
                setPriceBucket("");
                setPage(1);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                intent === key
                  ? "bg-brand-900 text-white"
                  : "border border-brand-900/10 text-brand-900/60 hover:bg-brand-50"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl border border-brand-900/10 p-5 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
              Location
            </span>
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setPage(1);
              }}
              placeholder="City or neighborhood"
              className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-900/40 focus:border-brand-500 focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
              Property Type
            </span>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
            >
              <option value="">Any type</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
              Price Range
            </span>
            <select
              value={priceBucket}
              onChange={(e) => {
                setPriceBucket(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
            >
              <option value="">Any price</option>
              {priceRanges.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-900/60">
              Sort By
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-lg border border-brand-900/10 bg-brand-50/50 px-3 py-2.5 text-sm text-brand-900 focus:border-brand-500 focus:outline-none"
            >
              {SORT_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-brand-900/60">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
        </p>

        {paged.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paged.map((property) => (
              <PropertyListingCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-brand-900/15 py-16 text-center">
            <p className="font-semibold text-brand-900">No properties match your filters</p>
            <p className="mt-1 text-sm text-brand-900/60">
              Try widening your search or clearing a filter.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-brand-900/10 px-3 py-2 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i + 1)}
                className={`h-9 w-9 rounded-lg text-sm font-semibold transition ${
                  currentPage === i + 1
                    ? "bg-brand-900 text-white"
                    : "text-brand-900/60 hover:bg-brand-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-brand-900/10 px-3 py-2 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesExplorer;
