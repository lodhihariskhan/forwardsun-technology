import {
  AlertTriangle,
  BatteryWarning,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardX,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  SunMedium,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { BrandCategory } from "@/components/BrandCategory";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HomeEcosystemImage, HomeHeroVisual } from "@/components/SolarVisuals";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";
import { productPreviewCategories } from "@/lib/products";
import { serviceDetails } from "@/lib/serviceDetails";
import {
  painPoints,
  processSteps,
  whatsappLink,
  whyChoose,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ForwardSun Technology | Solar Solutions For Homes & Businesses",
  description:
    "ForwardSun Technology provides residential, commercial, and hybrid solar solutions with professional installation, quality product selection, maintenance, and after-sales care in Lahore.",
  alternates: {
    canonical: "/",
  },
};

const painIcons = [CircleDollarSign, BatteryWarning, TrendingUp, ClipboardX];

const systemFlow = [
  {
    title: "Generation",
    text: "Solar panels and mounting",
    icon: PanelsTopLeft,
  },
  {
    title: "Conversion",
    text: "On-grid and hybrid inverters",
    icon: Zap,
  },
  {
    title: "Storage",
    text: "Lithium batteries and backup",
    icon: BatteryWarning,
  },
  {
    title: "Protection",
    text: "BOS, breakers, SPDs, earthing",
    icon: ShieldCheck,
  },
  {
    title: "Support",
    text: "Monitoring and after-sales care",
    icon: ClipboardCheck,
  },
];

const whyDescriptions = [
  "Assessment comes before recommendation, so the system reflects actual usage and site needs.",
  "Product options are reviewed for suitability, warranty, availability, and performance.",
  "Installation planning focuses on neat wiring, practical placement, and dependable handover.",
  "Quotation scope stays clear so customers understand products, work, and support.",
  "Support continues through warranty guidance, maintenance direction, and after-sales care.",
];

export default function HomePage() {
  return (
    <>
      <section className="sun-glow relative isolate overflow-hidden px-4 py-20 text-charcoal sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute left-[-5rem] top-12 h-56 w-56 rounded-full border border-lime/25 bg-white/40" />
        <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-solar/15 blur-2xl" />
        <div className="absolute inset-0 solar-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-forest shadow-sm">
              <SunMedium aria-hidden className="h-4 w-4" />
              ForwardSun Technology
            </span>
            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Reliable Solar Solutions for Homes & Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/72">
              Reduce electricity costs with professionally designed solar systems, quality product
              selection, clean installation, and long-term after-sales support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Request Free Solar Assessment
              </ButtonLink>
              <ButtonLink
                href={whatsappLink("Hello ForwardSun Technology, I want to discuss a solar solution.")}
                variant="outline"
                icon={MessageCircle}
              >
                Contact on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <HomeHeroVisual />
        </div>
      </section>

      <section className="bg-forest px-4 py-5 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] shadow-card">
          <span className="text-solar">A-Grade Products</span> <span className="mx-2 text-white/40">|</span>{" "}
          Professional Installation <span className="mx-2 text-white/40">|</span> Warranty Support{" "}
          <span className="mx-2 text-white/40">|</span> After-Sales Care
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Energy Problems
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Energy Problems We Help Solve
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/70">
              ForwardSun starts with your actual energy needs so the system is planned correctly
              from the beginning.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {painPoints.map((point, index) => {
              const Icon = painIcons[index] ?? AlertTriangle;

              return (
              <div
                key={point}
                className="rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-lime/60 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/30">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <p className="mt-5 font-black leading-6 text-charcoal">{point}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
                Solutions
              </span>
              <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
                Solar Solutions for Every Requirement
              </h2>
              <p className="mt-4 text-base leading-7 text-charcoal/70">
                A focused overview of the main solar service paths. Full service details are on the
                Services page.
              </p>
            </div>
            <ButtonLink href="/services" variant="outline">
              View Services
              <ChevronRight aria-hidden className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {serviceDetails.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href="/services"
                  className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-lime/60 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25 transition group-hover:bg-forest group-hover:text-white">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-black leading-6 text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/68">{service.overview}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
                Products & Components
              </span>
              <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
                Quality Brands & Product Categories We Supply & Install
              </h2>
              <p className="mt-5 text-base leading-8 text-charcoal/72">
                ForwardSun Technology works with reliable solar panels, inverters, batteries, EV
                chargers, BOS products, and mounting structures selected according to system
                requirement, budget, warranty, availability, and long-term performance.
              </p>
            </div>
            <ButtonLink href="/products" variant="primary" className="lg:shrink-0">
              View Products
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productPreviewCategories.map((category) => (
              <BrandCategory key={category.title} category={category} compact />
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-line bg-white p-4 text-sm font-bold leading-6 text-charcoal/70 shadow-sm">
            Product options are recommended based on system size, budget, availability, warranty,
            and customer requirements.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              System Planning
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Planned as a Complete Solar System
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/70">
              Products and services are connected into one system plan, from generation to support.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-line bg-mist p-5 shadow-card">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <HomeEcosystemImage />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {systemFlow.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="relative rounded-2xl bg-white p-5 shadow-sm">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-base font-black text-charcoal">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-charcoal/68">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Why Choose ForwardSun?
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              Every recommendation starts with practical assessment and clear communication, so the
              system fits the site, usage, and support needs.
            </p>
          </div>
          <div className="grid gap-3">
            {whyChoose.map(({ title, icon: Icon }, index) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sunsoft text-forest shadow-sm ring-1 ring-solar/25">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-black leading-6 text-charcoal">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-charcoal/68">{whyDescriptions[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Process
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              How Our Solar Assessment Works
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              From the first request to after-sales support, every step is focused on a clear and
              practical solar plan.
            </p>
            <div className="mt-7 rounded-2xl border border-line bg-white p-5 shadow-card">
              <div className="flex gap-3">
                <ShieldCheck aria-hidden className="h-5 w-5 shrink-0 text-forest" />
                <p className="text-sm font-bold leading-6 text-charcoal/72">
                  The assessment helps align product selection, quotation, and installation scope
                  before work begins.
                </p>
              </div>
            </div>
            <ButtonLink href="/contact" className="mt-7" variant="outline">
              Start Your Assessment
              <ChevronRight aria-hidden className="h-4 w-4" />
            </ButtonLink>
          </div>
          <ol className="relative grid gap-0 border-l border-line pl-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] flex h-12 w-12 items-center justify-center rounded-full bg-forest text-sm font-black text-white ring-8 ring-mist">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <h3 className="text-base font-black text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/68">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialPlaceholder />

      <FAQSection />

      <CTASection />
    </>
  );
}
