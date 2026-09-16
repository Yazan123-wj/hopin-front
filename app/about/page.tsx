import type { Metadata } from "next";
import Image from "next/image";
import { StatementSwiper } from "@/components/about/StatementSwiper";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind the café, the room, and the food we put out every morning.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[100dvh] min-h-[32rem] overflow-hidden">
        <Image
          src="/images/space.jpg"
            alt="The Hop In café"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
        <h1 className="absolute bottom-10 left-5 max-w-[10ch] font-serif text-[clamp(3.8rem,11vw,9.5rem)] leading-[0.82] text-white md:left-8 md:bottom-14">
          We’re here
          <br />
          for the
          <br />
          good bits.
        </h1>
      </section>

      <StatementSwiper />

      <section className="grid bg-background lg:grid-cols-2">
        <div className="img-zoom relative min-h-[78vw] lg:min-h-[86vh]">
          <Image
            src="/images/coffee.jpg"
            alt="Hands meeting over coffee"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-[var(--section-space)] md:px-16 lg:py-0">
          <Reveal>
            <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Our story</p>
            <h2 className="mt-5 font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.9]">
              Come in.
              <br />
              Stay a while.
            </h2>
            <p className="mt-8 max-w-[36ch] text-[17px] leading-7">
              We built this café around a single idea: mornings should feel better than they have to.
              Fresh croffles, proper coffee, and a space that doesn’t hurry you out the door.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-header px-5 py-[var(--section-space)] text-center text-header-text md:px-12 md:py-[var(--section-space-lg)]">
        <Reveal>
          <p className="text-[12px] tracking-[0.22em] uppercase text-accent">How we cook</p>
          <h2 className="mx-auto mt-6 max-w-[14ch] font-serif text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.88]">
            Make it fresh.
            Keep it simple.
            Serve it kindly.
          </h2>
          <p className="mx-auto mt-10 max-w-[38ch] text-[16px] leading-7 text-header-text/80">
            The food is the point. Everything else — the room, the cups, the pace of service — is there
            to let it land.
          </p>
        </Reveal>
      </section>

      <section className="bg-background px-[var(--section-frame)] pt-[var(--section-space)]">
        <div className="grid grid-cols-2 gap-3 md:h-[78vh] md:grid-rows-2 md:gap-4">
          <div className="img-zoom relative col-span-2 min-h-[52vh] md:col-span-1 md:row-span-2 md:min-h-0">
            <Image
              src="/images/brunch.jpg"
              alt="Golden breakfast with fruit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_55%]"
            />
          </div>
          <div className="img-zoom relative min-h-[48vw] md:min-h-0">
            <Image
              src="/images/latte.jpg"
              alt="Coffee and plants"
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="img-zoom relative min-h-[48vw] md:min-h-0">
            <Image
              src="/images/cookies.jpg"
              alt="House cookies"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="img-zoom relative mt-3 h-[42vh] min-h-[16rem] md:mt-4 md:h-[46vh]">
          <Image
            src="/images/storefront.jpg"
            alt="The Hop In café"
            fill
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />
        </div>
      </section>

      <section className="bg-background px-5 pb-[var(--section-space-lg)] pt-16 text-center md:px-8 md:pt-24">
        <p className="mx-auto max-w-[12ch] font-serif text-[clamp(2.8rem,7vw,6.2rem)] leading-[0.88]">
          Where croffles, coffee and comfort come together.
        </p>
        <div className="mt-10 flex justify-center">
          <ArrowLink href="/menu">See the menu</ArrowLink>
        </div>
      </section>
    </>
  );
}
