import React from "react";
import Slider from "./Slider";
import Category from "./Category";
import SliderSqure from "./SliderSqure";

const HeroSection = () => {
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Science" },
    { id: 3, name: "Sports" },
    { id: 4, name: "Politics" },
    { id: 5, name: "Entertainment" },
  ];

  return (
    <div className="container mx-auto p-5 flex">
      <Category categories={categories} />
      <Slider />
      <SliderSqure />
    </div>
  );
};

export default HeroSection;
