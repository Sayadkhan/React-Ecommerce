// import axios from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

const ShopCard = () => {
  const [catgeories, setCatgeories] = useState([]);

  useEffect(() => {
    axios
      .get("https://project.softcreation.tech/okdam-ecommerce/api-category")
      .then((res) => {
        setCatgeories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // useEffect(() => {
  //   fetch("https://project.softcreation.tech/okdam-ecommerce/api-category")
  //     .then((response) => response.json())
  //     .then((data) => setCatgeories(data));
  // }, []);

  return (
    <div className="flex justify-between py-3">
      {catgeories.map((category) => (
        <div
          key={category.id}
          className="flex border p-3 hover:border-orange-300"
        >
          <div className="left p-5">
            <img src={category.banner} alt="logo1" className="p-3" />

            <h2 className="p-3">{category.name}</h2>

            <button className="p-3 border  border-orange-500 bg-orange-300/25 hover:bg-orange-300/10">
              Visit Shop
            </button>
          </div>
          <div className="right">
            <div className="flex gap-3 border">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
