/* ================= LOGO MARK (SVG) ================= */
/* A roofline glyph inside a solid circle — evokes home / property without
   needing an external asset. Reused as-is on both light (Navbar) and dark
   (Footer) backgrounds since the circle carries its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="20" fill="#0B2622" />
    <path
      d="M11 20.5 20 12l9 8.5"
      stroke="#D2A046"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 19v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"
      stroke="#EAF5F3"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="18" y="22.5" width="4" height="6.5" rx="0.6" fill="#EAF5F3" />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-lg" },
  md: { icon: "w-9 h-9", text: "text-xl" },
  lg: { icon: "w-11 h-11", text: "text-2xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`relative font-bold leading-none whitespace-nowrap tracking-tight ${text} ${
          variant === "dark" ? "text-brand-900" : "text-white"
        }`}
      >
        Meridian
        <span
          className={`absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full ${
            variant === "dark" ? "bg-gold-500" : "bg-gold-400"
          }`}
        />
      </span>
    </span>
  );
};

export default Logo;
