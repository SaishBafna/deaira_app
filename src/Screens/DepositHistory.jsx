import React from 'react'
import Image3 from '../assets/Images/depositimg.png';

const DipositHistory = () => {


  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-sm px-6 py-4 flex items-center justify-between relative z-10">
        
        <h1 className="text-white text-xl font-semibold">Deposit Report</h1>
        
      </div>

      {/* Date Selector */}
      <div className="w-full max-w-sm px-6 mb-4 relative z-10">
        <div className="flex items-center justify-between bg-black/20 rounded-lg px-4 py-3 border border-purple-500/30">
          <span className="text-purple-300 text-sm">22/05/2025</span>
          <span className="text-purple-300">⌄</span>
        </div>
      </div>

      {/* Deposit List Container */}
      <div className="w-full max-w-sm px-6 flex-1 relative z-10">
        
        {/* Today's Deposits */}
        <div className="space-y-3 mb-6">
          {/* Deposit Item 1 */}
          <div className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-4 border border-purple-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-400/50">
                <span className="text-purple-300 text-lg">⚡</span>
              </div>
              <span className="text-white font-medium text-lg">CA123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-lg">↓</span>
              <span className="text-green-400 font-semibold text-lg">$20.00</span>
            </div>
          </div>

          {/* Deposit Item 2 */}
          <div className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-4 border border-purple-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-400/50">
                <span className="text-purple-300 text-lg">⚡</span>
              </div>
              <span className="text-white font-medium text-lg">CA123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-lg">↓</span>
              <span className="text-green-400 font-semibold text-lg">$20.00</span>
            </div>
          </div>
        </div>

        {/* Yesterday Section */}
        <div className="mb-4">
          <h2 className="text-gray-300 text-base font-medium mb-4 px-2">Yesterday</h2>
          <div className="space-y-3">
            {/* Yesterday Deposit Item 1 */}
            <div className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-4 border border-purple-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-400/50">
                  <span className="text-purple-300 text-lg">⚡</span>
                </div>
                <span className="text-white font-medium text-lg">CA123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-lg">↓</span>
                <span className="text-green-400 font-semibold text-lg">$20.00</span>
              </div>
            </div>

            {/* Yesterday Deposit Item 2 */}
            <div className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-4 border border-purple-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-400/50">
                  <span className="text-purple-300 text-lg">⚡</span>
                </div>
                <span className="text-white font-medium text-lg">CA123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-lg">↓</span>
                <span className="text-green-400 font-semibold text-lg">$20.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DipositHistory
