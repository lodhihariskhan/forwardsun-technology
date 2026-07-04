import Image from "next/image";
import {
  BatteryCharging,
  Building2,
  Cable,
  Car,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  Grid2X2,
  Home,
  PanelsTopLeft,
  PlugZap,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react";
import { LogoMark } from "@/components/LogoMark";

const heroEquipment = [
  { label: "Solar panels", icon: PanelsTopLeft },
  { label: "Hybrid inverter", icon: Zap },
  { label: "Lithium battery", icon: BatteryCharging },
  { label: "EV ready", icon: PlugZap },
];

const serviceNodes = [
  { label: "Home", icon: Home },
  { label: "Business", icon: Building2 },
  { label: "Backup", icon: BatteryCharging },
  { label: "EV", icon: Car },
  { label: "Support", icon: Wrench },
];

const ecosystemNodes = [
  { label: "Panels", detail: "Generation", icon: PanelsTopLeft },
  { label: "Inverter", detail: "Conversion", icon: Zap },
  { label: "Battery", detail: "Storage", icon: BatteryCharging },
  { label: "Protection", detail: "BOS", icon: ShieldCheck },
  { label: "Wiring", detail: "AC/DC", icon: Cable },
  { label: "Structure", detail: "Mounting", icon: Grid2X2 },
];

const assessmentSteps = [
  { label: "Bill review", icon: FileText },
  { label: "Site check", icon: ClipboardCheck },
  { label: "System sizing", icon: Gauge },
  { label: "Clear quote", icon: CheckCircle2 },
];

export function HomeHeroVisual() {
  return (
    <div className="relative rounded-3xl border border-line bg-white p-3 text-charcoal shadow-premium">
      <div className="absolute -right-8 -top-8 hidden h-28 w-28 rounded-full border border-solar/40 bg-sunsoft lg:block" />
      <div className="relative overflow-hidden rounded-2xl bg-mist">
        <div className="relative aspect-[4/3] min-h-[360px] overflow-hidden">
          <Image
            src="/images/hero-solar-system.webp"
            alt="ForwardSun solar energy system with panels, inverter, battery backup, and EV charging"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-white/10" />
          <div className="absolute left-5 top-5 rounded-2xl border border-white/25 bg-white/90 p-4 shadow-card backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/30">
                <SunMedium aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-forest">
                  Solar System
                </p>
                <p className="mt-1 text-sm font-black text-charcoal">Energy-ready planning</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-2">
            {heroEquipment.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/90 p-3 shadow-sm backdrop-blur"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-solar">
                  <Icon aria-hidden className="h-4 w-4" />
                </span>
                <span className="text-sm font-black text-charcoal">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 border-t border-line bg-white p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-forest">
              Energy Flow
            </p>
            <p className="mt-2 text-sm leading-6 text-charcoal/70">
              Generation, conversion, backup, EV charging, and protection planned as one system.
            </p>
          </div>
          <div className="hidden h-px w-16 bg-solar sm:block" />
          <div className="rounded-2xl bg-forest p-4 text-sm font-bold leading-6 text-white/78">
            Usage review + product selection + clean installation + after-sales support.
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeEcosystemImage() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
        <Image
          src="/images/solar-ecosystem.webp"
          alt="Complete solar system ecosystem with panels, inverter, battery storage, protection equipment, and EV charging"
          fill
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-sm backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-forest">
            Complete System View
          </p>
          <p className="mt-2 text-sm font-bold leading-6 text-charcoal/72">
            Panels, inverter, battery storage, protection, mounting, EV charging, and monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicesOverviewVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-white/88 p-6 shadow-premium backdrop-blur">
      <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-solar/20 blur-2xl" />
      <div className="relative flex items-center justify-between gap-5">
        <div>
          <h2 className="text-2xl font-black text-charcoal">Assessment-led service</h2>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">
            One planning workflow, five practical service paths.
          </p>
        </div>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
          <SunMedium aria-hidden className="h-7 w-7" />
        </span>
      </div>
      <div className="relative mt-7 rounded-3xl bg-mist p-4">
        <div className="absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-solar/50 sm:block" />
        <div className="grid gap-3">
          {serviceNodes.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className={`relative flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm ${
                index % 2 === 1 ? "sm:ml-12" : "sm:mr-12"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-solar">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black text-charcoal">{label}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-forest/65">
                  Service path
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductEcosystemVisual() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-card">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="rounded-3xl bg-forest p-6 text-white">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-solar text-forest shadow-sm">
            <SunMedium aria-hidden className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-2xl font-black">Complete solar system map</h3>
          <p className="mt-4 text-sm leading-7 text-white/74">
            Products are selected as connected equipment, from rooftop generation to safety,
            wiring, mounting, monitoring, and support.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemNodes.map(({ label, detail, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-line bg-mist p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest shadow-sm ring-1 ring-solar/25">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-black text-charcoal">{label}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-forest/65">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductShowcaseVisual() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-premium">
      <div className="relative aspect-[4/3] min-h-[340px] overflow-hidden rounded-2xl bg-mist">
        <Image
          src="/images/products-components.webp"
          alt="Solar panels, inverter, lithium battery, EV charger, BOS equipment, and mounting structure"
          fill
          priority
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-sm backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-forest">
            Product System
          </p>
          <p className="mt-2 text-sm font-bold leading-6 text-charcoal/72">
            Core equipment, BOS protection, wiring, and structures planned as a complete setup.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ContactAssessmentVisual() {
  return (
    <div className="rounded-3xl border border-line bg-white/88 p-5 shadow-premium backdrop-blur">
      <div className="rounded-3xl bg-forest p-6 text-white">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-solar">
              Assessment Flow
            </p>
            <h2 className="mt-3 text-2xl font-black">From bill review to clear system plan</h2>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-solar ring-1 ring-white/15">
            <ClipboardCheck aria-hidden className="h-7 w-7" />
          </span>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {assessmentSteps.map(({ label, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <Icon aria-hidden className="h-5 w-5 text-solar" />
              <p className="mt-3 text-sm font-black">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutTrustVisual() {
  return (
    <div className="rounded-3xl border border-line bg-white p-3 shadow-premium">
      <div className="overflow-hidden rounded-2xl bg-forest p-7 text-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <LogoMark className="h-28 w-28 ring-white/20" priority />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-solar">
              ForwardSun Technology
            </p>
            <h2 className="mt-3 text-2xl font-black">Trusted solar planning</h2>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-5 gap-2" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-12 rounded-lg border border-solar/25 bg-white/10 shadow-inner"
            />
          ))}
        </div>
        <div className="mt-7 grid gap-3">
          {[
            "Assessment before recommendation",
            "Product options matched to site needs",
            "Support after installation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
              <CheckCircle2 aria-hidden className="h-5 w-5 text-solar" />
              <span className="text-sm font-black">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
