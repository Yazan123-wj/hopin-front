import Image from "next/image";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/data/site";

export function Franchise() {
  return (
    <section className="grid bg-header text-header-text lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-5 py-[var(--section-space)] md:px-12 lg:order-1 lg:min-h-[72vh] lg:py-0">
        <Reveal>
          <p className="text-[12px] tracking-[0.22em] uppercase text-accent">Franchise</p>
          <h2 className="mt-5 max-w-[8ch] font-serif text-[clamp(3.2rem,7.5vw,6.8rem)] leading-[0.86]">
            Grow
            <br />
            with us.
          </h2>
          <p className="mt-6 max-w-[30ch] text-[16px] leading-7 text-header-text/80">
            A café concept built around one product, a memorable room, and everyday rituals.
          </p>
          <div className="mt-9">
            <ArrowLink
              href={`mailto:${site.contact.email}?subject=Franchise%20enquiry`}
              className="text-header-text"
            >
              Franchise enquiries
            </ArrowLink>
          </div>
        </Reveal>
      </div>
      <div className="img-zoom relative order-1 min-h-[64vw] lg:order-2 lg:min-h-[72vh]">
        <Image
          src="/images/pour.jpg"
          alt="A barista pouring a latte"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
