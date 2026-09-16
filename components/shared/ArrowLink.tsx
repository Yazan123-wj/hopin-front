import Link from "next/link";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
  variant?: "solid" | "text";
};

export function ArrowLink({
  href,
  children,
  className,
  invert = false,
  variant = "text",
}: ArrowLinkProps) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");

  const classes =
    variant === "solid"
      ? cn(
          "group inline-flex items-center gap-3 rounded-[6px] px-6 py-3.5 text-[12px] tracking-[0.16em] uppercase transition-colors duration-300",
          invert
            ? "bg-background text-foreground hover:bg-white"
            : "bg-secondary text-background hover:bg-secondary/90",
          className,
        )
      : cn(
          "group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase",
          className,
        );

  const content = (
    <>
      <span className={variant === "text" ? "link-underline" : undefined}>{children}</span>
      <span className="arrow" aria-hidden>
        ↗
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
