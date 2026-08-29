import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessTimeline = ({ steps }: { steps: ProcessStep[] }) => {
  return (
    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map(({ icon: Icon, title, description }, index) => (
        <li
          key={title}
          className="relative flex flex-col gap-4 rounded-2xl border border-brand-900/10 bg-white p-6"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Icon size={20} />
            </span>
            <span className="font-script text-3xl text-brand-900/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-brand-900">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProcessTimeline;
