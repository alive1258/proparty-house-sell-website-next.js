import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import PropertiesExplorer from "@/src/components/Ui/PropertiesPage/PropertiesExplorer";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse homes for sale, rentals, investment properties, and new developments from Meridian Homes.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Listings"
        title="Find Your Next Property"
        subtitle="Browse homes for sale, rentals, and investment opportunities across our most popular markets."
        image="https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        alt="City skyline at dusk"
      />

      <Suspense fallback={null}>
        <PropertiesExplorer />
      </Suspense>
    </>
  );
}
