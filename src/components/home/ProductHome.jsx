import { useRouter } from 'next/router';
import React from 'react'

function ProductHome() {
    const router = useRouter();
    return (
        <div><section id="sensors" class="relative bg-[#edf4ff] py-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Sensors by Inovisense
                    </h2>
                    <p class="mt-3 text-lg text-gray-600">
                        Reliable. Accurate. Connected. Real-time environmental data for smarter monitoring and compliance.
                    </p>
                </div>


                <div class="mt-12 grid gap-8 md:grid-cols-2">

                    <article class="flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg" onClick={() => router.push('/temperature-humidity-monitoring')}>

                        <div class="relative mx-auto w-full max-w-[520px]">
                            <div class="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-gray-100">
                                <img src="https://f5dev786siteimages.s3.us-east-1.amazonaws.com/61.jpg" alt="Inovisense IS211 Temperature & Humidity Sensor"
                                    class="absolute inset-0 h-full w-full  object-contain" />
                            </div>
                        </div>


                        <div class="mt-6 grow">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">LoRaWAN</span>

                                <span class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-100">Cellular Gateway</span>

                                <span class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">10+ yr battery</span>
                                <span class="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Compact IP-rated</span>
                            </div>

                            <h3 class="mt-3 text-2xl font-semibold text-gray-900">IS211 — Temperature &amp; Humidity</h3>
                            <p class="mt-2 text-gray-600">
                                Ideal for cold storage, food safety, laboratories, and ambient environmental monitoring.
                            </p>


                            <ul class="mt-4 grid gap-2 text-gray-700">
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Long-range connectivity with reliable uplinks</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> High-accuracy temperature &amp; humidity sensing</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Compact, water-resistant enclosure</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Works seamlessly with Inovisense Cloud</li>
                            </ul>


                            <dl class="mt-5 grid grid-cols-2 gap-3 text-sm">
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Temp Range</dt>
                                    <dd class="text-slate-700">−40 °C to 85 °C</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Humidity</dt>
                                    <dd class="text-slate-700">0–100% RH</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Interval</dt>
                                    <dd class="text-slate-700">Configurable</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Power</dt>
                                    <dd class="text-slate-700">Replaceable lithium</dd>
                                </div>
                            </dl>
                        </div>


                        <div class="mt-6 flex flex-wrap gap-3">
                            <a href="/buy" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">Buy IS211</a>
                            <a href="/contact-us" class="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">Talk to Sales</a>
                        </div>
                    </article>


                    <article class="flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg" onClick={() => router.push('/indoor-air-quality-monitoring')}>

                        <div class="relative mx-auto w-full max-w-[520px]">
                            <div class="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-gray-100">
                                <img src="https://f5dev786siteimages.s3.us-east-1.amazonaws.com/62.jpg" alt="Inovisense IS411 CO₂ & Air Quality Monitor"
                                    class="absolute inset-0 h-full w-full  object-contain" />
                            </div>
                        </div>


                        <div class="mt-6 grow">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">LoRaWAN</span>
                                <span class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-100">CO₂ + Temp + RH</span>
                                <span class="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">E-ink display</span>
                            </div>

                            <h3 class="mt-3 text-2xl font-semibold text-gray-900">IS411 — CO₂ &amp; Air Quality Monitor</h3>
                            <p class="mt-2 text-gray-600">
                                Designed for IAQ in classrooms, offices, and healthcare environments.
                            </p>


                            <ul class="mt-4 grid gap-2 text-gray-700">
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Measures CO₂, temperature &amp; humidity</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Low-power e-ink with smart LED indicator</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Seamless cloud connectivity</li>
                                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> USB-C power with battery backup</li>
                            </ul>


                            <dl class="mt-5 grid grid-cols-2 gap-3 text-sm">
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">CO₂ Range</dt>
                                    <dd class="text-slate-700">400–5000 ppm</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Temperature</dt>
                                    <dd class="text-slate-700">0–50 °C</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Humidity</dt>
                                    <dd class="text-slate-700">0–95% RH</dd>
                                </div>
                                <div class="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                                    <dt class="font-medium text-slate-900">Power</dt>
                                    <dd class="text-slate-700">USB-C / Battery</dd>
                                </div>
                            </dl>
                        </div>

                        <div class="mt-6 flex flex-wrap gap-3">

                            <a href="/contact-us" class="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">Talk to Sales</a>
                        </div>
                    </article>
                </div>


                <div class="mt-12 text-center">
                    <a href="/products" class="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700">
                        Explore All Sensors
                    </a>
                </div>
            </div>
        </section></div>
    )
}

export default ProductHome