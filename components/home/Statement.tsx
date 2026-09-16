import { Reveal } from "@/components/shared/Reveal";

export function Statement() {
  return (
    <section
      id="statement"
      className="bg-background px-5 py-[var(--section-space)] text-center md:px-8 md:py-[var(--section-space-lg)]"
    >
      <Reveal>
        <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Welcome</p>
        <h2 className="mx-auto mt-6 max-w-[14ch] font-serif text-[clamp(2.8rem,7.2vw,6.4rem)] leading-[0.9]">
          Come for
          <br />
          the coffee.
          <br />
          Stay for
          <br />
          the croffles.
        </h2>
        <p className="mx-auto mt-8 max-w-[34ch] text-[17px] leading-7 text-muted">
          Fresh pastry, a proper cup, and a room that doesn’t rush you. A warmer way to start.
        </p>
      </Reveal>
    </section>
  );
}
