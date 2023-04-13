import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategories from "../components/PopularCategories";
import TodaySells from "../components/TodaySells";
import ShopCategory from "../components/ShopCategory";
import CardHolder from "../components/CardHolder";

const Home = () => {
  return (
    <div className="gap-3">
      <HeroSection />
      <PopularCategories />
      <TodaySells />
      <ShopCategory />
      <CardHolder />
    </div>
  );
};

export default Home;
