import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    href: "/menu#croffles",
    image: "/images/croffle.jpg",
    alt: "Golden croissant, the pastry behind the croffle",
    title: "Croffles",
    className: "min-h-[78vw] md:col-span-2 md:min-h-[70vh]",
    position: "object-center",
    sizes: "100vw",
  },
  {
    href: "/menu#coffee",
    image: "/images/coffee.jpg",
    alt: "Friends toasting with coffee",
    title: "Coffee",
    className: "min-h-[70vw] md:min-h-[48vh]",
    position: "object-center",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    href: "/menu#french-toast",
    image: "/images/cookies.jpg",
    alt: "A broken chocolate chip cookie",
    title: "Sweets",
    className: "min-h-[70vw] md:min-h-[48vh]",
    position: "object-center",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
];

export function FeaturedGrid() {
  return (
    <section className="bg-background px-[var(--section-frame)] pt-[var(--section-frame)] pb-[var(--section-frame)]">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className={`img-zoom group relative overflow-hidden ${tile.className}`}
          >
            <Image
              src={tile.image}
              alt={tile.alt}
              fill
              sizes={tile.sizes}
              className={`object-cover ${tile.position}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-header/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white md:p-7">
              <h3 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-none">
                {tile.title}
              </h3>
              <span className="arrow mb-1 text-[12px] tracking-[0.16em] uppercase">
                View ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
