import React, { useState } from 'react';
import { ChevronLeft, ArrowUpDown, ChevronRight } from 'lucide-react';

import EarningBanner from '../assets/Images/earning-banner.png';

export default function EarningsScreen() {
  const [activeTab, setActiveTab] = useState('USDT');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] text-white max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <ChevronLeft className="w-6 h-6 text-white" />
        <h1 className="text-white text-xl font-semibold">Earnings</h1>
        <div></div>
      </div>

    <div className='mx-4 mb-6'>
        <img src={EarningBanner} alt="Earnings Banner" className="w-full h-32 object-cover rounded-2xl mb-4" />
    </div>
      {/* Track earnings banner */}
      {/* <div className="mx-4 mb-6 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl p-4 border border-purple-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold mb-1">Track your DAIR &</h2>
            <p className="text-white text-lg font-semibold mb-3">USDT earnings in</p>
            <p className="text-white text-lg font-semibold mb-4">real-time</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              Join Now
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-900">D</span>
            </div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-900">D</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Earnings cards */}
      <div className="grid grid-cols-2 gap-4 mx-4 mb-6">
        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-yellow-900">D</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">DAIR</p>
              <p className="text-gray-400 text-xs">Earnings</p>
            </div>
          </div>
          <p className="text-white text-xl font-bold">$403500.00</p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">USDT</p>
              <p className="text-gray-400 text-xs">Earnings</p>
            </div>
          </div>
          <p className="text-white text-xl font-bold">$404800.00</p>
        </div>
      </div>

      {/* Total USDT */}
      <div className="mx-4 mb-6 bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span className="text-white text-lg font-medium">Total USDT</span>
        </div>
        <span className="text-white text-lg font-bold">$404800.00</span>
      </div>

      {/* Tab buttons */}
      <div className="mx-4 mb-4 flex rounded-xl overflow-hidden">
        <button 
          onClick={() => setActiveTab('DAIR')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'DAIR' 
              ? 'bg-gray-600 text-white' 
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          DAIR Token
        </button>
        <button 
          onClick={() => setActiveTab('USDT')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'USDT' 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          USDT
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="mx-4 mb-6">
        <h3 className="text-white text-lg font-semibold mb-4">Recent Transactions</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-yellow-900">CA</span>
              </div>
              <div>
                <p className="text-white font-medium">CA110504</p>
                <p className="text-gray-400 text-sm">4 June 06:00 PM</p>
              </div>
            </div>
            <div className="flex items-center text-green-400">
              <ArrowUpDown className="w-4 h-4 mr-1" />
              <span className="font-medium">$2035.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-yellow-900">CA</span>
              </div>
              <div>
                <p className="text-white font-medium">CA110503</p>
                <p className="text-gray-400 text-sm">4 June 03:02 PM</p>
              </div>
            </div>
            <div className="flex items-center text-green-400">
              <ArrowUpDown className="w-4 h-4 mr-1" />
              <span className="font-medium">$2035.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-yellow-900">CA</span>
              </div>
              <div>
                <p className="text-white font-medium">CA110504</p>
                <p className="text-gray-400 text-sm">1 June 04:03 PM</p>
              </div>
            </div>
            <div className="flex items-center text-green-400">
              <ArrowUpDown className="w-4 h-4 mr-1" />
              <span className="font-medium">$2035.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 pb-8">
        <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <button className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-medium">
          1
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center text-sm">
          2
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}