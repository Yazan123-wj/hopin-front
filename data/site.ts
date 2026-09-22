import type { SiteSettings } from "@/types";

export const gymeaCopy = {
  label: "Hop In Gymea",
  heading: "A café first",
  paragraph1:
    "Hop In is a neighbourhood café on Gymea Bay Road, open from 6am to 10pm, seven days a week. Proper coffee from early. Breakfast until 3pm. A full lunch and dinner menu after that — burgers, sandwiches, pastas, salads and steak — alongside acai bowls, pancakes, French toast and, yes, the croffles.",
  paragraph2:
    "We're also open late, every night. When the rest of the village has shut, you can still get dinner, dessert and a decent coffee.",
  facts: [
    "Open 6am–10pm, 7 days",
    "Dine in or take away",
    "Kids' menu",
    "Family friendly",
    "89 Gymea Bay Road",
    "300m from Gymea station",
  ] as const,
};

export const site: SiteSettings = {
  name: "Hop In",
  tagline: "A café first",
  statement: "A café first",
  location: {
    city: "Gymea",
    country: "Australia",
    address: "89 Gymea Bay Road",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=89+Gymea+Bay+Road+Gymea+NSW",
    status: "Open 6am–10pm, 7 days",
    note: "300m from Gymea station",
  },
  openingHours: [{ days: "Open 6am–10pm, 7 days", hours: "" }],
  contact: {
    email: "Tim@hopinaustralia.com",
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
  { href: "/contact", label: "Contact" },
] as const;
