import React, { use, useContext, useEffect } from 'react'
import axios from 'axios';
import { FiBarChart2, FiChevronRight, FiSearch, FiTrendingUp, FiZap } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { BiBot } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { SiBitcoinsv } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { Bitcoin, Brain, Globe, Network } from "lucide-react";

import Image from "../assets/Images/logo.png";
import Coin from "../assets/Images/coin.png";
import Image1 from "../assets/Images/i10.png";
import Image2 from "../assets/Images/home2.png";
import I1 from "../assets/Images/i1.png";
import I2 from "../assets/Images/i2.png";
import I3 from "../assets/Images/i3.png";
import I4 from "../assets/Images/i4.png";
import Profile from "../assets/Images/p.png";
import Image3 from "../assets/Images/panel3.png";
import Footer from "../Footer/Footer.jsx";
import R1 from "../assets/Images/homer1.png";
import Header from "../Header/header.jsx";
import { WalletContext } from "../context/walletcontext";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Homescreen = () => {
  const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);

  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const navigate = useNavigate();

  console.log('encryptedWalletAddress:', encryptedWalletAddress);
  useEffect(() => {
    const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
    console.log('encryptedWalletAddress useEffect:', encryptedWalletAddress);

    if (!encryptedWalletAddress) {
      navigate('/register');
    }

  }, [navigate])

  const handleWalletAction = () => {
    if (walletAddress) {
      disconnectWallet();
      window.location.reload();
    } else {
      handleGenerateToken();
    }
  };

  // Handle connect wallet and generate token
  const handleGenerateToken = async () => {
    try {
      let addressToUse = walletAddress;

      // If no wallet is connected, connect first
      if (!addressToUse) {
        console.log("No wallet connected, connecting...");
        addressToUse = await connectWallet();
      }

      if (!addressToUse) {
        console.error("Failed to get wallet address");
        return;
      }

      console.log("Using address for token generation:", addressToUse);

      // Generate token using the connected address
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/generateToken`, {
        email: addressToUse
      });

      localStorage.setItem("jwt_token", response.data.token);
      console.log('Token Response:', response.data.token);
    } catch (error) {
      console.error('Token generation failed:', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative flex flex-col items-center px-4 sm:px-8 lg:px-16 py-6">
      {/* Blur circles - fixed in background */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none -z-10"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none -z-10"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none -z-10"></div>

      {/* Scrollable content */}
      <div className="w-full max-w-4xl flex flex-col gap-2">

        <Header />
        {/* Logo */}
        {/* <div className="w-full flex justify-center">
          <img src={Image} alt="Logo" className="h-15 w-auto" />
        </div> */}

        {/* Search Bar */}
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-5 pr-12 py-3 rounded-xl bg-[#2b2828] text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
        </div> */}

        {/* Panel Image */}
        <div className="w-full flex justify-center">
          <img src={Image1} alt="Panel" className="w-full rounded-lg" />
        </div>

        {/* First Tab Row */}
        <div className="w-full flex overflow-hidden shadow-md rounded-xl bg-[#1f1f1f]">
          <div
            onClick={handleWalletAction}
            className={`flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white hover:opacity-90 transition-opacity rounded-l-xl rounded-r-xl cursor-pointer ${walletAddress
              ? 'bg-gradient-to-r from-red-500 to-red-600'
              : 'bg-gradient-to-r from-cyan-400 to-fuchsia-500'
              }`}
          >
            {walletAddress ? (
              <MdLogout className="text-white text-lg" />
            ) : (
              <FaWallet className="text-white text-lg" />
            )}
            {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
          </div>
          {/* <div 
            onClick={handleWalletAction}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity rounded-r-xl cursor-pointer"
          >
            <FaWallet className="text-white text-lg" />
            {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
          </div> */}
          {/* <div 
          onClick={connectWallet}
          className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity rounded-r-xl cursor-pointer">
            <FaWallet className="text-white text-lg" />
            Connect Wallet
          </div> */}
          <button className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-white bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors">
            <BiBot className="text-white/70 text-lg" />
            Ask A.I
          </button>
        </div>

        {/* Second row with Quick State and See More */}
        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            Quick Stats
            <img src={I1} alt="icon" className="w-6 h-6" />
          </span>
          {/* <span className="text-xs inline-flex items-center gap-1 text-sm text-white hover:text-purple-200 transition-colors cursor-pointer">
            See More
            <FiChevronRight className="text-white" />
          </span> */}
        </div>

        {/* Quick Stats Cards */}
        <div className="w-full grid grid-cols-2 gap-4">
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
        <div className="w-full max-w-4xl mx-auto flex flex-nowrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 text-xl font-bold text-center">
          <span className="text-purple-600 text-lg whitespace-nowrap">
            Your AI Agent
          </span>
          <img
            src={Profile}
            alt="AI Robot"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <span className="text-purple-300 text-lg whitespace-nowrap">
            Is Live Now
          </span>
        </div>

        {/* Token Info Card */}
        <div className="w-full bg-gray-900 text-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-6">
            <img
              src={Coin}
              alt="AI Robot"
              className="w-20 h-20 sm:w-20 sm:h-20 mx-auto"
            />
            <div className="text-2xl font-bold mt-4 mb-2">$ DAIR TOKEN</div>
            <div className="text-lg">
              TOTAL SUPPLY : <span className="font-mono">0001203948</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center bg-gray-800 p-3 sm:p-6 rounded-lg w-1/2">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                <div className="bg-[#A8FFD1] rounded-full p-2 flex items-center justify-center">
                  <FiTrendingUp className="text-[#310060] w-5 h-5" />
                </div>
                Initial Price
              </div>
              <div className="text-1xl font-semibold">$00.13/Token</div>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-3 sm:p-6 rounded-lg w-1/2">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                <div className="bg-[#A8FFD1] rounded-full p-2 flex items-center justify-center">
                  <FiBarChart2 className="text-[#310060] w-5 h-5" />
                </div>
                Project Growth
              </div>
              <div className="text-1xl font-semibold">$00.45/Token</div>
            </div>
          </div>
        </div>


        {/* AI Powered Suggestion */}
        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            AI - Powered Suggestions
            <img src={I2} alt="icon" className="w-8 h-8" />
          </span>
          {/* <span className="text-xs inline-flex items-center gap-1 text-sm text-white hover:text-purple-200 transition-colors cursor-pointer">
            See More
            <FiChevronRight className="text-white" />
          </span> */}
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide px-0">
          <div className="flex gap-4 w-max">
            {/* Card 1 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI-Powered Learning</h3>
              <p className="text-sm text-white/80">
                Access cutting-edge AI tools for personalized learning
                experiences and business growth insights.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Network className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Smart MLM Structure</h3>
              <p className="text-sm text-white/80">
                Join our blockchain-verified MLM community with transparent
                tracking and automated rewards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Bitcoin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Crypto Integration</h3>
              <p className="text-sm text-white/80">
                Seamless cryptocurrency transactions with real-time conversion
                and secure wallets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Community</h3>
              <p className="text-sm text-white/80">
                Connect with like-minded entrepreneurs worldwide through our
                exclusive network.
              </p>
            </div>
          </div>
        </div>

        {/* Second Panel Image */}
        <div className="w-full flex justify-center">
          <img src={Image2} alt="Panel" className="w-full rounded-lg" />
        </div>

        {/* Token Detail Table */}
        <div className="w-full bg-gradient-to-b from-[#43027a] to-[#1b1b3a] text-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex justify-center items-center gap-2 text-xl font-semibold mb-4">
            <img src={I3} alt="token icon" className="w-6 h-6" />
            Token Detail
          </div>

          <div className="text-sm space-y-3">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Total Supply</span>
              <span className="font-medium text-left">40,000,000,000 DAIR</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Initial Price</span>
              <span className="font-medium text-left">$0.001 / token</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Public Sale Allocation</span>
              <span className="font-medium">20,000,000,000 DAIR</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">
                Projected Value for Early Buyers
              </span>
              <span className="font-medium text-right">
                $200+ (for first ~300,000)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Expected Price Growth</span>
              <span className="font-medium">~$0.0225 / token</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            Join Our AI-Powered Community
            <img src={I4} alt="icon" className="w-8 h-8 mt-1" />
          </span>
        </div>

        <div className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-[#130628] to-[#2c0054] shadow-md mb-20">
          <img src={R1} alt="Robot" className="w-18 h-18 object-contain" />
          <div className="flex flex-col text-white ml-4 flex-1">
            <span className="font-semibold text-sm sm:text-base">
              Thrive with AI.
            </span>
            <span className="font-semibold text-sm sm:text-base">
              Grow with Community.
            </span>
          </div>
          <button className="bg-gradient-to-r from-[#AC68FF] to-[#994EFF] text-white px-4 py-1.5 text-sm rounded-full shadow">
            Join Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homescreen;
