import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  // const slides = [
  //   {
  //     id: 1,
  //     thumbnail:  picture
  //   },
  //   {
  //     id: 2,
  //     thumbnail:  picture1
  //   },
  //   {
  //     id: 3,
  //     thumbnail:  picture2
  //   },
  //   {
  //     id: 4,
  //     thumbnail:  picture3
  //   },
  //   {
  //     id: 5,
  //     thumbnail:  picture4
  //   },
  // ]
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-[#00000033] text-[#fff] hover:bg-[#00000080]"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[#00000033] text-[#fff] hover:bg-[#00000080]"
        >
          <FaChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            ><img src={_} alt="" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}