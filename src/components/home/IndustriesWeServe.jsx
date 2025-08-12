"use client";

import React from "react";
import Image from "next/image";

import healthcare from "../../../public/assets/health.png";
import pharmacy from "../../../public/assets/pharmacy.png";
import education from "../../../public/assets/education.png";
import food from "../../../public/assets/food.png";
import labs from "../../../public/assets/science.png";

const industries = [
  {
    icon: healthcare,
    title: "Healthcare",
    description:
      "Providing hospitals and clinics with specialized monitoring solutions that ensure patient and staff safety.",
  },
  {
    icon: pharmacy,
    title: "Pharmacies",
    description:
      "Streamline pharmaceutical storage with consistent, reliable monitoring.",
  },
  {
    icon: education,
    title: "Education",
    description:
      "Optimize learning environments by maintaining healthy air quality in schools and universities.",
  },
  {
    icon: food,
    title: "Food Services",
    description:
      "Protect food storage and distribution operations with precise environmental controls.",
  },
  {
    icon: labs,
    title: "Life Sciences & Laboratories",
    description:
      "Supporting laboratories with controlled monitoring for sensitive research environments.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 bg-[#f2f7ff] text-black text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-2 inline-block border border-dashed border-blue-500 text-[14px]  text-blue-600  px-4 py-2 rounded-full mt-8 tracking-wider bg-[#dbeefe]">
          Solutions
        </div>
        <h2 className="text-3xl md:text-4xl  text-gray-900 mb-12">
          Industries We Serve
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
          {industries?.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl px-3 py-5 shadow-md text-center max-w-[260px] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  unoptimized
                  className="w-12 h-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <h3 className="text-xl font-medium mb-2 text-gray-900">
                {industry.title}
              </h3>

              <p className="text-gray-600 mb-4">{industry.description}</p>

              <a
                href="/product"
                className="font-medium text-sm underline underline-offset-4  transition-colors duration-300 group-hover:text-blue-500"
              >
                See Solutions &rsaquo;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
