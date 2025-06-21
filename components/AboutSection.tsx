import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Activity, Wallet, Lock, Globe } from "lucide-react"; // Icons to be used

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

const AboutSection = () => {
  const cryptoFeatures = [
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff003a]" />,
      title: "Global Server Access",
      description:
        "Connect to servers in over 50 countries for versatile access.",
      bg: "bg-gradient-to-br from-[#ff003a]/20 to-black/35",
    },
    {
      icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff003a]" />,
      title: "Top-Level Security",
      description: "End-to-end encryption ensures your data remains secure.",
      bg: "bg-gradient-to-br from-[#ff003a]/20 to-black/35",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff003a]" />,
      title: "Complete Privacy",
      description: "Surf the web anonymously without leaving a trace.",
      bg: "bg-gradient-to-br from-[#ff003a]/20 to-black/35",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff003a]/10 to-black-500/10 backdrop-blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal direction="up" delay={200} retrigger={true}>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl">
              <span className="text-[#ff003a] font-bold">THE FUTURE</span>
              <br />
              <span className="text-white drop-shadow-2xl">
                OF ONLINE PRIVACY
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto drop-shadow-lg px-4">
              We&lsquo;re not just providing a VPN – we&lsquo;re revolutionizing
              your online privacy through
              <span className="text-[#ff003a] font-bold">
                {" "}
                decentralized technology
              </span>{" "}
              and{" "}
              <span className="text-[#ff003a] font-bold">
                robust security protocols
              </span>
              .
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <Connectivity className="block lg:hidden" />

          <ScrollReveal direction="left" delay={400} retrigger={true}>
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
                Global Network for
                <span className="block text-[#ff003a] ">Secure Browsing</span>
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed drop-shadow-lg">
                Our VPN service connects you to a global network of servers,
                ensuring smooth access to content, no matter where you are in
                the world.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed drop-shadow-lg">
                With our fast and reliable connections, explore the internet
                freely while protecting your identity and data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {cryptoFeatures.map((feature, index) => (
                  <ScrollReveal
                    key={index}
                    direction="left"
                    delay={400 + index * 100} // Stagger animations slightly
                    retrigger={true}
                  >
                    <div
                      className={`${feature.bg} backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 text-center hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col h-full`}
                    >
                      <div className="text-[#ff003a] mb-2 flex justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="text-white font-bold text-xs sm:text-sm mb-2 drop-shadow-lg">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed drop-shadow-lg">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Connectivity className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

const Connectivity = ({ className }: { className?: string | undefined }) => (
  <ScrollReveal
    direction="right"
    delay={800}
    retrigger={true}
    className={className}
  >
    <div className="relative">
      <div className="bg-gradient-to-br from-[#ff003a]/20 via-black-500/20 to-black-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-[#ff003a]/30 relative overflow-hidden shadow-2xl shadow-[#ff003a]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff003a]/10 to-black-500/10 animate-pulse"></div>

        <div className="relative z-10 text-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative">
            <div className="w-full h-full bg-gradient-to-r from-[#ff003a] to-black-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse shadow-2xl shadow-red-500/50">
              <Image
                src="/vpn.png"
                alt="vpn"
                width={40}
                height={40}
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-black animate-pulse" />
            </div>
          </div>

          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Global Connectivity
          </h4>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed drop-shadow-lg">
            Connecting you to thousands of servers worldwide for the most
            reliable and secure browsing experience.
          </p>

          <div className="bg-[#ff003a]/30 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <div className="text-green-400 mb-2">$ Network Status</div>
            <div className="text-red-400 mb-1">Servers Online: 6/107</div>
            <div className="text-black-400 mb-1">
              Connection Speed: 98.7 Mbps
            </div>
            <div className="text-pink-400">Users Connected: 0</div>
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

export default AboutSection;
