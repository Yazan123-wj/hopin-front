import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find Hop In at ${site.location.address}, ${site.location.city}. ${site.location.status}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-header px-5 pb-16 pt-[calc(var(--header-height)+4rem)] text-header-text md:px-8 md:pb-24 md:pt-[calc(var(--header-height)+6rem)]">
        <p className="text-[12px] tracking-[0.22em] uppercase text-accent">Contact</p>
        <h1 className="mt-5 max-w-[10ch] font-serif text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.84]">
          Find us
        </h1>
        <p className="mt-8 max-w-[32ch] text-[16px] leading-7 text-header-text/80">
          {site.location.address}
          <br />
          {site.location.city}
        </p>
        {site.location.note ? (
          <p className="mt-3 text-[15px] text-header-text/70">{site.location.note}</p>
        ) : null}
        <div className="mt-6 space-y-2 text-[14px]">
          <p>{site.location.status}</p>
          <p>Dine in or take away</p>
        </div>
        <div className="mt-10">
          <ArrowLink href={site.location.mapsUrl} className="text-header-text">
            Get Directions
          </ArrowLink>
        </div>
      </section>

      <section className="bg-background px-5 py-[var(--section-space)] md:px-8 md:py-[var(--section-space-lg)]">
        <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Contact</p>
        <h2 className="mt-5 font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.9]">
          Send a message
        </h2>
        <p className="mt-6 max-w-[38ch] text-[16px] leading-7 text-muted">
          Questions, bookings, or something sweet you&apos;d like to see on the menu — write to us
          here.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
