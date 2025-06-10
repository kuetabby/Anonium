import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Users,
  Calendar,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Star,
  Zap,
  BarChart3,
  Cpu,
  Database,
  Globe,
  Coins,
  Wallet,
  Lock,
  Layers,
  Activity,
  Plus,
  Minus,
} from "lucide-react";

// Enhanced Intersection Observer with re-trigger capability
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

const FootballBettingAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Network Predictions",
      description:
        "Advanced deep learning models trained on blockchain-verified match data for unprecedented accuracy.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Computing Power",
      description:
        "Leverage quantum-inspired algorithms to process infinite variables and market conditions instantly.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Decentralized Data Oracles",
      description:
        "Immutable data feeds from multiple blockchain oracles ensure prediction integrity and transparency.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Chain Integration",
      description:
        "Seamlessly bet across multiple blockchain networks with automated liquidity optimization.",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  const cryptoFeatures = [
    {
      icon: <Coins className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multi-Token Support",
      description: "Bet with BTC, ETH, USDT, BNB, and 50+ cryptocurrencies",
      bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "DeFi Integration",
      description: "Stake your winnings in yield farming protocols",
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Zero-Knowledge Proofs",
      description: "Private betting with cryptographic privacy protection",
      bg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    },
  ];

  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "AI Core Launch + Token Generation",
      description:
        "Deploy smart contracts on Ethereum mainnet with $PREDICT utility token",
      status: "completed",
      crypto: "ETH Integration",
    },
    {
      quarter: "Q3 2025",
      title: "Cross-Chain Expansion",
      description:
        "Bridge to Polygon, BSC, and Solana for lower fees and faster transactions",
      status: "current",
      crypto: "Multi-Chain",
    },
    {
      quarter: "Q4 2025",
      title: "DAO Governance Launch",
      description:
        "Community-driven prediction model improvements and tokenomics",
      status: "upcoming",
      crypto: "Governance Token",
    },
    {
      quarter: "Q1 2026",
      title: "Metaverse Integration",
      description:
        "Virtual reality betting experiences in Web3 gaming platforms",
      status: "upcoming",
      crypto: "NFT Rewards",
    },
  ];

  const stats = [
    {
      number: "92%+",
      label: "AI Accuracy Rate",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "$50M+",
      label: "TVL Locked",
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "150K+",
      label: "Token Holders",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "25+",
      label: "Blockchain Networks",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const faqData = [
    {
      question: "How does NeuroPredict's AI algorithm work?",
      answer:
        "Our quantum-inspired neural network processes over 10,000 variables per match, including player statistics, team performance, weather conditions, historical data, and real-time market sentiment. The AI is trained on 15 years of blockchain-verified football data with continuous learning capabilities.",
    },
    {
      question: "Which cryptocurrencies can I use for betting?",
      answer:
        "NeuroPredict supports 50+ cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, BNB, MATIC, SOL, and our native $PREDICT token. You can also stake your winnings in DeFi protocols for additional yield.",
    },
    {
      question: "Is NeuroPredict legal and regulated?",
      answer:
        "NeuroPredict operates as a decentralized protocol on blockchain networks. Users are responsible for complying with their local gambling and cryptocurrency regulations. Our smart contracts are audited by leading security firms and published on-chain for transparency.",
    },
    {
      question: "How accurate are the AI predictions?",
      answer:
        "Our AI maintains a 92%+ accuracy rate across major football leagues. However, sports betting always involves risk, and past performance doesn't guarantee future results. We recommend responsible betting and never wagering more than you can afford to lose.",
    },
    {
      question: "What are gas fees and network costs?",
      answer:
        "Gas fees vary by blockchain network. Ethereum mainnet has higher fees but maximum security, while Layer 2 solutions like Polygon offer near-zero fees. We're integrated across 25+ networks so you can choose based on your preferences.",
    },
    {
      question: "How do I earn $PREDICT tokens?",
      answer:
        "You can earn $PREDICT tokens through successful predictions, liquidity provision, DAO participation, referrals, and staking rewards. Token holders also get governance rights and access to premium AI models.",
    },
    {
      question: "Is my data and betting history private?",
      answer:
        "Yes, we use zero-knowledge proofs to ensure your betting patterns and personal data remain completely private. Only you can see your full betting history, while the blockchain only stores encrypted transaction hashes.",
    },
    {
      question: "When will the mobile app be released?",
      answer:
        "Our iOS and Android apps are scheduled for Q4 2025. The apps will feature push notifications for live predictions, one-tap betting, and seamless wallet integration. Join our Discord for beta testing opportunities.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 sm:opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </svg>

        {/* Mouse Follower Gradient */}
        <div
          className="absolute w-48 h-48 sm:w-96 sm:h-96 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - (window.innerWidth < 640 ? 96 : 192),
            top: mousePosition.y - (window.innerWidth < 640 ? 96 : 192),
          }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full bg-black/20 backdrop-blur-2xl border-b border-cyan-500/30 z-50 transition-all duration-500 shadow-2xl shadow-cyan-500/10 ${
          scrollY > 50
            ? "bg-black/40 border-cyan-400/50 shadow-cyan-500/20"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5 lg:py-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-500">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white z-10 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse opacity-75"></div>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                  NeuroPredict
                </h1>
                <div className="text-xs sm:text-sm text-cyan-400 font-mono tracking-wider drop-shadow-lg">
                  v3.0 QUANTUM
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {["Home", "About", "Features", "Roadmap", "FAQ"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-cyan-400 transition-all duration-300 relative group font-semibold text-lg drop-shadow-lg"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-cyan-400/50"></span>
                  </a>
                )
              )}
              <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-110 font-bold text-sm sm:text-lg relative overflow-hidden group shadow-xl shadow-purple-500/30">
                <span className="relative z-10 drop-shadow-lg flex items-center gap-2">
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Connect Wallet</span>
                  <span className="sm:hidden">Connect</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm p-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 drop-shadow-lg" />
              ) : (
                <Menu className="w-6 h-6 drop-shadow-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 text-center">
              {["Home", "About", "Features", "Roadmap", "FAQ"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-cyan-400 transition-all duration-300 font-semibold text-xl drop-shadow-lg border-b border-gray-800/50 pb-4 hover:border-cyan-500/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button
                className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-purple-500/50 transition-all duration-500 flex items-center justify-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <ScrollReveal direction="scale" delay={200} retrigger={true}>
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mr-2 animate-pulse" />
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm">
                    NEURAL NETWORK ACTIVE
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 sm:mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-2xl filter drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    NEURO
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl filter drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
                    PREDICT
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto drop-shadow-xl">
                  <span className="text-cyan-400 font-bold drop-shadow-lg">
                    AI-Powered
                  </span>{" "}
                  Football Predictions Meet
                  <span className="text-purple-400 font-bold drop-shadow-lg">
                    {" "}
                    Blockchain
                  </span>{" "}
                  Technology
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={800}>
                <p className="text-sm sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto drop-shadow-lg px-4">
                  Leverage quantum-inspired algorithms and decentralized oracles
                  for the most accurate football betting predictions in the
                  multiverse.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
                <button className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-110 relative overflow-hidden shadow-2xl shadow-purple-500/30">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                    <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
                    Launch dApp
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <button className="group border-2 border-cyan-500/50 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-cyan-500/20">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-lg">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">View Whitepaper</span>
                    <span className="sm:hidden">Whitepaper</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </ScrollReveal>

            {/* Stats with Better Mobile Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal
                  key={index}
                  direction="scale"
                  delay={1200 + index * 100}
                  retrigger={true}
                >
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40">
                      <div className="text-cyan-400 mb-2 flex justify-center drop-shadow-lg">
                        {stat.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2 drop-shadow-2xl filter drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 font-medium text-xs sm:text-sm drop-shadow-lg">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 backdrop-blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative">
            <ScrollReveal direction="up" delay={200} retrigger={true}>
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl filter drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    THE FUTURE
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl">
                    OF SPORTS BETTING
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto drop-shadow-lg px-4">
                  We're not just predicting football matches – we're
                  revolutionizing the entire sports betting ecosystem through
                  <span className="text-cyan-400 font-bold">
                    {" "}
                    decentralized AI
                  </span>{" "}
                  and{" "}
                  <span className="text-purple-400 font-bold">
                    blockchain technology
                  </span>
                  .
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <ScrollReveal direction="left" delay={400} retrigger={true}>
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
                    Neural Network Meets
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Decentralized Finance
                    </span>
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed drop-shadow-lg">
                    Our quantum-inspired AI processes billions of data points
                    from multiple blockchain oracles, social sentiment analysis,
                    and real-time market conditions to deliver predictions with
                    <span className="text-cyan-400 font-bold">
                      {" "}
                      92%+ accuracy
                    </span>
                    .
                  </p>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed drop-shadow-lg">
                    Built on Ethereum with cross-chain compatibility,
                    NeuroPredict enables seamless betting across multiple
                    networks while maintaining complete transparency through
                    smart contracts and zero-knowledge proofs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                    {cryptoFeatures.map((feature, index) => (
                      <ScrollReveal
                        key={index}
                        direction="up"
                        delay={600 + index * 100}
                        retrigger={true}
                      >
                        <div
                          className={`${feature.bg} backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
                        >
                          <div className="text-cyan-400 mb-2 flex justify-center">
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

              <ScrollReveal direction="right" delay={800} retrigger={true}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-cyan-500/30 relative overflow-hidden shadow-2xl shadow-cyan-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>

                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse shadow-2xl shadow-cyan-500/50">
                          <Cpu className="w-8 h-8 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                          <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-black animate-pulse" />
                        </div>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                        Quantum AI Engine
                      </h4>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed drop-shadow-lg">
                        Processing 10,000+ variables per match through our
                        proprietary neural network, trained on 15 years of
                        blockchain-verified football data.
                      </p>

                      <div className="bg-black/30 rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm">
                        <div className="text-green-400 mb-2">
                          $ Neural Network Status
                        </div>
                        <div className="text-cyan-400 mb-1">
                          ├── Models Loaded: 247/247
                        </div>
                        <div className="text-purple-400 mb-1">
                          ├── Accuracy Rate: 92.7%
                        </div>
                        <div className="text-pink-400">
                          └── Predictions Today: 1,847
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal direction="up" delay={200} retrigger={true}>
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
                  <span className="text-white">QUANTUM</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    FEATURES
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
                  Experience the next generation of sports betting with
                  cutting-edge technology and blockchain innovation.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={400 + index * 200}
                  retrigger={true}
                >
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-black/50">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10">
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          {feature.icon}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed drop-shadow-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                    ></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section
          id="roadmap"
          className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative">
            <ScrollReveal direction="up" delay={200} retrigger={true}>
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    ROADMAP
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl">
                    TO THE FUTURE
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
                  Follow our journey as we build the most advanced decentralized
                  sports betting platform in the multiverse.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Mobile: Vertical Line */}
              <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>

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
                        <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-black/50">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-cyan-400 font-bold text-sm font-mono">
                                {item.quarter}
                              </span>
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                {item.crypto}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                              {item.status === "completed" && (
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              )}
                              {item.status === "current" && (
                                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                              )}
                              {item.status === "upcoming" && (
                                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                              )}

                              <h3 className="text-lg font-bold text-white drop-shadow-lg">
                                {item.title}
                              </h3>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed drop-shadow-lg">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div
                        className={`hidden sm:block w-full lg:w-5/12 ${
                          index % 2 === 0 ? "pr-8" : "pl-8"
                        }`}
                      >
                        <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-2xl shadow-black/50">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-cyan-400 font-bold text-lg font-mono">
                                {item.quarter}
                              </span>
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {item.crypto}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                              {item.status === "completed" && (
                                <CheckCircle className="w-6 h-6 text-green-400" />
                              )}
                              {item.status === "current" && (
                                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                              )}
                              {item.status === "upcoming" && (
                                <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                              )}

                              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                {item.title}
                              </h3>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed drop-shadow-lg">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-2 sm:border-4 border-black flex items-center justify-center shadow-lg">
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>

          <div className="max-w-4xl mx-auto relative">
            <ScrollReveal direction="up" delay={200} retrigger={true}>
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    FREQUENTLY
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl">
                    ASKED QUESTIONS
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg px-4">
                  Everything you need to know about NeuroPredict's AI-powered
                  football betting platform.
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
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg group-hover:text-cyan-400 transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg ${
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
                        <div className="w-full h-px bg-gradient-to-r from-cyan-500/50 to-purple-500/50 mb-4 sm:mb-6"></div>
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
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    Still have questions?
                  </h3>
                  <p className="text-gray-300 mb-6 sm:mb-8 drop-shadow-lg">
                    Join our community Discord for real-time support and
                    discussions with other NeuroPredict users.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Join Discord Community
                    </button>
                    <button className="border-2 border-cyan-500/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm shadow-lg">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
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
                    AI-powered football predictions in the decentralized
                    universe.
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
                        <span className="hidden sm:inline">
                          Read Whitepaper
                        </span>
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

        {/* Enhanced Footer */}
        <footer className="bg-black/60 backdrop-blur-2xl border-t border-cyan-500/30 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 shadow-2xl shadow-cyan-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-span-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                  <div className="relative group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-500">
                      <Brain className="w-6 h-6 sm:w-9 sm:h-9 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50 flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                      NeuroPredict
                    </h3>
                    <div className="text-xs sm:text-sm text-cyan-400 font-mono tracking-wider drop-shadow-lg">
                      v3.0 QUANTUM
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg text-sm sm:text-lg leading-relaxed drop-shadow-lg mx-auto sm:mx-0">
                  The first decentralized AI-powered football prediction
                  platform built on blockchain technology. Revolutionizing
                  sports betting through quantum-inspired algorithms and neural
                  networks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-cyan-500/30 shadow-xl shadow-cyan-500/20 text-center sm:text-left">
                    <div className="text-cyan-400 font-mono text-xs sm:text-sm mb-1 drop-shadow-lg">
                      Smart Contract
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base drop-shadow-lg">
                      0x7d2a...f9c3
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-500/30 shadow-xl shadow-purple-500/20 text-center sm:text-left">
                    <div className="text-purple-400 font-mono text-xs sm:text-sm mb-1 drop-shadow-lg">
                      Network
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base drop-shadow-lg">
                      Ethereum Mainnet
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 drop-shadow-lg text-center sm:text-left">
                  © 2025 NeuroPredict Protocol. Powered by Ethereum & Quantum
                  Computing.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-white font-black mb-4 sm:mb-8 text-lg sm:text-xl drop-shadow-lg">
                  Protocol
                </h4>
                <ul className="space-y-2 sm:space-y-4 text-gray-300">
                  {[
                    "Whitepaper",
                    "Tokenomics",
                    "Smart Contracts",
                    "DAO Governance",
                    "Bug Bounty",
                  ].map((item, index) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-cyan-400 transition-all duration-300 drop-shadow-lg text-sm sm:text-lg font-medium hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-white font-black mb-4 sm:mb-8 text-lg sm:text-xl drop-shadow-lg">
                  Community
                </h4>
                <ul className="space-y-2 sm:space-y-4 text-gray-300">
                  {[
                    { name: "Discord", color: "cyan" },
                    { name: "Telegram", color: "purple" },
                    { name: "Twitter", color: "pink" },
                    { name: "GitHub", color: "green" },
                    { name: "Medium", color: "orange" },
                  ].map((item, index) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className="hover:text-cyan-400 transition-all duration-300 drop-shadow-lg text-sm sm:text-lg font-medium hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] flex items-center justify-center sm:justify-start gap-2"
                      >
                        <div
                          className={`w-2 h-2 bg-${item.color}-400 rounded-full animate-pulse`}
                        ></div>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FootballBettingAI;
