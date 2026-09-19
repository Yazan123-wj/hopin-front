import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-background p-3 md:p-4">
      <div className="overflow-hidden rounded-[28px] bg-header px-6 pt-10 text-header-text md:rounded-[40px] md:px-10 md:pt-12">
        <div className="grid grid-cols-1 gap-10 text-[13px] leading-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <nav aria-label="Footer">
            <p className="mb-4 text-[12px] tracking-[0.22em] uppercase text-accent">Navigate</p>
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

          <div>
            <p className="mb-4 text-[12px] tracking-[0.22em] uppercase text-accent">Visit us</p>
            <p>{site.location.address}</p>
            <p>{site.location.city}</p>
            {site.location.note ? <p className="mt-2">{site.location.note}</p> : null}
            <p className="mt-4">{site.location.status}</p>
            <p className="mt-4">Dine in or take away</p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <p className="mb-4 text-[12px] tracking-[0.22em] uppercase text-accent">
              Stay in the loop
            </p>
            <p className="max-w-[28ch] text-header-text/80">
              New flavours, seasonal specials, and café news.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <Link href="/" className="footer-mark" aria-label={`${site.name} home`}>
          <Image src="/branding/logo-light.png" alt="" width={356} height={100} />
        </Link>

        <div className="flex flex-col gap-4 border-t border-header-text/15 py-5 text-[11px] tracking-[0.16em] uppercase md:flex-row md:items-center md:justify-between">
          <p>Made with care in Gymea, NSW</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={site.social.instagram.url} className="link-underline">
              Instagram
            </a>
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
