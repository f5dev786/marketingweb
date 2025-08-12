import Image from "next/image";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import Liquid from "../../../public/assets/Liquid.png";
import LiquidSensor from "../../../public/assets/liquid-sensor.png";
import Link from "next/link";

function LiquidDevice() {
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
              src={Liquid}
              alt="Temperature Monitoring Device"
              className="rounded-lg "
              width={800}
              height={800}
              unoptimized
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-[42px] font-medium text-slate-900 mb-4 leading-[1.2]">
              Inovisense Liquid Level Monitoring
            </h2>

            {/* OVERVIEW */}
            <h3 className="text-xl font-medium text-slate-800 mb-2">
              Overview:
            </h3>
            <ul className="space-y-2 mb-6">
              {listItem(
                "Continuously track liquid levels with high accuracy using LoRaWAN technology."
              )}
              {listItem(
                "Suitable for fuel tanks, water reservoirs, industrial chemicals, and more."
              )}
              {listItem(
                "Used by industries worldwide for seamless and efficient liquid management"
              )}
            </ul>

            {/* FEATURES */}
            <h4 className="font-medium text-xl text-slate-800 mb-2">
              Features:
            </h4>
            <ul className="space-y-2 mb-6">
              {listItem(
                "Enables long-range, low-power data transmission for remote monitoring."
              )}
              {listItem(
                "Provides accurate and real-time liquid level readings with minimal maintenance."
              )}
              {listItem(
                "Built to withstand harsh industrial and environmental conditions."
              )}
            </ul>

            {/* BENEFITS */}
            <h4 className="font-medium text-xl text-slate-800 mb-2">
              Benefits:
            </h4>
            <ul className="space-y-2 mb-8">
              {listItem(
                "Prevents overflows, shortages, and wastage, ensuring efficient liquid usage."
              )}
              {listItem(
                "Reduces manual monitoring efforts, saving labor costs and operational expenses."
              )}
              {listItem(
                "Real-time insights allow proactive maintenance and better inventory planning."
              )}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-black transition">
                Request a Demo
              </button>
              <Link href="/contact-us">
                <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition">
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
                <span className="text-blue-500">LV-600</span> Precision
                Monitoring for Fluid Management
              </h1>
              <p className="mt-3 ">
                Track, manage, and optimize your liquid storage with our
                advanced LoRaWAN Liquid Level Sensors. Designed for accuracy and
                durability, our solution ensures seamless monitoring of fuel
                tanks, water reservoirs, industrial chemicals, and more.
              </p>

              <h2 className="mt-6 text-xl text-blue-500">
                1. Smart IoT-Driven Monitoring
              </h2>
              <ul className="space-y-2 mt-3 ">
                {listItem(
                  "Real-Time Data Insights – Continuously tracks liquid levels with high accuracy.",
                  "text-white"
                )}
                {listItem(
                  "Remote Access & Control – View and manage storage levels from anywhere via a cloud-based dashboard.",
                  "text-white"
                )}
                {listItem(
                  "Customizable Alerts – Receive instant notifications via SMS, email, or mobile app for low levels, overflows, or leaks.",
                  "text-white"
                )}
              </ul>
              <h2 className="mt-6 text-xl text-blue-500">
                2. Advanced Sensor Technology
              </h2>
              <ul className="space-y-2 mt-3 ">
                {listItem(
                  "High-Precision Measurement – Detects even minor fluctuations in liquid levels.",
                  "text-white"
                )}
                {listItem(
                  "LoRaWAN Connectivity – Ensures long-range, low-power, and stable data transmission without the need for WiFi.",
                  "text-white"
                )}
                {listItem(
                  "Durable & Weatherproof – Built to withstand industrial and outdoor conditions, ensuring reliable performance.",
                  "text-white"
                )}
              </ul>
              <h2 className="mt-6 text-xl text-blue-500">
                3. Cost-Effective & Scalable Solution
              </h2>
              <ul className="space-y-2 mt-3 ">
                {listItem(
                  "Automated Refill Management – Prevents stockouts and overstocking by optimizing inventory.",
                  "text-white"
                )}
                {listItem(
                  "Energy-Efficient & Long Battery Life – Reduces maintenance efforts and operational costs.",
                  "text-white"
                )}
                {listItem(
                  "Seamless Integration – Easily connects with existing storage tanks, dispensers, and industrial systems.",
                  "text-white"
                )}
              </ul>

              {/* Temperature Table */}
              <h3 className="mt-6 text-xl text-blue-500">What’s in the Box?</h3>
              <table className="mt-2 w-full border border-gray-500 ">
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      1x Inovisense Liquid Level Sensor{" "}
                    </td>
                    <td className="border border-gray-500 p-3">
                      Ultra-accurate, weatherproof, and long-lasting
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">
                      1x Inovisense Hub
                    </td>
                    <td className="border border-gray-500 p-3">
                      Secure and seamless connectivity
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-3">1x Charger</td>
                    <td className="border border-gray-500 p-3">
                      Power your hub effortlessly
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Humidity Table */}

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 px-5 py-2 rounded hover:bg-gray-700">
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
              src={LiquidSensor}
              alt="Sensor device"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiquidDevice;
