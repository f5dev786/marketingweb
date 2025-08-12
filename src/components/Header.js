"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../../public/assets/logo.png";
import { useRouter } from "next/router";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const router = useRouter();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow text-gray-900">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-2  text-gray-700 border-b border-gray-200">
        <div
          className="text-center md:text-left w-full md:w-auto text-[15px] ml-5"
          style={{ fontFamily: "Kumbh Sans" }}
        >
          Call us <span className="font-medium">848 313 0582</span>{" "}
          <span className="mx-2  hidden md:inline">|</span>{" "}
          <span className=" hidden md:inline">support@inovisense.com</span>
        </div>
        <div
          className="hidden md:flex space-x-4 items-center"
          style={{ fontFamily: "Poppins, Arial, Helvetica, sans-serif" }}
        >
          <Link href="https://app.inovisense.com" target="_blank">
            <button className="bg-[#0993fa] text-white px-[30px] py-[9px] text-[12px] hover-bh-black rounded hover:bg-blue-600 transition">
              Login ↪
            </button>
          </Link>
          <Link
            href="https://www.facebook.com/people/Inovisense/61574108742567/"
            target="_blank"
          >
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/inovisense/posts/?feedView=all"
            target="_blank"
          >
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-4 md:px-[57px] py-3 text-gray-900 text-[18px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setActiveSection("")}
        >
          <Image
            src={logo}
            alt="Inovisense"
            width={270}
            unoptimized
            height={70}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 text-[18px]"
          style={{
            fontFamily: "'Space Grotesk'",
          }}
        >
          <Link
            onClick={() => setActiveSection("")}
            href="/"
            className={`font-medium ${
              (!activeSection ? pathname === "/" : activeSection === "/")
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Home
          </Link>

          <div className="relative group text-[18px]">
            {/* Main trigger */}
            <div
              className="flex items-center cursor-pointer font-medium px-2 py-1"
              onClick={() => router.push("/products")}
            >
              <span
                className={`flex items-center ${
                  pathname === "/products" ? "text-blue-600 font-semibold" : ""
                }`}
              >
                Products <FiChevronDown className="ml-1" />
              </span>
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-0 w-72 text-sm bg-white border border-gray-200 shadow-md rounded hidden group-hover:block z-50">
              <ul className="bg-white">
                <li>
                  <Link
                    href="/products"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-black hover:text-white"
                  >
                    Temperature & Humidity Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-black hover:text-white"
                  >
                    Indoor Air Quality Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="block px-4 py-2 border-b border-gray-200 hover:bg-black hover:text-white"
                  >
                    Liquid Level Monitoring
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/#why-choose"
            replace
            onClick={() => setActiveSection("why-choose")}
            className={`font-medium ${
              activeSection === "why-choose"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Why Choose
          </Link>
          <Link
            href="/#web-dashboard"
            replace
            onClick={() => setActiveSection("web-dashboard")}
            className={`font-medium ${
              activeSection === "web-dashboard"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/#solutions"
            replace
            onClick={() => setActiveSection("solutions")}
            className={`font-medium ${
              activeSection === "solutions" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/portfolio-items/how-a-dairy-queen-franchisee-saved-thousands-on-spoiled-food"
            onClick={() =>
              setActiveSection(
                "/portfolio-items/how-a-dairy-queen-franchisee-saved-thousands-on-spoiled-food"
              )
            }
            className={`font-medium ${
              activeSection ===
              "/portfolio-items/how-a-dairy-queen-franchisee-saved-thousands-on-spoiled-food"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Case Study
          </Link>
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center md:hidden gap-4">
          <Link href="https://app.inovisense.com" target="_blank">
            <span className="text-xl">↪</span>
          </Link>

          {/* Hamburger */}
          <button
            className="relative w-6 h-6 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                menuOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                menuOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            />
          </button>
        </div>

        {/* Desktop CTA */}
        <div
          className="hidden md:block"
          style={{
            fontFamily: "'Kumbh Sans'",
          }}
        >
          <Link href="/contact-us">
            <button className="bg-slate-900 text-white px-[40px] py-[10px] rounded-md text-[18px] font-medium hover:bg-blue-500">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] shadow-md" : "max-h-0"
        }`}
      >
        <div className="flex flex-col border-t text-[16px]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 border-b border-gray-200"
          >
            Home
          </Link>

          {/* Products Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              className="w-full px-4 py-3 flex justify-between items-center text-left"
            >
              <span>Products</span>
              {productMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                productMenuOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <ul className="mb-2">
                <li className="px-4 py-2 hover:bg-gray-100 border-t border-b border-gray-200">
                  <Link href="/products" onClick={() => setMenuOpen(false)}>
                    Temperature & Humidity
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">
                  <Link href="/products" onClick={() => setMenuOpen(false)}>
                    Indoor Air Quality
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/products" onClick={() => setMenuOpen(false)}>
                    Liquid Level
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/#why-choose"
            replace
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 border-b border-gray-200"
          >
            Why Choose
          </Link>
          <Link
            href="/#web-dashboard"
            replace
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 border-b border-gray-200"
          >
            Features
          </Link>
          <Link
            href="/#solutions"
            replace
            className="px-4 py-3 border-b border-gray-200"
          >
            Solutions
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            href="/portfolio-items/how-a-dairy-queen-franchisee-saved-thousands-on-spoiled-food"
            className="px-4 py-3 border-b border-gray-200"
          >
            Case Study
          </Link>
          <Link
            replace
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3"
          >
            <button className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
