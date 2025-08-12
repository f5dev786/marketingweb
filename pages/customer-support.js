"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import support from "../public/assets/support.jpg";
export default function Support() {
  return (
    <div className=" bg-white text-black px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div className="inline-block border border-dashed border-blue-500 text-[14px] text-blue-500  px-4 py-2 rounded-full mt-8 tracking-wider bg-[#dbeefe]">
            Get In Touch
          </div>
          <h2 className="text-[42px] ">
            <span className="text-blue-500 font-bold">Contact</span> Us
          </h2>
          <div className="group flex items-start gap-4">
            <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 group-hover:!text-white">
              {" "}
              <FiPhone className="text-blue-500 group-hover:!text-white  text-4xl group-hover:animate-bounce " />
            </div>
            <div>
              <p className=" hover:text-blue-400  text-lg">848 313 0582</p>
              <p className="text-sm text-gray-500">Call us</p>
            </div>
          </div>
          <div className="group flex items-start gap-4">
            <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 group-hover:!text-white">
              {" "}
              <FiMail className="text-blue-500  group-hover:!text-white text-4xl hover:text-white group-hover:animate-bounce " />
            </div>
            <div>
              <p className="hover:text-blue-400  text-lg">
                support@inovisense.com
              </p>
              <p className="text-sm text-gray-500">Email Us</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-blue-500 mb-4">Follow Us:</p>
            <div className="flex gap-3 mb-4">
              <Link
                href="https://www.facebook.com/people/Inovisense/61574108742567/"
                target="_blank"
                className="bg-black p-2 rounded-md hover:bg-blue-500"
              >
                <FaFacebookF size={16} className="text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/inovisense/posts/?feedView=all"
                target="_blank"
                className="bg-black p-2 rounded-md hover:bg-blue-500"
              >
                <FaLinkedinIn size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" h-auto">
            <Image
              src={support} // 👉 Replace with your actual image path
              alt="Inovisense Supoort"
              width={550}
              unoptimized
              height={600}
              className="rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
