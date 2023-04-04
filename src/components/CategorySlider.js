import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    src: "https://freepngimg.com/save/14955-motorcycle-free-download-png/956x294",
    alt: "Image 1",
    title: "Automobile & Motorcycle",
  },
  {
    id: 2,
    src: "https://w7.pngwing.com/pngs/929/40/png-transparent-male-fashion-model-clothing-man-brad-pitt-celebrities-fashion-shoe.png",
    alt: "men clothing and fashin",
    title: "Men Clothing & Fashion",
  },
  {
    id: 3,
    src: "https://e7.pngegg.com/pngimages/425/616/png-clipart-woman-winter-dress-clothing-women-s-skirt-with-winter-women-accessories-fashion.png",
    alt: "Image 3",
    title: "Women Clothing & Fashion",
  },
];

const CategorySlider = () => {
  return (
    <div className="flex container mx-auto">
      <div className="flex gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border-2 px-2 py-5 hover:border-orange-300 hover:shadow-md duration-300"
          >
            <Link
              to="/allcategories"
              className="flex flex-col gap-5 justify-center items-center text-gray-500"
            >
              <img
                src={category.src}
                alt={category.alt}
                className="h-40 w-40 object-contain"
              />
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
