import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hop In — A café first in Gymea",
    template: "%s | Hop In",
  },
  description:
    "Hop In is a neighbourhood café on Gymea Bay Road. Proper coffee from early. Breakfast until 3pm. Lunch, dinner and dessert until 10pm.",
  openGraph: {
    title: "Hop In — A café first in Gymea",
    description:
      "Coffee, breakfast, lunch, dinner and dessert. Open 6am–10pm daily at 89 Gymea Bay Road.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
