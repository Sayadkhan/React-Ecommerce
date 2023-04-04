import React from "react";
import { Link } from "react-router-dom";
import CategorySlider from "./CategorySlider";

const PopularCategories = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between pb-5">
        <h1 className="categories-title font-bold text-gray-400 text-2xl">
          Popular Categories
        </h1>
        <Link
          to="/allcategories"
          className="text-orange-500 hover:underline duration-300"
        >
          view all
        </Link>
      </div>
      <div>
        <CategorySlider />
      </div>
    </div>
  );
};

export default PopularCategories;
