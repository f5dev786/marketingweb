import Link from "next/link";
import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function CaseStudySectionHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    numberOfRefrigerators: 108,
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

        const link = document.createElement("a");
        link.href = "/CashStudy.pdf"; // public folder file
        link.download = "CashStudy.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setFormOpen(false);
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
  const noteRef = useRef(null);
  return (
    <div>
      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-6 ">
          <div className="flex justify-center">
            <div className="inline-block text-black border-1 !border-dashed    border-blue-500  text-[14px]  px-4 py-2 rounded-full mb-6 tracking-wider bg-[#dbeefe]">
              Case Study • QSR Temperature Monitoring
            </div>
          </div>
          <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-7">
              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Implementation Highlights at a Dairy Queen Franchise
              </h2>

              <p class="mt-4 text-lg leading-7 text-gray-600">
                See how{" "}
                <span class="font-semibold text-gray-900">
                  Inovisense Smart Temperature Monitoring
                </span>{" "}
                helped a Dairy Queen franchise get 24/7 visibility into freezers
                and coolers, reduce the risk of product loss, and simplify
                food-safety documentation with automated alerts and digital
                logs.
              </p>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-gray-200 p-4">
                  <p class="text-sm font-semibold text-gray-900">
                    24/7 Temperature Visibility
                  </p>
                  <p class="mt-1 text-sm text-gray-600">
                    Continuous monitoring for walk-ins, reach-ins, and ice cream
                    freezers.
                  </p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-4">
                  <p class="text-sm font-semibold text-gray-900">
                    Instant Alerts
                  </p>
                  <p class="mt-1 text-sm text-gray-600">
                    Notifies staff before a small excursion becomes a full
                    product-loss event.
                  </p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-4">
                  <p class="text-sm font-semibold text-gray-900">
                    Automated Logs
                  </p>
                  <p class="mt-1 text-sm text-gray-600">
                    Simplifies HACCP documentation with searchable digital
                    records.
                  </p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-4">
                  <p class="text-sm font-semibold text-gray-900">
                    Less Manual Checking
                  </p>
                  <p class="mt-1 text-sm text-gray-600">
                    Reduces dependency on clipboard checks and shift-to-shift
                    consistency.
                  </p>
                </div>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  className="bg-gray-800  hover:bg-blue-500 text-white px-4 py-3 rounded-md"
                  onClick={() => setFormOpen(true)}
                >
                  Read the Case Study
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-3 hover:bg-gray-800 rounded-md"
                  onClick={() => setIsOpen(true)}
                >
                  Request a Demo
                </button>
              </div>

              <p class="mt-4 text-xs text-gray-500">
                *Results vary by site configuration and operating practices.
                Metrics available upon request.
              </p>
            </div>

            <div class="lg:col-span-5">
              <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Inovisense
                    </p>
                    <p class="mt-1 text-sm text-gray-600">
                      Smart Temperature Monitoring
                    </p>
                  </div>
                  <div class="rounded-2xl border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                    Dairy Queen
                  </div>
                </div>

                <div class="mt-6 space-y-4">
                  <div class="rounded-2xl bg-white p-4 border border-gray-200">
                    <p class="text-xs font-semibold text-gray-500">
                      MONITORED ASSETS
                    </p>
                    <p class="mt-1 text-sm font-semibold text-gray-900">
                      Walk-in Freezer • Walk-in Cooler • Ice Cream Freezer
                    </p>
                  </div>

                  <div class="rounded-2xl bg-white p-4 border border-gray-200">
                    <p class="text-xs font-semibold text-gray-500">
                      CAPABILITIES
                    </p>
                    <ul class="mt-2 space-y-2 text-sm text-gray-700">
                      <li class="flex gap-2">
                        <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
                        Real-time temperature alerts (SMS/Email/App)
                      </li>
                      <li class="flex gap-2">
                        <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
                        Digital logs for compliance tracking
                      </li>
                      <li class="flex gap-2">
                        <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
                        Equipment history & trend visibility
                      </li>
                    </ul>
                  </div>

                  <div class="rounded-2xl bg-white p-4 border border-gray-200">
                    <p class="text-xs font-semibold text-gray-500">
                      PLACEHOLDER METRICS
                    </p>
                    <div class="mt-3 grid grid-cols-3 gap-3">
                      <div class="rounded-xl bg-gray-50 p-3 border border-gray-200 text-center">
                        <p class="text-lg font-semibold text-gray-900">24/7</p>
                        <p class="text-xs text-gray-600">Monitoring</p>
                      </div>
                      <div class="rounded-xl bg-gray-50 p-3 border border-gray-200 text-center">
                        <p class="text-lg font-semibold text-gray-900">⚡</p>
                        <p class="text-xs text-gray-600">Alerts</p>
                      </div>
                      <div class="rounded-xl bg-gray-50 p-3 border border-gray-200 text-center">
                        <p class="text-lg font-semibold text-gray-900">📋</p>
                        <p class="text-xs text-gray-600">Logs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <a
                    href="/request-demo"
                    class="block w-full rounded-xl bg-white border border-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Get Pricing for Your Site
                  </a>
                </div>
              </div>
            </div>
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

      {formOpen && (
        <div className="fixed inset-0  shadow-xl scrollbar-hide flex justify-center items-center z-50 ">
          <div className="!bg-white  rounded-xl shadow-lg w-full max-w-4xl relative border-2 border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <RxCross2 size={24} />
            </button>
            <div className="py-5">
              <div className="max-w-md mx-auto bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 w-full ">
                {isSubmitted ? (
                  <h3 className="text-xl text-center font-semibold text-green-600 py-16">
                    🎉 Case Study Downloaded successfully!
                  </h3>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold mb-1">
                      Read the Case Study<span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Fill out the form below to get Case Study!
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
        </div>
      )}
    </div>
  );
}

export default CaseStudySectionHome;
