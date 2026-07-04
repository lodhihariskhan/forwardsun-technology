import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappLink } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Request Your Free Solar Assessment",
  text = "Get a professionally planned solar solution for your home or business.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-forest px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 solar-grid opacity-20" />
      <div className="absolute right-10 top-8 h-40 w-40 rounded-full border border-solar/25 bg-solar/10" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-white/15 bg-deep/70 p-7 shadow-premium md:flex-row md:items-center md:justify-between lg:p-10">
        <div className="max-w-2xl">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-solar">
            Consultation
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/74">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <ButtonLink href="/contact" variant="light">
            Request Free Solar Assessment
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("Hello ForwardSun Technology, I want a free solar assessment.")}
            variant="light"
            icon={MessageCircle}
          >
            Contact on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
