import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Image2 from '../assets/Images/dash.png';
import Image3 from '../assets/Images/robot.png';
import { FaAndroid, FaGooglePlay, FaWallet } from 'react-icons/fa';
import { ArrowDownLeft, ArrowUpRight, Calculator, DollarSign, Lock, RotateCcw, TrendingUp, Plus, Play, Smartphone, TrendingUpIcon } from 'lucide-react';
import Image1 from '../assets/Images/i5.png';
import { Banknote, Wallet, Users, Trophy } from "lucide-react";
import { Calendar, Search, BarChart3, Share2, } from 'lucide-react';
import Footer from '../Footer/Footer';
import I1 from '../assets/Images/i6.png'; 
import I2 from '../assets/Images/i7.png'; 
import I3 from '../assets/Images/i8.png'; 
import I4 from '../assets/Images/i9.png'; 
import Header1 from '../Header/header1.jsx';
const Dashboard = () => {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative flex flex-col items-center px-4 sm:px-6 py-4 gap-4">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* <div className="w-full flex justify-center">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </div> */}

      {/* <div className="w-full max-w-xl lg:max-w-4xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-5 pr-12 py-3 rounded-xl bg-[#262424] text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
        </div>
      </div> */}

     <Header1 title="Dashboard" />

      <div className="flex items-center justify-between p-1 rounded-xl w-full max-w-xl lg:max-w-4xl">
        {/* Left side: Image + Text group */}
        <div className="flex items-center">
          <img src={Image2} alt="Panel" className="w-16 h-16 rounded-lg" />
          <div className="flex flex-col ml-4">
            <p className="text-white text-sm">Welcome back,</p>
            <p className="text-white font-semibold text-lg">abcd</p>
          </div>
        </div>

        {/* Right side: Button */}
        <div>
          <button
            className="text-black px-4 py-1 rounded-full font-semibold transition"
            style={{
              backgroundImage: "linear-gradient(to right, #E0B9F2, #4E10FF)"
            }}
          >
            ID:CA121234
          </button>
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 flex items-center gap-4 shadow-lg">
        {/* Left Text Section - Wider */}
        <div className="flex flex-col text-white w-[70%]">
          <h2 className="text-lg font-semibold leading-tight">
            Power Up with Our AI based Community
          </h2>
          <p className="text-sm mt-1 text-pink-300">
            Be part of DeAlra's AI investor network.
          </p>
          <button className="mt-3 self-start bg-purple-600 border border-white text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow hover:bg-purple-700 transition">
            Join Now
          </button>
        </div>

        {/* Right Image Section - Narrower */}
        <div className="w-[30%] flex justify-center">
          <img
            src={Image3}
            alt="AI Community"
            className="h-32 w-auto object-contain"
          />
        </div>
      </div>

      <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Wallet Overview</span>
          <img src={I1} alt="Lock" className="w-5 h-5" />
        </div>
      </div>


      <div className="backdrop-blur-sm p-4 rounded-2xl w-full max-w-xl lg:max-w-4xl mx-auto font-sans border border-white/10">
        <div className="rounded-2xl p-6 shadow-2xl relative overflow-hidden bg-transparent bg-[#262424]">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-gray-200 text-lg font-medium mb-3">
                Principal <span className="text-white font-semibold">Balance</span>
              </h3>

              <div className="mb-4">
                <span className="text-white text-5xl font-bold tracking-tight">$203</span>
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            {/* Earning Balance Section */}
            <div className="border-t border-purple-600/50 pt-4">
              <h4 className="text-gray-200 text-base font-medium mb-2 text-center">
                Earning Balance
              </h4>
              <div className="text-center">
                <span className="text-white text-3xl font-bold">$5.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid - Mobile remains 2 columns, desktop 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {/* First Row */}
          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-green-400 text-xs font-medium">Earning</div>
              <div className="text-green-400 text-xs font-medium">Withdraw</div>
              <div className="text-white text-sm font-semibold">$23.00/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-blue-400 text-xs font-medium">Principal</div>
              <div className="text-blue-400 text-xs font-medium">Withdraw</div>
              <div className="text-white text-sm font-semibold">$97/Token</div>
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-orange-400 text-xs font-medium">Trade</div>
              <div className="text-orange-400 text-xs font-medium">Profit</div>
              <div className="text-white text-sm font-semibold">$340/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-purple-400 text-xs font-medium">Total</div>
              <div className="text-purple-400 text-xs font-medium">Withdraw</div>
              <div className="text-white text-sm font-semibold">$297/Token</div>
            </div>
          </div>

          {/* Third Row */}
          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <RotateCcw className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-cyan-400 text-xs font-medium">Principal</div>
              <div className="text-cyan-400 text-xs font-medium">In Trade</div>
              <div className="text-white text-sm font-semibold">$23.00/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-emerald-400 text-xs font-medium">Earning In</div>
              <div className="text-emerald-400 text-xs font-medium">Trade</div>
              <div className="text-white text-sm font-semibold">$96/Token</div>
            </div>
          </div>
        </div>
      </div>

     <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Quick Action</span>
          <img src={I2} alt="Lock" className="w-5 h-5" />
        </div>
      </div>

      <div className="mb-5 w-full max-w-xl lg:max-w-4xl">
        <div className="grid grid-cols-4 gap-6">
          {/* Deposit */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
              <Banknote className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Deposit</span>
          </div>

          {/* Withdraw */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600">
              <Wallet className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Withdraw</span>
          </div>

          {/* Team */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600">
              <Users className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Team</span>
          </div>

          {/* Rewards */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Rewards</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl flex justify-center">
        <img src={Image1} alt="Panel" className="w-full" />
      </div>

     <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Your Income</span>
          <img src={I3} alt="Lock" className="w-5 h-5" />
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl space-y-4">
        {/* Top Section with Weekly Bonus and ID Free */}
        <div className="flex gap-4">
          {/* Weekly Bonus Card */}
          <div className="flex-1 bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Weekly Bonus</span>
            </div>
            <div className="text-green-400 text-xl font-bold">$0.00</div>
          </div>

          {/* ID Free Card */}
          <div className="flex-1 bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <FiSearch className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">$10 ID Free</span>
            </div>
            <div className="text-purple-400 text-sm">$0.045/Token</div>
          </div>
        </div>

        {/* Individual Earning Cards */}
        <div className="space-y-4">
          {/* Trading Profit */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Trading Profit</span>
              </div>
              <span className="font-semibold">$0.4</span>
            </div>
          </div>

          {/* Sponsor Income */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Sponsor Income</span>
              </div>
              <span className="font-semibold">$30.00</span>
            </div>
          </div>

          {/* Unique Referral */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Unique Referral</span>
              </div>
              <span className="font-semibold">$0.00</span>
            </div>
          </div>

          {/* Team Level */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Team Level</span>
              </div>
              <span className="font-semibold">$0.44</span>
            </div>
          </div>

          {/* Monthly Salary */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Monthly Salary</span>
              </div>
              <span className="font-semibold">$0.54</span>
            </div>
          </div>

          {/* AMB Reward */}
          <div className="bg-slate-800 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">AMB Reward</span>
              </div>
              <span className="font-semibold">$0.05</span>
            </div>
          </div>
        </div>
      </div>

    <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Investment Opportunity</span>
          <img src={I4} alt="Lock" className="w-5 h-5" />
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#0c10cc5c] to-indigo-900 rounded-xl p-6 text-white relative">
          {/* Header with Saving and coin icon */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <h2 className="text-xl font-bold text-white">Saving</h2>
            <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-yellow-200 text-xs font-bold">₹</span>
              </div>
            </div>
          </div>

          {/* Principal and Earning Section */}
          <div className="flex justify-between mb-8">
            {/* Principal */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">Principal</span>
              </div>
              <div className="text-2xl font-bold text-[#A8FFD1] mb-3">$20.000</div>
              <div className="text-sm text-purple-200">
                <div className="mb-1">First Trade</div>
                <div>10:00 - 13:00</div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-purple-400 mx-6"></div>

            {/* Earning */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Earning</span>
              </div>
              <div className="text-2xl font-bold text-[#A8FFD1] mb-3">$3.4077</div>
              <div className="text-sm text-purple-200">
                <div className="mb-1">Second Trade</div>
                <div>18:00 - 23:00</div>
              </div>
            </div>
          </div>

          {/* Trade Button */}
          <div className="flex justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-10 py-1 rounded-full text-white font-semibold text-lg transition-colors shadow-lg border border-white">
              Trade
            </button>
          </div>

          {/* Morning Window Info */}
          <div className="text-center text-sm text-white mb-4 font-medium">
            Morning Window active(1000 - 1300)
          </div>

          {/* Note */}
          <div className="text-xs text-purple-200 text-center leading-relaxed bg-[#3232335c] px-2">
            <span className="font-bold">Note:</span> All trader will be executed as per Indian Standard Time (IST)
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-[#27064ae7] to-purple-800 rounded-lg p-6 text-white">
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold">Download Our App</h2>
          </div>

          {/* Subtitle */}
          <p className="text-purple-100 text-sm mb-6">
            Get the best trading experience on mobile
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4">
            {/* Android Button */}
            <button className="flex-1 border border-white rounded-full px-4 py-2 flex items-center gap-3 hover:opacity-90 transition-all bg-gradient-to-r from-[#6B37FF] to-[#116DA1]">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <FaAndroid className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left text-white">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Android</div>
              </div>
            </button>

            {/* Play Store Button */}
            <button className="flex-1 border border-white rounded-full px-4 py-2 flex items-center gap-3 hover:opacity-90 transition-all bg-gradient-to-r from-[#6B37FF] to-[#116DA1]">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <FaGooglePlay className="w-5 h-5 text-black" />
              </div>
              <div className="text-left text-white">
                <div className="text-xs">Download from</div>
                <div className="text-sm font-semibold">Play Store</div>
              </div>
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard