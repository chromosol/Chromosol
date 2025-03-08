import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
import CardSlider from "@/components/Home/Hero/slider";
export const metadata: Metadata = {
  title: "Chromosol",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CardSlider/>
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
    </main>
  );
}
