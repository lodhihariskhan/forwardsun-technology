import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { BrandGroup } from "@/components/BrandGroup";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductGroup } from "@/components/ProductGroup";
import { ProductEcosystemVisual, ProductShowcaseVisual } from "@/components/SolarVisuals";
import {
  productEcosystem,
  productGroups,
  productPreviewCategories,
} from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Products & Solar System Components | ForwardSun Technology",
  },
  description:
    "Explore solar panels, inverters, lithium-ion batteries, EV chargers, BOS equipment, protection products, wiring, and mounting structures supplied and installed by ForwardSun Technology in Lahore.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="sun-glow relative overflow-hidden px-4 py-20 text-charcoal sm:px-6 lg:px-8">
        <div className="absolute inset-0 solar-grid opacity-40" />
        <div className="absolute right-10 top-8 h-36 w-36 rounded-full bg-solar/15 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Product Options
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              Products & Solar System Components
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/72">
              ForwardSun Technology supplies, installs, and sources solar panels, inverters,
              batteries, EV chargers, BOS equipment, protection systems, wiring, and mounting
              structures based on each project&apos;s requirement, budget, warranty, and long-term
              performance needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Request Free Solar Assessment
              </ButtonLink>
              <ButtonLink
                href={whatsappLink("Hello ForwardSun Technology, I want to discuss products and solar components.")}
                variant="outline"
                icon={MessageCircle}
              >
                Contact on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <ProductShowcaseVisual />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Product Categories
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Quality Brands & Product Categories We Supply & Install
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              ForwardSun Technology supplies and installs reliable solar panels, inverters,
              lithium-ion batteries, EV chargers, BOS protection equipment, and mounting structures
              selected according to system requirement, budget, warranty, availability, and
              long-term performance.
            </p>
            <p className="mt-5 rounded-2xl border border-line bg-mist p-4 text-sm font-bold leading-6 text-charcoal/70">
              Product options are recommended based on system size, budget, availability, warranty,
              and customer requirements.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {productPreviewCategories.map((group) => (
              <BrandGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              System View
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Complete Solar System Ecosystem
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              ForwardSun plans products as connected system parts, so generation, conversion,
              backup, safety, and mounting work together.
            </p>
          </div>
          <ProductEcosystemVisual />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productEcosystem.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-line bg-white p-6 shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
              Product Groups
            </span>
            <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
              Equipment, Protection, Structures & Support
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72">
              These grouped sections keep the product ecosystem easy to scan without turning the
              page into a wholesale catalog.
            </p>
          </div>
          <div className="mt-10 grid gap-8">
            {productGroups.map((group, index) => (
              <ProductGroup key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-white/15 bg-white/10 p-7 shadow-premium md:flex-row md:items-center md:justify-between lg:p-10">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-solar">
              Product Guidance
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Need Help Selecting the Right Solar Products?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              Request a free solar assessment and ForwardSun Technology will recommend products
              based on your usage, system size, site condition, backup needs, budget, and
              availability.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <ButtonLink href="/contact" variant="light">
              Request Free Solar Assessment
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Hello ForwardSun Technology, I need help selecting solar products.")}
              variant="light"
              icon={MessageCircle}
            >
              Contact on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
