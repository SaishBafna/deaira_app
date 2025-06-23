import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { IoSearchOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import axios from 'axios';

const TeamReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const jwt_token = localStorage.getItem('jwt_token');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("team"); // "team" or "direct"

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
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
      if (response.data) setData(response.data);
    } catch (err) {
      console.error('Error fetching team data:', err);
      setError('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "direct") {
      fetchData();
    }
  }, [activeTab]);

  // Static Members for My Team Tab
  const staticTeamMembers = [
    { name: "Kunal", date: "5 June", code: "CAI20609", status: "Active" },
    { name: "Reena", date: "3 June", code: "CAI20639", status: "Active" },
    { name: "Mukesh", date: "2 June", code: "CAI23609", status: "Active" }
  ];

  // Static Members for My Direct Tab (Replaces API data for now as per your request)
  const staticDirectMembers = [
    { name: "Kunal", date: "5 June", code: "CAI20609", status: "Active" },
    { name: "Meena", date: "4 June", code: "CAI20699", status: "Active" },
    { name: "Mukesh", date: "2 June", code: "CAI23609", status: "Active" },
    { name: "Rahul", date: "2 June", code: "CAI13609", status: "Active" }
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">
      
      {/* Background Glow Circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between px-6 mt-6 mb-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white font-bold" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
        </button>
        <h1 className="text-3xl font-bold text-white">Team</h1>
        <div className="w-10" />
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 p-4">
        <button
          onClick={() => setActiveTab("team")}
          className={`px-10 py-2 rounded-lg shadow font-semibold ${
            activeTab === "team"
              ? "bg-white text-gray-900"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          My Team
        </button>
        <button
          onClick={() => setActiveTab("direct")}
          className={`px-10 py-2 rounded-lg shadow font-semibold ${
            activeTab === "direct"
              ? "bg-gradient-to-r from-teal-400 to-fuchsia-500 text-white"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          My Direct
        </button>
      </div>

      {/* Search + Refresh */}
      <div className="w-full flex justify-center px-6 ml-[10px]">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full max-w-6xl">
          <IoSearchOutline className="w-5 h-5 text-purple-900 mr-2" />
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <button
          className="text-white hover:text-white/90 transition ml-4"
          onClick={fetchData}
        >
          <TbRefresh className="w-6 h-6" />
        </button>
      </div>

      {/* Date + Level */}
      <div className="w-full max-w-6xl px-6 mt-4">
        <div className="flex items-center justify-between px-4 py-2 bg-black-to-r from-black-900 to-purple-900 rounded-md">
          <div>
            <p className="text-sm text-white">2025</p>
            <p className="text-lg font-bold text-white">
              {activeTab === "team" ? "June" : "May"}
            </p>
          </div>
          {activeTab === "team" && (
            <div>
              <select className="bg-black text-white font-small px-5 py-2 rounded-md shadow focus:outline-none">
                <option>Level : All</option>
                <option>Level : 1</option>
                <option>Level : 2</option>
                <option>Level : 3</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Member Cards */}
      <div className="space-y-3 px-4 py-4 w-full max-w-4xl">
        {(activeTab === "team" ? staticTeamMembers : staticDirectMembers).map((member, idx) => (
          <div
            key={idx}
            className="flex items-center rounded-lg px-4 py-2 shadow-sm w-full"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center mr-4">
              {member.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-base">{member.name}</p>
              <p className="text-gray-300 text-sm">{member.date}</p>
            </div>
            <div className="text-right">
              <p className="text-white text-sm font-medium">{member.code}</p>
              <p className="text-green-400 text-sm font-medium">{member.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 py-6">
        <button className="px-3 py-1 rounded border border-purple-500 text-white hover:bg-purple-800">
          &lt;
        </button>
        <button className="px-3 py-1 rounded bg-purple-700 text-white border border-purple-500">
          1
        </button>
        <button className="px-3 py-1 rounded border border-purple-500 text-white hover:bg-purple-800">
          2
        </button>
        <button className="px-3 py-1 rounded border border-purple-500 text-white hover:bg-purple-800">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TeamReport;
