import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyListing } from "../data";
import PropertyListingCard from "../PropertyListingCard";

const RelatedProperties = ({ properties }: { properties: PropertyListing[] }) => {
  if (properties.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Keep Exploring
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
              Discover More Properties
            </h2>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            View All Properties
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <PropertyListingCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProperties;
