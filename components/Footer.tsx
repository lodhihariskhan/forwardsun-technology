import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { footerProducts, footerServices, navItems, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="h-1 bg-gradient-to-r from-lime via-solar to-leaf" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="h-20 w-20 ring-white/20" alt="" />
            <span>
              <span className="block text-lg font-black">ForwardSun Technology</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-solar">
                Solar Energy Solutions
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
            Reliable solar energy solutions for homes and businesses, planned with practical
            assessment, clean installation, and long-term support.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-solar">Services</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-solar">Products</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {footerProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-solar">Pages</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-solar">Contact</h2>
          <ul className="mt-5 grid gap-4 text-sm text-white/72">
            <li className="flex gap-3">
              <MessageCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
              <a
                href={whatsappLink("Hello ForwardSun Technology, I want to request a solar assessment.")}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
              <a href={site.callHref} className="transition hover:text-white">
                Call: {site.callDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
              <span>{site.location}</span>
            </li>
            <li>{site.domain}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} ForwardSun Technology. All rights reserved.
      </div>
    </footer>
  );
}
