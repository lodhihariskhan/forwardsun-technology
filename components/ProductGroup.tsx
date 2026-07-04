import type { ProductGroup as ProductGroupType } from "@/lib/products";

type ProductGroupProps = {
  group: ProductGroupType;
  index: number;
};

export function ProductGroup({ group, index }: ProductGroupProps) {
  const Icon = group.icon;
  const reversed = index % 2 === 1;

  return (
    <article
      className={`grid gap-6 rounded-3xl border border-line bg-white p-6 shadow-card lg:grid-cols-[0.82fr_1.18fr] lg:p-8 ${
        reversed ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <div className={`rounded-3xl bg-mist p-6 ${reversed ? "lg:col-start-2" : ""}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sunsoft text-forest ring-1 ring-solar/25">
          <Icon aria-hidden className="h-7 w-7" />
        </span>
        <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-solar">
          System Group {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-2xl font-black text-charcoal">{group.title}</h3>
        <p className="mt-4 text-sm leading-7 text-charcoal/70">{group.description}</p>
      </div>
      <div className={`flex items-center ${reversed ? "lg:col-start-1" : ""}`}>
        <div className="grid w-full gap-3 sm:grid-cols-2">
          {group.items.map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white p-4 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-forest">
                Included
              </span>
              <p className="mt-2 text-sm font-black leading-6 text-charcoal">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
