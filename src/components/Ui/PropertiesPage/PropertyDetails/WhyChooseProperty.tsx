import { Award, MapPinned, Sparkles } from "lucide-react";
import type { PropertyHighlight } from "./propertyDetails";

const ICONS = [MapPinned, Sparkles, Award];

const WhyChooseProperty = ({
  title,
  highlights,
}: {
  title: string;
  highlights: PropertyHighlight[];
}) => (
  <section className="bg-brand-50/50 py-16 md:py-24">
    <div className="container">
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Why This One
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-900">
          Why Choose {title}?
        </h2>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {highlights.map((highlight, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div
              key={highlight.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-bold text-brand-900">
                {highlight.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseProperty;
