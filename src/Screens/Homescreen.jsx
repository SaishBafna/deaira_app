import React, { use, useContext, useEffect } from 'react'
import axios from 'axios';
import { FiBarChart2, FiChevronRight, FiSearch, FiTrendingUp, FiZap } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { BiBot } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { SiBitcoinsv } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { Bitcoin, Brain, Globe, Network } from "lucide-react";
import { IoMdWallet } from "react-icons/io";


import Image from "../assets/Images/logo.png";
import Coin from "../assets/Images/coin.png";
import Image1 from "../assets/Images/i10.png";
import Image2 from "../assets/Images/home2.png";
import group from "../assets/Images/Group344.png";
import dash from "../assets/Images/dash.png";
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
  const navigate = useNavigate();
  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const jwt_token = localStorage.getItem('jwt_token');
  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;
  const [data, setData] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);



  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/homepageapi/${encryptedWalletAddress}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.data?.user?.user) {
        throw new Error('Failed to fetch user data');
      }
      console.log('User Data:', response.data);
      setData(response?.data);
    } catch (err) {
      console.error('User data fetch error:', err);
      throw err;
    }
  };


  const FetchWalletData = async () => {
    try {
      const walletResponse = await axios.get(
        `${API_BASE_URL}/Walletpageapi/${encryptedWalletAddress}`,
        {
          headers: {
            'Authorization': `Bearer ${jwt_token}`
          }
        }
      );
      console.log('Wallet Data:', walletResponse?.data);
      setWallet(walletResponse?.data?.wallet);
    }
    catch (error) {
      console.error('Error fetching wallet data:', error);
    }
  };

  useEffect(() => {

    FetchWalletData();
    fetchUserData();
  }, []);



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
        <div className="flex items-center justify-between px-4 pt-4 pb-1 rounded-xl w-full mt-10 max-w-4xl mx-auto">

          {/* Left Section - Profile Info */}
          <div className="flex items-center">
            <img
              alt="Panel"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              src={dash}
            />
            <div className="flex flex-col ml-4 leading-snug">
              <p className="text-white font-semibold text-sm sm:text-xl">Welcome</p>
              <p className="text-white font-bold text-base sm:text-2xl">Radhika</p>
            </div>
          </div>

          {/* Right Section - ID Button */}
          <button
            className="text-black px-6 py-2 sm:px-7 sm:py-2.5 text-sm sm:text-base rounded-xl font-semibold transition hover:opacity-90 shadow-md"
            style={{
              backgroundImage: 'linear-gradient(to right, #E0B9F2, #4E10FF)',
              minWidth: '120px'
            }}
          >
            ID: CA120609
          </button>

        </div>




        {/* Panel Image */}
        <div className="w-full flex justify-center ">
          <img src={Image1} alt="Panel" className="w-full rounded-lg" />
        </div>

        {/* First Tab Row */}
        <div className="w-full flex flex-row gap-2 p-3 justify-center items-center">
          {/* Wallet Button */}
          <div
            onClick={handleWalletAction}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg shadow-md cursor-pointer transition-all h-[45px]
      ${walletAddress
                ? 'text-red-600 bg-white hover:bg-gray-100'
                : 'text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90'
              }`}
          >
            {walletAddress ? (
              <MdLogout className="text-lg" />
            ) : (
              <FaWallet className="text-lg" />
            )}
            {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
          </div>

          {/* Buy More DAIR Button */}
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-lg shadow-md hover:opacity-90 transition-all h-[45px]"
          >
            <BiBot className="text-lg" />
            Buy More DAIR
          </button>
        </div>





        {/* wallet segment */}
        <div className="bg-gradient-to-b from-[#0f0529] to-[#1b0436] text-white p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto mt-2 space-y-6 border border-white/10">

          {/* Wallet ID Title & Badge - Horizontally Aligned */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Wallet ID</h1>
            <div
              className="px-6 py-1 rounded-xl"
              style={{
                backgroundColor: '#000',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to right, #2850ff, #a15fff) 1',
              }}
            >
              <span className="font-bold text-white text-base sm:text-lg tracking-wide">
                CA120609
              </span>
            </div>

          </div>

          {/* Wallet Address Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Wallet Address</h2>
            <div
              className="flex justify-between items-center rounded-lg px-5 py-3"
              style={{
                background: 'linear-gradient(90deg, #0f0f1c 0%, #1b1c35 100%)',
                borderWidth: '1px',
                borderStyle: 'dashed',
                borderImage: 'repeating-linear-gradient(#A15FFF 0 12px, transparent 12px 24px) 1',
              }}
            >
              <span className="font-mono text-sm break-all text-white">
                0x6A5DD142F16e565E51a66EF03870a8836Cb6CaB
              </span>
              <button className="ml-4 text-sm text-[#A15FFF] hover:opacity-80 px-4 py-1.5 rounded-md transition-colors">
                Copy
              </button>
            </div>
          </div>

          {/* Referral Link Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Referral Link</h2>
            <div
              className="flex items-center rounded-lg px-5 py-3"
              style={{
                background: 'linear-gradient(90deg, #0f0f1c 0%, #1b1c35 100%)',
                borderWidth: '1px',
                borderStyle: 'dashed',
                borderImage: 'repeating-linear-gradient(#A15FFF 0 12px, transparent 12px 24px) 1',
              }}
            >
              <span className="flex-1 text-base break-all text-white">
                https://deaira.pro/register?sponsors
              </span>
              <button className="ml-4 shrink-0 text-sm text-[#A15FFF] hover:opacity-80 px-4 py-1.5 rounded-md transition-all">
                Copy
              </button>
            </div>
          </div>




        </div>


        {/* Second row with Quick State and See More */}
        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            Quick Stats
            <img src={I1} alt="icon" className="w-6 h-6" />
          </span>
          <span className="text-xs mr-1 inline-flex items-center gap-1 text-sm text-white hover:text-purple-200 transition-colors cursor-pointer">
            See More
            <FiChevronRight className="text-white" />
          </span>
        </div>

        {/* Quick Stats Cards */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Total Earnings */}
          <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
            <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
              <FaWallet className="text-[#310060] text-[13px]" />
            </div>
            <div>
              <p className="text-[15px] text-white/70">Total DeAIra Token</p>
              <h3 className="text-xl font-bold">${wallet?.total_income}</h3>
            </div>
          </div>

          {/* Active Members */}
          <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
            <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
              <HiUsers className="text-[#310060] text-xl" />
            </div>
            <div>
              <p className="text-sm text-white/70">Active Members</p>
              <h3 className="text-xl font-bold">{data?.my_activedownlineCount}</h3>
            </div>
          </div>

          {/* Token Price */}
          <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
            <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
              <SiBitcoinsv className="text-[#310060] text-xl" />
            </div>
            <div>
              <p className="text-sm text-white/70">Token <br /> Price</p>
              <h3 className="text-x font-bold">$0.001</h3>
            </div>
          </div>

          {/* Daily Growth */}
          <div className="bg-[#310060] rounded-xl p-4 text-white shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform">
            <div className="bg-[#A8FFD1] p-3 rounded-full flex items-center justify-center">
              <BsGraphUpArrow className="text-[#310060] text-xl" />
            </div>
            <div>
              <p className="text-sm text-white/70">Value in USDT</p>
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
        <div
          className="w-full text-white rounded-2xl p-6 sm:p-8 shadow-lg"
          style={{
            background: 'linear-gradient(180deg, #0E1446 0%, #3B1B68 100%)',
          }}
        >
          {/* Centered Token Section */}
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

          {/* Initial Price Box */}
          <div className="w-full flex justify-center">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center bg-white/5 p-4 sm:p-6 rounded-xl w-52 shadow-lg border border-white/10">

                {/* Icon and label */}
                <div className="flex items-center gap-3 text-sm font-semibold text-white mb-2">
                  <div className="bg-[#1E2A3A] rounded-full p-3 flex items-center justify-center">
                    <FiTrendingUp className="text-[#31FFB1] w-5 h-5" />
                  </div>
                  Initial Price
                </div>

                {/* Price */}
                <div className="text-lg font-semibold text-[#31FFB1]">
                  $00.13<span className="text-base">/Token</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* AI Powered Suggestion */}
        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            AI - Powered Suggestions
            <img src={I2} alt="icon" className="w-8 h-8" />
          </span>
          <span className="text-xs inline-flex items-center gap-1 text-sm text-white hover:text-purple-200 transition-colors cursor-pointer">
            See More
            <FiChevronRight className="text-white" />
          </span>
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide px-0">
          <div className="flex gap-4 w-max">
            {/* Card 1 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI-Powered <br /> Learning</h3>
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
              <h3 className="text-lg font-bold mb-2">Community <br /> Support</h3>
              <p className="text-sm text-white/80">
                Connect with like-minded individuals in our growing community hub with expert mentorship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-56 h-60 flex-shrink-0 bg-gradient-to-br from-[#1a1a40] to-[#3b007d] rounded-xl p-5 text-white shadow-lg flex flex-col">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Bitcoin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Token <br /> Rewards</h3>
              <p className="text-sm text-white/80">
                Earn $DAIR tokens through community building,referrals, and active participation.
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


          </div>
        </div>

        {/* total deaira holdings */}

        <div className="w-full bg-gradient-to-b from-[#43027a] to-[#1b1b3a] text-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex justify-center items-center gap-2 text-xl font-semibold mb-4">
            <img src={I3} alt="token icon" className="w-6 h-6" />
            Total DeAIra Holdings
          </div>

          <div className="text-sm space-y-3">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Total DAIR Purchased</span>
              <span className="font-medium text-left">40,000,000,000 DAIR</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Total DAIR Air Dropped</span>
              <span className="font-medium text-left">$0.001 / token</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/70">Air Dropped Date</span>
              <span className="font-medium">17/06/2025</span>
            </div>


          </div>
        </div>


        {/* box after total deaira holdings */}
        <div className="bg-[#0f0529] text-white rounded-xl p-4 sm:p-6 border border-white/20 w-full max-w-3xl mx-auto space-y-5">

          {/* Top Row - Team Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
            {[
              { label: "Direct Team", value: "1" },
              { label: "Downline Team", value: "3" },
              { label: "Total Active Team", value: "0" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-center items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
                  <img
                    src={group}
                    alt="icon"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                  <span className="whitespace-nowrap text-[10px]">{item.label}</span>
                </div>
                <div
                  className="text-sm sm:text-base font-bold border border-white/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-md"
                  style={{ backgroundColor: '#2e0b72' }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Referral Link - Improved Responsiveness */}
          <div className="flex flex-row justify-between items-center gap-2 bg-[#1a1a1a] rounded-md px-4 py-3 border border-dashed border-white/20 overflow-x-auto">
            <span className="break-all text-xs sm:text-sm text-white flex-1 min-w-0">
              https://cryptoaura.pro/register?sponsors
            </span>
            <button
              className="text-[#A15FFF] font-medium hover:underline text-xs sm:text-sm whitespace-nowrap"
              onClick={() => navigator.clipboard.writeText("https://cryptoaura.pro/register?sponsors")}
            >
              Copy
            </button>
          </div>



          {/* Total Team Business - Better Mobile Layout */}
          <div className="flex justify-between items-center gap-3 text-xs sm:text-sm font-medium">
            {/* Left side: icon + label */}
            <div className="flex items-center gap-2">
              <img
                src={group}
                alt="icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>Total Team Business</span>
            </div>

            {/* Right side: value box */}
            <div
              className="text-sm sm:text-base font-bold border border-white/30 px-4 py-1.5 rounded-md text-center"
              style={{ backgroundColor: '#2e0b72', minWidth: '80px' }} // <- Match width of stat boxes
            >
              1
            </div>

          </div>


          {/* Bottom Tagline - Responsive Text */}
          <p className="text-center text-xs sm:text-sm font-medium sm:font-semibold text-fuchsia-500">
            Invite. Invest. Grow with Smart Trades.
          </p>
        </div>





        <div className="w-full flex justify-between text-white font-semibold text-lg cursor-pointer mt-4 mb-4">
          <span className="flex items-center gap-2">
            Join Our AI-Powered Community
            <img src={I4} alt="icon" className="w-8 h-8 mt-1" />
          </span>
        </div>

        <div className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-[#130628] to-[#2c0054] shadow-md mb-20">
          <img src={R1} alt="Robot" className="w-18 h-18 object-contain" />
          <div className="flex flex-col text-white ml-4 mr-2 flex-1">
            <span className="font-semibold text-sm sm:text-base">
              Thrive with AI.
            </span>
            <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
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
