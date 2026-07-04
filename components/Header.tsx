"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { LogoMark } from "@/components/LogoMark";
import { navItems, site, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="border-b border-white/10 bg-forest px-4 py-2 text-[11px] font-bold text-white/86 sm:text-xs">
        <div className="mx-auto flex max-w-7xl justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 text-center font-black uppercase tracking-[0.06em] text-white transition hover:text-solar focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 focus:ring-offset-forest sm:tracking-[0.14em]"
          >
            <Sparkles aria-hidden className="hidden h-3.5 w-3.5 text-solar sm:block" />
            Reduce Bills. Improve Backup. Install with Confidence.
          </Link>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md"
          aria-label="ForwardSun Technology home"
          onClick={() => setOpen(false)}
        >
          <LogoMark variant="icon" className="h-11 w-11 sm:h-12 sm:w-12" priority alt="" />
          <span className="min-w-0">
            <span className="block text-base font-black leading-tight text-charcoal sm:text-lg xl:text-xl">
              ForwardSun Technology
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">
              Solar Energy Solutions
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center rounded-full border border-line bg-mist/70 p-1 shadow-sm lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  active ? "bg-white text-forest shadow-sm" : "text-charcoal/72 hover:bg-white hover:text-forest"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink("Hello ForwardSun Technology, I want to discuss a solar solution.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-forest shadow-sm transition hover:border-solar hover:bg-sunsoft hover:text-deep"
            aria-label={`Contact on WhatsApp ${site.whatsappDisplay}`}
          >
            <MessageCircle aria-hidden className="h-5 w-5" />
          </a>
          <ButtonLink href="/contact">Request Free Solar Assessment</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-charcoal shadow-sm transition hover:border-forest hover:text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white px-4 py-5 shadow-card lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-black transition ${
                    active ? "bg-mist text-forest" : "text-charcoal"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mx-auto mt-4 grid max-w-7xl gap-3 sm:grid-cols-2">
            <ButtonLink href="/contact" className="w-full" variant="primary">
              Request Free Solar Assessment
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Hello ForwardSun Technology, I want to request a solar quote.")}
              className="w-full"
              variant="outline"
              icon={MessageCircle}
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
