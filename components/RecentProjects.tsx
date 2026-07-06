import { BatteryCharging, Building2, Home } from "lucide-react";

const projectPlaceholders = [
  { title: "Residential Solar Project", icon: Home },
  { title: "Commercial Solar Project", icon: Building2 },
  { title: "Hybrid Backup Project", icon: BatteryCharging },
];

export function RecentProjects() {
  return (
    <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
            Project Proof
          </span>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Recent Solar Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-charcoal/70">
            Project photos, system sizes, and customer feedback will be added as ForwardSun
            installations are completed.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projectPlaceholders.map(({ title, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-line bg-white p-7 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
                <Icon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/65">
                Reserved for verified project details after completion and customer approval.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
