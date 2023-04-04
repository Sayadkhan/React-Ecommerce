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
    { id: 6, name: "girls" },
    { id: 7, name: "Shirt" },
    { id: 8, name: "pant" },
    { id: 9, name: "babys" },
    { id: 10, name: "boys" },
  ];

  return (
    <div className="container mx-auto py-3 flex">
      <Category categories={categories} />
      <Slider />
      <SliderSqure />
    </div>
  );
};

export default HeroSection;
