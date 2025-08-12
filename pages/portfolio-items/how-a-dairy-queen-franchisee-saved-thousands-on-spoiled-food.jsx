import Image from "next/image";
import DQ from "../../public/assets/dq.png";
import DQS from "../../public/assets/DQS.png";
import caseStudy from "../../public/assets/caseStudy.png";
import Head from "next/head";
import Link from "next/link";
export default function CashStudy() {
  return (
    <>
      <Head>
        <title>
          How a Dairy Queen Franchisee Saved Thousands on Spoiled Food
        </title>
      </Head>
      <div
        className="text-black"
        style={{
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="bg-[#0d1524]  ">
          <div className="max-w-6xl text-center mx-auto py-20">
            <h1 className="text-white text-[55px] font-semibold leading-[1.2]">
              How a Dairy Queen Franchisee Saved Thousands on Spoiled Food
            </h1>
            <p className="mt-4 text-[#52708d]">
              Home / How a Dairy Queen Franchisee Saved Thousands on Spoiled
              Food
            </p>
          </div>
          <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* Image */}
              <div className="mb-6">
                <Image
                  src={DQ} // <-- put your image in public/images
                  alt="Dairy Queen at night"
                  width={900}
                  height={500}
                  unoptimized
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* Text Content */}
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-5">
                It was a typical summer at a busy Dairy Queen franchise in
                Augusta, GA. Orders continued to roll in, customers wanted ice
                cream, and staff rushed to keep up. But behind the scenes, the
                store had a costly problem. Food spoilage was draining profits.
              </p>

              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-5">
                Temperatures in freezers and coolers were manually checked.
                Employees recorded data manually. Mistakes happened often.
                Spoiled food meant money wasted.
              </p>

              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                The franchise owner knew something had to change.
              </p>
            </div>
          </section>
          <section className="bg-[#f2f7ff] py-24">
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center ">
              {/* Left Image */}
              <div>
                <Image
                  src={DQS} // <-- save image in public/images
                  alt="Manual temperature monitoring"
                  width={700}
                  unoptimized
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Text */}
              <div>
                <h2 className="text-[42px] font-medium mb-6  leading-[1.2]">
                  The Challenge of Manual Monitoring
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before switching to Inovisense, the Dairy Queen team relied on
                  staff checking fridge and freezer temperatures. They wrote the
                  numbers down on clipboards. It was slow and unreliable.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  On busy days, these manual checks got skipped. Small mistakes
                  led to significant losses. Just one forgotten check could mean
                  spoiled ice cream or unsafe food. Costs rose quickly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  They needed a reliable{" "}
                  <span className="font-semibold">
                    temperature monitoring system for restaurants.
                  </span>{" "}
                  A solution was needed to prevent food spoilage, keep customers
                  safe, and save the store money.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              {/* Left Text */}
              <div>
                <h2 className="text-[42px] font-medium  leading-[1.2] mb-6">
                  How Inovisense Solved the Problem
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The franchise owner chose Inovisense’s temperature and
                  humidity monitoring system. It provided continuous{" "}
                  <span className="font-semibold">
                    remote restaurant temperature monitoring
                  </span>
                  . Wireless temperature monitoring for restaurants sensors were
                  placed in storage areas, including a{" "}
                  <span className="font-semibold">
                    walk-in cooler temperature sensor
                  </span>{" "}
                  and freezer monitoring.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The sensors collected data automatically. Temperatures were
                  sent directly to a{" "}
                  <span className="font-semibold">
                    cloud-based restaurant monitoring system
                  </span>
                  . Employees no longer needed clipboards or manual checks.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <span className="font-semibold">
                    Fridge and freezer temperature alerts
                  </span>{" "}
                  were sent instantly if temperatures exceeded safe ranges.
                  Notifications came through emails and phones. Staff could act
                  right away to protect the food. The Inovisense system also
                  learns each freezer’s defrost cycle to avoid sending false
                  alerts during normal temperature fluctuations.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-black text-white px-6 py-3 rounded-md font-semibold">
                    Request a Demo
                  </button>
                  <Link href="/contact-us">
                    <button className="border border-gray-300 hover:bg-black hover:text-white px-6 py-3 rounded-md font-semibold text-gray-800">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src={caseStudy} // <-- save image in public/images
                  alt="Inovisense Dashboard"
                  width={350}
                  height={700}
                  className=""
                  unoptimized
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
