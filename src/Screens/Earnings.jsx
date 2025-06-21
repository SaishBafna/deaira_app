import React, { useState } from 'react';
import { ChevronLeft, ArrowUpDown, ChevronRight } from 'lucide-react';

import EarningBanner from '../assets/Images/earning-banner.png';
import DLogo from '../assets/Images/Earning/dlogo.png'
import USDT from '../assets/Images/Earning/usdt.png'

export default function EarningsScreen() {
  const [activeTab, setActiveTab] = useState('USDT');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] text-white w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <ChevronLeft className="w-6 h-6 text-white" />
        <h1 className="text-white text-xl font-semibold">Earnings</h1>
        <div></div>
      </div>

      <div className='mx-4 mb-6'>
        <img src={EarningBanner} alt="Earnings Banner" className="w-full h-32 object-cover rounded-2xl mb-4" />
      </div>

      {/* Earnings cards */}
      <div className="grid grid-cols-2 gap-4 mx-4 mb-6">
        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
          <div className="flex items-center mb-3">
            <div>
              <img src={DLogo} alt="DAIR Logo" className="w-10 h-10 rounded-full mr-3" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">DAIR</p>
              <p className="text-white text-sm font-medium">Earnings</p>
            </div>
          </div>
          <p className="text-white text-xl">$403500.00</p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
          <div className="flex items-center mb-3">
            <div>
              <img src={USDT} alt="DAIR Logo" className="w-10 h-10 rounded-full mr-3" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">USDT</p>
              <p className="text-white text-sm font-medium">Earnings</p>
            </div>
          </div>
          <p className="text-white text-xl">$404800.00</p>
        </div>
      </div>

      {/* Total USDT */}
      <div className="mx-4 mb-6 bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img src={USDT} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
          </div>
          <span className="text-white text-lg font-medium">Total USDT</span>
        </div>
        <span className="text-white text-lg font-bold">$404800.00</span>
      </div>

      {/* Tab buttons */}
      <div className="mx-4 mb-4 flex overflow-hidden gap-2">
        <button
          onClick={() => setActiveTab('DAIR')}
          className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'DAIR'
            ? 'bg-white text-[#3C3A60]'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            }`}
        >
          DAIR Token
        </button>
        <button
          onClick={() => setActiveTab('USDT')}
          className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'USDT'
            ? 'bg-white text-[#3C3A60]'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            }`}
        >
          USDT
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="mx-4 mb-6">
        <h3 className="text-white text-lg font-semibold mb-4">Recent Transactions</h3>

        <div className="space-y-4">
          {activeTab === 'DAIR' ? (
            // DAIR Transactions
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">CA110504</p>
                    <p className="text-gray-400 text-sm">4 June 06:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$2035.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">CA110503</p>
                    <p className="text-gray-400 text-sm">4 June 03:02 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$2035.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">CA110504</p>
                    <p className="text-gray-400 text-sm">1 June 04:03 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$2035.00</span>
                </div>
              </div>
            </>
          ) : (
            // USDT Transactions
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">UT220104</p>
                    <p className="text-gray-400 text-sm">5 June 08:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$1850.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">UT220103</p>
                    <p className="text-gray-400 text-sm">5 June 02:15 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$2240.00</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
                  </div>
                  <div>
                    <p className="text-white font-medium">UT220102</p>
                    <p className="text-gray-400 text-sm">3 June 11:45 AM</p>
                  </div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  <span className="font-medium text-white">$1950.00</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 pb-8">
        <button className="w-8 h-8 rounded-md border border-gray-600 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <button className="w-8 h-8 rounded-md bg-purple-600 text-white flex items-center justify-center text-sm font-medium">
          1
        </button>
        <button className="w-8 h-8 rounded-md border border-gray-600 text-gray-400 flex items-center justify-center text-sm">
          2
        </button>
        <button className="w-8 h-8 rounded-md border border-gray-600 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}











// import React, { useState } from 'react';
// import { ChevronLeft, ArrowUpDown, ChevronRight } from 'lucide-react';

// import EarningBanner from '../assets/Images/earning-banner.png';
// import DLogo from '../assets/Images/Earning/dlogo.png'
// import USDT from '../assets/Images/Earning/usdt.png'

// export default function EarningsScreen() {
//   const [activeTab, setActiveTab] = useState('USDT');

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] text-white w-full mx-auto">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 pt-6">
//         <ChevronLeft className="w-6 h-6 text-white" />
//         <h1 className="text-white text-xl font-semibold">Earnings</h1>
//         <div></div>
//       </div>

//       <div className='mx-4 mb-6'>
//         <img src={EarningBanner} alt="Earnings Banner" className="w-full h-32 object-cover rounded-2xl mb-4" />
//       </div>

//       {/* Earnings cards */}
//       <div className="grid grid-cols-2 gap-4 mx-4 mb-6">
//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//             </div>
//             <div>
//               <p className="text-white text-sm font-medium">DAIR</p>
//               <p className="text-white text-sm font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$403500.00</p>
//         </div>

//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img src={USDT} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//             </div>
//             <div>
//               <p className="text-white text-sm font-medium">USDT</p>
//               <p className="text-white text-sm font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$404800.00</p>
//         </div>
//       </div>

//       {/* Total USDT */}
//       <div className="mx-4 mb-6 bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50 flex items-center justify-between">
//         <div className="flex items-center">
//           <div>
//             <img src={USDT} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//           </div>
//           <span className="text-white text-lg font-medium">Total USDT</span>
//         </div>
//         <span className="text-white text-lg font-bold">$404800.00</span>
//       </div>

//       {/* Tab buttons */}
//       <div className="mx-4 mb-4 flex overflow-hidden gap-2">
//         <button
//           onClick={() => setActiveTab('DAIR')}
//           className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'DAIR'
//             ? 'bg-white text-[#3C3A60]'
//             : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//             }`}
//         >
//           DAIR Token
//         </button>
//         <button
//           onClick={() => setActiveTab('USDT')}
//           className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'USDT'
//             ? 'bg-white text-[#3C3A60]'
//             : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//             }`}
//         >
//           USDT
//         </button>
//       </div>

//       {/* Recent Transactions */}
//       <div className="mx-4 mb-6">
//         <h3 className="text-white text-lg font-semibold mb-4">Recent Transactions</h3>

//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div>
//                 <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//               </div>
//               <div>
//                 <p className="text-white font-medium">CA110504</p>
//                 <p className="text-gray-400 text-sm">4 June 06:00 PM</p>
//               </div>
//             </div>
//             <div className="flex items-center text-green-400">
//               <ArrowUpDown className="w-4 h-4 mr-1" />
//               <span className="font-medium text-white">$2035.00</span>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div>
//                 <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//               </div>
//               <div>
//                 <p className="text-white font-medium">CA110503</p>
//                 <p className="text-gray-400 text-sm">4 June 03:02 PM</p>
//               </div>
//             </div>
//             <div className="flex items-center text-green-400">
//               <ArrowUpDown className="w-4 h-4 mr-1" />
//               <span className="font-medium text-white">$2035.00</span>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div>
//                 <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//               </div>
//               <div>
//                 <p className="text-white font-medium">CA110504</p>
//                 <p className="text-gray-400 text-sm">1 June 04:03 PM</p>
//               </div>
//             </div>
//             <div className="flex items-center text-green-400">
//               <ArrowUpDown className="w-4 h-4 mr-1" />
//               <span className="font-medium text-white">$2035.00</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-center space-x-2 pb-8">
//         <button className="w-8 h-8 rounded-md border border-gray-600 flex items-center justify-center">
//           <ChevronLeft className="w-4 h-4 text-gray-400" />
//         </button>
//         <button className="w-8 h-8 rounded-md bg-purple-600 text-white flex items-center justify-center text-sm font-medium">
//           1
//         </button>
//         <button className="w-8 h-8 rounded-md border border-gray-600 text-gray-400 flex items-center justify-center text-sm">
//           2
//         </button>
//         <button className="w-8 h-8 rounded-md border border-gray-600 flex items-center justify-center">
//           <ChevronRight className="w-4 h-4 text-gray-400" />
//         </button>
//       </div>
//     </div>
//   );
// }