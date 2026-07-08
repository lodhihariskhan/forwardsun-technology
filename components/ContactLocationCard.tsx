import { ExternalLink, Map } from "lucide-react";
import { site } from "@/lib/site";

export function ContactLocationCard() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
            Location
          </span>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Visit / Contact ForwardSun Technology
          </h2>
          <p className="mt-4 text-base font-bold leading-7 text-charcoal/72">{site.location}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-line bg-mist shadow-card">
          <div className="relative min-h-72 p-6">
            <div className="absolute inset-0 solar-grid opacity-50" />
            <div className="absolute inset-x-6 top-1/2 h-px bg-forest/15" />
            <div className="absolute inset-y-6 left-1/2 w-px bg-forest/15" />
            <div className="relative flex h-full min-h-60 flex-col justify-between rounded-2xl border border-white bg-white/90 p-6 shadow-sm">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
                  <Map aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-charcoal">DHA Rahbar, Lahore</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/68">
                  Use Google Maps for directions to the service area. A detailed map embed can be
                  added when the verified business map listing is available.
                </p>
              </div>
              <a
                href={site.mapHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-deep hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2"
              >
                Open in Google Maps
                <ExternalLink aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
