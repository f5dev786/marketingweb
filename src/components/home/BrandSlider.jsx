// components/BrandSlider.jsx
"use client";

import React from "react";
import Image from "next/image";
import c1 from "../../../public/assets/c1.png";
import c2 from "../../../public/assets/c2.png";
import c3 from "../../../public/assets/c3.png";
import c4 from "../../../public/assets/c4.jpeg";
import c5 from "../../../public/assets/c5.jpeg";
import c6 from "../../../public/assets/c6.jpeg";
import c7 from "../../../public/assets/c7.png";
import c8 from "../../../public/assets/c8.png";
import c9 from "../../../public/assets/c9.png";
import c10 from "../../../public/assets/c10.png";

const BrandSlider = () => {
  const brandImages = [
    { src: c1, alt: "Domino's" },
    { src: c2, alt: "DUTCH BROS Cafe" },
    { src: c7, alt: "DUNKIN'" },
    { src: c3, alt: "WYNDHAM GRAND" },
    { src: c4, alt: "Aarnoff INTERNATIONAL" },
    { src: c5, alt: "VAL RESORTS" },
    { src: c6, alt: "TACO BELL" },
    { src: c10, alt: "DESI BROTHER" },
    { src: c8, alt: "NEW PIZZA'" },
    { src: c9, alt: "IHOP" },
  ];

  return (
    <div className="py-15 bg-white text-black">
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

        {/* 品牌网格布局 */}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 items-center justify-center px-4">
          {brandImages.map((brand, index) => (
            <div key={index} className="flex items-center h-[140px] justify-center p-4">
              <Image
                src={brand.src}
                alt={brand.alt}
                className=" object-contain"
                height={90}
                width={180}
                unoptimized
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandSlider;
