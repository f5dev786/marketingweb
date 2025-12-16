import { FiHome, FiBell, FiLock } from "react-icons/fi";
import { TbDeviceMobileVibration } from "react-icons/tb";

import Image from "next/image";
import "swiper/css/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function WhyInovisenseSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white pt-10 text-black pb-24 px-4 md:px-10 lg:px-20">
      <div className="space-y-2 text-center">
        <div className="inline-block border border-dashed border-blue-500 text-[14px] text-blue-400  px-4 py-2 rounded-full mt-8 tracking-wider bg-[#dbeefe]">
          Why Inovisense?
        </div>

        <h2 className="text-[42px] font-medium leading-snug mb-6">
          Lifetime Value, Limitless Potential <br />
          <span className="text-blue-600">Monitoring</span> Redefined.
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4 group">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transform">
                <TbDeviceMobileVibration className="text-5xl transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-medium text-lg hover:text-blue-400">
                  Advanced Technology, Simpler Processes:
                </h4>
                <p className="text-gray-600 ">
                  Inovisense combines cutting-edge monitoring technology with
                  easy-to-use features, so you get the protection you need
                  without the hassle.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 group hover:text-blue-400">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transform">
                <FiHome className="text-5xl transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-medium text-lg">
                  Tailored Solutions for Diverse Needs:
                </h4>
                <p className="text-gray-600 ">
                  From temperature monitoring in hospitals to air quality
                  tracking in schools, Inovisense offers targeted solutions for
                  industries with unique demands.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 group hover:text-blue-400">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transform">
                <FiBell className="text-5xl transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-medium text-lg">
                  Real-Time Alerts That Matter:
                </h4>
                <p className="text-gray-600 ">
                  Our alert system is designed to notify you only when it truly
                  matters, so you can focus on what’s essential and avoid “alert
                  fatigue.”
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 group hover:text-blue-400">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transform">
                <FiLock className="text-5xl transition-colors duration-300" />
              </div>
              <div>
                <h4 className="font-medium text-lg">
                  Always Protected, Always Compliant:
                </h4>
                <p className="text-gray-600 ">
                  Stay compliant with regulatory standards effortlessly with
                  automated reports and 24/7 data tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
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

        {/* Right Image */}
        <div className="flex justify-center">
          <div className=" h-auto">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/14.jpg"
              } // 👉 Replace with your actual image path
              alt="Inovisense Monitoring Dashboard"
              width={550}
              height={600}
              unoptimized
              className="rounded-md shadow-lg"
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
