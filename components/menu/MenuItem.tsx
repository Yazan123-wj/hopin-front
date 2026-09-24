import { formatItemPrice, MENU_SHOW_ITEM_PHOTOS } from "@/data/menu";
import type { MenuItem as MenuItemType } from "@/types";
import { MenuItemImage } from "@/components/menu/MenuItemImage";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="flex flex-col">
      {MENU_SHOW_ITEM_PHOTOS ? <MenuItemImage image={item.image} name={item.name} /> : null}
      <div className={`min-w-0 ${MENU_SHOW_ITEM_PHOTOS ? "pt-4" : ""}`}>
        <h3 className="break-words font-heading text-[17px] leading-snug tracking-tight md:text-[18px]">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-2 line-clamp-3 break-words text-[14px] leading-6 text-muted">
            {item.description}
          </p>
        ) : null}
        {item.dietaryTags.length > 0 ? (
          <p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-muted">
            {item.dietaryTags.join(" · ")}
          </p>
        ) : null}
        {item.price != null ? (
          <p className="mt-3 text-[15px] tabular-nums md:text-[16px]">{formatItemPrice(item)}</p>
        ) : null}
      </div>
    </article>
  );
}
