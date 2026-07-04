import type { Metadata } from "next";
import { Globe2, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { LogoMark } from "@/components/LogoMark";
import { ContactAssessmentVisual } from "@/components/SolarVisuals";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Solar Assessment",
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
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Free Solar Assessment
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              Request Your Free Solar Assessment
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/72">
              Share a few details about your home or business so ForwardSun Technology can
              understand your electricity usage, site needs, and preferred solar solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.12em] text-charcoal/70">
              <span className="rounded-full border border-line bg-white px-3 py-2 shadow-sm">
                Home & Business
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-2 shadow-sm">
                Bill Review
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
                <p className="text-sm font-black uppercase tracking-[0.18em] text-solar">
                  ForwardSun Technology
                </p>
                <h2 className="mt-2 text-2xl font-black">Contact Details</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Prefer direct contact? Use WhatsApp or call to discuss your solar assessment.
            </p>
            <div className="mt-8 grid gap-5">
              <a
                href={whatsappLink("Hello ForwardSun Technology, I want to request a free solar assessment.")}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-solar"
              >
                <MessageCircle aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-black">WhatsApp</span>
                  <span className="mt-1 block text-sm text-white/72">{site.whatsappDisplay}</span>
                </span>
              </a>
              <a
                href={site.callHref}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-solar"
              >
                <Phone aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-black">Call</span>
                  <span className="mt-1 block text-sm text-white/72">{site.callDisplay}</span>
                </span>
              </a>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Globe2 aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-black">Website</span>
                  <span className="mt-1 block text-sm text-white/72">{site.domain}</span>
                </span>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin aria-hidden className="h-5 w-5 shrink-0 text-solar" />
                <span>
                  <span className="block text-sm font-black">Location</span>
                  <span className="mt-1 block text-sm text-white/72">{site.location}</span>
                </span>
              </div>
            </div>
            <p className="mt-6 rounded-2xl border border-solar/20 bg-solar/10 p-4 text-sm leading-6 text-white/78">
              For a more accurate estimate, our team may request your latest electricity bill or
              monthly unit usage.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
