import Link from "next/link";
import { Award, Building2, Clock, Lock, Search, Tags, UserCheck, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find the perfect property easily with smart filters.",
  },
  {
    icon: UserCheck,
    title: "Expert Agents",
    description: "Professional support you can trust at every step.",
  },
  {
    icon: Tags,
    title: "Best Deals",
    description: "Get the best price and offers on every listing.",
  },
  {
    icon: Lock,
    title: "Secure Process",
    description: "Safe and hassle-free transactions, guaranteed.",
  },
];

const STATS = [
  { icon: Building2, value: "180+", label: "Projects Completed" },
  { icon: Users, value: "3.5K+", label: "Happy Clients" },
  { icon: Award, value: "40+", label: "Awards Won" },
  { icon: Clock, value: "12+", label: "Years Experience" },
];

const WhyChooseUs = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-900 p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Homebuying Made Simple &amp; Reliable
          </h2>
          <p className="mt-4 text-brand-100/70 leading-relaxed">
            We guide you through every step of the journey, making the home
            buying experience easy, transparent, and hassle-free.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-brand-900 p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold-400">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-xs text-brand-100/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-brand-900/10 p-8 sm:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-xl font-bold text-brand-900">{value}</p>
              <p className="text-xs text-brand-900/60">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
