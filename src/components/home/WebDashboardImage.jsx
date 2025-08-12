// components/WebDashboardImage.jsx

"use client";

import React from "react";
import Image from "next/image";
import { FaArrowCircleRight, FaPhoneAlt } from "react-icons/fa";
import webDashboard from "../../../public/assets/webDashboard.png"; // update your path if needed
import Link from "next/link";

function WebDashboardImage() {
  return (
    <>
      <div className="bg-white pt-24 text-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          {/* Image with border */}
          <div className="border-[6px] border-black rounded-2xl shadow-xl">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/17.jpg"
              }
              alt="Web Dashboard"
              className="object-contain p-4"
              width={1200}
              height={800}
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-white pb-24 text-black  px-4">
        <div className="max-w-6xl mx-auto ">
          {/* Badge */}
          <div className="inline-block border border-dashed border-blue-500 text-[14px]  px-4 py-2 rounded-full mt-8 tracking-wider bg-[#dbeefe]">
            Key Features
          </div>

          {/* Headline */}
          <h2 className="mt-4 text-3xl md:text-4xl  ">
            Automated <span className="text-blue-500">Logging</span> & Reporting
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 ">
            Effortlessly meet regulatory standards and stay informed with
            Inovisense’s automated data logging and reporting tools.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-4">
            {[
              "Compliance-Ready Reports generated in seconds.",
              "DataSync technology ensures data accuracy.",
              "SMART Tools analyze and highlight key trends.",
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaArrowCircleRight className="text-blue-500  mt-1" />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 text-white text-sm  px-6 py-3 rounded-md shadow hover:bg-black cursor-pointer transition ">
              Request a Demo
            </button>
            <Link href="/contact-us">
              <button className="group flex items-center justify-center text-sm  px-6 py-3 border border-black rounded-md cursor-pointer hover:bg-black hover:text-white transition duration-300">
                Contact Us
                <FaPhoneAlt className="ml-2 text-sm transition-transform duration-300 group-hover:animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDashboardImage;
