import Image from "next/image";

export function MenuItemImage({
  image,
  name,
  className = "w-[5.5rem] md:w-28",
}: {
  image: string | null;
  name: string;
  className?: string;
}) {
  return (
    <div className={`relative shrink-0 overflow-hidden aspect-[4/3] ${className}`}>
      {image ? (
        <Image src={image} alt={name} fill sizes="160px" className="object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-foreground/[0.06] px-2 text-center text-muted">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8.5" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.2" />
            <path d="M21 16.5 16 12l-4.5 4.5L9 14.2 3 19" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="text-[8px] leading-none tracking-[0.14em] uppercase">
            Image coming soon
          </span>
        </div>
      )}
    </div>
  );
}
