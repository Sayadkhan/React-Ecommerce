import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    src: "https://shop.activeitzone.com/public/uploads/all/rJWH1AykG3YPFfjdA2k30D9UtfJEAMC6yJOMtgFZ.webp",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/356170/pexels-photo-356170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Image 3",
  },
];

const SliderSqure = () => {
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
    <div className="container mx-auto pl-5 w-2/3">
      <div className="relative h-96">
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

export default SliderSqure;
