import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react"; // Import icons for toggling state

const faqData = [
  {
    question: "What is a VPN and how does it work?",
    answer:
      "A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, enhancing your online privacy and security. It routes your internet traffic through a secure server, making it appear as though you're accessing the internet from that server’s location.",
  },
  {
    question: "Is using a VPN legal?",
    answer:
      "Yes, using a VPN is legal in most countries. However, some countries have restrictions or regulations regarding VPN usage. Always make sure to comply with your local laws regarding internet usage.",
  },
  {
    question: "Can a VPN help me access blocked websites?",
    answer:
      "Yes, a VPN can allow you to bypass geographic restrictions by masking your IP address and presenting it as if you are accessing the internet from a different location. This enables access to content that may be blocked in your region.",
  },
  {
    question: "Will a VPN slow down my internet connection?",
    answer:
      "Using a VPN may result in a slight decrease in internet speed due to additional encryption and routing processes. However, many top-tier VPN services, like Anonium VPN, optimize their servers to minimize speed loss and can even improve speeds for certain activities.",
  },
  {
    question: "Can I use VPN on multiple devices?",
    answer:
      "Yes, Anonium VPN supports multiple devices, allowing you to use the service on smartphones, tablets, laptops, and desktops simultaneously using a single account.",
  },
  {
    question: "What protocols does Anonium VPN use for security?",
    answer:
      "Anonium VPN uses advanced security protocols such as OpenVPN, IKEv2/IPSec, and WireGuard, which offer strong encryption and are highly effective in protecting user data.",
  },
  {
    question: "How do I install and set up Anonium VPN?",
    answer:
      "To set up Anonium VPN, simply download the application for your device from our website, install it, and log in using your account credentials. From there, you can select a server and connect instantly.",
  },
  {
    question: "What should I do if I encounter issues while using Anonium VPN?",
    answer:
      "If you experience any issues, please visit our support page for troubleshooting steps. You can also reach out to our customer support team via live chat or email for prompt assistance.",
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

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 backdrop-blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal direction="up" delay={200} retrigger={true}>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                FREQUENTLY
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">
                ASKED QUESTIONS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Everything you need to know about Anonium VPN&apos;s features and
              benefits.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={400 + index * 100}
              retrigger={true}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 hover:border-red-400 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-red-400/10 transition-all duration-300 group"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg group-hover:text-red-400 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  >
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-red-300 to-orange-300 mb-4 sm:mb-6"></div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed drop-shadow-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ CTA */}
        <ScrollReveal direction="up" delay={800} retrigger={true}>
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-red-500/20 shadow-xl shadow-red-500/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 drop-shadow-lg">
                Join our community Telegram for real-time support and
                discussions with other Anonium VPN users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Telegram Community
                </button>
                <button className="border-2 border-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-red-500/10 hover:border-red-400 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
