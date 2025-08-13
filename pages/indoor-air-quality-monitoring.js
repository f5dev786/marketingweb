import Head from "next/head";
import InstallationSteps from "@/src/components/products/InstallationSteps";
import AirDevice from "@/src/components/products/AirDevice";
import StepCard from "@/src/components/products/InstallationSteps";
import { FaDesktop, FaPlug, FaSnowflake, FaToggleOn } from "react-icons/fa";
export default function Temperature() {
  return (
    <>
      <Head>
        <title>Indoor Air Quality Monitoring</title>
      </Head>
      <AirDevice />
      <section className="bg-white py-16 px-6 text-center">
        <p className="text-xl bg-blue-100  tracking-widest text-blue-600  border border-dashed border-blue-600 rounded-2xl px-3 py-1 inline-block mb-4">
          Steps
        </p>

        <h2 className="text-3xl font-bold mb-12">
          <span className="text-blue-500">Installation</span> Made Easy
        </h2>

        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-24 mx-auto">
          <StepCard
            icon={<FaPlug />}
            stepNumber="01."
            title="Plug Your Inovisense Hub to Power and Turn on"
          />
          <StepCard
            icon={<FaSnowflake />}
            stepNumber="02."
            title="Place Your Sensor On The Wall Or Desk"
          />
          <StepCard
            icon={<FaToggleOn />}
            stepNumber="03."
            title="Install Batteries and Activate the Sensor"
          />
          <StepCard
            icon={<FaDesktop />}
            stepNumber="04."
            title="Login to Inovisense Console to Monitor Data Realtime."
          />
        </div>

        <button className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-black transition-colors">
          Request a Demo
        </button>
      </section>
    </>
  );
}
