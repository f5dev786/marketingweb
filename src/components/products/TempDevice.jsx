import Image from "next/image";
import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import tempMonitoring from "../../../public/assets/TempMonitaring.jpg";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

function TempDevice() {
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
              src={tempMonitoring}
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
              Temperature & Humidity Monitoring
            </h2>
            <p className="text-slate-600 text-[20px] mb-6">
              Optimized for grocery stores, restaurants, and food distribution
              centers.
            </p>

            {/* OVERVIEW */}
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Overview:
            </h3>
            <p className="text-slate-600 mb-6">
              Inovisense’s environmental monitoring solutions help you maintain
              consistent, safe conditions across facilities, keeping perishable
              goods fresh and protected.
            </p>

            {/* FEATURES */}
            <h4 className="font-semibold text-slate-800 mb-2">Features:</h4>
            <ul className="space-y-2 mb-6">
              {listItem(
                "Real-time monitoring of temperature, humidity, and air quality."
              )}
              {listItem(
                "Smart, automated alerts for quick response to any deviations."
              )}
              {listItem("Accessible anywhere via our cloud-based dashboard.")}
            </ul>

            {/* BENEFITS */}
            <h4 className="font-semibold text-slate-800 mb-2">Benefits:</h4>
            <ul className="space-y-2 mb-8">
              {listItem("Avoid product loss and reduce costs.")}
              {listItem(
                "Ensure a safe environment that meets regulatory standards."
              )}
              {listItem("Minimize waste and optimize storage.")}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-black transition"
                onClick={() => setIsOpen(true)}
              >
                Request a Demo
              </button>
              <Link href={"/buy"} replace>
                <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white text-black transition">
                  Buy Now
                  <IoMdCart className="text-xl" />
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
                <span className="text-blue-500">IS-211</span> Temperature &
                Humidity Sensor
              </h1>
              <p className="mt-3 ">
                IS-211 is a Long Range LoRaWAN Sensor. It includes a built-in
                Temperature & Humidity sensor and has an external sensor
                connector to connect to an external Temperature Sensor.
              </p>

              <h2 className="mt-6 text-xl text-blue-500">Features:</h2>
              <ul className="space-y-2 mt-3 ">
                {listItem("Datalog feature", "text-white")}
                {listItem("Tri-color LED to indicate status", "text-white")}
                {listItem("LoRaWAN v1.0.3 Class A protocol", "text-white")}
                {listItem(
                  "Built-in Temperature & Humidity sensor",
                  "text-white"
                )}
                {listItem(
                  "Built-in 2400mAh battery for more than 10 years of use",
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
                    <td className="border border-gray-500 p-3">Resolution</td>
                    <td className="border border-gray-500 p-3">0.01 ℃</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Accuracy Tolerance
                    </td>
                    <td className="border border-gray-500 p-3">Typ ±0.3 ℃</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Long Term Drift
                    </td>
                    <td className="border border-gray-500 p-3">
                      &lt; 0.02 ℃/yr
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Operating Range
                    </td>
                    <td className="border border-gray-500 p-3">-40 ~ 85 ℃</td>
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
                    <td className="border border-gray-500 p-3">Resolution</td>
                    <td className="border border-gray-500 p-3">0.04 %RH</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Accuracy Tolerance
                    </td>
                    <td className="border border-gray-500 p-3">Typ ±3 %RH</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Long Term Drift
                    </td>
                    <td className="border border-gray-500 p-3">
                      &lt; 0.25 %RH/yr
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      Operating Range
                    </td>
                    <td className="border border-gray-500 p-3">0 ~ 96 %RH</td>
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
                <Link href={"/buy"} replace>
                  <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition">
                    Buy Now
                    <IoMdCart className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-start">
            <Image
              src={
                "https://f5dev786siteimages.s3.us-east-1.amazonaws.com/15.jpg"
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

export default TempDevice;
