import type { Metadata } from "next";
import { ExternalLink, Globe2, MapPin, Phone } from "lucide-react";
import { ContactLocationCard } from "@/components/ContactLocationCard";
import { ContactForm } from "@/components/ContactForm";
import { LogoMark } from "@/components/LogoMark";
import { ContactAssessmentVisual } from "@/components/SolarVisuals";
import { TrackedAnchor } from "@/components/TrackedAnchor";
import { TrustSignals } from "@/components/TrustSignals";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | ForwardSun Technology",
  },
  description:
    "Request a free solar assessment or quotation from ForwardSun Technology. Contact by WhatsApp, phone, or the assessment form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="sun-glow relative overflow-hidden px-4 py-20 text-charcoal sm:px-6 lg:px-8">
        <div className="absolute inset-0 solar-grid opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              Free Solar Assessment
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              Get Your Free Solar Assessment
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/72">
              Need a solar solution for your home or business? Complete the assessment form below
              and our solar consultant will review your requirements and recommend the most
              suitable solution for your property.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/70">
              <span className="rounded-full border border-line bg-white px-3 py-2 shadow-sm">
                Home & Business
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-2 shadow-sm">
                Unit Review
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-2 shadow-sm">
                Custom Quotation
              </span>
            </div>
          </div>
          <ContactAssessmentVisual />
        </div>
      </section>

      <section className="bg-pearl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />

          <aside className="rounded-3xl bg-forest p-7 text-white shadow-premium lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-4">
              <LogoMark className="h-28 w-28 ring-white/20" priority />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solar">
                  ForwardSun Technology
                </p>
                <h2 className="mt-2 text-2xl font-bold">Contact Details</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Prefer direct contact? Call or chat on WhatsApp to discuss your solar assessment.
            </p>
            <div className="mt-8 grid gap-5">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 transition hover:border-solar">
                <TrackedAnchor
                  href={site.callHref}
                  className="flex gap-4 p-4 pr-24"
                  aria-label={`Call ${site.callDisplay}`}
                  trackingEvent="phone_click"
                  trackingLocation="contact_page"
                >
                  <Phone aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                  <span>
                    <span className="block text-sm font-semibold">Call & WhatsApp</span>
                    <span className="mt-1 block text-sm text-white/72">{site.callDisplay}</span>
                  </span>
                </TrackedAnchor>
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 gap-2">
                  <TrackedAnchor
                    href={site.callHref}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-solar transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 focus:ring-offset-forest"
                    aria-label={`Call ${site.callDisplay}`}
                    trackingEvent="phone_click"
                    trackingLocation="contact_page"
                  >
                    <Phone aria-hidden className="h-4 w-4" />
                  </TrackedAnchor>
                  <TrackedAnchor
                    href={whatsappLink("Hello ForwardSun Technology, I want to request a free solar assessment.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-solar transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 focus:ring-offset-forest"
                    aria-label="Chat on WhatsApp"
                    trackingEvent="whatsapp_click"
                    trackingLocation="contact_page"
                  >
                    <WhatsAppIcon aria-hidden className="h-4 w-4" />
                  </TrackedAnchor>
                </div>
              </div>
              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-solar"
              >
                <Globe2 aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-semibold">Website</span>
                  <span className="mt-1 block text-sm text-white/72">{site.domain}</span>
                </span>
                <ExternalLink aria-hidden className="ml-auto h-4 w-4 shrink-0 text-white/45" />
              </a>
              <a
                href={site.mapHref}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-solar"
              >
                <MapPin aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-semibold">Location</span>
                  <span className="mt-1 block text-sm text-white/72">{site.location}</span>
                </span>
                <ExternalLink aria-hidden className="ml-auto h-4 w-4 shrink-0 text-white/45" />
              </a>
            </div>
            <p className="mt-6 rounded-2xl border border-solar/20 bg-solar/10 p-4 text-sm leading-6 text-white/78">
              Serving homes and businesses across Lahore.
            </p>
          </aside>
        </div>
      </section>

      <TrustSignals />

      <ContactLocationCard />
    </>
  );
}
