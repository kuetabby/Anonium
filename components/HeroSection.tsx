import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  // Lock,
  // Shield,
  // Users,
  Play,
  // Wallet,
  Newspaper,
} from "lucide-react";

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    console.log(scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    // {
    //   number: "99.9%",
    //   label: "Uptime Guarantee",
    //   icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
    // },
    // {
    //   number: "50+",
    //   label: "Countries Covered",
    //   icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
    // },
    // {
    //   number: "1M+",
    //   label: "Users Worldwide",
    //   icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
    // },
    // {
    //   number: "$100M+",
    //   label: "Secure Transactions",
    //   icon: <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
    // },
  ];

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-black opacity-80"></div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-black opacity-80"></div>
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.5, // Randomize opacity
                }}
              />
            ))}
          </div>
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 sm:opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF003A" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF003A" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF7F00" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </svg>

        {/* Mouse Follower Gradient */}
        <div
          className="absolute w-48 h-48 sm:w-96 sm:h-96 bg-gradient-radial from-red-500/20 via-red-700/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - (window.innerWidth < 640 ? 96 : 192),
            top: mousePosition.y - (window.innerWidth < 640 ? 96 : 192),
          }}
        />
      </div>

      <section
        id="home"
        className="pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <ScrollReveal direction="scale" delay={200} retrigger={true}>
              <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mr-2 animate-pulse" />
                <span className="text-red-400 font-mono text-xs sm:text-sm">
                  VPN CONNECTION UNPROTECTED
                </span>
                <div className="w-2 h-2 bg-red-400 rounded-full ml-2 animate-pulse"></div>
                {/* <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div> */}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent drop-shadow-2xl filter drop-shadow-[0_0_30px_rgba(255,0,58,0.5)]">
                  UNLOCK
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl filter drop-shadow-[0_0_50px_rgba(255,127,0,0.8)]">
                  YOUR ONLINE PRIVACY
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto drop-shadow-xl">
                <span className="text-red-400 font-bold drop-shadow-lg">
                  Safeguard
                </span>{" "}
                your digital footprint with
                <span className="text-orange-400 font-bold drop-shadow-lg">
                  {" "}
                  top-notch VPN
                </span>{" "}
                solutions for unparalleled security!
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <p className="text-sm sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto drop-shadow-lg px-4">
                Enjoy fast, secure, and reliable connections that provide you
                the freedom to explore the web with confidence.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
              <button className="group bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110 relative overflow-hidden shadow-2xl shadow-orange-500/30">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              <button className="group border-2 border-red-400 text-red-400 bg-transparent px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-red-500/10 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 relative overflow-hidden shadow-xl shadow-red-500/20">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                  <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">Documentation</span>
                  <span className="sm:hidden">Docs</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </ScrollReveal>

          {/* Stats with Better Mobile Layout */}
          <h1 className="text-4xl font-black mt-10 mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(255,0,58,0.5)]">
              Powered By
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
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
                  <div className="flex flex-wrap items-baseline sm:justify-evenly bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-red-500/20 hover:border-red-400/50 transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 h-full">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
