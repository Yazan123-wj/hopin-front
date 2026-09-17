const items = [
  "Coffee",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Croffles",
  "Coffee",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Croffles",
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-line bg-header py-6 text-header-text md:py-7" aria-hidden>
      <div className="marquee-track gap-10 px-6">
        {[0, 1].map((copy) => (
          <p key={copy} className="flex shrink-0 gap-10 font-serif text-[clamp(1.6rem,4vw,3rem)]">
            {items.map((item, index) => (
              <span key={`${copy}-${index}`} className="flex items-center gap-10">
                {item}
                <span className="text-[0.6em] text-accent">•</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
