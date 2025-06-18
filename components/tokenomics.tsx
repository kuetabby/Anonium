import React from "react";
import {
  FaCoins,
  FaNetworkWired,
  FaDatabase,
  FaPercent,
  FaClipboardCheck,
} from "react-icons/fa";

const Tokenomics = () => {
  const tokenData = [
    {
      icon: <FaCoins className="w-8 h-8 text-white" />,
      title: "Token Name",
      value: "SecureToken",
    },
    {
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
      title: "Network",
      value: "Ethereum",
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-white" />,
      title: "Total Supply",
      value: "1,000,000 STK",
    },
    {
      icon: <FaPercent className="w-8 h-8 text-white" />,
      title: "Tax (Buy/Sell)",
      value: "5% / 5%",
    },
  ];

  return (
    <section
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 mb-48"
      id="tokenomics"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-12 text-center text-white drop-shadow-2xl">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Tokenomics
          </span>
        </h2>

        {/* Token Data Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tokenData.map((data, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-2xl rounded-2xl p-6 border-2 border-red-500 transition-all duration-500 transform hover:scale-105 relative overflow-hidden shadow-lg flex flex-col justify-center">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-3">
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {data.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg font-semibold text-center">
                  {data.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
