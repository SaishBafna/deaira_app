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

const TeamReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const state = location.state;

  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const jwt_token = localStorage.getItem('jwt_token');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/my_directs/${encryptedWalletAddress}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      console.error('Error fetching team data:', err);
      setError('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [encryptedWalletAddress]);

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
        <h1 className="text-2xl font-bold text-center text-white">Team Report</h1>
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
            <RotateCcw className="w-5 h-5 text-white" onClick={fetchData} />
            <FunnelIcon className="w-5 h-5 text-fuchsia-500" />
          </div>
        </div>
      </div>

      {/* List Container */}
      <div className="w-full max-w-4xl px-6 space-y-3 mb-10">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-white text-center">No team members found.</p>
        ) : (
          data.map((member, index) => (
            <div
              key={index}
              className="w-full bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm"
            >
              <div className="">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    {/* <span className="text-white text-sm font-semibold">{member.first_name}</span> */}
                    <span className="text-gray-400 text-xs">{member.email}</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                    <div className="flex justify-between items-end text-white text-sm">
                    {formatDate(member.joining_date)}
                  </div>
                  <div className="flex justify-between items-start text-white text-sm">
                    {member.is_active ? (
                      <span className="text-green-500">Active</span>
                    ) : (
                      <span className="text-red-500">Inactive</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TeamReport;