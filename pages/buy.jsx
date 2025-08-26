"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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



    const fmt = (n) =>
        new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "USD",
        }).format(n);



    useEffect(() => {
        const sub = sites * SUB_PRICE;
        const hw = (sensorsPerSite * SENSOR_PRICE) + (gatewaysPerSite * GATEWAY_PRICE);
        setSubscription(sub);
        setHardware(hw);
    }, [sites, sensorsPerSite, gatewaysPerSite]);

    useEffect(() => {
        if (sites >= gatewaysPerSite) {
            setGatewaysPerSite(sites)
        }

    }, [sites, gatewaysPerSite])



    const addToCart = async () => {
        try {
            const response = await fetch("https://goldfish-app-y9ksu.ondigitalocean.app/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([
                    {
                        priceId: "price_1RiKo0KCrHxXCFbBVpArs2UA", // replace with your real price ID
                        quantity: sensorsPerSite,            // quantity to purchase
                    },
                    {
                        priceId: "price_1S0T3gKCrHxXCFbBNbIU4B5J", // replace with your real price ID
                        quantity: gatewaysPerSite,            // quantity to purchase
                    },
                    {
                        priceId: "price_1S0TNjKCrHxXCFbB1UkURzr6", // replace with your real price ID
                        quantity: sites,            // quantity to purchase
                    },
                ]),
            });



            const { clientSecret } = await response.json();
            router.push(`/checkout/?token=${clientSecret}`);



        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    }

    return (
        <div className="bg-white text-black">
            <div className="mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="text-center mb-8 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                        Pricing & Estimates
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Hardware one-time (Sensor $55, Gateway $199) +{" "}
                        <strong>$15/mo per site</strong>.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
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
                                    onClick={() => { setSites(Math.max(1, sites - 1)) }}
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
                                        Sensors per site
                                    </label>
                                    <div className="flex items-center border rounded-xl overflow-hidden">
                                        <button
                                            className="w-10 h-10 bg-gray-200 text-lg flex-shrink-0"
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
                                        Gateways per site
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
                            <p className="text-md text-gray-500 mt-2">
                                Totals are calculated automatically: sites × per-site hardware.
                            </p>
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
                            <button className="bg-blue-600 text-white rounded-xl px-4 py-2 font-semibold" onClick={() => addToCart()}>
                                Add to Cart
                            </button>
                            <Link href={"/contact-us"} target="_blank">
                                <button className="bg-gray-200 rounded-xl px-4 py-2 font-semibold cursor-pointer">
                                    Contact Sales
                                </button>
                            </Link>
                        </div>
                        <p className="text-md text-gray-500 mt-3">
                            USD only. Sensor $55 • Gateway $199.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
