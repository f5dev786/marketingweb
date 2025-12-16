"use client";
import { FaBullseye, FaHandshake, FaStar } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function WhyChooseSection() {
  return (
    <section
      className=" text-white bg-white p-16"
      style={{
        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      }}
    >
      <div className="mx-auto px-4 text-center max-w-6xl">
        {/* badge */}
        <div className="inline-block text-black border-1 !border-dashed    border-blue-500  text-[14px]  px-4 py-2 rounded-full mb-6 tracking-wider bg-[#dbeefe]">
          Why Choose Inovisense?
        </div>

        {/* heading */}
        <div className="text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            <span className="block">Built Different. Built Better.</span>
            {/* <span className="block text-blue-600 mt-2">Built Better.</span> */}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10">
            We don't just delete services — we build lasting partnerships based
            on trust, clarity, and results.
          </p>

          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-6">
            <div className="flex items-center text-blue-600">
              <FaHandshake className="mr-2" />
              <span className="text-sm md:text-base">Trust</span>
            </div>
            <div className="flex items-center text-blue-600">
              <FaBullseye className="mr-2" />
              <span className="text-sm md:text-base">Clarity</span>
            </div>
            <div className="flex items-center text-blue-600">
              <FaStar className="mr-2" />
              <span className="text-sm md:text-base">Results</span>
            </div>
          </div>

          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <FeatureCard />
      </div>
    </section>
  );
}
