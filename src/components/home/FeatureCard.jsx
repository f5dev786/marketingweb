import { FaHeart, FaShieldAlt, FaMagic } from "react-icons/fa";

const cards = [
  {
    title: "Customer-Centric",
    description:
      "We listen first, then build. Your needs guide everything we do, ensuring solutions truly aligned with your goals.",
    icon: <FaHeart />,
    bg: "bg-pink-100",
    text: "text-pink-500",
  },
  {
    title: "Reliable",
    description:
      "You can count on us. We deliver on time, with consistent quality and dependable support at every step.",
    icon: <FaShieldAlt />,
    bg: "bg-blue-100",
    text: "text-blue-500",
  },
  {
    title: "Effortless",
    description:
      "Solutions that work smoothly and intuitively, removing barriers so you can focus on what matters most.",
    icon: <FaMagic />,
    bg: "bg-orange-100",
    text: "text-orange-500",
  },
];

export default function FeatureCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl ${card.bg} ${card.text} text-xl mb-4`}
            >
              {card.icon}
            </div>

            <h3 className="text-lg text-start  font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>

            <p className="text-gray-600 text-start text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
