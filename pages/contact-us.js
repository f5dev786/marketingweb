"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    numberOfRefrigerators: "",
    email: "",
    phoneNumber: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isValidUSCanadaPhone = (phone) => {
    if (!phone) return false;

    // Remove spaces, (), -
    const cleaned = phone.replace(/[^\d+]/g, "");

    // Must start with +1 and have 10 digits after country code
    const regex = /^\+1\d{10}$/;

    return regex.test(cleaned);
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.numberOfRefrigerators.trim())
      newErrors.numberOfRefrigerators = "Number Of Refrigeratorsis required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else if (!isValidUSCanadaPhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid US or Canada phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        await fetch(
          "https://goldfish-app-y9ksu.ondigitalocean.app/api/ContactUsForm/submit",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: "-",
              ...formData,
            }),
          }
        );
        setIsSubmitted(true);
        setLoading(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: "",
            numberOfRefrigerators: "",
            email: "",
            phoneNumber: "",
            note: "",
          });
        }, 4000);
      } catch (err) {
        setLoading(false);
        setErrors("Something went wrong. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const fullNameRef = useRef(null);
  const sensorsRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const noteRef = useRef(null);

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

        {/* Right Side - Form */}
        <div className="max-w-md mx-auto bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 w-full">
          {isSubmitted ? (
            <h3 className="text-xl text-center font-semibold text-green-600 py-16">
              🎉 Thank you! We&apos;ll get back to you shortly.
            </h3>
          ) : (
            <>
              <h3 className="text-2xl font-semibold mb-1">
                Request Your Demo<span className="text-red-500">*</span>
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form below to get started!
              </p>

              <div className="space-y-5">
                {/* Full Name */}
                <div
                  className="relative cursor-text"
                  onClick={() => fullNameRef.current?.focus()}
                >
                  <input
                    ref={fullNameRef}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none bg-transparent"
                  />

                  <label
                    className="pointer-events-none absolute left-0 -top-3 text-xs text-gray-500 transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Full Name*
                  </label>
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {" "}
                      {errors.fullName}{" "}
                    </p>
                  )}
                </div>

                {/* Sensors Count */}
                <div
                  className="relative cursor-text"
                  onClick={() => sensorsRef.current?.focus()}
                >
                  <input
                    ref={sensorsRef}
                    type="number"
                    name="numberOfRefrigerators"
                    value={formData.numberOfRefrigerators}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none bg-transparent"
                  />

                  <label
                    className="pointer-events-none absolute left-0 -top-3 text-xs text-gray-500 transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    How many sensors are in use?*
                  </label>
                  {errors.numberOfRefrigerators && (
                    <p className="text-red-500 text-xs mt-1">
                      {" "}
                      {errors.numberOfRefrigerators}{" "}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div
                  className="relative cursor-text"
                  onClick={() => emailRef.current?.focus()}
                >
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none bg-transparent"
                  />

                  <label
                    className="pointer-events-none absolute left-0 -top-3 text-xs text-gray-500 transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Email*
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {" "}
                      {errors.email}{" "}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative cursor-text">
                  <PhoneInput
                    country={"us"}
                    onlyCountries={["us", "ca"]}
                    countryCodeEditable={false}
                    value={formData.phoneNumber}
                    onChange={(value, country, e, formattedValue) => {
                      setFormData({
                        ...formData,
                        phoneNumber: formattedValue, // (201) 555-0123
                      });
                    }}
                    inputStyle={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #d1d5db",
                      borderRadius: "0",
                      paddingLeft: "52px",
                      paddingBottom: "8px",
                      fontSize: "14px",
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    dropdownStyle={{
                      zIndex: 50,
                    }}
                  />

                  <label className="absolute left-0 -top-3 text-xs text-gray-500">
                    Phone Number*
                  </label>

                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div
                  className="relative cursor-text"
                  onClick={() => noteRef.current?.focus()}
                >
                  <textarea
                    ref={noteRef}
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder=" "
                    rows={3}
                    className="peer w-full border-b border-gray-300 py-2 focus:border-blue-500 focus:outline-none resize-none bg-transparent"
                  />

                  <label
                    className="pointer-events-none absolute left-0 -top-3 text-xs text-gray-500 transition-all
    peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Any specific features you&apos;re interested in?
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleSubmit}
                  className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition cursor-pointer"
                >
                  {loading ? "Submitting..." : "OK"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
