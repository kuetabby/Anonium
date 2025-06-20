import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Activity, ArrowRight, Play, Newspaper } from "lucide-react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

// Custom hook for scroll animation
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

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const stats = [
    {
      label: "Amazon Web Service",
      img: "/awscloud.png",
    },
    {
      label: "Microsoft Azure",
      img: "/azurecloud.png",
    },
    {
      label: "Google Cloud",
      img: "/gcloud.png",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            autoPlay
            playsInline
            loop
            muted
            src="/bg-hero.mp4"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <ScrollReveal direction="scale" delay={200} retrigger={true}>
              <div className="inline-flex items-center bg-[#FF003A]/50 backdrop-blur-sm border border-black rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-2 animate-pulse" />
                <span className="text-white font-mono text-xs sm:text-sm">
                  YOUR CONNECTION UNPROTECTED
                </span>
                <div className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-white">UNLOCK</span>
                <br />
                <span className="text-[#FF003A]">YOUR ONLINE PRIVACY</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto">
                <span className="text-[#FF003A] font-bold">Safeguard</span> your
                digital footprint with
                <span className="text-[#FF003A] font-bold">
                  {" "}
                  top-notch VPN
                </span>{" "}
                solutions for unparalleled security!
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <p className="text-sm sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                Enjoy fast, secure, and reliable connections that provide you
                the freedom to explore the web with confidence.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
              <Link href={`#pricing`}>
                <Button className="group bg-[#FF003A] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:shadow-md transition-all duration-500 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    {/* <Play className="w-5 h-5 sm:w-6 sm:h-6" /> */}
                    Get AnoniumVPN
                    {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" /> */}
                  </span>
                </Button>
              </Link>

              <button className="group border-2 border-[#FF003A] text-[#FF003A] bg-transparent px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-black hover:shadow-md transition-all duration-500 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">Documentation</span>
                  <span className="sm:hidden">Docs</span>
                </span>
              </button>
            </div>
          </ScrollReveal>

          <div className="h-14" />

          {/* Stats */}
          <h1 className="text-4xl font-bold mt-10 mb-6 sm:mb-8 relative">
            Powered By
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 ">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                direction="scale"
                delay={500 + index * 100}
                retrigger={true}
              >
                <div
                  className={`relative group flex flex-col h-full ${
                    index === stats.length - 1
                      ? "sm:col-start-1 sm:col-span-2"
                      : ""
                  }`} // Center last item on sm
                >
                  <div className="flex flex-wrap items-baseline sm:justify-evenlybg-gradient-to-br from-[#ff003a]/20 to-black-500/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border-2 border-[#ff003a] transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-lg h-[150px] flex-col justify-center hover:shadow-2xl hover:shadow-[#ff003a]">
                    <Image
                      src={stat.img}
                      alt={stat.label}
                      width={50}
                      height={40}
                      className="mx-auto"
                    />
                    <div className="w-full mt-4 text-white font-medium drop-shadow-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
