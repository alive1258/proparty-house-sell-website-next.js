import {
  PROPERTIES,
  type PropertyIntent,
  type PropertyListing,
  type PropertyType,
} from "../data";

export interface PropertyAgent {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
}

export interface PropertyHighlight {
  title: string;
  description: string;
}

export interface PropertyDetail extends PropertyListing {
  yearBuilt: number;
  lotSize: string;
  garage: number;
  description: string[];
  amenities: string[];
  highlights: PropertyHighlight[];
  gallery: string[];
  agent: PropertyAgent;
}

const AGENTS: PropertyAgent[] = [
  {
    name: "Olivia Brooks",
    role: "Senior Listing Agent",
    image: "https://i.pravatar.cc/300?img=45",
    phone: "+1 (202) 555-0142",
    email: "olivia@meridianhomes.com",
  },
  {
    name: "Marcus Reed",
    role: "Buyer's Agent",
    image: "https://i.pravatar.cc/300?img=13",
    phone: "+1 (202) 555-0187",
    email: "marcus@meridianhomes.com",
  },
  {
    name: "Aisha Malik",
    role: "Investment Specialist",
    image: "https://i.pravatar.cc/300?img=44",
    phone: "+1 (202) 555-0163",
    email: "aisha@meridianhomes.com",
  },
  {
    name: "Noah Bennett",
    role: "Property Manager",
    image: "https://i.pravatar.cc/300?img=15",
    phone: "+1 (202) 555-0129",
    email: "noah@meridianhomes.com",
  },
];

// Base photo pool (no size params) reused across galleries so every
// detail page has 6 extra angles without needing brand-new stock photos.
const GALLERY_POOL = [
  "https://images.unsplash.com/photo-1706164971299-cfa23ec76083",
  "https://images.unsplash.com/photo-1784456794764-910ad9d48a60",
  "https://images.unsplash.com/photo-1706164971293-2d58eb66242b",
  "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c",
  "https://images.unsplash.com/photo-1777106322601-578dc9213ace",
  "https://images.unsplash.com/photo-1760235674447-fe0cc115b697",
  "https://images.unsplash.com/photo-1694730652852-9404a2d0214b",
  "https://images.unsplash.com/photo-1700593739220-dfd9c83c9e81",
  "https://images.unsplash.com/photo-1748373448914-1d7f882700e2",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
];

const withParams = (base: string) =>
  `${base}?fm=jpg&q=80&w=1400&auto=format&fit=crop`;

const buildGallery = (listing: PropertyListing, index: number): string[] => {
  const ownBase = listing.image.split("?")[0];
  const others = GALLERY_POOL.filter((url) => url !== ownBase);
  const rotated = Array.from(
    { length: 6 },
    (_, i) => others[(index + i) % others.length],
  );
  return [ownBase, ...rotated].map(withParams);
};

const AMENITIES_COMMON = [
  "Central Air Conditioning",
  "High-Speed Internet Ready",
  "In-Unit Washer & Dryer",
  "Energy-Efficient Windows",
  "Smart Thermostat",
];

const AMENITIES_BY_TYPE: Record<PropertyType, string[]> = {
  House: ["Private Backyard", "Attached Two-Car Garage", "Hardwood Flooring", "Updated Kitchen Appliances"],
  Villa: ["Private Pool Access", "Landscaped Grounds", "Hardwood Flooring", "Chef-Style Kitchen"],
  Apartment: ["24/7 Concierge", "Fitness Center Access", "Secure Parking Garage", "Rooftop Lounge Access"],
  Penthouse: ["Floor-to-Ceiling Windows", "Private Elevator Access", "Rooftop Terrace", "Secure Parking Garage"],
  Townhouse: ["Private Patio", "Attached Garage", "HOA-Maintained Exterior", "Updated Kitchen Appliances"],
  Land: ["Utilities Available at Lot Line", "Zoned for Residential Use", "Cleared & Survey-Ready", "Road Frontage Access"],
};

const buildAmenities = (type: PropertyType): string[] =>
  type === "Land"
    ? AMENITIES_BY_TYPE.Land
    : [...AMENITIES_COMMON, ...AMENITIES_BY_TYPE[type]];

