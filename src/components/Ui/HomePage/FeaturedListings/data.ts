export interface FeaturedProperty {
  id: string;
  status: "For Sale" | "For Rent";
  image: string;
  title: string;
  location: string;
  price: string;
  period: string;
  beds: number;
  baths: number;
  sqft: number;
}

// TODO: replace with a live `/properties/featured` API call once the
// property-listing backend module exists — kept as typed sample content
// in the meantime so the section still renders real card data.
export const FEATURED_PROPERTIES: FeaturedProperty[] = [
  {
    id: "1",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1706164971299-cfa23ec76083?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Modern Family Villa",
    location: "Denver, CO",
    price: "$1,950",
    period: "/month",
    beds: 3,
    baths: 2,
    sqft: 1900,
  },
  {
    id: "2",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1784456794764-910ad9d48a60?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Downtown Luxury Loft",
    location: "Seattle, WA",
    price: "$3,100",
    period: "/month",
    beds: 2,
    baths: 2,
    sqft: 1450,
  },
  {
    id: "3",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1706164971293-2d58eb66242b?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Oceanfront Estate",
    location: "Naples, FL",
    price: "$2,850",
    period: "/month",
    beds: 5,
    baths: 4,
    sqft: 3400,
  },
  {
    id: "4",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "City View Apartment",
    location: "Portland, OR",
    price: "$1,550",
    period: "/month",
    beds: 2,
    baths: 1,
    sqft: 1150,
  },
  {
    id: "5",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Suburban Craftsman Home",
    location: "Austin, TX",
    price: "$2,200",
    period: "/month",
    beds: 4,
    baths: 3,
    sqft: 2600,
  },
  {
    id: "6",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Modern Minimalist House",
    location: "Phoenix, AZ",
    price: "$1,850",
    period: "/month",
    beds: 3,
    baths: 2,
    sqft: 1750,
  },
  {
    id: "7",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Lakeside Retreat",
    location: "Minneapolis, MN",
    price: "$2,650",
    period: "/month",
    beds: 4,
    baths: 3,
    sqft: 2950,
  },
  {
    id: "8",
    status: "For Rent",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?fm=jpg&q=75&w=700&auto=format&fit=crop",
    title: "Riverside Townhouse",
    location: "Charlotte, NC",
    price: "$1,975",
    period: "/month",
    beds: 3,
    baths: 2,
    sqft: 1600,
  },
];
