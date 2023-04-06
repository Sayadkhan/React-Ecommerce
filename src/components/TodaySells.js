// import Marquee from "react-fast-marquee";
import TodayCard from "./TodayCard";
import settings from "./ReactSlick";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/15181112/pexels-photo-15181112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 1",
    name: "Sari",
    price: 200,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0601/6024/5917/files/SANVT_blog_t-shirts_vs_shirts_1200x800-1.jpg?v=1658913304",
    alt: "Image 2",
    name: "shirt",
    price: 150,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
    name: "T-Shirt",
    price: 100,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google",
  },
];

const TodaySells = () => {
  return (
    <div className="container mx-auto">
      <h1 className="categories-title font-bold text-gray-400 text-2xl pb-5">
        Most Sells
      </h1>

      <Slider {...settings} className="gap-5 flex scroll-smooth cursor-pointer">
        {cards.map((card) => (
          <div key={card.id}>
            <TodayCard
              name={card.name}
              price={card.price}
              imageSrc={card.src}
              title={card.title}
            />
          </div>
        ))}
      </Slider>
      <div className="cursor-pointer">
        <img
          src="https://shop.activeitzone.com/public/uploads/all/blLSJ3z9AsDbGZSXwWmWrMppHBhIYSb17yVUdkRK.webp"
          alt="banner"
          className="p-5 mx-auto"
        />
      </div>
    </div>
  );
};

export default TodaySells;
