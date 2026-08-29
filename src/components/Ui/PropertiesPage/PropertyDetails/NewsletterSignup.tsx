"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

// TODO: no backend yet — wire this up to a real mailing list provider.
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="container flex flex-col items-center gap-5 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-400">
          <Mail size={20} />
        </span>
        <h2 className="max-w-lg text-3xl sm:text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="max-w-md text-brand-100/70">
          New listings, market updates, and buying tips — straight to your
          inbox, about once a month.
        </p>

        {submitted ? (
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white">
            <CheckCircle2 size={18} className="text-gold-400" />
            You&apos;re subscribed — welcome aboard.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              Subscribe
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
