"use client";

export const Contact = () => {
  // Define animation variants
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <section
      className="relative mx-4 sm:mx-8 lg:mx-32 p-4 sm:p-6 lg:p-8"
      id="contact"
    >
      {/* Background Image */}
      <div
        className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] flex items-center justify-start"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-[#070710] bg-opacity-30" />
        {/* <motion.div
          className="relative z-10 p-4 sm:p-8 text-white max-w-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Get started with <br /> Obscura
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Obscura turns your words into stunning visuals— effortlessly and
            instantly
          </p>
          <Button
            variant="outline"
            className="rounded-lg !border-none text-black"
          >
            Get Started
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};
