import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaWallet } from 'react-icons/fa';
import { BiBot } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { SiBitcoinsv } from 'react-icons/si';
import { BsGraphUpArrow } from 'react-icons/bs';

import Image from '../assets/Images/img.png';
import Coin from '../assets/Images/coin.png';
import Image1 from '../assets/Images/panel1.png';
import Image2 from '../assets/Images/panel2.png';
import Profile from '../assets/Images/p.png';
import Image3 from '../assets/Images/panel3.png';
import Footer from '../Footer/Footer.jsx';
import { Bitcoin, Brain, Globe, Network } from 'lucide-react';

const Homescreen = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center px-4 sm:px-6 py-6 gap-4">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Logo */}
      <div className="w-full flex justify-center max-w-xl">
        <img src={Image} alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-5 pr-12 py-3 rounded-xl bg-[#2b2828] text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
        </div>
      </div>

      {/* Panel Image */}
      <div className="w-full max-w-xl flex justify-center">
        <img src={Image1} alt="Panel" className="w-full" />
      </div>

      {/* First Tab Row */}
      <div className="w-full max-w-xl flex rounded-xl overflow-hidden shadow-md">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity">
          <FaWallet className="text-white text-lg" />
          Connect Wallet
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors">
          <BiBot className="text-white/70 text-lg" />
          Ask A.I
        </button>
      </div>

      {/* Second row with Quick State and See More */}
      <div className="w-full max-w-xl flex justify-between text-white font-semibold text-lg cursor-pointer">
        <span>Quick State</span>
        <span className="text-sm text-purple-300 hover:text-purple-200 transition-colors">See More</span>
      </div>

      {/* Quick Stats Cards */}
      <div className="w-full max-w-xl grid grid-cols-2 gap-4">
        {/* Total Earnings */}
        <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
            <FaWallet className="text-[#310060] text-xl" />
          </div>
          <div>
            <p className="text-sm text-white/70">Total Earnings</p>
            <h3 className="text-xl font-bold">$4050</h3>
          </div>
        </div>

        {/* Active Members */}
        <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
            <HiUsers className="text-[#310060] text-xl" />
          </div>
          <div>
            <p className="text-sm text-white/70">Active Members</p>
            <h3 className="text-xl font-bold">500+</h3>
          </div>
        </div>

        {/* Token Price */}
        <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
            <SiBitcoinsv className="text-[#310060] text-xl" />
          </div>
          <div>
            <p className="text-sm text-white/70">Token Price</p>
            <h3 className="text-xl font-bold">$0.001</h3>
          </div>
        </div>

        {/* Daily Growth */}
        <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
          <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
            <BsGraphUpArrow className="text-[#310060] text-xl" />
          </div>
          <div>
            <p className="text-sm text-white/70">Daily Growth</p>
            <h3 className="text-xl font-bold">$1303</h3>
          </div>
        </div>
      </div>

      {/* Your AI Agent Section */}
      <div className="w-full max-w-xl flex flex-nowrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 text-2xl font-bold text-center">
        <span className="text-purple-600 text-lg whitespace-nowrap">Your AI Agent</span>
        <img src={Profile} alt="AI Robot" className="w-16 h-16 sm:w-20 sm:h-20" />
        <span className="text-purple-300 text-lg whitespace-nowrap">Is Live Now</span>
      </div>

      {/* Token Info Card */}
      <div className="w-full max-w-xl bg-gray-900 text-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <img src={Coin} alt="AI Robot" className="w-14 h-14 mx-auto" />
          <div className="text-2xl font-bold mt-4 mb-2">$ DAIR TOKEN</div>
          <div className="text-lg">TOTAL SUPPLY : <span className="font-mono">0001203948</span></div>
        </div>

        <div className="flex justify-around items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center bg-gray-800 p-3 sm:p-4 rounded-lg min-w-[120px]">
            <div className="text-sm font-medium text-gray-400">Initial Price</div>
            <div className="text-xl font-semibold">$00.13/Token</div>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-3 sm:p-4 rounded-lg min-w-[120px]">
            <div className="text-sm font-medium text-gray-400">Project Growth</div>
            <div className="text-xl font-semibold">$00.45/Token</div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xl flex justify-between text-white font-semibold text-lg cursor-pointer">
        <span>AI Powered Suggestion</span>
        <span className="text-sm text-purple-300 hover:text-purple-200 transition-colors">See More</span>
      </div>
      <div className="w-full max-w-xl overflow-x-auto pb-4">
        <div className="flex gap-4 w-max px-4">
          {/* Card 1 - AI-Powered Learning */}
          <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">AI-Powered Learning</h3>
            <p className="text-sm text-white/80">
              Access cutting-edge AI tools for personalized learning experiences and business growth insights.
            </p>
          </div>

          {/* Card 2 - Smart MLM Structure */}
          <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Smart MLM Structure</h3>
            <p className="text-sm text-white/80">
              Join our blockchain-verified MLM community with transparent tracking and automated rewards.
            </p>
          </div>

          {/* Card 3 - Crypto Integration */}
          <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Crypto Integration</h3>
            <p className="text-sm text-white/80">
              Seamless cryptocurrency transactions with real-time conversion and secure wallets.
            </p>
          </div>

          {/* Card 4 - Global Community */}
          <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Global Community</h3>
            <p className="text-sm text-white/80">
              Connect with like-minded entrepreneurs worldwide through our exclusive network.
            </p>
          </div>
        </div>
      </div>


      {/* Second Panel Image */}
      <div className="w-full max-w-xl flex justify-center">
        <img src={Image2} alt="Panel" className="w-full" />
      </div>

      {/* Token Detail Table */}
      <div className="w-full max-w-xl bg-gradient-to-b from-[#43027a] to-[#1b1b3a] text-white rounded-2xl shadow-xl p-4 sm:p-6">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zm6 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
          </svg>
          Token Detail
        </div>
        <div className="text-sm space-y-3">
          <div className="flex justify-between border-b border-white/10 pb-1">
            <span className="text-white/70">Total Supply</span>
            <span className="font-medium">40,000,000,000 DAIR</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-1">
            <span className="text-white/70">Initial Price</span>
            <span className="font-medium">$0.001 / token</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-1">
            <span className="text-white/70">Public Sale Allocation</span>
            <span className="font-medium">20,000,000,000 DAIR</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-1">
            <span className="text-white/70">Projected Value for Early Buyers</span>
            <span className="font-medium text-right">$200+ (for first ~300,000)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Expected Price Growth</span>
            <span className="font-medium">~$0.0225 / token</span>
          </div>
        </div>
      </div>

      {/* Third Panel Image with Join Now Button */}
      <div className="w-full max-w-xl relative">
        <img src={Image3} alt="Panel" className="w-full rounded-xl h-20 sm:h-24 object-cover" />
        <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
          Join Now
        </button>
      </div>

      <Footer />

    </div>
  );
};

export default Homescreen;

