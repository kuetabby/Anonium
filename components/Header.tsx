import React from "react";
import { Menu, X } from "lucide-react"; // Use Lock icon representing security and VPN
import Image from "next/image";

interface HeaderProps {
  isMenuOpen: boolean; // Define the type for isMenuOpen
  setIsMenuOpen: (value: boolean) => void; // Define the type for setIsMenuOpen
}

// Define color variables for easy updates
const primaryGradient = "from-[#b6066e] to-[#b6066e]"; // Gradient using #b6066e (you can change to a more complex gradient if needed)
const textColor = "text-white"; // Text color

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
                  className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} animate-pulse opacity-75`}
                ></div>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50 flex items-center justify-center z-50">
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1
                className={`text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r ${primaryGradient} bg-clip-text text-white drop-shadow-2xl`}
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
            {/* Added ml-auto to align items to the right */}
            {["Home", "About", "Benefits", "Roadmap"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-white hover:text-[#b6066e] transition-all duration-300 relative group font-semibold text-lg drop-shadow-lg`}
              >
                {item}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r ${primaryGradient} group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-red-400/50`}
                ></span>
              </a>
            ))}
            {/* Uncomment to enable Subscribe Now button */}
            {/* <button
              className={`bg-gradient-to-r ${primaryGradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110 font-bold text-sm sm:text-lg relative overflow-hidden group shadow-xl shadow-orange-500/30`}
            >
              <span className="relative z-10 drop-shadow-lg flex items-center gap-2">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Subscribe Now</span>
                <span className="sm:hidden">Subscribe</span>
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </button> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm p-3 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 shadow-lg shadow-red-500/20"
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
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-red-500/30 shadow-2xl shadow-red-500/20">
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
            {/* Uncomment to enable Subscribe Now button */}
            {/* <button
              className={`w-full bg-gradient-to-r ${primaryGradient} text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-red-500/30 hover:shadow-orange-500/50 transition-all duration-500 flex items-center justify-center gap-3`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Wallet className="w-5 h-5" />
              Subscribe Now
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
