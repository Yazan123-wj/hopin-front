import Image from "next/image";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[36rem] overflow-hidden bg-header">
      <Image
        src="/images/hero.jpg"
        alt="The Hop In café, green tiles, hanging plants and the coffee bar"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-header/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-header/75 via-transparent to-header/20" />
      <div className="absolute inset-x-0 top-[var(--header-height)] flex items-start justify-between px-5 py-5 text-[11px] tracking-[0.18em] uppercase text-white md:px-8">
        <p>Gymea Bay Road</p>
        <p>{site.location.status}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-8 md:pb-14">
        <h1 className="max-w-[12ch] font-serif text-[clamp(3.2rem,8vw,7.4rem)] leading-[0.88] text-white">
          Coffee, breakfast,
          <br />
          lunch, dinner
          <br />
          and dessert.
        </h1>
        <p className="mt-6 max-w-[42ch] text-[15px] leading-6 text-white md:text-[16px]">
          Proper coffee from early. Breakfast until 3pm. A full lunch and dinner menu after that,
          alongside something sweet whenever the mood takes you.
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <ArrowLink href="/menu" variant="solid" invert>
            Explore the Menu
          </ArrowLink>
          <a
            href="#statement"
            className="text-[11px] tracking-[0.2em] uppercase text-white"
          >
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
}
