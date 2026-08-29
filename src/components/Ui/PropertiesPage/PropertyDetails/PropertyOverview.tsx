import {
  Bath,
  Bed,
  Calendar,
  CarFront,
  CheckCircle2,
  Home,
  MapPin,
  Ruler,
} from "lucide-react";
import type { PropertyDetail } from "./propertyDetails";

const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`;

const PropertyOverview = ({ property }: { property: PropertyDetail }) => {
  const isLand = property.type === "Land";

  const stats = [
    { icon: Home, label: "Type", value: property.type },
    ...(isLand
      ? []
      : [
          { icon: Bed, label: "Beds", value: property.beds },
          { icon: Bath, label: "Baths", value: property.baths },
        ]),
    { icon: Ruler, label: isLand ? "Lot Size" : "Living Area", value: `${property.sqft.toLocaleString("en-US")} sqft` },
    { icon: Calendar, label: "Year Built", value: isLand ? "—" : property.yearBuilt },
    { icon: CarFront, label: "Garage", value: isLand ? "—" : `${property.garage} Car` },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ${
              property.status === "For Sale" ? "bg-brand-600" : "bg-gold-600"
            }`}
          >
            {property.status}
          </span>
          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
            {property.title}
          </h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-brand-900/60">
            <MapPin size={15} />
            {property.location}
          </p>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-brand-700">
          {formatPrice(property.price)}
          <span className="text-sm font-medium text-brand-900/50">
            {property.period}
          </span>
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-brand-900/10 p-5 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Icon size={17} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-900">{value}</p>
              <p className="text-[11px] uppercase tracking-wide text-brand-900/50">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-brand-900">Description</h2>
        <div className="mt-3 space-y-4">
          {property.description.map((paragraph, i) => (
            <p key={i} className="text-brand-900/70 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-brand-900">
          Amenities & Features
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {property.amenities.map((amenity) => (
            <li
              key={amenity}
              className="flex items-start gap-2.5 text-sm text-brand-900/75"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-brand-600"
              />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyOverview;
