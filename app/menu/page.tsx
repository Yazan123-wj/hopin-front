import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Breakfast until 3pm, then a full lunch and dinner menu — burgers, sandwiches, pastas, salads, steak, croffles and dessert.",
};

export default function MenuPage() {
  return <MenuPageContent />;
}
