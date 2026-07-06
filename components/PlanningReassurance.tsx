import { CheckCircle2, ClipboardCheck } from "lucide-react";

const planningPoints = [
  "Usage and monthly units reviewed",
  "Site and roof conditions considered",
  "Product options explained clearly",
  "Installation scope discussed before work begins",
  "After-sales support available",
];

export function PlanningReassurance() {
  return (
    <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
            Customer Reassurance
          </span>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Planned Before Installation
          </h2>
          <p className="mt-5 text-base leading-8 text-charcoal/72">
            Every solar recommendation is based on usage, site conditions, backup needs, budget,
            warranty requirements, and long-term support.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card lg:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
            <ClipboardCheck aria-hidden className="h-6 w-6" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {planningPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl bg-mist p-4">
                <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <p className="text-sm font-bold leading-6 text-charcoal/72">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
