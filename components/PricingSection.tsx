import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react"; // Import icons for toggling state

const pricingData = [
  {
    plan: "Basic Plan",
    price: "Free",
    features: [
      "Access to 3 servers",
      "Up to 3 devices simultaneously",
      "Basic security features",
    ],
  },
  {
    plan: "Standard Plan",
    price: "$10.95/month",
    features: [
      "Access to all servers",
      "Up to 5 devices simultaneously",
      "Enhanced security features",
      "Ad-blocker",
      "24/7 customer support",
    ],
  },
  {
    plan: "Premium Plan",
    price: "$18.95/month",
    features: [
      "Access to all servers",
      "Unlimited devices",
      "Top-tier security features",
      "Ad-blocker",
      "Priority support",
    ],
  },
];

const useScrollAnimation = (threshold = 0.1, retrigger = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (retrigger) {
          // Re-trigger animation every time element enters/exits viewport
          setIsVisible(entry.isIntersecting);
        } else {
          // Only trigger once
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, retrigger]);

  return [ref, isVisible] as const;
};

// Enhanced animated wrapper component with re-trigger
const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  retrigger = true,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
  retrigger?: boolean;
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1, retrigger);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translateY(60px)";
        case "down":
          return "translateY(-60px)";
        case "left":
          return "translateX(-60px)";
        case "right":
          return "translateX(60px)";
        case "scale":
          return "scale(0.8)";
        default:
          return "translateY(60px)";
      }
    }
    return "translate(0, 0) scale(1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const PricingSection = () => {
  const [openPricing, setOpenPricing] = useState<number | null>(null);

  const togglePricing = (index: number) => {
    setOpenPricing(openPricing === index ? null : index);
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff003a]/10 to-black-500/10 backdrop-blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal direction="up" delay={200} retrigger={true}>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
              <span className="text-[#ff003a] text-transparent">
                PRICING PLANS
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Flexible pricing options tailored to suit your needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={400 + index * 100}
              retrigger={true}
            >
              <div className="flex flex-wrap items-baseline sm:justify-evenly bg-gradient-to-br from-[#ff003a]/20 to-black-500/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-[#ff003a] transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-lg  flex flex-col justify-center hover:shadow-2xl hover:shadow-[#ff003a] h-full">
                <div className="p-6 text-center flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.plan}
                  </h3>
                  <span className="text-xl font-semibold text-[#ff003a]">
                    {plan.price}
                  </span>
                  <div className="mt-4 mb-6 w-full h-px bg-gradient-to-r from-red-300 to-black-300"></div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Features:
                    </h4>
                    <ul className="text-gray-300">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center mb-1"
                        >
                          <Plus className="w-4 h-4 text-[#ff003a] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  //   onClick={() => togglePricing(index)}
                  className="w-full px-6 py-3 text-center text-white bg-[#ff003a] rounded-b-lg hover:opacity-80 transition-opacity duration-300"
                >
                  {/* {openPricing === index ? "Hide Details" : "View Details"} */}
                  Subscribe Now
                </button>
                {/* <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openPricing === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-4 text-gray-300">
                   
                    Expandable details will show here.
                  </div>
                </div> */}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing CTA */}
        {/* <ScrollReveal direction="up" delay={800} retrigger={true}>
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#ff003a]/20 shadow-xl shadow-[#ff003a]/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Ready to get started?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 drop-shadow-lg">
                Choose a plan that fits your needs and enjoy secure browsing
                today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#ff003a] to-black-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl hover:shadow-[#ff003a]/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-[#ff003a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-[#ff003a]/10 hover:border-red-400 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default PricingSection;
