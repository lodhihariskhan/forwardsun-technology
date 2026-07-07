"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackGetFreeAssessmentClick, trackWhatsAppClick } from "@/lib/analytics";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  icon?: ReactNode;
  className?: string;
  trackingEvent?: "get_free_assessment_click" | "whatsapp_click";
  trackingLocation?: string;
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
  icon,
  className = "",
  trackingEvent,
  trackingLocation,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 ${variants[variant]} ${className}`;

  function handleClick() {
    if (!trackingEvent || !trackingLocation) {
      return;
    }

    if (trackingEvent === "get_free_assessment_click") {
      trackGetFreeAssessmentClick(trackingLocation);
    } else {
      trackWhatsAppClick(trackingLocation);
    }
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        onClick={handleClick}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {icon}
      {children}
    </Link>
  );
}
