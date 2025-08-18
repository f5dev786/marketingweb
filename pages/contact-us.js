"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

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

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.numberOfRefrigerators.trim())
      newErrors.numberOfRefrigerators = "Number Of Refrigeratorsis required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.note.trim()) newErrors.note = "Message is required.";

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
        <div className="border-2 border-dotted border-blue-400 rounded-xl p-6">
          {isSubmitted ? (
            <h3 className="text-2xl text-center font-bold text-green-600 py-20">
              {" 🎉 Thank you! We'll get back to you shortly."}
            </h3>
          ) : (
            <>
              <h3 className="text-xl md:text-2xl text-center  text-blue-400 mb-6">
                Request a Demo and Transform Your Operations Today.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid  gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded focus:!border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    name="numberOfRefrigerators"
                    placeholder="How many sensors are currently in use by your business?*"
                    value={formData.numberOfRefrigerators}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded focus:border-blue-500  focus:outline-none focus:ring-blue-500"
                  />
                  {errors.numberOfRefrigerators && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.numberOfRefrigerators}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number*"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    name="note"
                    placeholder="Any specific features you're interested in?"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded h-24 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  />
                  {errors.note && (
                    <p className="text-red-500 text-sm mt-1">{errors.note}</p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
