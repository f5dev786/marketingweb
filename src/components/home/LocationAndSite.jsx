// components/LocationAndSite.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import location from "../../../public/assets/location1.png";
import site from "../../../public/assets/location-2.png";
import Image from "next/image";

const LocationAndSite = () => {
  return (
    <div className="py-15 bg-[#02172f] text-white ">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-[42px] font-medium  mb-12"
        >
          <span className="text-blue-500">Multi-Location &</span> Site
          Management
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="rounded-xl shadow-xl mx-2"
        >
          {[location, site].map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index}`}
                width={1200}
                height={600}
                unoptimized
                className="rounded-xl w-full border-5 border-gray-300 h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LocationAndSite;
