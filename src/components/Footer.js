"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import playStore from "../../public/assets/play-store.png";
import appStore from "../../public/assets/app-store.png";

import QRCode from "react-qr-code";

export default function Footer() {
  return (
    <footer
      className="bg-[#052a44] text-white py-10"
      style={{
        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Inovisense</h2>
          <p className=" text-sm leading-relaxed">
            To become the global leader in AI intelligent monitoring solutions
            that enhance safety, efficiency, and sustainability for modern
            businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg  mb-4 relative">
            Quick Links
            <span className="block w-10 h-0.5 bg-white mt-1"></span>
          </h3>
          <ul className="space-y-2  text-sm">
            <li>
              <Link href="/#hero" className="hover:text-blue-400">
                → Home
              </Link>
            </li>
            <li>
              <Link href="/#hero" className="hover:text-blue-400">
                → About Us
              </Link>
            </li>
            <li>
              <Link href="/#why-inovisense" className="hover:text-blue-400">
                → Why Inovisense
              </Link>
            </li>
            <li>
              <Link href="/#solutions" className="hover:text-blue-400">
                → Solutions
              </Link>
            </li>
            <li>
              <Link href="/#web-dashboard" className="hover:text-blue-400">
                → Features
              </Link>
            </li>
            <li>
              <Link href="/case-study" className="hover:text-blue-400">
                → Case Study
              </Link>
            </li>
            <li>
              <Link href="/mobile-lead" className="hover:text-blue-400">
                → Lead Create
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg  mb-4 relative">
            Support
            <span className="block w-10 h-0.5 bg-white mt-1"></span>
          </h3>
          <ul className="space-y-2  text-sm">
            <li>
              <Link href="/customer-support" className="hover:text-blue-400">
                → Customer Support
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-blue-400">
                → FAQ
              </Link>
            </li>
            <li>
              <Link href="/#installation" className="hover:text-blue-400">
                → Installation
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-blue-400">
                → Contact Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-blue-400">
                → We Are Hiring
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                → Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg  mb-4 relative">
            Get in Touch
            <span className="block w-10 h-0.5 bg-white mt-1"></span>
          </h3>

          <p className=" text-sm flex items-center mb-2">
            <FiPhone className="mr-2" /> 848 313 0582
          </p>
          <p className="text-sm flex items-center mb-4">
            <FiMail className="mr-2" />
            <a
              href="mailto:support@inovisense.com"
              className="hover:text-blue-400 transition"
            >
              support@inovisense.com
            </a>
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            <Link
              href="https://www.facebook.com/people/Inovisense/61574108742567/"
              target="_blank"
              className="bg-gray-700 p-2 rounded-md hover:bg-blue-600"
            >
              <FaFacebookF size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/inovisense/posts/?feedView=all"
              target="_blank"
              className="bg-gray-700 p-2 rounded-md hover:bg-blue-600"
            >
              <FaLinkedinIn size={16} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="https://app.inovisense.com"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white  py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Device Console Login <HiOutlineLogin size={18} />
            </Link>
            <Link
              href="/assets/Bifold-Brochure-v4.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-white text-black  py-2 px-4 rounded-md hover:bg-gray-200"
            >
              Download Brochure <FiDownload size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* QR Codes */}
      <div className="flex justify-center flex-row  mt-8  gap-10 px-4">
        <Link
          href="https://apps.apple.com/us/app/inovisense/id6740456029"
          target="_blank"
        >
          <Image
            src={appStore}
            alt="App Store QR"
            width={200}
            height={200}
            unoptimized
            className="mx-auto"
          />
          <div className=" p-2 rounded-xl !w-fit bg-white mt-3 mx-auto">
            <QRCode
              value="https://apps.apple.com/us/app/inovisense/id6740456029"
              size={100}
              className=""
            />
          </div>
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.daintree.inovisense"
          target="_blank"
        >
          <Image
            src={playStore}
            alt="Google Play QR"
            width={200}
            height={200}
            unoptimized
            className="mx-auto"
          />
          <div className=" p-2 rounded-xl !w-auto !w-fit bg-white mt-3 mx-auto">
            <QRCode
              value="https://play.google.com/store/apps/details?id=com.daintree.inovisense"
              size={100}
              className=""
            />
          </div>
        </Link>
      </div>

      {/* Bottom Text */}
      <div className="border-t  mt-8 pt-4 text-center text-sm">
        © Inovisense {new Date().getFullYear()} | All Rights Reserved.
      </div>
    </footer>
  );
}
