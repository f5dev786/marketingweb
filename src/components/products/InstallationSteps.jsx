import { FaPlug, FaSnowflake, FaDesktop, FaToggleOn } from "react-icons/fa";

function StepCard({ icon, stepNumber, title }) {
  return (
    <div className="group flex flex-col items-start pt-12 px-8 pb-8 space-y-3 rounded-lg bg-gradient-to-br from-[#ebf7ff] to-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="flex justify-between w-full">
        <div className="text-blue-500 text-5xl mb-4">{icon}</div>
        <h2 className="text-5xl font-bold  text-blue-200 mb-2  group-hover:text-blue-400">
          {stepNumber}
        </h2>
      </div>
      <p className="text-gray-800 font-medium text-lg leading-snug text-left">
        {title}
      </p>
    </div>
  );
}

export default function InstallationSteps() {
  return (
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
          title="Place Your Sensor in Refrigerator / Freezer"
        />
        <StepCard
          icon={<FaToggleOn />}
          stepNumber="03."
          title="Activate Sensor by Pressing ACT Button"
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
  );
}
