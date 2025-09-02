import Header from "@/src/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import { FiCopy, FiPhone, FiX } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";

export default function PricingCalculator() {
    const SUB_PRICE = 14.99; // per site per month
    const SENSOR_PRICE = 55; // fixed USD
    const GATEWAY_PRICE = 199; // fixed USD
    const router = useRouter();

    const [sites, setSites] = useState(1);
    const [sensorsPerSite, setSensorsPerSite] = useState(1);
    const [gatewaysPerSite, setGatewaysPerSite] = useState(1);
    const [subscription, setSubscription] = useState(0);
    const [hardware, setHardware] = useState(0);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    // detect if it's mobile
    const isMobile = () => {
        if (typeof navigator === "undefined") return false;
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    const handleClick = () => {
        if (isMobile()) {
            // On mobile → directly open dialer
            window.location.href = "tel:+18483130582";
        } else {
            // On desktop → open modal
            setOpen(true);
        }
    };
    const fmt = (n) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol", // ensures "$0.00"
        }).format(n);

    useEffect(() => {
        const sub = sites * SUB_PRICE;
        const hw = sensorsPerSite * SENSOR_PRICE + gatewaysPerSite * GATEWAY_PRICE;
        setSubscription(sub);
        setHardware(hw);
    }, [sites, sensorsPerSite, gatewaysPerSite]);

    useEffect(() => {
        if (sites >= gatewaysPerSite) {
            setGatewaysPerSite(sites);
        }
        if (sites >= sensorsPerSite) {
            setSensorsPerSite(sites);
        }
    }, [sites, gatewaysPerSite]);

    const addToCart = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://goldfish-app-y9ksu.ondigitalocean.app/api/create-checkout-session",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify([
                        {
                            priceId: "price_1RiKo0KCrHxXCFbBVpArs2UA", // replace with your real price ID
                            quantity: sensorsPerSite, // quantity to purchase
                        },
                        {
                            priceId: "price_1S0T3gKCrHxXCFbBNbIU4B5J", // replace with your real price ID
                            quantity: gatewaysPerSite, // quantity to purchase
                        },
                        {
                            priceId: "price_1S0TNjKCrHxXCFbB1UkURzr6", // replace with your real price ID
                            quantity: sites, // quantity to purchase
                        },
                    ]),
                }
            );

            const { clientSecret } = await response.json();
            router.push(`/checkout/?token=${clientSecret}`);
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    };

    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-white shadow text-gray-900">
                {/* Top Bar */}
                <div className="flex justify-between items-center px-4 md:px-6 py-2  text-gray-700 border-b border-gray-200">
                    <div
                        className="text-center md:text-left w-full md:w-auto text-[15px] ml-5"
                        style={{ fontFamily: "Kumbh Sans" }}
                    >
                        Call us <span className="font-medium">848 313 0582</span>{" "}
                        <span className="mx-2  hidden md:inline">|</span>{" "}
                        <a href="mailto:support@inovisense.com">
                            <span className=" hidden md:inline hover:text-blue-500">
                                support@inovisense.com
                            </span>
                        </a>
                    </div>
                </div>

                {/* Main Nav */}
                <div className="flex justify-between items-center px-4 md:px-[57px] py-3 text-gray-900 text-[18px]">
                    {/* Logo */}
                    <div className="md:w-[30%] w-[50%]">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={logo}
                                alt="Inovisense"
                                width={270}
                                unoptimized
                                height={70}
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="bg-white text-black">
                <div className="mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <div className="text-center mb-8 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                            Pricing & Estimates
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Hardware one-time (Sensor $55, Gateway $199) +{" "}
                            <strong>$14.99/mo per site</strong>.
                        </p>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        {/* LEFT */}
                        <div className="bg-white rounded-2xl shadow border border-gray-200 p-4 sm:p-6 col-span-2">
                            {/* Step 1 */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Step 1 — Sites</h3>
                                <label className="text-md text-gray-500 mb-1 block">
                                    How many sites?
                                </label>
                                <div className="flex items-center border rounded-xl overflow-hidden w-40">
                                    <button
                                        className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                        onClick={() => {
                                            setSites(Math.max(1, sites - 1));
                                        }}
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        value={sites}
                                        min={1}
                                        onChange={(e) => setSites(parseInt(e.target.value) || 1)}
                                        className="flex-1 text-center border-0 focus:ring-0 min-w-0"
                                    />
                                    <button
                                        className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                        onClick={() => setSites(sites + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">
                                    Step 2 — Hardware per site
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-md text-gray-500 mb-1 block">
                                            Total Sensors{" "}
                                            <span className="text-gray-600 !font-bold">
                                                ( {sensorsPerSite} * {fmt(SENSOR_PRICE)} ={" "}
                                                {fmt(sensorsPerSite * SENSOR_PRICE)} )
                                            </span>
                                        </label>
                                        <div className="flex items-center border rounded-xl overflow-hidden">
                                            <button
                                                className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                                disabled={sites >= sensorsPerSite}
                                                onClick={() =>
                                                    setSensorsPerSite(Math.max(1, sensorsPerSite - 1))
                                                }
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                value={sensorsPerSite}
                                                min={0}
                                                onChange={(e) =>
                                                    setSensorsPerSite(parseInt(e.target.value) || 1)
                                                }
                                                className="flex-1 text-center border-0 focus:ring-0 min-w-0"
                                            />
                                            <button
                                                className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                                onClick={() => setSensorsPerSite(sensorsPerSite + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-md text-gray-500 mb-1 block">
                                            Total Gateways{" "}
                                            <span className="text-gray-600 !font-bold">
                                                ( {gatewaysPerSite} * {fmt(GATEWAY_PRICE)} ={" "}
                                                {fmt(gatewaysPerSite * GATEWAY_PRICE)} )
                                            </span>
                                        </label>
                                        <div className="flex items-center border rounded-xl overflow-hidden">
                                            <button
                                                disabled={sites >= gatewaysPerSite}
                                                className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                                onClick={() =>
                                                    setGatewaysPerSite(Math.max(0, gatewaysPerSite - 1))
                                                }
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                value={gatewaysPerSite}
                                                min={0}
                                                onChange={(e) =>
                                                    setGatewaysPerSite(parseInt(e.target.value) || 0)
                                                }
                                                className="flex-1 text-center border-0 focus:ring-0 min-w-0"
                                            />
                                            <button
                                                className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
                                                onClick={() => setGatewaysPerSite(gatewaysPerSite + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">What you get</h3>
                                <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                                    <li>24/7 temperature monitoring</li>
                                    <li>SMS/Email alerts when out of range</li>
                                    <li>Unlimited users & dashboards</li>
                                </ul>
                                <p className="text-md text-gray-500 mt-2">
                                    Subscription is per site. Hardware is purchased once and is
                                    yours to keep.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="bg-white rounded-2xl shadow p-4 sm:p-6 h-fit md:sticky md:top-4 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                            <div className="flex justify-between border-b py-2">
                                <span>Sites</span>
                                <span className="font-bold">{sites}</span>
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Monthly subscription</span>
                                <span className="font-bold">{fmt(subscription)} / mo</span>
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Hardware (one-time)</span>
                                <span className="font-bold">{fmt(hardware)}</span>
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Shipping</span>
                                <span className="font-bold">Free</span>
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Due today</span>
                                <span className="font-bold">
                                    {fmt(hardware + subscription)}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>After month 1</span>
                                <span className="font-bold">{fmt(subscription)} / mo</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                <button
                                    disabled={loading}
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-6 py-3 font-semibold shadow-md hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                                    onClick={() => addToCart()}
                                >
                                    {loading ? (
                                        "Loading..."
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <FaCartPlus /> Add to Cart
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-6 py-3 font-semibold shadow-md hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                                >
                                    <FiPhone size={18} /> Contact Sales
                                </button>
                            </div>
                            <p className="text-md text-gray-500 mt-3">
                                USD only. Sensor $55 • Gateway $199.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                {open && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
                        <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg text-center relative">
                            {/* Close */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                <FiX size={22} />
                            </button>

                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                Contact Sales
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Call us on the number below to talk with our sales team.
                            </p>

                            <div className="flex flex-col gap-3 items-center">
                                <span className="text-lg font-semibold text-indigo-600 flex items-center gap-2">
                                    <FiPhone size={20} /> +1 (848) 313-0582
                                </span>

                                <button
                                    onClick={() => navigator.clipboard.writeText("+18483130582")}
                                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl text-sm flex items-center gap-2"
                                >
                                    <FiCopy size={16} /> Copy Number
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
