import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
};

const variants = {
  primary: "bg-forest text-white shadow-card hover:-translate-y-0.5 hover:bg-deep hover:shadow-soft",
  secondary: "bg-solar text-charcoal shadow-card hover:-translate-y-0.5 hover:bg-sunsoft hover:shadow-soft",
  outline:
    "border border-line bg-white text-forest shadow-sm hover:-translate-y-0.5 hover:border-leaf hover:bg-mist hover:text-deep hover:shadow-card",
  light: "border border-line bg-white text-forest shadow-card hover:-translate-y-0.5 hover:border-solar hover:bg-sunsoft",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {Icon ? <Icon aria-hidden className="h-4 w-4 shrink-0" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon ? <Icon aria-hidden className="h-4 w-4 shrink-0" /> : null}
      {children}
    </Link>
  );
}
