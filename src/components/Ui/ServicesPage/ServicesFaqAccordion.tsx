"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

const ServicesFaqAccordion = ({ faqs }: { faqs: ServiceFaq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-900/10 rounded-2xl border border-brand-900/10 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="font-semibold text-brand-900">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-brand-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-brand-900/70 sm:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesFaqAccordion;
