"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-16 pt-12 md:pt-12 px-6 mx-auto max-w-7xl text-white mb-12"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full animate-fadeIn">
            <div className="lg:pr-10">
              <motion.div
                className="mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn}
              >
                <h3 className="text-sm sm:text-xs uppercase font-semibold bg-gradient-to-r from-primaryColor to-[#f3ffd1] text-transparent bg-clip-text">
                  Introducing
                </h3>
                <h2 className="text-3xl sm:text-2xl font-bold text-white mt-2">
                  About Us
                </h2>
              </motion.div>

              <motion.p
                className="text-gray-300 mb-4 text-justify leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                In a world driven by rapid technological evolution, Obscura
                emerges as a pioneering force, revolutionizing how artificial
                intelligence integrates into our lives. By combining
                cutting-edge innovation with a{" "}
                <span className="text-bold text-primaryColor">
                  decentralized approach
                </span>
                , Obscura empowers individuals, organizations, and communities
                to harness the full potential of AI. With a strong commitment to{" "}
                <span className="text-bold text-primaryColor">
                  transparency
                </span>
                ,{" "}
                <span className="text-bold text-primaryColor">scalability</span>
                , and{" "}
                <span className="text-bold text-primaryColor">
                  accessibility
                </span>
                , we provide the tools needed to build intelligent systems that
                are not only efficient but also aligned with the values of
                inclusivity and fairness.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-4 text-justify leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                Obscura is more than just a technology provider—it is a platform
                for collaboration and growth. From enabling the development of{" "}
                <span className="text-bold text-primaryColor">
                  scalable AI agents
                </span>{" "}
                to fostering a{" "}
                <span className="text-bold text-primaryColor">
                  vibrant AI marketplace
                </span>
                , Obscura creates an ecosystem where innovation thrives. With{" "}
                <span className="text-bold text-primaryColor">
                  advanced analytics tools
                </span>{" "}
                for{" "}
                <span className="text-bold text-primaryColor">
                  tokenized economies
                </span>{" "}
                and a{" "}
                <span className="text-bold text-primaryColor">
                  decentralized framework
                </span>
                , we pave the way for smarter solutions and transformative
                outcomes. Join us in shaping a future where AI is not only
                powerful but also accessible to all.
              </motion.p>
            </div>
          </div>

          {/* video */}
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#d8fc4c33] pointer-events-none z-0" />
            <video
              src="https://res.cloudinary.com/dfdp3brg0/video/upload/v1744117372/zz_irpdtr.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primaryColor blur-[150px] opacity-20"></div>
    </section>
  );
}
