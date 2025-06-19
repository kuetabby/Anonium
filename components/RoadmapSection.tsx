import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const useScrollAnimation = (threshold = 0.1, retrigger = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (retrigger) {
          setIsVisible(entry.isIntersecting);
        } else {
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

const roadmapItems = [
  {
    quarter: "Q3 2025",
    plan: [
      {
        description: "Launch Anonium VPN",
        status: "upcoming",
      },
      {
        description: "Add DNS Leak Protection and Automatic Disconnect",
        status: "upcoming",
      },
      {
        description: "Partner with cloud services",
        status: "upcoming",
      },
      {
        description: "Expand servers to over 50 global locations",
        status: "upcoming",
      },
      {
        description: "Roll out multi-device support",
        status: "upcoming",
      },
    ],
    // crypto: "Foundation and Security",
  },
  {
    quarter: "Q4 2025",
    plan: [
      {
        description: "Community Engagement",
        status: "upcoming",
      },
      {
        description: "Improve cross-platform compatibility",
        status: "upcoming",
      },
      {
        description:
          "Add premium features like dedicated IPs and faster speeds",
        status: "upcoming",
      },
      {
        description: "Release mobile apps for Android and iOS",
        status: "upcoming",
      },
    ],
    // crypto: "Multi-Device Support and Expansion",
  },
  {
    quarter: "Q1 2026",
    plan: [
      {
        description:
          "Engage with the community through events and privacy education",
        status: "upcoming",
      },
      {
        description: "Introduce decentralized VPN nodes",
        status: "upcoming",
      },
      {
        description: "Add peer-to-peer encryption",
        status: "upcoming",
      },
      {
        description: "Focus on decentralized data storage",
        status: "upcoming",
      },
    ],
    // crypto: "Decentralization and Enhanced Privacy",
  },
  {
    quarter: "Q2 2026",
    plan: [
      {
        description:
          "Engage the community through user-driven content, feedback loops, and collaborations",
        status: "upcoming",
      },
      {
        description: "Introduce advanced routing",
        status: "upcoming",
      },
      {
        description: "Implement a decentralized DNS",
        status: "upcoming",
      },
      {
        description: "Expand into decentralized apps and web3 integration",
        status: "upcoming",
      },
      {
        description:
          "Grow Anonium with revenue sharing and strategic partnerships",
        status: "upcoming",
      },
    ],
    // crypto: "AI Integration, Future Growth, and Revenue Share",
  },
];

const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal direction="up" delay={200} retrigger={true}>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
              <span className="text-[#ff003a]">VPN ROADMAP</span>
              <br />
              <span className="text-white drop-shadow-2xl">
                TO A SECURE FUTURE
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Follow our journey as we build the most secure and privacy-focused
              VPN experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff003a] to-black-500 rounded-full opacity-70"></div>

          <div className="space-y-8 sm:space-y-16">
            {roadmapItems.map((item, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={400 + index * 200}
                retrigger={true}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="sm:hidden w-full pl-12">
                    <div className="group bg-transparent backdrop-blur-md rounded-2xl p-6 border border-[#ff003a] transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-black/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff003a]/20 to-black-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-red-300 font-bold text-sm font-mono">
                            {item.quarter}
                          </span>
                          {/* <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            {item.crypto}
                          </span> */}
                        </div>

                        {item.plan.map((item, i) => (
                          <div className="flex items-start gap-3 mb-4" key={i}>
                            {" "}
                            {/* Change to items-start for top alignment */}
                            {/* Completed Status - Green Circle */}
                            {item.status === "completed" && (
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                            )}
                            {/* Current Status - Animated Yellow Circle */}
                            {item.status === "current" && (
                              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse flex-shrink-0"></div>
                            )}
                            {/* Upcoming Status - Gray Circle */}
                            {item.status === "upcoming" && (
                              <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0"></div>
                            )}
                            <p className="text-sm text-white drop-shadow-lg">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className={`hidden sm:block w-full lg:w-5/12 ${
                      index % 2 === 0 ? "pr-8" : "pl-8"
                    }`}
                  >
                    <div className="group bg-transparent backdrop-blur-md rounded-3xl p-8 border border-[#ff003a] transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-black/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff003a]/20 to-black-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-red-300 font-bold text-lg font-mono">
                            {item.quarter}
                          </span>
                          {/* <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {item.crypto}
                          </span> */}
                        </div>

                        {item.plan.map((item, i) => (
                          <div className="flex items-start gap-3 mb-4" key={i}>
                            {" "}
                            {/* Change to items-start for top alignment */}
                            {/* Completed Status - Green Circle */}
                            {item.status === "completed" && (
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                            )}
                            {/* Current Status - Animated Yellow Circle */}
                            {item.status === "current" && (
                              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse flex-shrink-0"></div>
                            )}
                            {/* Upcoming Status - Gray Circle */}
                            {item.status === "upcoming" && (
                              <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0"></div>
                            )}
                            <p className="font-bold text-white drop-shadow-lg">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#ff003a] to-black-500 rounded-full border border-black flex items-center justify-center shadow-lg">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
