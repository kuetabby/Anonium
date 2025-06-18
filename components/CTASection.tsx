import React, { useEffect, useRef, useState } from "react";

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
}; // Assuming you have a ScrollReveal component
import { Lock, ArrowRight, Shield, Star, Wallet, Zap } from "lucide-react"; // Import icons for toggling state

const CTASection = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="scale" delay={200}>
        <div className="max-w-4xl sm:max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-16 border border-cyan-500/30 relative overflow-hidden shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 animate-pulse"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
                <span className="text-white">READY TO</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  TRANSCEND?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto drop-shadow-lg px-4">
                Join the revolution and start earning with the most advanced
                AI-powered football predictions in the decentralized universe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
                <button className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-purple-500/30">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                    <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">
                      Connect Wallet & Start
                    </span>
                    <span className="sm:hidden">Start Now</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <button className="group border-2 border-cyan-500/50 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm shadow-xl shadow-cyan-500/20">
                  <span className="flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Read Whitepaper</span>
                    <span className="sm:hidden">Whitepaper</span>
                  </span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Audited Smart Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Zero-Knowledge Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Lightning Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
