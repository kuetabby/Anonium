"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "Lack of Data Context",
    description:
      "Most decentralized storage solutions only handle raw files without providing context or structure, making it difficult for AI or systems to derive meaning.",
  },
  {
    title: "Centralized Data Reliance",
    description:
      "Traditional platforms still depend on centralized architecture, which exposes users to data breaches, censorship, and single points of failure.",
  },
  {
    title: "Inefficient AI Integration",
    description:
      "Without a standardized protocol, intelligent systems struggle to consume and interpret decentralized data effectively.",
  },
  {
    title: "Privacy and Ownership Concerns",
    description:
      "Users often sacrifice privacy or control when storing and sharing data, with limited visibility into how their data is accessed or used.",
  },
];

const solutions = [
  {
    title: "Model Context Protocol (MCP)",
    description:
      "Obscura introduces a universal protocol that structures metadata and context, enabling machines to understand and utilize decentralized data natively.",
  },
  {
    title: "Fully Decentralized Architecture",
    description:
      "By integrating with distributed storage networks, Obscura removes dependence on centralized intermediaries, ensuring autonomy and resilience.",
  },
  {
    title: "AI Integrated Data Layer",
    description:
      "Data stored with Obscura is enriched with contextual tags and schemas, allowing machine learning models to retrieve and reason with precision.",
  },
  {
    title: "Privacy by Design",
    description:
      "Every file is encrypted, fragmented, and user owned. Access control is handled through zero knowledge logic, preserving privacy at every layer.",
  },
];

function AnimatedItem({ children }: { children: React.ReactNode }) {
  // const controls = useAnimation();
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          bounce: 0.25,
        },
      }}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function Features2() {
  return (
    <section className="py-24 bg-[#070710]" id="challenge">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ amount: 0.5 }}
        >
          <span className="text-primaryColor"> Obscura</span>
          <br /> Problem & Solution
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Problem */}
        <motion.div
          className="rounded-3xl bg-[#9637c4]/30 p-10 backdrop-blur-lg border border-violet-400/20 shadow-[0_0_25px_rgba(150,55,196,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mx-auto">
              Problem
            </h3>
          </div>
          <ul className="space-y-6">
            {problems.map((item, index) => (
              <AnimatedItem key={index}>
                <motion.li
                  whileHover={{
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="transition-all border-l-4 border-red-700 bg-white/10 p-4 rounded-lg cursor-pointer"
                >
                  <h4 className="text-white font-semibold text-lg mb-1">
                    ✅ {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.li>
              </AnimatedItem>
            ))}
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="rounded-3xl bg-[#9637c4]/30 p-10 backdrop-blur-lg border border-violet-400/20 shadow-[0_0_25px_rgba(150,55,196,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mx-auto">
              Solution
            </h3>
          </div>
          <ul className="space-y-6">
            {solutions.map((item, index) => (
              <AnimatedItem key={index}>
                <motion.li
                  whileHover={{
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="transition-all border-l-4 border-green-400 bg-white/10 p-4 rounded-lg cursor-pointer"
                >
                  <h4 className="text-white font-semibold text-lg mb-1">
                    ✅ {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.li>
              </AnimatedItem>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
