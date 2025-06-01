import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import {
  ChevronDownIcon,
  FunnelIcon,
  RotateCcw,
  ArrowDownIcon,
  UserIcon,
} from 'lucide-react';
import axios from 'axios';

const DepositHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const state = location.state;

  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const jwt_token = localStorage.getItem('jwt_token');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('State:', state);
  console.log('Encrypted Wallet Address:', encryptedWalletAddress);
  console.log('JWT Token:', jwt_token);
  console.log('Base URL:', `${BASE_URL}/Transaction/${encryptedWalletAddress}/${state.reason}`);
 
  const fetchData = async () => {
    if (!encryptedWalletAddress || !state?.reason) return;

    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/Transaction/${encryptedWalletAddress}/${state.reason}`, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
        },
      });
      setData(res.data.transaction.data || []);
      console.log('Transaction data:', res.data);
    } catch (err) {
      console.error('Error fetching transaction data:', err);
      setError('Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [encryptedWalletAddress, state?.reason]);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">

      {/* Blur Background Circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Back Button & Title Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4 px-6 mt-6">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center text-white">Deposit Report</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Date Selector */}
      <div className="w-full max-w-4xl px-6 mb-4 relative z-10 mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#7033EA] text-white rounded-full px-4 py-1 space-x-2 shadow-md">
            <span className="text-sm font-medium">22/05/2025</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-4">
            <RotateCcw className="w-5 h-5 text-white" />
            <FunnelIcon className="w-5 h-5 text-fuchsia-500" />
          </div>
        </div>
      </div>

      {/* List Container */}
      <div className="w-full max-w-4xl px-6 space-y-3 mb-10">
        { error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : data.length === 0 ? (
          <p className="text-white text-center">No transactions found.</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
                  <UserIcon className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white text-sm font-semibold">{item.id}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-[#2c2d31]">
                  <UserIcon className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white text-sm font-semibold">{item.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ArrowDownIcon className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-bold text-sm">{item.amount}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DepositHistory;
