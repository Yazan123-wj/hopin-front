import Image from "next/image";
import Link from "next/link";
import { menuCategories } from "@/data/menu";
import { navLinks, site } from "@/data/site";

const menuLinks = menuCategories
  .filter((category) => ["croffles", "coffee", "matcha", "sweets"].includes(category.id))
  .map((category) => ({ href: `/menu#${category.id}`, label: category.label }));

export function Footer() {
  return (
    <footer className="bg-background p-3 md:p-4">
      <div className="overflow-hidden rounded-[28px] bg-header px-6 pt-10 text-header-text md:rounded-[40px] md:px-10 md:pt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-[13px] leading-6 md:grid-cols-4 md:gap-8">
          <div>
            <p>{site.location.address}</p>
            <p>{site.location.city}</p>
            <a href={`mailto:${site.contact.email}`} className="mt-3 inline-block link-underline">
              {site.contact.email}
            </a>
          </div>

          <div>
            {site.openingHours.map((row) => (
              <p key={row.days} className="mb-3 last:mb-0">
                {row.days}
                <br />
                {row.hours}
              </p>
            ))}
          </div>

          <nav aria-label="Footer">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Menu">
            <ul>
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link href="/" className="footer-mark" aria-label={`${site.name} home`}>
          <Image
            src="/branding/logo-light.png"
            alt=""
            width={356}
            height={100}
          />
        </Link>

        <div className="flex flex-col gap-4 border-t border-header-text/15 py-5 text-[11px] tracking-[0.16em] uppercase md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <p>© 2026</p>
            <p>{site.tagline}</p>
            <Link href="/#location" className="link-underline">
              {site.location.city}
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={site.social.instagram.url} className="link-underline">
              Instagram
            </a>
            <a href={`mailto:${site.contact.email}`} className="link-underline">
              Email
            </a>
            <a
              href={`mailto:${site.contact.email}?subject=Franchise%20enquiry`}
              className="link-underline"
            >
              Franchise
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
