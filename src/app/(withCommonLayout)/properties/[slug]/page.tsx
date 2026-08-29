import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MeetAgents from "@/src/components/Ui/HomePage/MeetAgents/MeetAgents";
import TestimonialsSection from "@/src/components/Ui/HomePage/TestimonialsSection/TestimonialsSection";
import CtaBand from "@/src/components/Ui/HomePage/CtaBand/CtaBand";
import PropertyGallery from "@/src/components/Ui/PropertiesPage/PropertyDetails/PropertyGallery";
import PropertyOverview from "@/src/components/Ui/PropertiesPage/PropertyDetails/PropertyOverview";
import PropertyAgentCard from "@/src/components/Ui/PropertiesPage/PropertyDetails/PropertyAgentCard";
import WhyChooseProperty from "@/src/components/Ui/PropertiesPage/PropertyDetails/WhyChooseProperty";
import RelatedProperties from "@/src/components/Ui/PropertiesPage/PropertyDetails/RelatedProperties";
import TrustedPartners from "@/src/components/Ui/PropertiesPage/PropertyDetails/TrustedPartners";
import NewsletterSignup from "@/src/components/Ui/PropertiesPage/PropertyDetails/NewsletterSignup";
import {
  getAllPropertySlugs,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/src/components/Ui/PropertiesPage/PropertyDetails/propertyDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: property.title,
    description: property.description[0],
    openGraph: {
      title: property.title,
      description: property.description[0],
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const related = getRelatedProperties(property);

  return (
    <>
      <section className="bg-white pt-8 md:pt-12">
        <div className="container">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
          >
            <ArrowLeft size={14} />
            Back to Properties
          </Link>

          <div className="mt-5">
            <PropertyGallery images={property.gallery} title={property.title} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <PropertyOverview property={property} />
          <PropertyAgentCard agent={property.agent} />
        </div>
      </section>

      <WhyChooseProperty title={property.title} highlights={property.highlights} />

      <TestimonialsSection />

      <CtaBand
        heading="Ready to Find Your Dream Home?"
        subtitle="Tell us what you're looking for and one of our agents will reach out within 24 hours."
        buttonLabel="Get Started Today"
        href="/contact"
      />

      <MeetAgents />

      <RelatedProperties properties={related} />

      <TrustedPartners />

      <NewsletterSignup />
    </>
  );
}
