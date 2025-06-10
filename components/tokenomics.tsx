"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contractAddress } from "@/constants/links";

export const Tokenomics = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Contract Address
  // const contractAddress = contractAddress;
  const [copySuccess, setCopySuccess] = useState(false);

  // Copy to Clipboard Handler
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);

    // Reset after 2 seconds
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section
      className="relative text-white mx-4 sm:mx-8 my-24 sm:my-48 p-6 lg:p-24 rounded-3xl border border-primaryColor shadow-lg overflow-hidden"
      id="tokenomics"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute  w-full h-full object-cover"
          src="https://res.cloudinary.com/dwwb1na2n/video/upload/v1749199906/64814-510851159_large_j98vvb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#070710] opacity-80"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          className="relative text-4xl lg:text-6xl font-bold mb-8 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          TOKENOMICS
        </motion.h2>

        {/* Tokenomics Details */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 z-10">
          {/* Columns */}
          {/* Column 1 */}
          <motion.div
            className="relative bg-gradient-to-br from-[#1a1f24] to-[#0d0f12] p-12 border border-primaryColor/50 rounded-3xl shadow-lg text-center hover:scale-105  transition-transform duration-300 hover:shadow-2xl hover:shadow-primaryColor"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <h3 className="text-6xl font-bold text-primaryColor mb-2">$OBS</h3>
            <p className="text-xl font-semibold text-white">Token Name</p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="relative bg-gradient-to-br from-[#1a1f24] to-[#0d0f12] p-12 border border-primaryColor/50 rounded-3xl shadow-lg text-center hover:scale-105  transition-transform duration-300 hover:shadow-2xl hover:shadow-primaryColor"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-6xl font-bold text-primaryColor mb-2">100M</h3>
            <p className="text-xl font-semibold text-white">Total Supply</p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="relative bg-gradient-to-br from-[#1a1f24] to-[#0d0f12] p-12 border border-primaryColor/50 rounded-3xl shadow-lg text-center hover:scale-105  transition-transform duration-300 hover:shadow-2xl hover:shadow-primaryColor"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-6xl font-bold text-primaryColor mb-2">0</h3>
            <p className="text-xl font-semibold text-white">Buy/Sell Tax</p>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            className="relative bg-gradient-to-br from-[#1a1f24] to-[#0d0f12] p-12 border border-primaryColor/50 rounded-3xl shadow-lg text-center hover:scale-105  transition-transform duration-300 hover:shadow-2xl hover:shadow-primaryColor"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-6xl font-bold text-primaryColor mb-2">ETH</h3>
            <p className="text-xl font-semibold text-white">Network</p>
          </motion.div>
        </div>

        {/* Centered Contract Address */}
        <div className="relative flex justify-center items-center mt-12 px-4">
          <div className="bg-[#1a1f24] p-4 rounded-lg border border-primaryColor shadow-lg w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <input
              type="text"
              value={contractAddress}
              readOnly
              className="flex-1 bg-transparent text-white px-4 py-2 text-lg placeholder-gray-400 focus:outline-none border border-gray-600 rounded-md"
            />
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto px-6 py-2 bg-primaryColor text-black font-semibold rounded-md hover:scale-105 transition-transform duration-300"
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
