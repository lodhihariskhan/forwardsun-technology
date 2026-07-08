import { BrandLogoCard } from "@/components/BrandLogoCard";
import type { ProductCategory } from "@/lib/products";

type BrandCategoryProps = {
  category: ProductCategory;
  compact?: boolean;
};

export function BrandCategory({ category, compact = false }: BrandCategoryProps) {
  const Icon = category.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-lime/60 hover:shadow-premium">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-lime/20 bg-sunsoft/40" />
      <div className="relative flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunsoft text-forest shadow-sm ring-1 ring-solar/25 transition group-hover:bg-forest group-hover:text-white">
          <Icon aria-hidden className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-charcoal">{category.title}</h3>
          <p className="mt-2 text-sm leading-6 text-charcoal/68">{category.description}</p>
        </div>
      </div>

      {category.items.length > 0 ? (
        <div className={`relative mt-5 flex flex-wrap gap-2 ${compact ? "max-h-24 overflow-hidden" : ""}`}>
          {category.items.map((item) => (
            <BrandLogoCard key={item.name} item={item} compact />
          ))}
        </div>
      ) : null}
    </article>
  );
}
