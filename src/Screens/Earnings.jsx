// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { ChevronLeft, ArrowUpDown, ChevronRight } from 'lucide-react';

// import EarningBanner from '../assets/Images/earning-banner.png';
// import DLogo from '../assets/Images/Earning/dlogo.png'
// import USDT from '../assets/Images/Earning/usdt.png'

// export default function EarningsScreen() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('USDT');

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] text-white w-full mx-auto  pb-6">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 pt-6" onClick={() => navigate(-1)}>
//         <ChevronLeft className="w-6 h-6 text-white" />
//         <h1 className="text-white text-xl font-semibold">Earnings</h1>
//         <div></div>
//       </div>

//       <div className='mx-4 mb-6'>
//         <img src={EarningBanner} alt="Earnings Banner" className="w-full object-cover rounded-2xl mb-4" />
//       </div>

//       {/* Earnings cards */}
//       <div className="grid grid-cols-2 gap-4 mx-4 mb-6">
//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img src={DLogo} alt="DAIR Logo" className="w-10 h-10 rounded-full mr-3" />
//             </div>
//             <div>
//               <p className="text-white text-[17px] font-medium">DAIR</p>
//               <p className="text-white text-[17px] font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$403500.00</p>
//         </div>

//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img src={USDT} alt="DAIR Logo" className="w-10 h-10 rounded-full mr-3" />
//             </div>
//             <div>
//               <p className="text-white text-[17px] font-medium">USDT</p>
//               <p className="text-white text-[17px] font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$404800.00</p>
//         </div>
//       </div>

//       {/* Total USDT */}
//       <div className="mb-6 bg-[#0F0F0F09] px-4 py-2 border border-[#FFFFFF25] flex items-center justify-between">
//         <div className="flex items-center">
//           <div>
//             <img src={USDT} alt="DAIR Logo" className="w-7 h-7 rounded-full mr-3" />
//           </div>
//           <span className="text-white text-lg font-medium">Total USDT</span>
//         </div>
//         <span className="bg-[#100036] py-1 px-4 rounded-lg text-white text-lg font-bold">$404800.00</span>
//       </div>
//       <div className='bg-[#00000033] mx-4 px-1 py-4 rounded-xl border border-[#134D61]'>
//         {/* Tab buttons */}
//         <div className="mx-4 mb-4 flex overflow-hidden gap-2">
//           <button
//             onClick={() => setActiveTab('DAIR')}
//             className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'DAIR'
//               ? 'bg-white text-[#3C3A60]'
//               : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//               }`}
//           >
//             DAIR Token
//           </button>
//           <button
//             onClick={() => setActiveTab('USDT')}
//             className={`flex-1 py-2 text-center font-medium rounded-md ${activeTab === 'USDT'
//               ? 'bg-white text-[#3C3A60]'
//               : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//               }`}
//           >
//             USDT
//           </button>
//         </div>

//         {/* Recent Transactions */}
//         <div className="mx-4 mb-6">
//           <h3 className="text-white text-lg font-semibold mb-3">Recent Transactions</h3>
//           <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

