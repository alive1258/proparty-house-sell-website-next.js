import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, Bed, Heart, MapPin, Ruler } from "lucide-react";
import { FEATURED_PROPERTIES } from "./data";

const FeaturedListings = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Handpicked for You
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Featured Listings Chosen Just for You
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
        {FEATURED_PROPERTIES.map((property) => (
          <article
            key={property.id}
            className="group relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg"
          >
            <Link href={`/properties/${property.slug}`} className="block">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                    property.status === "For Sale" ? "bg-brand-600" : "bg-gold-600"
                  }`}
                >
                  {property.status}
                </span>
              </div>
            </Link>
            <button
              type="button"
              aria-label="Save property"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-900 transition hover:bg-white"
            >
              <Heart size={15} />
            </button>

            <Link href={`/properties/${property.slug}`} className="block p-5">
              <h3 className="font-bold text-brand-900 transition-colors group-hover:text-brand-600">
                {property.title}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-brand-900/60">
                <MapPin size={13} />
                {property.location}
              </p>
              <p className="mt-3 text-lg font-bold text-brand-700">
                {property.price}
                <span className="text-xs font-medium text-brand-900/50">
                  {property.period}
                </span>
              </p>

              <div className="mt-4 flex items-center gap-4 border-t border-brand-900/10 pt-4 text-xs text-brand-900/60">
                <span className="flex items-center gap-1.5">
                  <Bed size={14} />
                  {property.beds} Beds
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath size={14} />
                  {property.baths} Baths
                </span>
                <span className="flex items-center gap-1.5">
                  <Ruler size={14} />
                  {property.sqft} Sqft
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedListings;
