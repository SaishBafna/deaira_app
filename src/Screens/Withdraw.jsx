import React from 'react'
import Image3 from '../assets/Images/depositimg.png';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
   const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>


      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className=" text-2xl font-bold text-center text-white">Withdraw</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      <div className="w-full max-w-xl md:max-w-3xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 flex items-center gap-4 shadow-lg">
        {/* Left Text Section - Wider */}
        <div className="flex flex-col text-white w-[70%]">
          <h2 className="text-lg font-semibold leading-tight">
            Fast & Secure Withdrawals
          </h2>
          <p className="text-sm mt-1 text-pink-300">
            Get your funds quickly with our automated system.
          </p>
          <button className="mt-3 self-start bg-purple-600 border border-white text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow hover:bg-purple-700 transition">
            View History
          </button>
        </div>

        {/* Right Image Section - Narrower */}
        <div className="w-[30%] flex justify-center">
          <img
            src={Image3}
            alt="Withdraw Illustration"
            className="h-32 w-auto object-contain"
          />
        </div>
      </div>

      {/* Form Fields Section - Wider on desktop */}
      <div className="w-full max-w-xl md:max-w-3xl space-y-4">
        {/* Enter Amount */}
        <div>
          <label className="block text-white font-semibold mb-1">Enter Amount</label>
          <input
            type="number"
            placeholder="10"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-gray-400 mt-1">Available balance: 100.00 USDT</p>
        </div>

        {/* Select Currency */}
        <div>
          <label className="block text-white font-semibold mb-1">Select Currency</label>
          <select
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Currency</option>
            <option value="USDT">USDT</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>

        {/* Withdrawal Address */}
        <div>
          <label className="block text-white font-semibold mb-1">Withdrawal Address</label>
          <input
            type="text"
            placeholder="Enter your wallet address"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Network */}
        <div>
          <label className="block text-white font-semibold mb-1">Network</label>
          <select
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Network</option>
            <option value="TRC20">TRC20</option>
            <option value="ERC20">ERC20</option>
            <option value="BEP20">BEP20</option>
          </select>
        </div>

        <div className="w-full flex justify-center">
          <button className="mt-3 bg-purple-600 border border-white text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow hover:bg-purple-700 transition">
            Confirm Withdrawal
          </button>
        </div>

        <div className="mt-4 mb-20 p-4 bg-[#504949] rounded-lg border border-gray-200 text-sm text-[#ffb5b5]">
          <p className="mb-2">
            <span className="font-semibold">Important:</span> Withdrawals may take 5-30 minutes to process depending on network congestion.
          </p>
          <p>
            Minimum withdrawal amount is 10 USDT. Network fees will be deducted from your withdrawal amount.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Withdraw