const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`;

const buildDescription = (
  listing: PropertyListing,
  yearBuilt: number,
): string[] => {
  const priceLabel =
    listing.period === "/month"
      ? `${formatPrice(listing.price)}/month`
      : formatPrice(listing.price);

  if (listing.type === "Land") {
    return [
      `This ${listing.sqft.toLocaleString("en-US")} sqft parcel in ${listing.location} is ready for its next build, with utilities available at the lot line and boundaries clearly surveyed.`,
      `Listed at ${priceLabel}, it's a straightforward entry point for buyers or investors planning new construction in a growing area.`,
    ];
  }

  const openingLine = `This ${listing.beds}-bedroom, ${listing.baths}-bathroom ${listing.type.toLowerCase()} in ${listing.location} offers ${listing.sqft.toLocaleString("en-US")} square feet of living space, built in ${yearBuilt}.`;

  const closingByIntent: Record<PropertyIntent, string> = {
    buy: `Priced at ${priceLabel}, it's a move-in-ready option for buyers who want space without compromising on location.`,
    rent: `Available at ${priceLabel}, it's a well-kept option for renters looking for a straightforward lease in a strong neighborhood.`,
    invest: `Listed at ${priceLabel}, it pencils out well for investors looking for steady rental demand in ${listing.location}.`,
    new: `Priced from ${priceLabel}, this new-build listing comes with builder warranties and modern finishes throughout.`,
  };

  return [openingLine, closingByIntent[listing.intent]];
};

const INTENT_HIGHLIGHT: Record<PropertyIntent, PropertyHighlight> = {
  buy: {
    title: "Move-In Ready",
    description: "Recently inspected with no major repairs needed — just bring your furniture.",
  },
  rent: {
    title: "Flexible Leasing",
    description: "Straightforward lease terms with responsive on-site maintenance.",
  },
  invest: {
    title: "Strong Rental Demand",
    description: "Located in a high-occupancy area with consistent year-over-year rent growth.",
  },
  new: {
    title: "Builder Warranty Included",
    description: "Backed by a builder warranty covering structure and major systems.",
  },
};

const TYPE_HIGHLIGHT: Record<PropertyType, PropertyHighlight> = {
  House: {
    title: "Private Outdoor Space",
    description: "A fenced yard and patio, ideal for entertaining or pets.",
  },
  Villa: {
    title: "Resort-Style Living",
    description: "Pool access and premium finishes throughout the property.",
  },
  Apartment: {
    title: "Building Amenities",
    description: "Fitness center, secure entry, and on-site management.",
  },
  Penthouse: {
    title: "Panoramic Views",
    description: "Floor-to-ceiling windows with unobstructed skyline views.",
  },
  Townhouse: {
    title: "Low-Maintenance Living",
    description: "Exterior upkeep is handled by the HOA, so you can skip the yard work.",
  },
  Land: {
    title: "Build-Ready Lot",
    description: "Surveyed, cleared, and zoned for immediate development.",
  },
};

const buildHighlights = (listing: PropertyListing): PropertyHighlight[] => [
  {
    title: "Prime Location",
    description: `Minutes from schools, shopping, and transit in ${listing.location}.`,
  },
  INTENT_HIGHLIGHT[listing.intent],
  TYPE_HIGHLIGHT[listing.type],
];

const buildLotSize = (listing: PropertyListing): string => {
  if (listing.type === "Land") return `${listing.sqft.toLocaleString("en-US")} sqft`;
  if (listing.type === "Apartment" || listing.type === "Penthouse") return "N/A (Building Lot)";
  return `${Math.round(listing.sqft * 1.6).toLocaleString("en-US")} sqft`;
};

const buildGarage = (listing: PropertyListing): number => {
  if (listing.type === "Land") return 0;
  if (listing.type === "Apartment" || listing.type === "Penthouse") return 1;
  return 2;
};

export const PROPERTY_DETAILS: Record<string, PropertyDetail> = Object.fromEntries(
  PROPERTIES.map((listing, index) => {
    const yearBuilt = 2024 - ((index * 3) % 22);

    const detail: PropertyDetail = {
      ...listing,
      yearBuilt,
      lotSize: buildLotSize(listing),
      garage: buildGarage(listing),
      description: buildDescription(listing, yearBuilt),
      amenities: buildAmenities(listing.type),
      highlights: buildHighlights(listing),
      gallery: buildGallery(listing, index),
      agent: AGENTS[index % AGENTS.length],
    };

    return [listing.slug, detail];
  }),
);

export const getPropertyBySlug = (slug: string): PropertyDetail | undefined =>
  PROPERTY_DETAILS[slug];

export const getAllPropertySlugs = (): string[] => PROPERTIES.map((p) => p.slug);

export const getRelatedProperties = (
  current: PropertyDetail,
  limit = 4,
): PropertyListing[] => {
  const sameType = PROPERTIES.filter(
    (p) => p.slug !== current.slug && p.type === current.type,
  );
  const sameIntent = PROPERTIES.filter(
    (p) =>
      p.slug !== current.slug &&
      p.intent === current.intent &&
      !sameType.some((s) => s.slug === p.slug),
  );
  const rest = PROPERTIES.filter(
    (p) =>
      p.slug !== current.slug &&
      !sameType.some((s) => s.slug === p.slug) &&
      !sameIntent.some((s) => s.slug === p.slug),
  );

  return [...sameType, ...sameIntent, ...rest].slice(0, limit);
};
