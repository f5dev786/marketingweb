// components/FeatureCard.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureCard = ({ title, description, icon, color, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-500 ease-out ${bgColor} 
                  border border-gray-200 group cursor-pointer
                  ${isHovered ? "shadow-2xl" : "shadow-lg"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px rgba(59, 130, 246, 0.1)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Top Decorative Line */}
    
      {/* Icon Container */}
      <div
        className={`mb-6 p-4 rounded-xl bg-white inline-flex shadow-sm ${
          isHovered ? "scale-110" : "scale-100"
        } transition-transform duration-300`}
      >
        {icon}
      </div>

      {/* Title with Gradient */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Animated Arrow */}
      <div className="flex items-center">
        <span
          className={`font-medium ${
            isHovered ? "text-gray-900" : "text-gray-700"
          }`}
        >
          Learn more
        </span>
        <FaArrowRight
          className={`ml-3 transition-all duration-300 ${
            isHovered ? "translate-x-2 text-blue-600" : "text-gray-500"
          }`}
        />
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${color
          .replace("from-", "bg-gradient-to-r from-")
          .replace("to-", "to-")}`}
      ></div>
    </div>
  );
};

export default FeatureCard;
