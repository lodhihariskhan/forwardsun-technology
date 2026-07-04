import { BrandLogoCard } from "@/components/BrandLogoCard";
import type { ProductCategory } from "@/lib/products";

type BrandGroupProps = {
  group: ProductCategory;
};

export function BrandGroup({ group }: BrandGroupProps) {
  const Icon = group.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <div className="border-b border-line bg-mist p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
            <Icon aria-hidden className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-charcoal">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal/68">{group.description}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-2">
        {group.items.map((item) => (
          <BrandLogoCard key={item.name} item={item} />
        ))}
      </div>
    </article>
  );
}
