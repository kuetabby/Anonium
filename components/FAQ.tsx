"use client";

import { motion } from "framer-motion";

export const FAQ = () => {
  const FAQ_LIST = [
    {
      question: "What is Obscura?",
      answer:
        "Obscura is a decentralized platform that combines AI-driven solutions with blockchain technology. It offers an AI marketplace for users to discover, purchase, and deploy AI models, alongside decentralized physical infrastructure (DePIN) to bridge digital and physical worlds.",
    },
    {
      question: "Can I integrate Obscura with my existing systems?",
      answer:
        "Yes, Obscura is designed to integrate seamlessly with existing workflows and technologies. Its cross-industry applications and scalable AI agents make it an ideal solution for enhancing and optimizing your current systems.",
    },
    {
      question: "What makes Obscura different from other AI platforms?",
      answer:
        "Obscura stands out with its decentralized, blockchain-based architecture, offering unmatched security, transparency, and user control. Its combination of an AI marketplace and DePIN enables users to access both digital and physical solutions, creating a fully integrated experience.",
    },
    {
      question: "How is governance handled on Obscura?",
      answer:
        "Obscura operates under a decentralized governance model. The community of users and creators plays an integral role in decision-making processes, such as voting on platform upgrades, new features, or changes to the marketplace.",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative bg-[#070710] text-white mx-4 sm:mx-8 my-24 sm:my-48 p-6 lg:p-24 rounded-3xl"
      id="faq"
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl lg:text-6xl font-bold mb-8 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Find answers to common questions about Obscura, including platform
        features, integrations, and governance.
      </motion.p>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {FAQ_LIST.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
          >
            {/* Question Number */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-primaryColor">{`0${
                index + 1
              }`}</div>
              <h3 className="text-xl font-semibold text-white">
                {item.question}
              </h3>
            </div>
            {/* Answer */}
            <p className="text-gray-400">{item.answer}</p>
            {/* Divider */}
            <div className="mt-4 h-[1px] w-full bg-primaryColor"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
