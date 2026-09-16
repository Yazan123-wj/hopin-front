import { ArrowLink } from "@/components/shared/ArrowLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center px-5 pt-[var(--header-height)] pb-16 text-center md:px-8">
      <p className="font-serif text-[clamp(5rem,16vw,12rem)] leading-[0.8]">404</p>
      <p className="mt-6 max-w-sm text-[16px]">This page isn’t on the menu.</p>
      <div className="mt-10">
        <ArrowLink href="/">Back home</ArrowLink>
      </div>
    </section>
  );
}
