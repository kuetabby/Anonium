"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import framer-motion
// import shape from "@/public/image/shape/shape_ico_hero_section_bottom.svg";

const features = [
  {
    title: "Contextual Intelligence",
    description:
      "Obscura introduces a smarter protocol for machine understanding. By leveraging Model Context Protocol, we give structure to unstructured data.",
  },
  {
    title: "Decentralized and Context-Aware",
    description:
      "Your data is not only encrypted and stored across distributed networks, but also enriched with machine readable context through MCP creating a foundation for secure and intelligent access.",
  },
  {
    title: "Built for the Future of AI",
    description:
      "Obscura empowers next generation applications to interact with decentralized storage seamlessly, ensuring secure, efficient, and meaningful access to data.",
  },
];

export default function AboutObscura() {
  return (
    <section
      id="about"
      className="relative py-16  overflow-hidden bg-[#070710]"
    >
      {/* <div className="">
        <Image src={shape} alt="Shape Divider" className="w-full " priority />
      </div> */}
      {/* SHAPE KIRI */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 w-72 h-72 rounded-full bg-primaryColor opacity-30 blur-3xl pointer-events-none"
      />
      {/* SHAPE KANAN */}
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-primaryColorLight opacity-30 blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 px-4">
        {/* Kiri: Text */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-bold text-[#e5e7fa] mb-10 text-center md:text-left">
            Introducing <span className="text-primaryColor">Obscura</span>
          </h2>
          <div className="flex flex-col gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-start gap-6"
              >
                {/* Timeline bulat & garis */}
                <div className="flex flex-col items-center">
                  <span className="block w-6 h-6 rounded-full border-2 border-primaryColor bg-primaryColorLight" />
                  <div className="w-1 flex-1 min-h-[150px] bg-gradient-to-b from-primaryColorLight to-transparent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#e5e7fa] mb-[30px]">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-thin text-[#b0b3c7] text-md text-left">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            {/* Ripple SVG */}
            <div className="absolute -top-10 -left-10 w-[600px] h-[600px] pointer-events-none">
              <svg
                viewBox="0 0 501 455"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M500.5 227.5C500.5 352.824 388.618 454.5 250.5 454.5C112.382 454.5 0.5 352.824 0.5 227.5C0.5 102.176 112.382 0.5 250.5 0.5C388.618 0.5 500.5 102.176 500.5 227.5Z"
                  stroke="url(#sro_paint0)"
                  className="animate-fadeInOut [animation-delay:0.8s]"
                />
                <path
                  d="M463.5 247.5C463.5 361.81 368.15 454.5 250.5 454.5C132.85 454.5 37.5 361.81 37.5 247.5C37.5 133.19 132.85 40.5 250.5 40.5C368.15 40.5 463.5 133.19 463.5 247.5Z"
                  stroke="url(#sro_paint1)"
                  className="animate-fadeInOut [animation-delay:0.6s]"
                />
                <path
                  d="M425.5 268C425.5 371.031 347.12 454.5 250.5 454.5C153.88 454.5 75.5 371.031 75.5 268C75.5 164.969 153.88 81.5 250.5 81.5C347.12 81.5 425.5 164.969 425.5 268Z"
                  stroke="url(#sro_paint2)"
                  className="animate-fadeInOut [animation-delay:0.4s]"
                />
                <path
                  d="M379.5 268C379.5 343.97 321.715 405.5 250.5 405.5C179.285 405.5 121.5 343.97 121.5 268C121.5 192.03 179.285 130.5 250.5 130.5C321.715 130.5 379.5 192.03 379.5 268Z"
                  stroke="url(#sro_paint3)"
                  className="animate-fadeInOut [animation-delay:0.2s]"
                />
                <defs>
                  <linearGradient
                    id="sro_paint0"
                    x1="250.5"
                    y1="0"
                    x2="250.5"
                    y2="455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2A246D" />
                    <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="sro_paint1"
                    x1="250.5"
                    y1="40"
                    x2="250.5"
                    y2="455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2A246D" />
                    <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="sro_paint2"
                    x1="250.5"
                    y1="81"
                    x2="250.5"
                    y2="455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2A246D" />
                    <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="sro_paint3"
                    x1="250.5"
                    y1="130"
                    x2="250.5"
                    y2="406"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2A246D" />
                    <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Gambar utama */}
            <Image
              src="/image/about/about_image.svg"
              alt="Obscura Illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
