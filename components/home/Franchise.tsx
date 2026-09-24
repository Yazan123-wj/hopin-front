import Image from "next/image";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";

export function Franchise() {
  return (
    <section className="grid bg-header text-header-text lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-5 py-[var(--section-space)] md:px-12 lg:order-1 lg:min-h-[72vh] lg:py-0">
        <Reveal>
          <p className="text-[12px] tracking-[0.22em] uppercase text-accent">Open late</p>
          <h2 className="mt-5 max-w-[10ch] font-serif text-[clamp(3.2rem,7.5vw,6.8rem)] leading-[0.86]">
            Open late,
            <br />
            every night.
          </h2>
          <p className="mt-6 max-w-[32ch] text-[16px] leading-7 text-white">
            When the rest of the village has shut, you can still get dinner, dessert and a decent
            coffee.
          </p>
          <div className="mt-9">
            <ArrowLink href="/menu" className="text-header-text">
              Explore the Menu
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
