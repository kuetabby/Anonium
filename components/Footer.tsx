import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa"; // Telegram and Twitter icons
import { RiFilePaperFill } from "react-icons/ri"; // Whitepaper icon
import Image from "next/image";
const primaryGradient = "from-[#b6066e] to-black-500";

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-2xl border-t border-[#b6066e]/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 shadow-2xl shadow-[#b6066e]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-4">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-red-500/50 hover:shadow-orange-500/50 transition-all duration-500`}
            >
              <Image
                src="/vpn.png" // Path to the image in the public folder
                alt="Anonium VPN"
                width={48} // Set width appropriately (for example, 48px)
                height={48} // Set height accordingly (for example, 48px)
                className="object-contain z-10 drop-shadow-lg"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${primaryGradient} animate-pulse opacity-75`}
              ></div>
            </div>
            <h3 className="text-xl font-bold text-white drop-shadow-lg ml-2">
              Anonium
            </h3>
          </div>
          <p className="text-gray-300 text-sm max-w-md mb-4 drop-shadow-lg">
            Your privacy is our priority. Enhance your security and access
            content without restrictions.
          </p>

          {/* Icons for Whitepaper, Telegram, Twitter */}
          <div className="flex flex-row space-x-4">
            <a
              href="#"
              className="text-[#b6066e] hover:text-white transition-all duration-300 drop-shadow-lg text-sm flex items-center"
              title="Whitepaper"
            >
              <RiFilePaperFill className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#b6066e] hover:text-white transition-all duration-300 drop-shadow-lg text-sm flex items-center"
              title="Telegram"
            >
              <FaTelegramPlane className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#b6066e] hover:text-white transition-all duration-300 drop-shadow-lg text-sm flex items-center"
              title="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-gray-500 drop-shadow-lg mt-4">
            © 2025 Anonium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
