"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Meet = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // Animate child elements one by one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={ref}
      id="meet"
      className="container mx-auto px-4 py-24 md:py-48 h-screen"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <motion.h2
          className="text-3xl sm:text-4xl font-thin mb-6 md:mb-10"
          variants={itemVariants}
        >
          Meet Obscura
        </motion.h2>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold"
          variants={itemVariants}
        >
          Lorem{" "}
          <motion.span
            className="inline-block w-[100px] sm:w-[140px] h-[60px] sm:h-[80px] bg-[#070710] rounded-lg align-middle"
            variants={itemVariants}
          ></motion.span>{" "}
          ipsum dolor{" "}
          <motion.span
            className="inline-flex w-[100px] sm:w-[140px] h-[60px] sm:h-[80px] bg-[#070710] rounded-lg justify-center items-center text-[40px] sm:text-[50px]"
            variants={itemVariants}
          >
            ✨
          </motion.span>{" "}
          <br />
          sit amet{" "}
          <motion.span
            className="inline-block w-[50px] sm:w-[60px] h-[60px] sm:h-[80px] bg-[#070710] rounded-lg align-middle"
            variants={itemVariants}
          ></motion.span>{" "}
          consectetur{" "}
          <motion.span
            className="inline-block w-[50px] sm:w-[60px] h-[60px] sm:h-[80px] bg-[#070710] rounded-lg align-middle"
            variants={itemVariants}
          ></motion.span>{" "}
          <br />
          adipiscing{" "}
          <motion.span
            className="inline-flex w-[100px] sm:w-[140px] h-[60px] sm:h-[80px] bg-[#070710] rounded-lg justify-center items-center text-[40px] sm:text-[50px]"
            variants={itemVariants}
          >
            🤖
          </motion.span>{" "}
          elit
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};
