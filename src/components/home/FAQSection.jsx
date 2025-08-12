"use client";

import { ClientPageRoot } from "next/dist/client/components/client-page";
import { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const faqItems = [
  {
    question: "What is Inovisense, and how can it help my business?",
    answer:
      "Inovisense offers advanced real-time monitoring solutions designed to enhance safety, compliance, and efficiency across industries. Whether you need to monitor temperature, humidity, air quality, or liquid levels, our solutions help you protect assets, reduce operational costs, and optimize performance.",
  },
  {
    question: "How does Inovisense ensure data accuracy and reliability?",
    answer:
      "Our solutions leverage state-of-the-art sensors and cloud-based technology hosted on secure AWS servers. With features like automated reporting, predictive alerts, and 24/7 real-time monitoring, Inovisense guarantees accurate and actionable insights for your business.",
  },
  {
    question: "What industries can benefit from Inovisense solutions?",
    answer:
      "Inovisense serves a wide range of industries, including healthcare, education, food safety, manufacturing, and pharmaceuticals. Our flexible solutions are tailored to meet the unique monitoring needs of each sector.",
  },
  {
    question: "What types of assets can Inovisense monitor?",
    answer:
      "Inovisense serves a wide range of industries, including healthcare, education, food safety, manufacturing, and pharmaceuticals. Our flexible solutions are tailored to meet the unique monitoring needs of each sector.",
  },
  {
    question: "How does Inovisense handle data security and privacy?",
    answer:
      "Inovisense uses advanced encryption and secure cloud hosting on AWS to ensure that your data remains protected. Our systems also comply with industry-specific data privacy regulations, giving you peace of mind.",
  },
  {
    question:
      "What makes Inovisense different from other monitoring solutions?",
    answer:
      "Inovisense stands out with its lifetime hardware warranty, automated compliance reporting, and seamless integration capabilities. Our user-friendly interface, unlimited user access, and tailored solutions make monitoring efficient and hassle-free.",
  },
  {
    question: "⁠Does Inovisense offer a trial period or demonstration?",
    answer:
      "Yes, we encourage you to request a demo through our website. Our team will provide a comprehensive walkthrough of how Inovisense can meet your specific business needs.",
  },
  {
    question:
      "Can I customize the monitoring parameters for my specific requirements?",
    answer:
      "Absolutely! Inovisense allows you to set custom parameters for alerts and monitoring based on your industry and business needs, ensuring precise control and oversight.",
  },
  {
    question: "Are there any hidden costs associated with Inovisense?",
    answer:
      "No, Inovisense is transparent about pricing. Once you purchase our solutions, there are no hidden fees. Our plans include hardware, software, and ongoing support to give you complete value.",
  },
  {
    question: "How do I get started with Inovisense for my business?",
    answer:
      "Getting started is simple. Reach out to us through the “Request a Demo” button on our website or contact our support team. We’ll guide you through selecting the best solution for your needs and implementing it quickly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  console.log("openIndex", openIndex);

  return (
    <section className="py-15 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="inline-block text-blue-600 border border-dashed border-blue-500 text-[14px]  px-4 py-2 rounded-full mt-8 tracking-wider bg-[#dbeefe]">
          FAQ’s
        </div>
        <h2 className="text-3xl md:text-[42px]  text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 text-left">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={` group rounded-md transition-all duration-300 cursor-pointer border border-gray-200 rounded-xl hover:bg-gray-100 `}
              onClick={() => toggleFAQ(index)}
            >
              <div
                className={`flex justify-between items-center p-4 group-hover:text-blue-500 ${
                  openIndex === index
                    ? "text-blue-500 bg-gray-100 rounded-t-xl"
                    : ""
                }`}
              >
                <h3
                  className={` text-base group-hover:text-blue-500  ${
                    openIndex === index
                      ? "text-blue-500 bg-gray-100  "
                      : "text-gray-900"
                  }`}
                >
                  {item.question}
                </h3>

                {openIndex === index ? (
                  <FaMinusSquare className="text-2xl group-hover:text-blue-500 " />
                ) : (
                  <FaPlusSquare className="text-2xl group-hover:text-blue-500 " />
                )}
              </div>

              {openIndex === index && (
                <div className="p-4 text text-gray-700 hover:bg-gray-50 hover:rounded-b-xl">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