//           <div className="space-y-4">
//             {activeTab === 'DAIR' ? (
//               // DAIR Transactions
//               <>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">CA110504</p>
//                       <p className="text-gray-400 text-sm">4 June 06:00 PM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$2035.00</span>
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">CA110503</p>
//                       <p className="text-gray-400 text-sm">4 June 03:02 PM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$2035.00</span>
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={DLogo} alt="DAIR Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">CA110504</p>
//                       <p className="text-gray-400 text-sm">1 June 04:03 PM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$2035.00</span>
//                   </div>
//                 </div>
//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>
//               </>
//             ) : (
//               // USDT Transactions
//               <>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">UT220104</p>
//                       <p className="text-gray-400 text-sm">5 June 08:30 AM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$1850.00</span>
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">UT220103</p>
//                       <p className="text-gray-400 text-sm">5 June 02:15 PM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$2240.00</span>
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div>
//                       <img src={USDT} alt="USDT Logo" className="w-8 h-8 rounded-full mr-3" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">UT220102</p>
//                       <p className="text-gray-400 text-sm">3 June 11:45 AM</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-green-400">
//                     <ArrowUpDown className="w-4 h-4 mr-1" />
//                     <span className="font-medium text-white">$1950.00</span>
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-gradient-to-br from-[#06124a00] via-[#3D3E67] to-[#06124a00]"></div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center space-x-2 pt-4">
//           <button className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center">
//             <ChevronLeft className="w-4 h-4 text-gray-400" />
//           </button>
//           <button className="w-8 h-8 rounded-md bg-purple-600 border border-[#4466F3] text-white flex items-center justify-center text-sm font-medium">
//             1
//           </button>
//           <button className="w-8 h-8 rounded-md border border-[#4466F3] text-gray-400 flex items-center justify-center text-sm">
//             2
//           </button>
//           <button className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center">
//             <ChevronRight className="w-4 h-4 text-gray-400" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ArrowUpDown, ChevronRight } from "lucide-react";

import EarningBanner from "../assets/Images/earning-banner.png";
import DLogo from "../assets/Images/Earning/dlogo.png";
import USDT from "../assets/Images/Earning/usdt.png";

export default function EarningsScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("USDT");

  const transactionData = {
    DAIR: [
      { id: "CA110504", date: "4 June 06:00 PM", amount: "$2035.00", logo: DLogo },
      { id: "CA110503", date: "4 June 03:02 PM", amount: "$2035.00", logo: DLogo },
      { id: "CA110504", date: "1 June 04:03 PM", amount: "$2035.00", logo: DLogo },
    ],
    USDT: [
      { id: "UT220104", date: "5 June 08:30 AM", amount: "$1850.00", logo: USDT },
      { id: "UT220103", date: "5 June 02:15 PM", amount: "$2240.00", logo: USDT },
      { id: "UT220102", date: "3 June 11:45 AM", amount: "$1950.00", logo: USDT },
    ],
  };

  const TransactionItem = ({ id, date, amount, logo }) => (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full mr-3" />
          <div>
            <p className="text-white font-medium">{id}</p>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
        </div>
        <div className="flex items-center text-green-400">
          <ArrowUpDown className="w-4 h-4 mr-1" />
          <span className="font-medium text-white">{amount}</span>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-br from-transparent via-[#3D3E67] to-transparent"></div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] text-white w-full mx-auto pb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6" onClick={() => navigate(-1)}>
        <ChevronLeft className="w-6 h-6 text-white" />
        <h1 className="text-xl font-semibold">Earnings</h1>
        <div />
      </div>

      {/* Banner */}
      <div className="mx-4 mb-6">
        <img src={EarningBanner} alt="Earnings Banner" className="w-full rounded-2xl mb-4" />
      </div>

      {/* Earnings Cards */}
      <div className="grid grid-cols-2 gap-4 mx-4 mb-6">
        {[
          { name: "DAIR", amount: "$403500.00", logo: DLogo },
          { name: "USDT", amount: "$404800.00", logo: USDT },
        ].map((item) => (
          <div key={item.name} className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
            <div className="flex items-center mb-3">
              <img src={item.logo} className="w-10 h-10 rounded-full mr-3" alt={`${item.name} Logo`} />
              <div>
                <p className="text-[17px] font-medium">{item.name}</p>
                <p className="text-[17px] font-medium">Earnings</p>
              </div>
            </div>
            <p className="text-xl">{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Total USDT */}
      <div className="mb-6 bg-[#0F0F0F09] px-4 py-2 border border-[#FFFFFF25] flex items-center justify-between">
        <div className="flex items-center">
          <img src={USDT} alt="USDT Logo" className="w-7 h-7 rounded-full mr-3" />
          <span className="text-lg font-medium">Total USDT</span>
        </div>
        <span className="bg-[#100036] py-1 px-4 rounded-lg text-lg font-bold">$404800.00</span>
      </div>

      {/* Tabs + Transactions */}
      <div className="bg-[#00000033] mx-4 px-1 py-4 rounded-xl border border-[#134D61]">
        
        {/* Tabs */}
        <div className="mx-4 mb-4 flex gap-2">
          {["DAIR", "USDT"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 font-medium rounded-md ${
                activeTab === tab
                  ? "bg-white text-[#3C3A60]"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="mx-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>
          <div className="w-full h-px bg-gradient-to-br from-transparent via-[#3D3E67] to-transparent mb-3"></div>

          <div className="space-y-4">
            {transactionData[activeTab].map((tx) => (
              <TransactionItem key={tx.id + tx.date} {...tx} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 pt-4">
          <button className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-8 h-8 rounded-md bg-purple-600 border border-[#4466F3] text-white text-sm font-medium flex items-center justify-center">
            1
          </button>
          <button className="w-8 h-8 rounded-md border border-[#4466F3] text-gray-400 text-sm flex items-center justify-center">
            2
          </button>
          <button className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
