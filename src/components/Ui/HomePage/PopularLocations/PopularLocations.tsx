import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const LOCATIONS = [
  {
    city: "Dubai Marina",
    region: "United Arab Emirates",
    count: "320+ Homes",
    image:
      "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=70&w=700&auto=format&fit=crop",
  },
  {
    city: "Seattle",
    region: "Washington, USA",
    count: "180+ Homes",
    image:
      "https://images.unsplash.com/photo-1784456794764-910ad9d48a60?fm=jpg&q=70&w=700&auto=format&fit=crop",
  },
  {
    city: "Naples",
    region: "Florida, USA",
    count: "140+ Homes",
    image:
      "https://images.unsplash.com/photo-1706164971293-2d58eb66242b?fm=jpg&q=70&w=700&auto=format&fit=crop",
  },
  {
    city: "Denver",
    region: "Colorado, USA",
    count: "210+ Homes",
    image:
      "https://images.unsplash.com/photo-1706164971299-cfa23ec76083?fm=jpg&q=70&w=700&auto=format&fit=crop",
  },
];

const PopularLocations = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Explore by City
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Popular Locations to Call Home
          </h2>
        </div>
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          Browse All Locations
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {LOCATIONS.map((loc) => (
          <Link
            key={loc.city}
            href={`/properties?location=${encodeURIComponent(loc.city)}`}
            className="group relative block aspect-4/5 overflow-hidden rounded-2xl"
          >
            <Image
              src={loc.image}
              alt={loc.city}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-900/90 via-brand-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <MapPin size={12} />
                {loc.region}
              </p>
              <p className="mt-1 text-lg font-bold">{loc.city}</p>
              <p className="mt-0.5 text-xs text-gold-400">{loc.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PopularLocations;
