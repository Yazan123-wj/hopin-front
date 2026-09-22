import Image from "next/image";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/data/site";

export function FranchiseEnquiry() {
  return (
    <section id="franchise" className="grid bg-background lg:grid-cols-2">
      <div className="img-zoom relative min-h-[64vw] lg:min-h-[72vh]">
        <Image
          src="/images/dining.jpg"
          alt="Hop In café seating"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-[var(--section-space)] md:px-12 lg:min-h-[72vh] lg:py-0">
        <Reveal>
          <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Franchise</p>
          <h2 className="mt-5 max-w-[10ch] font-serif text-[clamp(3.2rem,7.5vw,6.8rem)] leading-[0.86]">
            Open a
            <br />
            Hop In.
          </h2>
          <p className="mt-6 max-w-[32ch] text-[16px] leading-7 text-muted">
            If you&apos;re interested in a Hop In franchise, we&apos;d like to hear from you.
          </p>
          <div className="mt-9">
            <ArrowLink href={`mailto:${site.contact.email}?subject=Franchise enquiry`}>
              Get in touch
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
