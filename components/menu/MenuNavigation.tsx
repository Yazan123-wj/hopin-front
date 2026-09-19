"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";

const filters = [{ id: "all", label: "All" }, ...menuCategories] as const;

type MenuNavProps = {
  active: string;
  onChange: (id: string) => void;
};

export function MenuNavigation({ active, onChange }: MenuNavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const selected = navRef.current?.querySelector<HTMLElement>('[aria-pressed="true"]');
    selected?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-[var(--header-height)] z-20 border-b border-line bg-background/95 backdrop-blur-sm">
      <nav
        ref={navRef}
        className="category-scroll flex flex-nowrap gap-1 overflow-x-auto overscroll-x-contain px-4 py-3 md:px-8"
        aria-label="Menu categories"
      >
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={active === item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors duration-300",
              active === item.id
                ? "bg-secondary text-white"
                : "text-foreground hover:bg-foreground/6",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export function useMenuFilter() {
  const [active, setActive] = useState("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuCategories.some((c) => c.id === hash)) {
      setActive(hash);
    }
  }, []);

  useEffect(() => {
    if (active === "all") return;
    const node = document.getElementById(active);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return useMemo(() => ({ active, setActive }), [active]);
}
