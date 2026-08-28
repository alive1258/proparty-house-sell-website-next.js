import Image from "next/image";
import type { QuestionAnswer } from "@/src/redux/api/questionAnswerApi";
import FaqAccordion from "./FaqAccordion";

// Static content — no backend call. Swap for a CMS-driven fetch once
// `/question-answers/active` is actually maintained for this site.
const FAQS: QuestionAnswer[] = [
  {
    id: "1",
    question: "How do I find the right property?",
    answer:
      "Use our smart search to filter by location, property type, and budget — our agents can also match you with listings that fit your exact needs.",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "2",
    question: "What is the process of buying a home?",
    answer:
      "From pre-approval and property tours to offer negotiation and closing, our agents guide you through every step so nothing catches you off guard.",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "3",
    question: "Can I schedule a property tour online?",
    answer:
      "Yes — every listing page lets you book an in-person or virtual tour at a time that works for you.",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "4",
    question: "Do you help with mortgage financing?",
    answer:
      "We work with a network of trusted lenders and can help you compare rates and get pre-approved before you start touring homes.",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "5",
    question: "What documents do I need to sell my property?",
    answer:
      "You'll typically need proof of ownership, ID, and any relevant permits or inspection reports — your agent will send a full checklist up front.",
    is_active: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
];

const FaqSection = () => (
  <section id="faq" className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Good to Know
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1749930206000-179d0b85aa7e?fm=jpg&q=80&w=1200&auto=format&fit=crop"
            alt="Bright, modern home interior"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <FaqAccordion faqs={FAQS} />
      </div>
    </div>
  </section>
);

export default FaqSection;
