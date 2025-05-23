import React from 'react';
import { ChevronDownIcon, FunnelIcon, RotateCcw } from 'lucide-react';
import { ArrowDownIcon } from 'lucide-react';
import { UserIcon } from 'lucide-react';

const DipositHistory = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">

      {/* Blur Background Circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full flex justify-center mt-6">
        <h1 className="text-white text-2xl font-bold">Deposit History</h1>
      </div>

      {/* Date Selector */}
      <div className="w-full max-w-4xl px-6 mt-6 mb-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Date Picker */}
          <div className="flex items-center bg-[#7033EA] text-white rounded-full px-4 py-1 space-x-2 shadow-md">
            <span className="text-sm font-medium">22/05/2025</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <RotateCcw className="w-5 h-5 text-white" />
            <FunnelIcon className="w-5 h-5 text-fuchsia-500" />
          </div>
        </div>
      </div>

      {/* List Container - Full Width */}
      <div className="w-full max-w-4xl px-6 space-y-3 mb-10">
        {/* List Item 1 */}
        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
              <UserIcon className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-white text-sm font-semibold">CA123456</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowDownIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold text-sm">$20.00</span>
          </div>
        </div>

        {/* List Item 2 */}
        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
              <UserIcon className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-white text-sm font-semibold">CA789012</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowDownIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold text-sm">$50.00</span>
          </div>
        </div>

        {/* List Item 3 */}
        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
              <UserIcon className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-white text-sm font-semibold">CA345678</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowDownIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold text-sm">$100.00</span>
          </div>
        </div>

        {/* List Item 4 */}
        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
              <UserIcon className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-white text-sm font-semibold">CA901234</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowDownIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold text-sm">$75.00</span>
          </div>
        </div>

        {/* List Item 5 */}
        <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
              <UserIcon className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-white text-sm font-semibold">CA567890</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowDownIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold text-sm">$30.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DipositHistory;