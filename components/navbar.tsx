"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { findUsLink } from "@/constants/links";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MENU_LIST = [
    { name: "About", href: "#about" },
    { name: "The Challenge", href: "#challenge" },
    { name: "Roadmap", href: "#roadmaps" },
    { name: "FAQ", href: "#faq" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#070710] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/OBS.png" alt="Logo" className="h-12 w-12" />
            <span className="text-lg font-bold">Obscura</span>
          </Link>
        </div>

        {/* Menu and Button Container (Right Aligned) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {MENU_LIST.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primaryColor transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => window.open("/", "_blank", "noopener,noreferrer")}
            variant="outline"
            className="text-white rounded-lg !border-none !bg-primaryColor px-6 py-2 font-extrabold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primaryColorLight/20"
          >
            $OBS
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#070710]/90 shadow-md flex flex-col items-center gap-4 py-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {MENU_LIST.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primaryColor transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={() => window.open("/", "_blank", "noopener,noreferrer")}
              variant="outline"
              className="rounded-lg w-full max-w-xs !border-none !bg-primaryColor text-black px-6 py-2 font-extrabold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primaryColorLight/20"
            >
              $OBS
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
