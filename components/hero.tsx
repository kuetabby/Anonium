"use client";

import { socialsLink } from "@/constants/links";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import { contractAddress } from "@/constants/links";

export const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Trigger animation when 20% of the component is in view

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Contract Address
  // const contractAddress = contractAddress;
  // const [copySuccess, setCopySuccess] = useState(false);

  // Copy to Clipboard Handler
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(contractAddress);
  //   setCopySuccess(true);

  //   // Reset after 2 seconds
  //   setTimeout(() => setCopySuccess(false), 2000);
  // };

  const fadeInOutVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const glowingButtonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white bg-[#070710]"
    >
      {/* Background Overlay */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        variants={fadeInOutVariants}
      ></motion.div> */}

      {/* Glowing Particles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        {/* Particle Animation with Float */}
        <div className="absolute w-[150px] h-[150px] bg-[#d87cff] rounded-lg blur-3xl opacity-80 animate-pulse top-[20%] left-[10%]"></div>
        <div className="absolute w-[200px] h-[200px] bg-[#e870ff] rounded-lg blur-3xl opacity-70 animate-pulse top-[50%] left-[60%] delay-1000"></div>
        <div className="absolute w-[100px] h-[100px] bg-[#f09fff] rounded-lg blur-3xl opacity-90 animate-pulse top-[70%] left-[30%] delay-2000"></div>
        <div className="absolute w-[150px] h-[100px] bg-[#d87cff] rounded-lg blur-3xl opacity-80 animate-pulse top-[20%] left-[80%]"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 lg:px-16 max-w-screen-xl"
        variants={fadeInOutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h1 className="text-2xl md:text-[4rem] leading-tight font-bold tracking-tight text-white">
          MCP-Integrated, Encrypted, and AI-Optimized Storage
          {/* <span className="text-primaryColor"> Obscura</span> */}
        </h1>
        <p className="mt-4 text-[10px] md:text-sm text-gray-300 w-auto md:w-[700px] text-center mx-auto">
          Combining decentralized storage with MCP (Model Context Protocol) to
          give your data meaning, privacy, and machine ready structure.
        </p>

        <motion.div
          className="mt-4 flex flex-wrap flex-row justify-center gap-4 p-4"
          variants={glowingButtonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <button className="px-8 py-3 bg-primaryColor text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primaryColorLight/20">
            Get Started
          </button>
          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 border border-primaryColor text-primaryColor font-semibold rounded-lg shadow-lg hover:text-black hover:bg-[#f4fae3] transition-transform duration-300">
              Documentation
            </button>
          </Link>
        </motion.div>

        {/* <div className="relative flex justify-center items-center mt-12 px-4">
          <div className="bg-[#1a1f24] p-4 rounded-lg border border-primaryColor shadow-lg w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2">
            <input
              type="text"
              value={contractAddress}
              readOnly
              className="flex-1 bg-transparent text-white px-4 py-2 text-lg placeholder-gray-400 focus:outline-none border border-gray-600 rounded-md"
            />
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto xl:w-24 px-6 sm:px-2 py-2 bg-primaryColor text-black font-semibold rounded-md hover:scale-105 transition-transform duration-300"
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
        </div> */}
      </motion.div>
    </motion.div>
  );
};
