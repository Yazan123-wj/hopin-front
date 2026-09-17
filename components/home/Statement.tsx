import { Reveal } from "@/components/shared/Reveal";

export function Statement() {
  return (
    <section
      id="statement"
      className="bg-background px-5 py-[var(--section-space)] text-center md:px-8 md:py-[var(--section-space-lg)]"
    >
      <Reveal>
        <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Welcome</p>
        <h2 className="mx-auto mt-6 max-w-[12ch] font-serif text-[clamp(2.8rem,7.2vw,6.4rem)] leading-[0.9]">
          A café
          <br />
          first.
        </h2>
        <p className="mx-auto mt-8 max-w-[40ch] text-[17px] leading-7 text-muted">
          Hop In is a neighbourhood café on Gymea Bay Road, open from 6am to 10pm, seven days a
          week. Proper coffee from early. Breakfast until 3pm. A full lunch and dinner menu after
          that — burgers, sandwiches, pastas, salads and steak — alongside acai bowls, pancakes,
          French toast and, yes, the croffles.
        </p>
      </Reveal>
    </section>
  );
}
