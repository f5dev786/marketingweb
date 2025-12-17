// src/components/RotatingSection.jsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function RotatingSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" bg-gradient-to-r from-[#c2e4ff] to-[#f5faff] shadow-inner text-black from-blue-100 to-white p-8 py-28 flex flex-col md:flex-row items-center justify-center gap-8 text-black ">
      {/* Left Side (Static Content) */}
      <div className=" max-w-6xl mx-auto grid md:grid-cols-2 items-center">
        <div className="" style={{ fontFamily: "Roboto" }}>
          <div className=" ">
            <style jsx>{`
              @keyframes drawLine {
                to {
                  stroke-dashoffset: 0;
                }
              }

              .animated-underline path {
                stroke-dasharray: 200;
                stroke-dashoffset: 200;
                animation: drawLine 1s ease forwards;
              }
            `}</style>

            <h2 className="text-[55px] leading-tight font-bold ">
              <span className="text-blue-500">Realtime</span> insights for{" "}
              <span className="font-bold !text-[42px]">
                <span className="inline-flex relative items-center pb-[8px]">
                  Reliable
                  <svg
                    className="animated-underline absolute left-1/2 transform -translate-x-1/2 bottom-0"
                    width="100"
                    height="12"
                    viewBox="0 0 100 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5,10 Q50,0 95,10"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Operations
              </span>
            </h2>
          </div>
          <p
            className="mt-4 text-lg text-gray-700 !text-[16px]"
            style={{
              fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
            }}
          >
            Transform your facility with Inovisense’s smart, real-time
            monitoring solutions that safeguard your operations, streamline
            compliance, and optimize efficiency—protecting what matters most,
            around the clock.
          </p>
          <div
            className="mt-6 flex gap-4"
            style={{
              fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
            }}
          >
            {/* https://calendly.com/f5dev786/30min?embed_domain=inovisense.com */}
            <button
              className="bg-blue-500 text-white px-4 py-3 hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(true)}
            >
              Request a Demo
            </button>
            <Link href={"/products"}>
              <button className="bg-gray-800  hover:bg-blue-500 text-white px-4 py-3 rounded-md">
                        Read the Case Study

              </button>
            </Link>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-1 mt-6">
              <div className="flex items-center space-x-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="#00B67A"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0l3.09 9.26H24l-7.545 5.486L19.18 24 12 18.27 4.82 24l2.725-9.254L0 9.26h8.91z" />
                </svg>
                <span className="text font-bold text-black ">Trustpilot</span>
              </div>

              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[#00B67A] w-5 h-5 flex items-center justify-center rounded-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0l3.09 9.26H24l-7.545 5.486L19.18 24 12 18.27 4.82 24l2.725-9.254L0 9.26h8.91z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className=" h-auto p-4">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/11.jpg"
              }
              width={577}
              height={577}
              unoptimized
              alt="Rotating AI Illustration"
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>
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
    </section>
  );
}
