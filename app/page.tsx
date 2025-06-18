"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeatureSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Tokenomics from "@/components/Tokenomics";
import Loader from "@/components/Loader/index";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to control the loading

  useEffect(() => {
    // Simulate a loading delay, for example, fetching data
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />; // Change to the loader you prefer
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Tokenomics />
      <RoadmapSection />
      <FAQSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Page;
