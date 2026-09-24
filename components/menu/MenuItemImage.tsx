import Image from "next/image";
import { MENU_SHOW_ITEM_PHOTOS } from "@/data/menu";

export function MenuItemImage({
  image,
  name,
}: {
  image: string | null;
  name: string;
}) {
  const src = MENU_SHOW_ITEM_PHOTOS ? image : null;

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-foreground/[0.08]">
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      ) : (
        <div className="h-full w-full" aria-hidden="true" />
      )}
    </div>
  );
}
