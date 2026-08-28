export type PropertyIntent = "buy" | "rent" | "invest" | "new";
export type PropertyStatus = "For Sale" | "For Rent";
export type PropertyType =
  | "House"
  | "Apartment"
  | "Villa"
  | "Penthouse"
  | "Townhouse"
  | "Land";

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  type: PropertyType;
  intent: PropertyIntent;
  status: PropertyStatus;
  image: string;
  price: number;
  period: "" | "/month";
  beds: number;
  baths: number;
  sqft: number;
}

const IMG = {
  villaPool:
    "https://images.unsplash.com/photo-1706164971299-cfa23ec76083?fm=jpg&q=75&w=700&auto=format&fit=crop",
  tower:
    "https://images.unsplash.com/photo-1784456794764-910ad9d48a60?fm=jpg&q=75&w=700&auto=format&fit=crop",
  poolNight:
    "https://images.unsplash.com/photo-1706164971293-2d58eb66242b?fm=jpg&q=75&w=700&auto=format&fit=crop",
  aptTrees:
    "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=75&w=700&auto=format&fit=crop",
  newBuild:
    "https://images.unsplash.com/photo-1777106322601-578dc9213ace?fm=jpg&q=75&w=700&auto=format&fit=crop",
  glassFacade:
    "https://images.unsplash.com/photo-1760235674447-fe0cc115b697?fm=jpg&q=75&w=700&auto=format&fit=crop",
  land: "https://images.unsplash.com/photo-1694730652852-9404a2d0214b?fm=jpg&q=75&w=700&auto=format&fit=crop",
  townRow:
    "https://images.unsplash.com/photo-1700593739220-dfd9c83c9e81?fm=jpg&q=75&w=700&auto=format&fit=crop",
  dubaiSkyline:
    "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=75&w=700&auto=format&fit=crop",
};

// TODO: replace with a live `/properties` API call once the
// property-listing backend module exists — kept as typed sample content
// in the meantime so this page has real filterable data to work with.
export const PROPERTIES: PropertyListing[] = [
  // ---- Buy (For Sale) ----
  { id: "b1", title: "Modern Family Villa", location: "Denver, CO", type: "House", intent: "buy", status: "For Sale", image: IMG.villaPool, price: 420000, period: "", beds: 3, baths: 2, sqft: 1900 },
  { id: "b2", title: "Downtown Luxury Loft", location: "Seattle, WA", type: "Apartment", intent: "buy", status: "For Sale", image: IMG.tower, price: 650000, period: "", beds: 2, baths: 2, sqft: 1450 },
  { id: "b3", title: "Oceanfront Estate", location: "Naples, FL", type: "Villa", intent: "buy", status: "For Sale", image: IMG.poolNight, price: 1250000, period: "", beds: 5, baths: 4, sqft: 3400 },
  { id: "b4", title: "Hillside Modern Home", location: "Portland, OR", type: "House", intent: "buy", status: "For Sale", image: IMG.newBuild, price: 540000, period: "", beds: 4, baths: 3, sqft: 2200 },

  // ---- Rent (For Rent) ----
  { id: "r1", title: "Marina View Penthouse", location: "Dubai Marina, UAE", type: "Penthouse", intent: "rent", status: "For Rent", image: IMG.dubaiSkyline, price: 2500, period: "/month", beds: 4, baths: 3, sqft: 2500 },
  { id: "r2", title: "City View Apartment", location: "Portland, OR", type: "Apartment", intent: "rent", status: "For Rent", image: IMG.aptTrees, price: 1550, period: "/month", beds: 2, baths: 1, sqft: 1150 },
  { id: "r3", title: "Glass Tower Residence", location: "Chicago, IL", type: "Apartment", intent: "rent", status: "For Rent", image: IMG.glassFacade, price: 2100, period: "/month", beds: 2, baths: 2, sqft: 1300 },
  { id: "r4", title: "Garden Townhouse", location: "Austin, TX", type: "Townhouse", intent: "rent", status: "For Rent", image: IMG.townRow, price: 1850, period: "/month", beds: 3, baths: 2, sqft: 1700 },

  // ---- Invest (For Sale) ----
  { id: "i1", title: "Rental Duplex Portfolio", location: "Denver, CO", type: "House", intent: "invest", status: "For Sale", image: IMG.villaPool, price: 380000, period: "", beds: 4, baths: 2, sqft: 2100 },
  { id: "i2", title: "Mixed-Use Downtown Building", location: "Seattle, WA", type: "Apartment", intent: "invest", status: "For Sale", image: IMG.tower, price: 920000, period: "", beds: 6, baths: 4, sqft: 3200 },
  { id: "i3", title: "Waterfront Land Parcel", location: "Naples, FL", type: "Land", intent: "invest", status: "For Sale", image: IMG.land, price: 310000, period: "", beds: 0, baths: 0, sqft: 52000 },
  { id: "i4", title: "Vacation Rental Villa", location: "Dubai Marina, UAE", type: "Villa", intent: "invest", status: "For Sale", image: IMG.dubaiSkyline, price: 780000, period: "", beds: 5, baths: 5, sqft: 3600 },

  // ---- New Developments (For Sale) ----
  { id: "n1", title: "Skyline Residences Phase II", location: "Denver, CO", type: "Apartment", intent: "new", status: "For Sale", image: IMG.newBuild, price: 510000, period: "", beds: 2, baths: 2, sqft: 1350 },
  { id: "n2", title: "The Meridian Townhomes", location: "Austin, TX", type: "Townhouse", intent: "new", status: "For Sale", image: IMG.townRow, price: 460000, period: "", beds: 3, baths: 3, sqft: 1950 },
  { id: "n3", title: "Harborline Towers", location: "Seattle, WA", type: "Apartment", intent: "new", status: "For Sale", image: IMG.glassFacade, price: 890000, period: "", beds: 3, baths: 2, sqft: 1800 },
  { id: "n4", title: "Sunset Ridge Villas", location: "Naples, FL", type: "Villa", intent: "new", status: "For Sale", image: IMG.poolNight, price: 1050000, period: "", beds: 4, baths: 4, sqft: 3100 },
];
