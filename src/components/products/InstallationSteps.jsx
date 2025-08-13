export default function StepCard({ icon, stepNumber, title }) {
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
