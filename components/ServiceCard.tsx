import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group relative min-h-64 overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition duration-200 hover:-translate-y-1 hover:border-lime/60 hover:shadow-premium">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest via-lime to-solar" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-lime/20 bg-sunsoft/30" />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-forest ring-1 ring-line transition group-hover:bg-forest group-hover:text-white">
        <Icon aria-hidden className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-black text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{description}</p>
    </article>
  );
}
