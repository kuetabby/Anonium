"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Testimoni = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="testimoni"
      className="mx-4 sm:mx-8 lg:mx-32 p-4 sm:p-6 lg:p-8"
      ref={ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s ease"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Slide 1 */}
        <motion.div
          className="p-4 flex flex-col sm:flex-row gap-4 items-center"
          variants={fadeInVariant}
        >
          <div className="w-full sm:w-1/3 flex justify-center">
            <img
              src="https://picsum.photos/100/100"
              alt="Bernadya"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-col justify-center bg-gray-100 rounded-2xl p-6">
            <p className="text-gray-600 text-sm mb-2">Testimonial</p>
            <p className="text-lg sm:text-2xl font-semibold mt-2 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              mollitia corporis quas nemo quo laborum ad magni omnis placeat
              voluptas sapiente sed doloremque voluptates, cumque nulla facere
              aliquam laboriosam consequatur.
            </p>
            <p className="text-gray-800 mt-4 font-bold">
              Bernadya Ribka Jayakusuma
            </p>
            <p className="text-gray-500">CEO of Pinnacle Studio</p>
          </div>
        </motion.div>

        {/* Slide 2 */}
        <motion.div
          className="p-4 flex flex-col sm:flex-row gap-4 items-center"
          variants={fadeInVariant}
        >
          <div className="w-full sm:w-1/3 flex justify-center">
            <img
              src="https://picsum.photos/100/100"
              alt="John Doe"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-col justify-center bg-gray-100 rounded-2xl p-6">
            <p className="text-gray-600 text-sm mb-2">Testimonial</p>
            <p className="text-lg sm:text-2xl font-semibold mt-2 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              mollitia corporis quas nemo quo laborum ad magni omnis placeat
              voluptas sapiente sed doloremque voluptates, cumque nulla facere
              aliquam laboriosam consequatur.
            </p>
            <p className="text-gray-800 mt-4 font-bold">John Doe</p>
            <p className="text-gray-500">CTO of Example Tech</p>
          </div>
        </motion.div>
      </Carousel>
    </motion.section>
  );
};
