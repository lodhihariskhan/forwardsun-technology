import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { AboutTrustVisual } from "@/components/SolarVisuals";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ForwardSun Technology, a solar energy solutions provider based in DHA Rahbar, Lahore focused on assessment, installation, and long-term support.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  "Professional solar assessment",
  "Quality product selection",
  "Clean installation work",
  "Transparent quotation",
  "Warranty and after-sales support",
];

export default function AboutPage() {
  return (
    <>
      <section className="sun-glow relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              About
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-charcoal sm:text-5xl">
              ForwardSun Technology Is a Solar Energy Solutions Provider in Lahore
            </h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/72">
              Based in {site.location}, ForwardSun Technology helps homeowners and businesses plan
              solar systems with a practical assessment, suitable product selection, clean
              installation, and long-term support.
            </p>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              The focus is simple: understand the site, review usage needs, recommend reliable
              product options, and provide a transparent quotation before installation begins.
            </p>
            <ButtonLink
              href="/contact"
              className="mt-8"
              trackingEvent="get_free_assessment_click"
              trackingLocation="hero"
            >
              Get Free Assessment
            </ButtonLink>
          </div>
          <AboutTrustVisual />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal">What We Focus On</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-charcoal/68">
              Solar recommendations are treated as long-term energy decisions, not one-size-fits-all
              product lists.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-lime/60 hover:shadow-soft"
              >
                <CheckCircle2 aria-hidden className="h-6 w-6 text-forest" />
                <h3 className="mt-4 text-base font-bold leading-6 text-charcoal">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {[
            {
              title: "Proper system planning",
              text: "We review usage, site details, backup needs, and budget before suggesting system options.",
              icon: ClipboardCheck,
            },
            {
              title: "Reliable product selection",
              text: "Product options are considered according to warranty, availability, compatibility, and long-term performance.",
              icon: ShieldCheck,
            },
            {
              title: "Long-term customer support",
              text: "Support includes installation guidance, warranty help, maintenance direction, and after-sales care.",
              icon: Handshake,
            },
          ].map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-lime/60 hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
                <Icon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-charcoal">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-charcoal/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-line bg-mist p-8 text-center shadow-card">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
            Honest Guidance
          </span>
          <h2 className="mt-3 text-3xl font-black text-charcoal">Built for Long-Term Solar Support</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-charcoal/72">
            Solar is a long-term energy decision, so ForwardSun Technology avoids exaggerated claims
            and focuses on careful planning, dependable installation practices, warranty guidance,
            honest communication, and after-sales care.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
