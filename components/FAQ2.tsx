"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Obscura?",
    answer:
      "Obscura is a protocol that combines decentralized storage with model ready contextual metadata through MCP.",
  },
  {
    question: "How is Obscura different from IPFS or Arweave?",
    answer:
      "While those platforms focus on raw storage, Obscura adds a structured layer using MCP so data can be understood and used efficiently by machines.",
  },
  {
    question: "What is MCP?",
    answer:
      "Model Context Protocol is a data abstraction layer that allows machines to interpret, organize, and retrieve data contextually.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes. Obscura encrypts and fragments your data across a decentralized network, ensuring full ownership and privacy.",
  },
  {
    question: "Who can use Obscura?",
    answer:
      "Developers building AI applications, data scientists, researchers, and any individual or organization needing context driven decentralized data storage.",
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className=" bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-6xl font-semibold uppercase mb-2 text-primaryColor">
            FAQ
          </h3>
          <h2 className="text-3xl sm:text-2xl font-bold text-primaryColor">
            Still have questions?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`min-h-[100px] border rounded-xl p-6 transition-all duration-300 border-primaryColor ${
                activeIndex === index ? "bg-primaryColor" : "bg-transparent"
              }`}
              initial={{ opacity: 0, x: -50 }} // dari kiri.
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2
                  className={`text-sm lg:text-md font-semibold ${
                    activeIndex === index
                      ? "text-white-500 "
                      : "text-primaryColor"
                  }`}
                >
                  <span className="mr-2">Q{index + 1}.</span>
                  {item.question}
                </h2>
                <span
                  className={` text-xl ${
                    activeIndex === index
                      ? "text-white-500 "
                      : "text-primaryColor"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="overflow-hidden mt-4 text-white-500 text-sm lg:text-md">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
