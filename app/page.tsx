"use client";
import { useEffect, useState } from "react";
// import { Hero } from "@/components/hero";
import FootballBettingAI from "@/components/neuropredict";
// import { Features2 } from "@/components/features2";

// import { RoadmapSection } from "@/components/roadmaps";
// import { Tokenomics } from "@/components/tokenomics";
// import { FaqSection } from "@/components/FAQ2";
// import { Footer } from "@/components/footer";
import { useIsMounted } from "@/hooks/useMounted";
import { CustomLoading } from "@/components/loader";
// import AboutObscura from "@/components/aboutObscura";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);
  if (isMounted && isLoaded) {
    return (
      <div className="relative bg-[#070710]">
        <FootballBettingAI />
        {/* <Hero /> */}
        {/* <AboutObscura /> */}
        {/* <Features2 /> */}
        {/* <RoadmapSection /> */}
        {/* <Tokenomics /> */}
        {/* <FaqSection /> */}
        {/* <Footer /> */}
      </div>
    );
  } else {
    return (
      <div className="homepage-container">
        <CustomLoading />
      </div>
    );
  }
}
