import Image from "next/image";
import { Quote, Star, User } from "lucide-react";
import type { TestimonialItem } from "@/src/types/testimonialType";

// Static content — no backend call. Swap for a CMS-driven fetch once
// `/testimonials/active` is actually maintained for this site.
const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Daniel Carter",
    designation: "Real Estate Investor",
    image: "https://i.pravatar.cc/150?img=12",
    description:
      "Meridian Homes made investing in rental property painless — my agent found three properties that matched my numbers within a week.",
    rating: 5,
    position: 1,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Maria Gonzalez",
    designation: "Property Manager",
    image: "https://i.pravatar.cc/150?img=32",
    description:
      "Clear communication from the first call to closing. I've referred two other landlords since working with them.",
    rating: 5,
    position: 2,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Ethan Brooks",
    designation: "First-Time Home Buyer",
    image: "https://i.pravatar.cc/150?img=51",
    description:
      "As a first-time buyer I had a hundred questions — the team answered every one without ever making me feel rushed.",
    rating: 5,
    position: 3,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Sophia Bennett",
    designation: "Interior Designer",
    image: "https://i.pravatar.cc/150?img=47",
    description:
      "I source properties for clients constantly, and Meridian's listings are the most accurately described I've worked with.",
    rating: 5,
    position: 4,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Marcus Lee",
    designation: "Home Seller",
    image: "https://i.pravatar.cc/150?img=14",
    description:
      "Sold above asking in under three weeks. The pricing strategy they recommended was spot on.",
    rating: 5,
    position: 5,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "6",
    name: "Priya Nandan",
    designation: "Relocation Client",
    image: "https://i.pravatar.cc/150?img=25",
    description:
      "Moving cities is stressful enough — having an agent who handled everything remotely made it simple.",
    rating: 5,
    position: 6,
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialItem;
}) => (
  <div className="w-[220px] shrink-0 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:w-[300px]">
    <Quote size={22} className="text-brand-200" />

    <p className="mt-4 line-clamp-4 text-sm text-brand-900/70 leading-relaxed">
      &ldquo;{testimonial.description}&rdquo;
    </p>

    <div className="mt-4 flex gap-1 text-gold-500">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </div>

    <div className="mt-4 flex items-center gap-3 border-t border-brand-900/10 pt-4">
      {testimonial.image ? (
        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-brand-100">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="36px"
            className="object-cover"
          />
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <User size={15} />
        </span>
      )}
      <div className="text-left">
        <p className="text-sm font-bold text-brand-900">{testimonial.name}</p>
        {testimonial.designation && (
          <p className="text-xs text-brand-900/50">{testimonial.designation}</p>
        )}
      </div>
    </div>
  </div>
);

const MarqueeRow = ({
  testimonials,
  direction,
}: {
  testimonials: TestimonialItem[];
  direction: "left" | "right";
}) => (
  <div className="testimonial-fade overflow-hidden">
    <div
      className={`flex w-max gap-6 ${
        direction === "left"
          ? "animate-testimonial-left"
          : "animate-testimonial-right"
      }`}
    >
      {[...testimonials, ...testimonials].map((testimonial, i) => (
        <TestimonialCard
          key={`${testimonial.name}-${i}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const row1 = TESTIMONIALS.slice(0, mid);
  const row2 = TESTIMONIALS.slice(mid);

  return (
    <section className="overflow-hidden bg-brand-50/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Client Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Trusted by Homeowners, Loved for Our Service
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <MarqueeRow testimonials={row1} direction="left" />
        {row2.length > 0 && <MarqueeRow testimonials={row2} direction="right" />}
      </div>
    </section>
  );
};

export default TestimonialsSection;
