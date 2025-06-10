"use client";
import React from "react";
import { motion } from "framer-motion";
import shape2 from "@/public/image/shape/shape_section_divider_2.svg";
import shape1 from "@/public/image/shape/shape_section_divider_1.svg";
import Image from "next/image";

const steps = [
  // {
  //   title: "Design",
  //   date: "Q1 2025",
  //   description: "",
  //   subpoints: [],
  // },
  // {
  //   title: "Grow",
  //   date: "Q2 2025",
  //   description: "",
  //   subpoints: [],
  // },
  // {
  //   title: "Build",
  //   date: "Q3 2025",
  //   description: "",
  //   subpoints: [],
  // },
  // {
  //   title: "Launch",
  //   date: "Q4 2025",
  //   description: "",
  //   subpoints: [],
  // },
  {
    title: "Phase 1",
    description: "Establishing Foundation and Visibility",
    subpoints: [
      "Token Launch on Uniswap: Clearly define the token utility, and craft a strategic launch plan to attract investors and establish a strong project foundation",
      "Market Awareness Campaign: Initiate targeted marketing efforts to build awareness and attract early adopters to the project",
      // "Initial Release of Tereon AI-Powered VPN: Showcase key features of the Tereon VPN with a public demo to demonstrate its capabilities and generate interest.",
      // "Beta Access for Tereon AI Agents: Offer limited beta access to early users to gather feedback and refine the product.",
      // "Subscriptions for Tereon AI Agents: Introduce subscription plans for Tereon AI Agents, featuring advanced reasoning capabilities that approach near-human reasoning.",
    ],
  },
  {
    title: "Phase 2",
    description: "Expanding Market Reach",
    subpoints: [
      "Begin partnerships with key industry players",
      "Expand product features and services to attract new customers",
      "Launch second phase of marketing to a broader audience",
      // "Revenue sharing",
    ],
  },
  {
    title: "Phase 3",
    description: "Global Expansion",
    subpoints: [
      // "Launch in new regions to increase market share.",
      "Form new partnerships to strengthen market presence",
      "Further development of Obscura to enhance scalability and security",
      // "Revenue sharing",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmaps">
      <div>
        <Image src={shape2} alt="Shape Divider" className="w-full " priority />
      </div>
      <div className="bg-[#070710] text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ✨ Roadmap
        </h2>
        <p className="text-center text-sm md:text-base text-gray-400 font-normal max-w-md mx-auto mb-16">
          A timeline overview of our journey from ideas to execution.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative p-6 rounded-3xl bg-[#9637c4]/20 backdrop-blur-md border border-[#9637c4]/40 shadow-[0_8px_30px_rgba(150,55,196,0.3)] pt-12 text-center
              flex-grow basis-full sm:basis-[calc(50%-1.5rem)] lg:basis-[calc(25%-1.5rem)] max-w-full sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-1.5rem)]"
            >
              {/* Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#9637c4] text-white rounded-full shadow-[0_4px_12px_rgba(150,55,196,0.4)] border border-black text-center z-10">
                <div className="text-sm font-semibold leading-tight">
                  {/* {index + 1}. {step.title} */}
                  {step.title}
                </div>
                {/* <div className="text-[11px] text-white/80">{step.date}</div> */}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Subpoints */}
              {step.subpoints && (
                <ul className="list-disc text-[11px] text-gray-400 space-y-2 text-left w-full max-w-sm mx-auto pl-5">
                  {step.subpoints.map((point, i) => (
                    <li
                      key={i}
                      className="leading-snug font-normal"
                      style={{ textIndent: "-0.1em", paddingLeft: "1em" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-[80px]">
        <Image src={shape1} alt="Shape Divider" className="w-full " priority />
      </div>
    </section>
  );
}
