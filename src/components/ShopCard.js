import axios from "axios";
import { useState, useEffect } from "react";

const ShopCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://ten-feline-quail.glitch.me/cardDetiles")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="flex py-3">
      {cards.map((card) => (
        <div key={card.di} className="flex border p-3 hover:border-orange-300">
          <div className="left p-5">
            <img src={card.img} alt="logo1" className="p-3" />

            <h2 className="p-3">{card.name}</h2>

            <button className="p-3 border  border-orange-500 bg-orange-300/25 hover:bg-orange-300/10">
              Visit Shop
            </button>
          </div>
          <div className="right">
            <div className="flex border">
              <img
                src="https://shop.activeitzone.com/public/uploads/all/eOFjcj9sbvj9C9kh19a4z8E6u4QvisX3YakhhI3C.webp"
                alt="shop-product"
                className="w-auto h-20"
              />
              <div>
                <p className="p-2">title Products</p>
                <p className="p-2">Price:$500</p>
              </div>
            </div>
            {/* card 2 */}
            <div className="flex border">
              <img
                src="https://shop.activeitzone.com/public/uploads/all/eOFjcj9sbvj9C9kh19a4z8E6u4QvisX3YakhhI3C.webp"
                alt="shop-product"
                className="w-auto h-20"
              />
              <div>
                <p className="p-2">title Products</p>
                <p className="p-2">Price:$500</p>
              </div>
            </div>
            {/* card 3 */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
