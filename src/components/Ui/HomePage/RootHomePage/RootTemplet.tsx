import HeroSection from "../HeroSection/HeroSection";
import PropertyCategories from "../PropertyCategories/PropertyCategories";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import LifestyleSection from "../LifestyleSection/LifestyleSection";
import PopularLocations from "../PopularLocations/PopularLocations";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import MeetAgents from "../MeetAgents/MeetAgents";
import FaqSection from "../FaqSection/FaqSection";
import CtaBand from "../CtaBand/CtaBand";

const RootTemplet = () => (
  <>
    <HeroSection />
    <PropertyCategories />
    <PopularLocations />
    <FeaturedListings />
    <HowItWorks />
    <WhyChooseUs />
    <LifestyleSection />

    <TestimonialsSection />
    <MeetAgents />
    <FaqSection />
    <CtaBand />
  </>
);

export default RootTemplet;
