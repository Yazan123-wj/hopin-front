import { formatItemPrice } from "@/data/menu";
import type { MenuItem as MenuItemType } from "@/types";
import { cn } from "@/lib/cn";
import { MenuItemImage } from "@/components/menu/MenuItemImage";
import Image from "next/image";

export function FeaturedMenuItem({
  item,
  index,
}: {
  item: MenuItemType;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article className="grid items-stretch md:grid-cols-2">
      <div
        className={cn(
          "img-zoom relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[58vh]",
          reverse && "md:order-2",
        )}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        ) : (
          <div className="flex h-full min-h-[18rem] w-full flex-col items-center justify-center gap-3 bg-foreground/[0.06] text-muted md:min-h-[58vh]">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8.5" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.2" />
              <path d="M21 16.5 16 12l-4.5 4.5L9 14.2 3 19" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span className="text-[10px] tracking-[0.16em] uppercase">Image coming soon</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start px-6 py-10 md:px-12 md:py-14 lg:px-16">
        <h3 className="max-w-[14ch] font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.9]">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-5 max-w-[34ch] text-[16px] leading-7 text-muted">{item.description}</p>
        ) : null}
        {item.price != null ? (
          <p className="mt-8 text-[15px] tabular-nums">{formatItemPrice(item)}</p>
        ) : null}
      </div>
    </article>
  );
}

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="border-b border-line py-5 transition-colors duration-300 hover:bg-foreground/[0.025] md:px-1">
      <div className="flex items-start gap-4 md:gap-5">
        <MenuItemImage image={item.image} name={item.name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-4">
            <h3 className="min-w-0 font-heading text-[18px] tracking-tight md:text-[22px]">{item.name}</h3>
            <span
              className="mb-[0.4em] min-w-8 flex-1 border-b border-dotted border-foreground/25"
              aria-hidden
            />
            {item.price != null ? (
              <p className="shrink-0 tabular-nums text-[16px] md:text-[18px]">
                {formatItemPrice(item)}
              </p>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-muted md:text-[15px]">
              {item.description}
            </p>
          ) : null}
          {item.dietaryTags.length > 0 ? (
            <p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-muted">
              {item.dietaryTags.join(" · ")}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
