import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
  {
    id: 1,
    src: "https://shop.activeitzone.com/public/uploads/all/mVSFC313LZk2QrzWdLMFvDHm06whf7vSGqhje8U7.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://shop.activeitzone.com/public/uploads/all/ZurlOglHJaxpG8IZ6co8kWI5lIi5aVlCsvf0ZnP0.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://shop.activeitzone.com/public/uploads/all/Oj6iFR5o7BxzmYyYckZKKeyMy4rQa1McRCSQHKG3.webp",
    alt: "Image 3",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImage]);

  // const goToPrevImage = () => {
  //   setCurrentImage((currentImage - 1 + images.length) % images.length);
  // };

  // const goToNextImage = () => {
  //   setCurrentImage((currentImage + 1) % images.length);
  // };

  return (
    <div className="container mx-auto pl-5">
      <div className="relative h-80">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-y-0 left-0 flex items-center">
          {/* <button
            onClick={goToPrevImage}
            className="p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
          >
            <AiOutlineLeft className="h-6 w-6" />
          </button> */}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* <button
            onClick={goToNextImage}
            className="p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
          >
            <AiOutlineRight className="h-6 w-6" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
