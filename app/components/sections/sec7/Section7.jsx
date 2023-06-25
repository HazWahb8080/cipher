/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { features } from "../sec1/data";
import { Marquee, MarqueeEl } from "./Marquee";

const badges = ["Analytics", "Balance", "User Access"];

function Section7() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%]
       pt-2 custom-shadow mt-24 mb-12 overflow-hidden z-50
        items-center justify-center flex flex-col"
    >
      <div className="items-center justify-center flex flex-col pt-10 pb-5 px-6 z-50  w-full">
        <p
          className="text-[11px] text-black to-[#E7DBF3]  from-[#d0b4ec] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-4"
        >
          Real Customer • Stories
        </p>
        <h2
          className="text-4xl md:text-6xl to-[#23223A] from-[#421788]
         tracking-tighter z-0 font-semibold  bg-gradient-to-r text-transparent bg-clip-text py-4"
        >
          Hear from them
        </h2>
      </div>
      {/* slider */}
      <div
        className="w-full items-center 
      justify-center flex  "
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          className="w-full lg:w-[70%] items-center justify-center flex cursor-grabbing"
        >
          {features.map((feature) => (
            <SwiperSlide
              key={feature.id}
              className="py-6 mb-12 text-black text-center
               font-semibold md:text-xl break-words"
            >
              {feature.desc}
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      {/* marquee */}
      <MarqueeEl />
    </div>
  );
}

export default Section7;
