"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiInfo, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import logo from "../public/assets/onlyLogo.png";

export default function MobileLeadForm() {
  const [step, setStep] = useState(1);
  const [fridgeCount, setFridgeCount] = useState(2);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setErrors({});

    if (step === 1 && fridgeCount === null) {
      setErrors({ fridgeCount: "Please select a refrigerator count." });
      return;
    }

    if (step === 2) {
      const { fullName, phoneNumber, email, note } = formData;
      const newErrors = {};

      if (!/^[a-zA-Z\s]{2,50}$/.test(fullName)) {
        newErrors.fullName =
          "Please enter a valid full name (letters/spaces only, 2–50 chars).";
      }
      if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    if (step === 3) {
      setLoading(true);
      try {
        await fetch(
          "https://goldfish-app-y9ksu.ondigitalocean.app/api/ContactUsForm/submit",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              numberOfRefrigerators: fridgeCount,
              id: "-",
              ...formData,
            }),
          }
        );
        setLoading(false);
        setIsSubmitted(true);
      } catch (err) {
        setLoading(false);
        setErrors({ submit: "Something went wrong. Please try again." });
      }
      return;
    }

    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted]);

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // Clear error for that field immediately when typing
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 text-black flex items-center justify-center  p-2">
      <div className="w-full max-w-sm h-[100vh] bg-[#d7d7d7] rounded-xl shadow-xl overflow-auto flex flex-col ">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="flex justify-end items-center px-4 py-2 border-b">
              <button
                onClick={() => (window.location.href = "/")}
                className="text-xl font-bold text-gray-500 cursor-pointer"
              >
                X
              </button>
            </div>

            {/* Content */}
            <div className="p-1  ">
              {step === 1 && (
                <>
                  <div className="relative mb-6 mt-10">
                    <div className="bg-white rounded-xl shadow-md p-4 pt-12 text-center relative z-10">
                      <p className="text-sm text-gray-400">Inovisense</p>
                      <h1 className="font-bold text-lg leading-snug">
                        Get Instant Alerts for Out-of-Range Temperatures
                      </h1>
                      <p className="text-sm mt-2 text-gray-500">
                        Stop food loss with 24/7 smart temp monitoring.
                      </p>
                    </div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center">
                        <Image
                          src={logo}
                          alt="Logo"
                          unoptimized
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow p-4">
                    <p className="font-medium mb-2 text-sm">
                      How many refrigerators or freezers does your business use?
                    </p>
                    <div className="space-y-2">
                      {[2, 3, 4, 5].map((num) => (
                        <label
                          key={num}
                          className={`block border rounded-lg px-3 py-2 flex items-center justify-between ${
                            fridgeCount === num
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-300"
                          }`}
                        >
                          <span className="text-blue-600">
                            {num == 5 ? "5+" : num}
                          </span>
                          <input
                            type="radio"
                            name="fridges"
                            value={num}
                            checked={fridgeCount === num}
                            onChange={() => setFridgeCount(num)}
                          />
                        </label>
                      ))}
                      {errors.fridgeCount && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.fridgeCount}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="bg-white rounded-xl shadow p-4 mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-medium text-sm">Contact information</h2>
                    <FiInfo className="text-gray-400 text-sm" />
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Join our contact list.
                  </p>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-sm">Full name</label>
                      <input
                        type="text"
                        className={`mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
                          errors.fullName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-sm">Phone Number</label>
                      <input
                        type="tel"
                        className={`mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
                          errors.phoneNumber
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter your phone"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                      />
                      <p className="text-xs text-gray-400">
                        Inovisense may contact you to follow up.
                      </p>
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm">Email</label>
                      <input
                        type="email"
                        className={`mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                      <p className="text-xs text-gray-400">
                        Inovisense may contact you to follow up.
                      </p>
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Comments */}
                    <div>
                      <label className="text-sm">Comments</label>
                      <textarea
                        className={`mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
                          errors.note
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="Enter your comments"
                        value={formData.note}
                        onChange={(e) =>
                          handleInputChange("note", e.target.value)
                        }
                      />
                      {errors.note && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-white rounded-xl shadow p-4 my-15">
                  <div className="text-center p-6">
                    <h2 className="text-xl font-bold mb-2">
                      Ready to submit your details?
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Click Finish to complete your submission.
                    </p>
                  </div>
                  {errors.submit && (
                    <p className="text-sm text-red-500 text-center mt-2">
                      {errors.submit}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Footer navigation */}
            <div className="p-4 border-t mt-4 bg-white">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Step {step} of 3</span>
                <div className="space-x-2">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="p-2 text-gray-500 rounded-full"
                    >
                      <FiArrowLeft />
                    </button>
                  )}
                  {step < 3 && (
                    <button
                      onClick={handleNext}
                      className="p-2 text-gray-500 rounded-full"
                    >
                      <FiArrowRight />
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={loading}
                className={`${
                  loading
                    ? "bg-blue-400 hover:bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-400"
                } text-white w-full py-2 rounded-md transition-colors`}
              >
                {loading ? "Submitting..." : step === 3 ? "Finish" : "Continue"}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Thank you!
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Your details have been submitted successfully.
            </p>
            <Link
              href="/"
              className="text-blue-600 underline text-sm font-medium"
            >
              Back to company site →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
