import { useState } from "react";
import { HeartIcon, StarIcon, ShoppingCartIcon } from "@heroicons/react/solid";

function TodayCard({ name, price, imageSrc, title }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCompareClick = () => {
    setIsCompared(!isCompared);
  };

  const handleAddToCartClick = () => {
    setIsAddedToCart(true);
  };

  return (
    <div className="pb-3">
      <div className="w-72 min-h-max  rounded overflow-hidden shadow-lg bg-white hover:shadow-orange-300">
        <img
          className="w-full h-48 p-3  object-cover"
          src={imageSrc}
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="mb-2 flex justify-between">
            <span className="font-bold text-gray-700">{name}</span>
            <span className="ml-2 text-gray-500">{price}</span>
          </div>
          <div className="flex justify-between">
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={handleFavoriteClick}
            >
              <HeartIcon
                className={`h-6 w-6 ${isFavorite ? "text-red-500" : ""}`}
              />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={handleCompareClick}
            >
              <StarIcon
                className={`h-6 w-6 ${isCompared ? "text-yellow-500" : ""}`}
              />
            </button>
          </div>
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <button
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${
              isAddedToCart ? "cursor-not-allowed opacity-50" : ""
            } hover:bg-orange-400`}
            onClick={handleAddToCartClick}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to cart" : "Add to cart"}
            <ShoppingCartIcon className="inline-block ml-2 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodayCard;
