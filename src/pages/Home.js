import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategories from "../components/PopularCategories";
import TodaySells from "../components/TodaySells";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularCategories />
      <TodaySells />
      
    </div>
  );
};

export default Home;
