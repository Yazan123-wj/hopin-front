import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  invert?: boolean;
  className?: string;
};

export function Logo({ invert = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${site.name} home`}
    >
      <Image
        src={invert ? "/branding/logo-light.png" : "/branding/logo-dark.png"}
        alt=""
        width={178}
        height={50}
        className="h-9 w-auto md:h-10"
        priority
      />
    </Link>
  );
}
