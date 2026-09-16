"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { navLinks, site } from "@/data/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background text-foreground transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-[var(--header-height)] items-center justify-between px-5">
        <Logo />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-3xl leading-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <nav className="flex flex-col gap-4 px-6 pt-6" aria-label="Mobile">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="menu-link font-serif text-[clamp(3rem,12vw,4.5rem)] leading-[0.9]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="absolute inset-x-0 bottom-0 space-y-4 px-6 pb-10 text-[12px] tracking-[0.16em] uppercase">
        <a href={site.social.instagram.url}>{site.social.instagram.handle}</a>
        <p>
          {site.location.city}
          <br />
          {site.location.status}
        </p>
        <a href={`mailto:${site.contact.email}`}>Contact</a>
      </div>
    </div>
  );
}
