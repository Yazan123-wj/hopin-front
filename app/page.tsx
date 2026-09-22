import { FeaturedGrid } from "@/components/home/FeaturedGrid";
import { FoodShowcase } from "@/components/home/FoodShowcase";
import { Franchise } from "@/components/home/Franchise";
import { FranchiseEnquiry } from "@/components/home/FranchiseEnquiry";
import { Hero } from "@/components/home/Hero";
import { LocationBand } from "@/components/home/LocationBand";
import { Marquee } from "@/components/home/Marquee";
import { Statement } from "@/components/home/Statement";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Marquee />
      <FoodShowcase />
      <FeaturedGrid />
      <Franchise />
      <FranchiseEnquiry />
      <LocationBand />
    </>
  );
}

