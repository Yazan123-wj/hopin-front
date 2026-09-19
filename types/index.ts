export type MenuCategoryId = string;

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | null;
  largePrice?: number | null;
  category: MenuCategoryId;
  image: string | null;
  dietaryTags: string[];
  featured: boolean;
}

export type EmploymentType = "Full Time" | "Part Time" | "Casual";

export interface Job {
  id: string;
  title: string;
  location: string;
  employmentType: EmploymentType;
  department: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  publishedAt: string;
  active: boolean;
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  resume: File | null;
  portfolioUrl: string;
  message: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  statement: string;
  location: {
    city: string;
    country: string;
    address: string;
    mapsUrl: string;
    status: string;
    note?: string;
  };
  openingHours: OpeningHours[];
  contact: {
    email: string;
    phone: string;
  };
  social: {
    instagram: {
      handle: string;
      url: string;
    };
  };
}
