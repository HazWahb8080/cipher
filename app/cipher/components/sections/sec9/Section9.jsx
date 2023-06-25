"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";

export const Words = [
  "E-commerce",
  "Designers",
  "eCommerce",
  "Freelancers",
  "People",
  "Managers",
  "Develop",
  "Freelancers",
  "People",
  "Managers",
  "Develop",
];

function Section9() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <section className="w-full md:w-[75%] grid grid-cols-1 md:grid-cols-2 border-t border-black/5 mt-12">
      <div
        className="w-full pt-2 mt-24 mb-12
     z-50 items-start justify-start flex flex-col py-6 px-10"
      >
        <h1 className="from-[#152e9e] to-[#c1a2f3] bg-gradient-to-r text-transparent bg-clip-text text-2xl md:text-5xl font-bold">
          Ready to get started?
        </h1>
        <p className="w-full md:w-[90%] text-black/60 text-xl mt-6">
          Drive growth and rank higher on search engines SEO.
        </p>
        <button
          className="px-4 text-md font-normal rounded-full
         border bg-[#152e9e] text-white py-2 mt-6 smooth hover:bg-opacity-100 
         bg-opacity-80 hover:-translate-y-1 hover:shadow-xl"
        >
          Join now
        </button>
      </div>
      <div
        className="w-full overflow-hidden
     z-50 items-center justify-center flex flex-col 
     max-h-[50vh] bg-white bg-gradient-to-l relative"
      >
        <div
          className="backdrop-filter backdrop-blur-3xl
         drop-shadow-lg opacity-10 absolute h-[50px] md:h-[50px] w-full from-transparent to-transprent via-black bg-gradient-to-l"
        />
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={7}
          initialSlide={activeIndex}
          centeredSlides={true}
          direction="vertical"
          draggable={false}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          className="w-full lg:w-[70%] items-center justify-center flex flex-col p-0 m-0 swiper-container"
        >
          {Words.map((word, index) => (
            <SwiperSlide
              key={word}
              className={`smooth swiper-slide ${
                activeIndex === index
                  ? "opacity-100 swiper-slide-active"
                  : "opacity-10"
              }`}
            >
              <div className="">
                <h2 className="slide__item">{word}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section9;
