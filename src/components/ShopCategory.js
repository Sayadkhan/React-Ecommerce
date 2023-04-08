import React from "react";
import ShopCard from "./ShopCard";

const ShopCategory = () => {
  return (
    <div className="container mx-auto">
      <h1 className="categories-title font-bold text-gray-400 text-2xl pb-5">
        Popular Categories
      </h1>

      <div>
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopCategory;
