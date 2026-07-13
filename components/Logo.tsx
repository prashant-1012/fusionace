type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-cream" : "text-ink";
  const accentColor = variant === "light" ? "text-gold" : "text-gold-dark";

  return (
    <span
      className={`font-display text-2xl font-semibold tracking-tight ${textColor} ${className}`}
    >
      Fusion<span className={accentColor}>Ace</span>
    </span>
  );
}
