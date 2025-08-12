// components/AppFeatures.jsx
"use client";

import React from "react";
import Image from "next/image";
import app1 from "../../../public/assets/app1.jpg";
import app2 from "../../../public/assets/app2.jpg";
import app3 from "../../../public/assets/app2.jpg";
import app4 from "../../../public/assets/app3.jpg";

const appScreens = [app1, app2, app3, app4];

const AppFeatures = () => {
  return (
    <section className="py-16 bg-white text-black text-center">
      <h2 className="text-3xl md:text-4xl  text-gray-800 mb-12">
        App Features
      </h2>

      {/* Force 1 row on lg+ screens */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 px-4 overflow-x-auto lg:overflow-visible">
        {appScreens.map((src, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[300px] border   rounded-xl"
          >
            <Image
              src={src}
              alt={`App Feature ${index + 1}`}
              width={300}
              height={500}
              unoptimized
              className="w-full h-auto rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppFeatures;
