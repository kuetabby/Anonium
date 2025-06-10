"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../app/globals.css";

export const Features: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const features = [
    {
      title: "Decentralized AI Framework",
      description:
        "Ensures privacy, security, and transparency in all interactions by leveraging a decentralized architecture.",
      icon: <Globe className="h-[50px] w-[50px] mb-6 text-primaryColor" />,
      delay: 0,
    },
    {
      title: "Scalable AI Agents",
      description:
        "Advanced, adaptable AI solutions designed for tasks ranging from automation to in-depth analysis.",
      icon: <Globe className="h-[50px] w-[50px] mb-6 text-primaryColor" />,
      delay: 0.1,
    },
    {
      title: "AI Marketplace",
      description:
        "A decentralized hub for discovering, purchasing, and deploying AI models and tools, catering to diverse user needs across industries.",
      icon: <Globe className="h-[50px] w-[50px] mb-6 text-primaryColor" />,
      delay: 0.2,
    },
    {
      title: "DePIN Integration",
      description:
        "Supports decentralized physical infrastructure networks, enabling seamless integration of on-chain solutions with real-world applications.",
      icon: <Globe className="h-[50px] w-[50px] mb-6 text-primaryColor" />,
      delay: 0.3,
    },
  ];

  return (
    <section
      className="relative py-12 bg-[#070710] text-white overflow-hidden scrollbar-custom"
      id="features"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[20%] w-[150px] h-[150px] rounded-lg bg-[#00ffa5] blur-[100px] opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[20%] w-[200px] h-[200px] rounded-lg bg-[#0066ff] blur-[120px] opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-2 text-center leading-tight">
          Futuristic solutions designed for tomorrow.
        </h2>
      </div>

      <div className="relative z-10 p-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Scrollbar]}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="mb-8">
              <motion.div
                className="p-8 bg-gradient-to-br from-primaryColor/5 to-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-primaryColorLight/20 hover:scale-105 transition-transform duration-300 min-h-[300px]"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: feature.delay }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
