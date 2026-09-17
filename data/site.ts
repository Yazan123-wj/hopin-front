import type { SiteSettings } from "@/types";

export const site: SiteSettings = {
  name: "Hop In",
  tagline: "A café first",
  statement: "A café first",
  location: {
    city: "Gymea",
    country: "Australia",
    address: "89 Gymea Bay Road",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=89+Gymea+Bay+Road+Gymea+NSW",
    status: "Open 6am–10pm daily",
    note: "300m from Gymea station",
  },
  openingHours: [{ days: "Open daily", hours: "6am — 10pm" }],
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
  { href: "/contact", label: "Contact" },
] as const;
