import type { SiteSettings } from "@/types";

export const site: SiteSettings = {
  name: "Hop In",
  tagline: "Croffles & Coffee",
  statement: "Home to the",
  location: {
    city: "Australia",
    country: "Australia",
    address: "Address coming soon",
    mapsUrl: "#location",
    status: "Open today",
  },
  openingHours: [
    { days: "Mon — Fri", hours: "7:00 AM — 6:00 PM" },
    { days: "Sat — Sun", hours: "8:00 AM — 7:00 PM" },
  ],
  contact: {
    email: "hello@hopin.com.au",
    phone: "",
  },
  social: {
    instagram: {
      handle: "@hopin",
      url: "https://instagram.com/hopin",
    },
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/careers", label: "Careers" },
] as const;
