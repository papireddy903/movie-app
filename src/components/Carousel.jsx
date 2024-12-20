import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel() {
  const slides = [
    {
      image: "/assets/mufasa.webp",
      title: "Mufasa: The Lion King",
      info: "The untold story of Mufasa, a lion who rises to become king.",
    },
    {
      image: "/assets/carryon.jpg",
      title: "Carry On",
      info: "A thrilling journey with gripping twists and action.",
    },
    {
      image: "/assets/lord.jpg",
      title: "The Lord of the Rings",
      info: "Epic fantasy of the quest to destroy the One Ring.",
    },
    {
      image: "/assets/pianolesson.avif",
      title: "The Piano Lesson",
      info: "A powerful story about heritage and family legacy.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="w-full h-[500px] flex flex-col md:flex-row relative bg-black text-white">
      {/* Left side: Title and Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 py-4 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          {slides[current].title}
        </h2>
        <p className="text-sm md:text-lg">{slides[current].info}</p>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 h-60 md:h-full">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
