"use client";

import Image from "next/image";
import { MenuItem as MenuRow, FeaturedMenuItem } from "@/components/menu/MenuItem";
import { MenuNavigation, useMenuFilter } from "@/components/menu/MenuNavigation";
import { getFeaturedItems, getItemsByCategory, menuCategories } from "@/data/menu";

export function MenuPageContent() {
  const { active, setActive } = useMenuFilter();
  const featured = getFeaturedItems();
  const visibleCategories =
    active === "all"
      ? menuCategories
      : menuCategories.filter((category) => category.id === active);

  return (
    <>
      <section className="relative h-[42dvh] min-h-[18rem] overflow-hidden md:h-[58dvh] md:min-h-[26rem]">
        <Image
          src="/images/brunch.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-7 text-white md:px-8 md:pb-10">
          <p className="text-[11px] tracking-[0.22em] uppercase text-white/75">Digital menu</p>
          <h1 className="mt-2 font-serif text-[clamp(4rem,12vw,9rem)] leading-[0.8]">Menu</h1>
          <p className="mt-3 text-[12px] tracking-[0.16em] uppercase text-white/80">
            Croffles, coffee, matcha and more.
          </p>
        </div>
      </section>

      <MenuNavigation active={active} onChange={setActive} />

      {active === "all" ? (
        <section className="hidden bg-background md:block">
          <div className="px-5 py-10 md:px-8">
            <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Start here</p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[0.9]">
              Favourites
            </h2>
          </div>
          <div className="flex flex-col">
            {featured.map((item, index) => (
              <FeaturedMenuItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      ) : null}

      {visibleCategories.map((category) => {
        const items = getItemsByCategory(category.id);

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-[calc(var(--header-height)+3.85rem)] bg-background px-5 py-14 md:px-10 md:py-20"
          >
            <h2 className="border-b border-line pb-4 font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.88]">
              {category.label}
            </h2>
            <div>
              {items.map((item) => (
                <MenuRow key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
