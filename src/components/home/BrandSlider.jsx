// components/BrandSlider.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import c1 from "../../../public/assets/c1.png";
import c2 from "../../../public/assets/c2.png";
import c3 from "../../../public/assets/c3.png";
import c4 from "../../../public/assets/c4.jpeg";
import c5 from "../../../public/assets/c5.jpeg";
import c6 from "../../../public/assets/c6.jpeg";
import c7 from "../../../public/assets/c7.png";
import Image from "next/image";
const BrandSlider = () => {
  const images = [c1, c2, c3, c4, c5, c6, c7];
  return (
    <div className="py-15 bg-white text-black ">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-2xl font-medium mb-12"
          style={{
            fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
          }}
        >
          Trusted by Many of <span className="text-blue-600">Franchise</span>{" "}
          Operators
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="max-w-6xl mx-auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Brand ${index}`}
                className="mx-auto h-20 object-contain"
                height={150}
                width={250}
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
