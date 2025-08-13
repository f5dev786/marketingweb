"use client";
import Image from "next/image";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

import { RxCross2 } from "react-icons/rx";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MonitoringDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/12.jpg",
    "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/13.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Trigger fade-in
      }, 500); // Duration of fade out before image switch
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-blue-50 text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-[540px]">
            <p className="text-xs  tracking-widest text-blue-600  border border-dashed border-blue-600 rounded-2xl px-3 py-1 inline-block mb-4">
              Key Features
            </p>
            <h2 className="text-4xl font-medium text-gray-900 mb-4">
              Inovisense{" "}
              <span className="text-blue-600">Monitoring Dashboard</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Your entire facility environment, monitored at your fingertips.
              Access real-time insights, adjust settings, and resolve client
              concerns anywhere, anytime.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6 text-lg">
              <div className="flex items-start">
                <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Hosted on AWS for robust security and reliability.
                </p>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Smart Alarms with advanced algorithms to reduce unnecessary
                  notifications.
                </p>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Cellular VPN for secure, remote monitoring access.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-3 hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(true)}
              >
                Request a Demo
              </button>
              <Link href="/contact-us">
                <button className="group flex items-center px-6 py-3 text-sm  border border-black rounded-md hover:bg-black hover:text-white bg-white transition">
                  Contact Us
                  <FaPhoneAlt className="ml-2 text-sm transition-transform duration-300 group-hover:animate-bounce" />
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-auto">
              <Image
                src={images[currentIndex]}
                alt="Inovisense Monitoring Dashboard"
                width={550}
                height={600}
                className={`rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-blue-50 text-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-md shadow-lg overflow-hidden">
              {/* Left diagonal dark section */}
              <div className="absolute inset-y-0 left-0 w-[90%] bg-[#002640] clip-diagonal-left"></div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 py-10">
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Redefine Monitoring?
                  </h3>
                  <p className="text-sm">
                    Request a Demo and Transform Your Operations Today.
                  </p>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-end">
                  <p className="text-sm text-black mb-2">
                    Get professional help
                  </p>
                  <p className="text-blue-600 text-xl ">Call us 848 313 0582</p>
                  <a href="mailto:support@inovisense.com">
                    <button className="mt-4 bg-[#002640] text-white px-6 py-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:scale-105">
                      Email Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Custom clip path style */}
          <style jsx>{`
            .clip-diagonal-left {
              clip-path: polygon(0 0, 60% 0, 40% 100%, 0% 100%);
            }
          `}</style>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0  shadow-xl scrollbar-hide flex justify-center items-center z-50">
          <div className="!bg-white  rounded-xl shadow-lg w-[90%] max-w-4xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <RxCross2 size={24} />
            </button>

            {/* Iframe */}
            <iframe
              src="https://calendly.com/f5dev786/30min?embed_domain=inovisense.com"
              className="w-full rounded-xl h-[500px]   scrollbar-hide !bg-transparent"
              frameBorder="0"
              title="Calendly"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
