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
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
      <div className="absolute inset-x-0 top-[var(--header-height)] flex items-start justify-between px-5 py-5 text-[11px] tracking-[0.18em] uppercase text-white md:px-8">
        <p>{site.location.city}</p>
        <p>{site.location.status}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-8 md:pb-14">
        <h1 className="max-w-[10ch] font-serif text-[clamp(3.8rem,10vw,9.2rem)] leading-[0.84] text-white">
          Good days
          <br />
          start here.
        </h1>
        <p className="mt-6 text-[13px] tracking-[0.18em] uppercase text-white/85">
          Croffles · Coffee · Good company
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <ArrowLink href="/menu" variant="solid" invert>
            See the menu
          </ArrowLink>
          <a
            href="#statement"
            className="text-[11px] tracking-[0.2em] uppercase text-white/80"
          >
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
}
