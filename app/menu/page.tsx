import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu",
  description: "A digital café menu. Croffles, breakfast, coffee, matcha and sweets.",
};

export default function MenuPage() {
  return <MenuPageContent />;
}
