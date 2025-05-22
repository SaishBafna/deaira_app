import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Image3 from '../assets/Images/robot.png';
import { FaWallet } from 'react-icons/fa';
import { ArrowDownLeft, ArrowUpRight, Calculator, DollarSign, Lock, RotateCcw, TrendingUp, Plus } from 'lucide-react';

const Dashboard = () => {
  return (
<div className="w-screen min-h-screen overflow-y-auto bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative flex flex-col items-center p-4 gap-4">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      <div className="w-full flex justify-center">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-5 pr-12 py-3 rounded-xl bg-[#262424] text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 text-xl" />
        </div>
      </div>

      <div className="flex items-center justify-between p-1 rounded-xl w-full max-w-md">
        {/* Left side: Image + Text group */}
        <div className="flex items-center">
          <img src={Image3} alt="Panel" className="w-16 h-16 rounded-lg" />
          <div className="flex flex-col ml-4">
            <p className="text-white text-sm">Welcome back,</p>
            <p className="text-white font-semibold text-lg">abcd</p>
          </div>
        </div>

        {/* Right side: Button */}
        <div>
          <button
            className="text-black px-5 py-2 rounded-full font-semibold transition"
            style={{
              backgroundImage: "linear-gradient(to right, #E0B9F2, #4E10FF)"
            }}
          >
            ID:CA121
          </button>
        </div>
      </div>

      <div className="w-full max-w-[512px] bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 flex items-center justify-between shadow-lg">
        {/* Text Section */}
        <div className="flex flex-col text-white max-w-[60%]">
          <h2 className="text-lg font-semibold leading-tight">
            Power Up with Our AI based Community
          </h2>
          <p className="text-sm mt-1 text-pink-300">
            Be part of DeAlra's AI investor network.
          </p>
          <button className="mt-3 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow">
            Join Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-24 h-24 flex-shrink-0 ml-2">
          <img
            src={Image3}
            alt="Robot"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="bg-purple-900/20 backdrop-blur-sm p-4 rounded-2xl max-w-sm mx-auto font-sans border border-white/10">
        {/* Wallet Overview Header */}
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-white" />
          <span className="text-white font-medium text-lg">Wallet Overview</span>
        </div>

        {/* Principal Balance Main Card */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
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

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {/* First Row */}
          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-green-400 text-xs font-medium">Earning</div>
              <div className="text-green-400 text-xs font-medium">Withdraw</div>
              <div className="text-white text-sm font-semibold">$23.00/Token</div>
            </div>
          </div>

          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
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
          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-orange-400 text-xs font-medium">Trade</div>
              <div className="text-orange-400 text-xs font-medium">Profit</div>
              <div className="text-white text-sm font-semibold">$340/Token</div>
            </div>
          </div>

          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
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
          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <RotateCcw className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-cyan-400 text-xs font-medium">Principal</div>
              <div className="text-cyan-400 text-xs font-medium">In Trade</div>
              <div className="text-white text-sm font-semibold">$23.00/Token</div>
            </div>
          </div>

          <div className="bg-purple-800/60 rounded-xl p-3 flex items-center gap-2">
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
    </div>
  )
}

export default Dashboard