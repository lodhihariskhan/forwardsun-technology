import { existsSync } from "fs";
import { join } from "path";
import Image from "next/image";
import type { ProductItem } from "@/lib/products";

type BrandLogoCardProps = {
  item: ProductItem;
  compact?: boolean;
};

export function BrandLogoCard({ item, compact = false }: BrandLogoCardProps) {
  const logoExists = item.logo
    ? existsSync(join(process.cwd(), "public", item.logo.replace(/^\//, "")))
    : false;
  const fallbackLabel = item.logo ? "Brand" : "Product";

  if (logoExists && item.logo) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-line bg-white p-3 shadow-sm ${
          compact ? "min-h-12 min-w-28" : "min-h-20"
        }`}
      >
        <Image
          src={item.logo}
          alt={`${item.name} brand logo`}
          width={compact ? 120 : 150}
          height={compact ? 40 : 50}
          className={`${compact ? "max-h-8" : "max-h-10"} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white via-mist to-sunsoft/80 px-4 py-3 shadow-sm ${
        compact ? "min-h-12 min-w-28" : "min-h-20"
      }`}
    >
      <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-solar" />
      <div className="flex h-full flex-col justify-center">
        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-forest/60">
          {fallbackLabel}
        </span>
        <span className="mt-1 text-sm font-black leading-5 text-forest">{item.name}</span>
      </div>
    </div>
  );
}
