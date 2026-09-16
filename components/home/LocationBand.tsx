import { ArrowLink } from "@/components/shared/ArrowLink";
import { site } from "@/data/site";

export function LocationBand() {
  return (
    <section
      id="location"
      className="scroll-mt-[var(--header-height)] flex min-h-[70vh] flex-col items-center justify-center bg-background px-5 py-[var(--section-space)] text-center md:px-10 md:py-[var(--section-space-lg)]"
    >
      <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">Visit</p>
      <h2 className="mt-5 font-serif text-[clamp(3rem,7vw,5.8rem)] leading-[0.88]">
        {site.name}
        <br />
        {site.location.city}
      </h2>
      <p className="mt-6 text-[16px] leading-7">{site.location.address}</p>
      <div className="mt-5 space-y-2 text-[14px]">
        {site.openingHours.map((row) => (
          <p key={row.days}>
            {row.days} — {row.hours}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <ArrowLink href={site.location.mapsUrl}>Get directions</ArrowLink>
      </div>
    </section>
  );
}
