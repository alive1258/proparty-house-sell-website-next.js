import Link from "next/link";
import { Building, Building2, Home, Landmark, TreePine, Warehouse } from "lucide-react";

const CATEGORIES = [
  { icon: Home, label: "Houses", count: "1,240 Listings", type: "House" },
  { icon: Building2, label: "Apartments", count: "980 Listings", type: "Apartment" },
  { icon: Landmark, label: "Villas", count: "410 Listings", type: "Villa" },
  { icon: Building, label: "Penthouses", count: "165 Listings", type: "Penthouse" },
  { icon: Warehouse, label: "Townhouses", count: "320 Listings", type: "Townhouse" },
  { icon: TreePine, label: "Land", count: "95 Listings", type: "Land" },
];

const PropertyCategories = () => (
  <section className="bg-brand-50/40 py-16 md:py-24">
    <div className="container">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Browse by Category
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
          Find the Property Type That Fits You
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map(({ icon: Icon, label, count, type }) => (
          <Link
            key={label}
            href={`/properties?type=${type}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
              <Icon size={22} />
            </span>
            <div>
              <p className="font-bold text-brand-900">{label}</p>
              <p className="mt-0.5 text-xs text-brand-900/50">{count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PropertyCategories;
