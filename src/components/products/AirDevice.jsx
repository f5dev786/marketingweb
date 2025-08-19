import Image from "next/image";
import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import tempMonitoring from "../../../public/assets/TempMonitaring.jpg";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

function AirDevice() {
  const [isOpen, setIsOpen] = useState(false);

  const listItem = (text, color) => (
    <li className="flex items-center gap-2">
      {color ? (
        <FaArrowCircleRight className="text-blue-500   text-3xl" />
      ) : (
        <FaCheckCircle className="text-blue-500 text-3xl" />
      )}

      <span className={`text-slate-700  ${color}`}>{text}</span>
    </li>
  );

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/16.jpg"
              }
              alt="Temperature Monitoring Device"
              className="rounded-lg shadow-lg"
              width={800}
              height={800}
              unoptimized
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-[42px] font-medium text-slate-900 mb-4 leading-[1.2]">
              Indoor Air Quality Monitoring
            </h2>

            {/* OVERVIEW */}
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Overview:
            </h3>
            <p className="text-slate-600 mb-6">
              Protect indoor spaces by actively monitoring air quality, ensuring
              the well-being of students, staff, and visitors in high-traffic
              environments.
            </p>

            {/* FEATURES */}
            <h4 className="font-semibold text-slate-800 mb-2">Features:</h4>
            <ul className="space-y-2 mb-6">
              {listItem(
                "Real-time tracking of CO2, humidity, and particulate levels."
              )}
              {listItem("Data-driven insights for improved air circulation.")}
              {listItem(
                "Remote access to monitor and manage air quality efficiently."
              )}
            </ul>

            {/* BENEFITS */}
            <h4 className="font-semibold text-slate-800 mb-2">Benefits:</h4>
            <ul className="space-y-2 mb-8">
              {listItem(
                "Promote healthier environments for learning and working."
              )}
              {listItem("Reduce energy costs through optimized HVAC use.")}
              {listItem(
                "Meet indoor air quality standards and ensure compliance."
              )}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-black transition"
                onClick={() => setIsOpen(true)}
              >
                Request a Demo
              </button>
              <Link href="/contact-us">
                <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-black text-black hover:text-white transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f172a] !text-white min-h-screen flex justify-center items-start px-6 py-10">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12">
          {/* LEFT SCROLLING CONTENT */}
          <div className="relative">
            <div className="sticky top-10 h-[80vh] scrollbar-hide  overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
              <p className="text-[14px] bg-blue-100  tracking-widest text-blue-600  border border-dashed border-blue-600 rounded-2xl px-3 py-1 inline-block mb-4">
                Key Features
              </p>
              <h1 className="text-[42px] font-medium mt-3 leading-[1.2]">
                <span className="text-blue-500">IQ-411</span> Indoor Ambience
                Monitoring Sensor
              </h1>
              <p className="mt-3 ">
                IQ-411 is a compact indoor ambience monitoring sensor for
                measurement of temperature, humidity and CO2. These data will be
                shown on the E-ink screen in real-time, which allow to quantify
                the indoor environment and comfort. IQ-411 is widely used for
                office, store, classroom, hospital, etc.
              </p>

              <h2 className="mt-6 text-xl text-blue-500">Features:</h2>
              <ul className="space-y-2 mt-3 ">
                {listItem(
                  "Integrated with multiple sensors like humidity, temperature and CO2",
                  "text-white"
                )}
                {listItem(
                  "Visual data and clear emoticon to understand the comfort level easily via E-ink screen",
                  "text-white"
                )}
                {listItem(
                  "Smart hibernate mode schedulely to save battery power",
                  "text-white"
                )}
                {listItem(
                  "Equipped with traffic light indicator to indicate multi-level CO2 threshold alarms",
                  "text-white"
                )}
                {listItem(
                  "More than 3 years work without replacing batteries",
                  "text-white"
                )}
                {listItem(
                  "Store locally 560 historical records and support retransmission to prevent data loss",
                  "text-white"
                )}
                {listItem(
                  "Compliant with standard LoRaWAN® gateways and network servers",
                  "text-white"
                )}
              </ul>

              {/* Temperature Table */}
              <h3 className="mt-6 text-xl text-blue-500">
                Built-In Temperature Sensor
              </h3>
              <table className="mt-2 w-full border border-gray-500 ">
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Operating Range
                    </td>
                    <td className="border border-gray-500 p-3">-20°C – 60°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Accuracy Tolerance
                    </td>
                    <td className="border border-gray-500 p-3"> ±0.2 ℃</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">Resolution</td>
                    <td className="border border-gray-500 p-3">0.01 ℃/yr</td>
                  </tr>
                </tbody>
              </table>

              {/* Humidity Table */}
              <h3 className="mt-6 text-xl text-blue-500">
                Built-In Humidity Sensor
              </h3>
              <table className="mt-2 w-full border border-gray-500">
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Operating Range{" "}
                    </td>
                    <td className="border border-gray-500 p-3">0% – 100% RH</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Accuracy Tolerance
                    </td>
                    <td className="border border-gray-500 p-3"> ±2 %RH</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">Resolution</td>
                    <td className="border border-gray-500 p-3">0.5% RH</td>
                  </tr>
                </tbody>
              </table>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-black transition"
                  onClick={() => setIsOpen(true)}
                >
                  Request a Demo
                </button>
                <Link href="/contact-us">
                  <button className="border bg-white text-black  px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-700 hover:text-white transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-start">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/16.jpg"
              }
              alt="Sensor device"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>

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

export default AirDevice;
