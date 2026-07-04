import { Camera, MessageSquareText, Video } from "lucide-react";

const placeholders = [
  { title: "Client Reviews", icon: MessageSquareText },
  { title: "Project Photos", icon: Camera },
  { title: "Video Testimonials", icon: Video },
];

export function TestimonialPlaceholder() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
            Reviews
          </span>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Trusted by Homeowners & Businesses
          </h2>
          <p className="mt-4 text-base leading-7 text-charcoal/70">
            Client reviews, project photos, and video testimonials will be added as completed
            installations grow.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {placeholders.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-dashed border-line bg-white p-7 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sunsoft text-forest shadow-sm ring-1 ring-solar/25">
                <Icon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/65">
                Reserved for verified customer material from completed ForwardSun installations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
