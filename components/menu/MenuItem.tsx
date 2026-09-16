import Image from "next/image";
import { formatPrice } from "@/data/menu";
import type { MenuItem as MenuItemType } from "@/types";
import { cn } from "@/lib/cn";

const imagePosition: Record<string, string> = {
  "/images/brunch.jpg": "object-[center_55%]",
  "/images/cookies.jpg": "object-center",
  "/images/sweets.jpg": "object-center",
  "/images/croffle.jpg": "object-center",
  "/images/latte.jpg": "object-center",
  "/images/coffee.jpg": "object-center",
};

export function FeaturedMenuItem({
  item,
  index,
}: {
  item: MenuItemType;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const position = (item.image && imagePosition[item.image]) || "object-center";

  return (
    <article className="grid items-stretch md:grid-cols-2">
      <div
        className={cn(
          "img-zoom relative aspect-[4/5] md:aspect-auto md:min-h-[58vh]",
          reverse && "md:order-2",
        )}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn("object-cover", position)}
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-start px-6 py-10 md:px-12 md:py-14 lg:px-16">
        <h3 className="max-w-[14ch] font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.9]">
          {item.name}
        </h3>
        <p className="mt-5 max-w-[34ch] text-[16px] leading-7 text-muted">{item.description}</p>
        <p className="mt-8 text-[15px] tabular-nums">{formatPrice(item.price)}</p>
      </div>
    </article>
  );
}

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="border-b border-line py-5 transition-colors duration-300 hover:bg-foreground/[0.025] md:px-1">
      <div className="flex items-baseline gap-4">
        <h3 className="min-w-0 text-[18px] tracking-tight md:text-[22px]">{item.name}</h3>
        <span
          className="mb-[0.4em] min-w-8 flex-1 border-b border-dotted border-foreground/25"
          aria-hidden
        />
        <p className="shrink-0 tabular-nums text-[16px] md:text-[18px]">{formatPrice(item.price)}</p>
      </div>
      <p className="mt-2 max-w-2xl text-[14px] leading-6 text-muted md:text-[15px]">{item.description}</p>
      {item.dietaryTags.length > 0 ? (
        <p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-muted">
          {item.dietaryTags.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
