import { useState } from "react";

const images = [
  "/assests/flood.jpg",
  "/assests/donation2.jpg",
  "/assests/donation4.jpg",
  "/assests/d.jpg",
  // Add more image paths here
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="relative h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-transparent text-black"
      >
        <svg
          className="h-6 w-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-transparent text-black"
      >
        <svg
          className="h-6 w-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
