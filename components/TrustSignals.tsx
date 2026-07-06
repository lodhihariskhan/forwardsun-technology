import {
  BadgeCheck,
  Building2,
  Handshake,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const trustSignals = [
  { label: "A-Grade / Tier-1 Product Options", icon: BadgeCheck },
  { label: "Professional Installation", icon: Wrench },
  { label: "Warranty Support", icon: ShieldCheck },
  { label: "After-Sales Care", icon: Handshake },
  { label: "Lahore-Based Solar Solutions", icon: MapPin },
  { label: "Residential & Commercial Systems", icon: Building2 },
];

type TrustSignalsProps = {
  tone?: "light" | "dark";
};

export function TrustSignals({ tone = "light" }: TrustSignalsProps) {
  const dark = tone === "dark";

  return (
    <section className={`${dark ? "bg-forest text-white" : "bg-white text-charcoal"} px-4 py-10 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className={`text-sm font-black uppercase tracking-[0.18em] ${dark ? "text-solar" : "text-forest"}`}>
              Trust Signals
            </span>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Practical Solar Support From Assessment to After-Sales
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className={`flex min-h-16 items-center gap-3 rounded-2xl border p-4 shadow-sm ${
                  dark ? "border-white/15 bg-white/10" : "border-line bg-mist"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    dark ? "bg-solar/15 text-solar ring-1 ring-solar/25" : "bg-sunsoft text-forest ring-1 ring-solar/25"
                  }`}
                >
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <span className={`text-sm font-black leading-5 ${dark ? "text-white/80" : "text-charcoal/70"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
