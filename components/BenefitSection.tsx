import React, { useEffect, useRef, useState } from "react";
import { Lock, Globe, Shield, Users, CheckCircle } from "lucide-react"; // VPN relevant icons

const useScrollAnimation = (threshold = 0.1, retrigger = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (retrigger) {
          // Re-trigger animation every time the element enters/exits the viewport
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

const features = [
  {
    icon: <Lock className="w-8 h-8 text-white" />,
    title: "Military-Grade Encryption",
    description:
      // "Experience top-tier security with AES-256 encryption for complete online privacy.",
      "Stay secure with AES-256 encryption, keeping your data private at all times.",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Global Server Access",
    description:
      // "Connect to a worldwide network of servers across over 50 countries seamlessly.",
      "Connect easily to servers in over 50 countries for fast and unrestricted browsing.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "No-Logs Policy",
    description:
      // "Your online activities are never stored or tracked, ensuring maximum privacy.",
      "Your online activities are never tracked or stored, ensuring complete privacy.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Multi-Device Support",
    description:
      // "Use the VPN on all your devices simultaneously, from smartphones to desktops.",
      "Protect all your devices including smartphones, desktops, and more simultaneously.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Automatic Kill Switch",
    description:
      // "Your data remains safe even if the VPN connection drops unexpectedly.",
      "Your data stays safe even if the VPN connection unexpectedly drops.",
  },
  {
    icon: <Lock className="w-8 h-8 text-white" />, // Reusing Lock icon for consistency
    title: "DNS Leak Protection",
    description:
      // "Ensure your DNS queries are securely routed, preventing data leaks and enhancing your privacy.",
      "Prevent data leaks and keep your DNS queries secure to improve privacy.",
  },
];

const BenefitSection = () => {
  return (
    <section
      id="benefits"
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={200} retrigger={true}>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-white drop-shadow-2xl">
              <span className="text-white">Anonium</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                BENEFITS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              {/* Discover the cutting-edge features that keep you secure online. */}
              Explore the benefits that keep you secure online
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={400 + index * 200}
              retrigger={true}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-red-500 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-lg md:h-72 flex flex-col justify-center hover:shadow-2xl hover:shadow-red-500">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed drop-shadow-lg text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
