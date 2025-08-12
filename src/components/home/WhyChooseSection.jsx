"use client";
import Image from "next/image";
import customer from "../../../public/assets/customer-centric.png";
import reliable from "../../../public/assets/reliability.png";
import effortless from "../../../public/assets/effortless.png";

const features = [
  {
    icon: customer,
    title: "Customer – Centric",
    description:
      "We listen first, then build. Your needs guide everything we do, ensuring that our solutions are truly aligned with your goals.",
  },
  {
    icon: reliable,
    title: "Reliable",
    description:
      "You can count on us. We deliver on time, with consistent quality and dependable support at every step.",
  },
  {
    icon: effortless,
    title: "Effortless",
    description:
      "We create solutions that work smoothly and intuitively, removing barriers so you can focus on what matters most. At Inovisense, we don’t just deliver services — we build lasting partnerships based on trust, clarity, and results.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="bg-[#0D1120] text-white   p-16"
      style={{
        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      }}
    >
      <div className="mx-auto px-4 text-center max-w-6xl">
        {/* badge */}
        <div className="inline-block text-black border-1 !border-dashed    border-blue-500  text-[14px]  px-4 py-2 rounded-full mb-6 tracking-wider bg-[#dbeefe]">
          Why Choose Inovisense?
        </div>

        {/* heading */}
        <h2 className="text-5xl md:text-[42px]  mb-12">
          At Inovisense, we make innovation reliable, effortless, <br /> and
          centered around you.
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-blue-500 rounded-lg p-9 bg-[#0D1120] flex flex-col items-center text-center pb-12"
            >
              {/* icon */}
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  unoptimized
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* title */}
              <h3 className="text-[24px] mb-3">{feature.title}</h3>

              {/* description */}
              <p className="text text-gray-300 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
