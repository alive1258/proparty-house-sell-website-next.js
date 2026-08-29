"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Heart, MapPin, Ruler } from "lucide-react";
import type { PropertyListing } from "./data";

const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`;

const PropertyListingCard = ({ property }: { property: PropertyListing }) => {
  const [saved, setSaved] = useState(false);
  const isLand = property.type === "Land";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-lg">
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
        onClick={() => setSaved((s) => !s)}
        aria-label={saved ? "Remove from saved properties" : "Save property"}
        aria-pressed={saved}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-900 transition hover:bg-white"
      >
        <Heart size={15} className={saved ? "fill-accent-500 text-accent-500" : ""} />
      </button>

      <Link href={`/properties/${property.slug}`} className="block p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
          {property.type}
        </p>
        <h3 className="mt-1 font-bold text-brand-900 transition-colors group-hover:text-brand-600">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-brand-900/60">
          <MapPin size={13} />
          {property.location}
        </p>
        <p className="mt-3 text-lg font-bold text-brand-700">
          {formatPrice(property.price)}
          <span className="text-xs font-medium text-brand-900/50">{property.period}</span>
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-brand-900/10 pt-4 text-xs text-brand-900/60">
          {isLand ? (
            <span className="flex items-center gap-1.5">
              <Ruler size={14} />
              {property.sqft.toLocaleString("en-US")} Sqft Lot
            </span>
          ) : (
            <>
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
                {property.sqft.toLocaleString("en-US")} Sqft
              </span>
            </>
          )}
        </div>
      </Link>
    </article>
  );
};

export default PropertyListingCard;
