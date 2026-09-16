import Image from "next/image";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";

export function FoodShowcase() {
  return (
    <section className="bg-background px-[var(--section-frame)] pt-[var(--section-frame)]">
      <div className="grid lg:grid-cols-2">
        <div className="img-zoom relative min-h-[78vw] lg:min-h-[80vh]">
          <Image
            src="/images/brunch.jpg"
            alt="A golden breakfast stack with banana, blueberries and icing sugar"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_55%]"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-12 md:py-24 lg:px-16 lg:py-0">
          <Reveal>
            <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Signature</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[0.9]">
              Classic
              <br />
              croffle.
            </h2>
            <p className="mt-6 max-w-[24ch] text-[17px] leading-7 text-muted">
              Flaky. Golden. Made fresh.
            </p>
            <div className="mt-8">
              <ArrowLink href="/menu#croffles">Discover</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
