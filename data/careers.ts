import type { Job } from "@/types";

export const jobs: Job[] = [
  {
    id: "barista",
    title: "Barista",
    location: "Australia",
    employmentType: "Full Time",
    department: "Front of House",
    shortDescription: "Coffee, conversation, and a calm morning service.",
    description:
      "We're looking for a barista who cares about the cup and the person holding it. This is a demonstration listing for the careers frontend.",
    responsibilities: [
      "Prepare coffee and matcha to house standard",
      "Keep the bar clean, stocked and moving",
      "Make guests feel looked after from the first hello",
    ],
    requirements: [
      "Café barista experience",
      "Calm under a busy morning rush",
      "Right to work in Australia",
    ],
    publishedAt: "2026-09-01",
    active: true,
  },
  {
    id: "all-rounder",
    title: "Café All-Rounder",
    location: "Australia",
    employmentType: "Part Time",
    department: "Front of House",
    shortDescription: "Floor, bar support, and the little things that keep service kind.",
    description:
      "A flexible floor role for someone who likes a room that feels looked after. Demonstration listing only.",
    responsibilities: [
      "Support service across floor and counter",
      "Reset tables, pass plates, keep the room tidy",
      "Help guests with the menu and the space",
    ],
    requirements: [
      "Hospitality experience preferred",
      "Warm, clear communication",
      "Available weekends",
    ],
    publishedAt: "2026-09-01",
    active: true,
  },
  {
    id: "kitchen",
    title: "Kitchen Team Member",
    location: "Australia",
    employmentType: "Casual",
    department: "Kitchen",
    shortDescription: "Croffles, breakfast, and a kitchen that stays composed.",
    description:
      "Help us put out food that looks as considered as it tastes. Demonstration listing only.",
    responsibilities: [
      "Prep and plate croffles, breakfast and sweets",
      "Hold ticket times without rushing the food",
      "Keep the kitchen clean and organised",
    ],
    requirements: [
      "Kitchen or café prep experience",
      "Comfortable with a hot pass",
      "Food safety awareness",
    ],
    publishedAt: "2026-09-01",
    active: true,
  },
  {
    id: "supervisor",
    title: "Store Supervisor",
    location: "Australia",
    employmentType: "Full Time",
    department: "Leadership",
    shortDescription: "Lead the floor, protect the standard, look after the team.",
    description:
      "A leadership role for someone who can hold a room and a roster. Demonstration listing only.",
    responsibilities: [
      "Run shifts and support the team",
      "Protect product and service standards",
      "Be the calm point in a busy service",
    ],
    requirements: [
      "Supervisory café experience",
      "Clear, kind communication",
      "Confidence with people and process",
    ],
    publishedAt: "2026-09-01",
    active: true,
  },
];

export function getActiveJobs() {
  return jobs.filter((job) => job.active);
}

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id);
}
