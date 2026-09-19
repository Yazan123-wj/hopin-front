import { Reveal } from "@/components/shared/Reveal";
import { gymeaCopy } from "@/data/site";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
      <path d="M4.6 8.2 6.8 10.3 11.4 5.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function InfoItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-6">
      <CheckIcon />
      <span>{label}</span>
    </li>
  );
}

export function Statement() {
  return (
    <section
      id="statement"
      className="bg-background px-5 py-[var(--section-space)] md:px-8 md:py-[var(--section-space-lg)]"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">
              {gymeaCopy.label}
            </p>
            <h2 className="mt-6 max-w-[10ch] font-serif text-[clamp(2.8rem,7.2vw,6.4rem)] leading-[0.9]">
              A café
              <br />
              first
            </h2>
          </div>

          <div>
            <p className="max-w-[46ch] text-[17px] leading-7 text-muted">
              {gymeaCopy.paragraph1}
            </p>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-7 text-muted">
              {gymeaCopy.paragraph2}
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-10">
              {gymeaCopy.facts.map((fact) => (
                <InfoItem key={fact} label={fact} />
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
