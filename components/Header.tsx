import React from "react";
import { Menu, X } from "lucide-react"; // Import icon untuk menu dan close
import Image from "next/image";

interface HeaderProps {
  isMenuOpen: boolean; // Tipe untuk isMenuOpen
  setIsMenuOpen: (value: boolean) => void; // Tipe untuk setIsMenuOpen
}

// Ubah warna utama menjadi solid
const primaryColor = "#FF003A"; // Solid color #FF003A
const textColor = "text-white"; // Warna teks

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header
      className={`fixed top-0 w-full bg-black/20 backdrop-blur-2xl border-b border-red-400/40 z-50 transition-all duration-500 shadow-2xl shadow-red-500/10 ${
        typeof window !== "undefined" && window.scrollY > 50
          ? "bg-black/40 border-red-400 shadow-red-500/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative group">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-red-500/50 hover:shadow-orange-500/50 transition-all duration-500`}
              >
                <Image
                  src="/vpn.png" // Path to the image in the public folder
                  alt="Anonium logo"
                  width={48} // Set width appropriately (for example, 48px)
                  height={48} // Set height accordingly (for example, 48px)
                  className="object-contain z-10 drop-shadow-lg"
                />
                <div
                  className={`absolute inset-0 bg-${primaryColor} animate-pulse opacity-75`}
                ></div>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50 flex items-center justify-center z-50">
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1
                className={`text-xl sm:text-2xl lg:text-3xl font-black text-[${primaryColor}] drop-shadow-2xl`}
              >
                Anonium
              </h1>
              <div className="text-white text-xs sm:text-sm text-red-400 font-mono tracking-wider drop-shadow-lg">
                v1.0 SECURE
              </div>
            </div>
          </div>

          {/* Updated Navigation for Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 ml-auto">
            {["Home", "About", "Benefits", "Roadmap"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-white hover:text-[#FF003A] transition-all duration-300 relative group font-semibold text-lg drop-shadow-lg`}
              >
                {item}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-1 bg-[${primaryColor}] group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-red-400/50`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm p-3 rounded-xl border border-[#FF003A] hover:border-red-400/50 transition-all duration-300 shadow-lg shadow-red-500/20"
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
      </div>
      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-[#FF003A] shadow-2xl shadow-red-500/20">
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 text-center">
            {["Home", "About", "Benefits", "Roadmap"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block ${textColor} hover:text-red-400 transition-all duration-300 font-semibold text-xl drop-shadow-lg border-b border-gray-800/50 pb-4 hover:border-red-500/50`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
