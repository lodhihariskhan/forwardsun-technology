import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ServicesOverviewVisual } from "@/components/SolarVisuals";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { serviceDetails } from "@/lib/serviceDetails";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Services",
  description:
    "Residential solar, commercial solar, hybrid backup systems, EV charger installation, maintenance, and after-sales support in Lahore.",
  alternates: {
    canonical: "/services",
  },
};

const serviceImages: Record<
  string,
  {
    src: string;
    alt: string;
  }
> = {
  "Residential Solar Solutions": {
    src: "/images/residential-solar.webp",
    alt: "Residential solar system with rooftop panels, inverter, and battery backup",
  },
  "Commercial Solar Solutions": {
    src: "/images/commercial-solar.webp",
    alt: "Commercial building with rooftop solar panels and solar energy equipment",
  },
  "Hybrid Solar & Battery Backup": {
    src: "/images/hybrid-battery-backup.webp",
    alt: "Hybrid solar system with inverter, battery storage, and energy flow",
  },
  "EV Charger Installation": {
    src: "/images/ev-charger-installation.webp",
    alt: "EV charger installation with electric vehicle and solar energy setting",
  },
  "Maintenance & After-Sales Support": {
    src: "/images/maintenance-support.webp",
    alt: "Solar inverter, battery, wiring, and protection equipment for maintenance support",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="sun-glow relative overflow-hidden px-4 py-20 text-charcoal sm:px-6 lg:px-8">
        <div className="absolute inset-0 solar-grid opacity-40" />
        <div className="absolute right-10 top-8 h-36 w-36 rounded-full bg-solar/15 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Services
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              Solar Services for Homes, Businesses & Backup Power
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/72">
              ForwardSun Technology provides assessment-led solar services for residential,
              commercial, hybrid backup, EV charging, and long-term system support. Every
              recommendation is based on electricity usage, site conditions, budget, warranty needs,
              and future energy goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Get Free Assessment
              </ButtonLink>
              <ButtonLink
                href={whatsappLink("Hello ForwardSun Technology, I want to discuss solar services.")}
                variant="outline"
                icon={WhatsAppIcon}
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <ServicesOverviewVisual />
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Service Paths
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Choose the Right Solar Service Path
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              Each service path is planned around the customer’s site, usage, backup needs, and
              expected outcome.
            </p>
          </div>

          <div className="mt-10 grid gap-8">
            {serviceDetails.map((service, index) => (
              <ServiceSection key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl border border-line bg-mist p-7 shadow-card md:flex-row md:items-center md:justify-between lg:p-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Consultation
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/72">
              Share your location, monthly units, customer type, and backup requirement. ForwardSun
              Technology will guide you toward the right solar service path.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <ButtonLink href="/contact" variant="primary">
              Get Free Assessment
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Hello ForwardSun Technology, I am not sure which solar service I need.")}
              variant="outline"
              icon={WhatsAppIcon}
            >
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof serviceDetails)[number];
  index: number;
}) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;

  return (
    <article
      className={`grid gap-6 rounded-3xl border border-line bg-white p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:p-8 ${
        reversed ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <div className={`rounded-3xl bg-mist p-6 ${reversed ? "lg:col-start-2" : ""}`}>
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <Image
            src={serviceImages[service.title].src}
            alt={serviceImages[service.title].alt}
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
        </div>
        <div className="flex items-start justify-between gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
            <Icon aria-hidden className="h-7 w-7" />
          </span>
          <span className="rounded-full border border-line bg-white px-3 py-2 text-xs font-black text-forest">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h2 className="mt-6 text-2xl font-black text-charcoal">{service.title}</h2>
        <p className="mt-4 text-base leading-8 text-charcoal/72">{service.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.bestFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white px-3 py-2 text-xs font-black text-forest"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={reversed ? "lg:col-start-1" : ""}>
        <div className="rounded-3xl border border-line bg-white p-6">
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-forest">
            What we handle
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.handles.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-mist p-4">
                <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <p className="text-sm font-bold leading-6 text-charcoal/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 rounded-3xl border border-solar/25 bg-sunsoft p-6">
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-forest">Outcome</h3>
          <p className="mt-3 text-base font-bold leading-7 text-charcoal/78">{service.outcome}</p>
          <ButtonLink href="/contact" className="mt-5" variant="primary">
            Get Free Assessment
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
