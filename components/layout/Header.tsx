"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("page-lock", open);
    return () => document.body.classList.remove("page-lock");
  }, [open]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointer() {
      document.documentElement.classList.remove("kb-nav");
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Tab") document.documentElement.classList.add("kb-nav");
    }
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,color,border-color] duration-300",
          solid
            ? "border-b border-line bg-background/95 text-foreground backdrop-blur-sm"
            : "border-b border-transparent bg-transparent text-header-text",
        )}
      >
        <div className="flex h-[var(--header-height)] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className={cn("hamburger", open && "is-open")} aria-hidden>
                <span />
                <span />
              </span>
            </button>
            <Logo invert={!solid} />
          </div>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="nav-link text-[11px] tracking-[0.2em] uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[6px] bg-secondary px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white transition-colors duration-300 hover:bg-secondary/90"
            >
              Visit Us
            </Link>
          </nav>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
