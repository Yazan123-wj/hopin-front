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
        Come
        <br />
        hop in.
      </h2>
      <p className="mt-6 text-[16px] leading-7">
        {site.location.address}
        <br />
        {site.location.city}
      </p>
      {site.location.note ? (
        <p className="mt-2 text-[15px] text-muted">{site.location.note}</p>
      ) : null}
      <p className="mt-5 text-[14px]">{site.location.status}</p>
      <div className="mt-8">
        <ArrowLink href={site.location.mapsUrl}>Get Directions</ArrowLink>
      </div>
    </section>
  );
}
