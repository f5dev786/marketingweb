import React, { useEffect, useState } from "react";
import LegalPage from "./privacy-policy";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TermsOfServiceGate({
  title = "Privacy Policy & Terms of Service",
  subtitle = "Please review and accept to continue",
}) {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  useEffect(() => {
    if (email) {
      setFormData({ ...formData, email: email });
    }
  }, [email]);
  const [errors, setErrors] = useState({});

  async function getClientIP() {
    try {
      const res = await fetch("/api/get-client-ip");
      const data = await res.json();
      console.log(data);
      return data.ip;
    } catch (err) {
      console.error("Error getting IP:", err);
      return null;
    }
  }

  // Call your API with IP
  async function sendDataWithIP(formData) {
    // 1️⃣ Get client IP first

    setLoading(true);
    const ip = await getClientIP();

    // 2️⃣ Prepare payload and send to insert API
    const payload = {
      ...formData,
      ip,
      id: "-",
    };

    const insertResponse = await fetch(
      "https://goldfish-app-y9ksu.ondigitalocean.app/api/UserAgreement/insert",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!insertResponse.ok) {
      throw new Error("Failed to insert user agreement");
    }

    // 3️⃣ Get payment link only after insert API success
    const paymentResponse = await fetch(
      `https://goldfish-app-y9ksu.ondigitalocean.app/api/Paymentlinks/getpaymentlinkbyemail?email=${encodeURIComponent(
        formData?.email
      )}`
    );

    const data = await paymentResponse.json();

    // 4️⃣ Redirect if payment link exists
    if (data.paymentlink) {
      window.location.href = data.paymentlink;
    } else {
      setLoading(false);
      alert(data.message || "No payment link found");
    }
  }

  const handleContinue = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!agreed) {
      newErrors.agreed =
        "You must agree to the Privacy Policy and Terms of Service";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      sendDataWithIP(formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear field error on change
  };

  return (
    <div className="min-h-screen w-full text-black bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl border border-gray-100">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-1 text-gray-500">{subtitle}</p>

          {/* User Info Form */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`border rounded-lg px-3 py-2 text-sm w-full focus:!border-blue-500 focus:ring-blue-500 focus:outline-none ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="phoneNumber"
                max={22}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`border rounded-lg px-3 py-2 text-sm w-full focus:!border-blue-500 focus:ring-blue-500 focus:outline-none ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className="col-span-1 sm:col-span-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                disabled
                onChange={handleInputChange}
                className={`border rounded-lg px-3 py-2 text-sm w-full focus:!border-blue-500 focus:ring-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6">
            <div className="h-58 overflow-auto">
              <LegalPage />
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-6 flex justify-between gap-3">
            <div>
              <input
                id="agree"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  setErrors({ ...errors, agreed: "" });
                }}
              />
              <label htmlFor="agree" className="text-sm ml-2 text-gray-700">
                I have read and agree to the Privacy{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-500 underline"
                >
                  Policy and Terms of Service.
                </Link>
              </label>
              {errors.agreed && (
                <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                disabled={loading}
                onClick={handleContinue}
                className="px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition bg-blue-500 text-white hover:bg-blue-600"
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-4 border-t bg-gray-50 rounded-b-2xl text-xs text-gray-500">
          By continuing, you acknowledge that your use is subject to our Privacy
          Policy & Terms.
        </div>
      </div>
    </div>
  );
}
