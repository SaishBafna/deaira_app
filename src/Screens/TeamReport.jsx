import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WalletContext } from "../context/walletcontext";
import { FiChevronLeft } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const TeamReport = () => {
  const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const encryptedWalletAddress = localStorage.getItem("encryptedWalletAddress");
  const jwt_token = localStorage.getItem("jwt_token");

  const [data, setData] = useState([]);
  const [downlineData, setDownlineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("team");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Transaction Popup States
  const [showTransactionPopup, setShowTransactionPopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

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
      console.error("Error fetching team data:", err);
      setError("Failed to fetch team members");
      try {
        await disconnectWallet();
        navigate('/register');
      } catch (disconnectError) {
        console.error("Error disconnecting wallet:", disconnectError);
        navigate('/register');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const fetchDownlineData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/my_downline1/${encryptedWalletAddress}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      if (response.data) setDownlineData(response.data);
    } catch (err) {
      console.error("Error fetching team data:", err);
      setError("Failed to fetch team members");

      try {
        await disconnectWallet();
        navigate('/register');
      } catch (disconnectError) {
        console.error("Error disconnecting wallet:", disconnectError);
        navigate('/register');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowTransactionPopup(true);
  };

  useEffect(() => {
    if (activeTab === "direct") {
      fetchData();
    } else if (activeTab === "team") {
      fetchDownlineData();
    }
  }, [activeTab]);

  // Format member data to match the original layout expectations
  const formatMemberData = (members) => {
    return members.map(member => {
      // For team data (downline)
      if (member.user_id) {
        return {
          ...member,
          name: member.first_name || member.unique_id || 'Not Set',
          date: member.joining_date ? new Date(member.joining_date).toLocaleDateString() : "N/A",
          code: `L${member.level || 1}`,
          status: member.is_active === 'active' ? 'Active' : 'Inactive',
          level: member.level || 1,
          transactionId: `CAI${member.user_id || Date.now().toString().slice(-5)}`,
          unique_id: member.unique_id || 'Not Found',
          email: member.user_id || 'Not Found',
          amount: member.total_investment || member.package_amount || '$0'
        };
      }
      // For direct data
      else {
        return {
          ...member,
          name: member.first_name || member.unique_id || 'Not Set',
          date: member.joining_date ? new Date(member.joining_date).toLocaleDateString() : "N/A", 
          code: member.rank || "Not Achieved",
          status: member.is_active === 'active' ? 'Active' : 'Inactive',
          level: 1, // Direct members are level 1
          transactionId: `CAI${member.id || Date.now().toString().slice(-5)}`,
          unique_id: member.unique_id || 'Not Found',
          email: member.email || 'Not Found',
          amount: member.total_investment || member.package_amount || '$0'
        };
      }
    });
  };

  // Filter members based on search and level
  const filterMembers = (members) => {
    let filtered = members;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by level (only for team tab)
    if (activeTab === "team" && selectedLevel !== "all") {
      const levelNum = parseInt(selectedLevel);
      filtered = filtered.filter(member => member.level === levelNum);
    }

    return filtered;
  };

  const currentMembers = activeTab === "team" 
    ? filterMembers(formatMemberData(downlineData))
    : filterMembers(formatMemberData(data));

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">
      {/* Background Glow Circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none -z-10"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none -z-10"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="w-full max-w-4xl relative px-6 mt-6 mb-4">
        {/* Back Button */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-3 text-white font-bold px-2 py-2"
          onClick={() => navigate(-1)}
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Centered Title */}
        <h1 className="text-3xl font-bold text-white text-center">Team</h1>

        {/* Right Spacer to Balance */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6" />
      </div>

      {/* Tabs & Search */}
      <div className="w-full max-w-4xl flex flex-col gap-4 px-4 mt-2">
        {/* Tabs */}
        <div className="flex w-full gap-4">
          <button
            onClick={() => setActiveTab("team")}
            className={`flex-1 py-2 rounded-lg shadow font-semibold ${activeTab === "team"
              ? "bg-white text-[#3C3A60] text-[18px]"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-[#fff] text-[14px]"
              }`}
          >
            My Team
          </button>
          <button
            onClick={() => setActiveTab("direct")}
            className={`flex-1 py-2 rounded-lg shadow font-semibold ${activeTab === "direct"
              ? "bg-white text-[#3C3A60] text-[18px]"
              : "bg-gradient-to-r from-blue-500 to-purple-500 text-[#fff] text-[14px]"
              }`}
          >
            My Direct
          </button>
        </div>

        {/* Search & Refresh */}
        <div className="flex w-full items-center gap-3">
          <div className="flex items-center bg-white rounded-lg px-4 py-3 flex-1 shadow">
            <IoSearchOutline className="w-6 h-6 text-purple-900 mr-2" />
            <input
              type="text"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            className="w-12 h-12 flex items-center justify-center text-white"
            onClick={activeTab === "direct" ? fetchData : fetchDownlineData}
          >
            <TbRefresh className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Date + Level */}
      <div className="w-full max-w-4xl mt-5">
        <div className="flex flex-wrap items-center justify-between px-4 py-2 gap-3 border border-[#FFFFFF40] bg-[#0F0F0F09]">
          <div>
            <p className="text-sm text-white">2025</p>
            <p className="text-lg font-bold text-white">
              {activeTab === "team" ? "June" : "May"}
            </p>
          </div>

          {activeTab === "team" && (
            <div className="relative inline-block w-[120px]">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                style={{ backgroundColor: "#08001a" }}
                className="appearance-none text-white text-sm font-semibold px-6 py-2 pr-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full hover:brightness-110"
              >
                <option value="all" className="text-white">Level : All</option>
                <option value="1" className="text-white">Level : 1</option>
                <option value="2" className="text-white">Level : 2</option>
                <option value="3" className="text-white">Level : 3</option>
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Member Cards */}
      <div className="space-y-3 px-4 py-5 w-full max-w-4xl">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="text-white ml-3">Loading...</span>
          </div>
        ) : error ? (
          <>
          </>
        ) : currentMembers.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-white">No members found</p>
          </div>
        ) : (
          currentMembers.map((member, idx) => (
            <div
              key={idx}
              onClick={() => handleMemberClick(member)}
              className="flex items-center rounded-lg px-4 py-2 shadow-sm bg-white/10 backdrop-blur-sm w-full cursor-pointer hover:bg-white/20 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center mr-4">
                {member.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-base">
                  {member.name}
                </p>
                <p className="text-gray-300 text-xs">{member.date}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-medium">{member.code}</p>
                <p className={`text-sm font-medium ${member.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                  {member.status}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Transaction Details Popup */}
      {showTransactionPopup && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTransactionPopup(false)}
          ></div>
          
          {/* Popup Content */}
          <div className="relative bg-gradient-to-b from-[#290380] to-[#3200A6] border border-[#9D76A2] rounded-3xl shadow-2xl mx-4 w-full max-w-md p-8 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={() => setShowTransactionPopup(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Popup Header */}
            <div className="text-center mb-3">
              <h2 className="text-2xl font-bold text-white mb-4">Member Details</h2>
              <div className="w-full h-px bg-white/30 mb-6"></div>
            </div>

            {/* Member Info */}
            <div className="space-y-2 mb-8">
              {/* ID */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold">
                  Wallet Address: {selectedMember.email}
                </span>
              </div>
              {/* Unique ID */}
              {activeTab === "direct" && (
                <>
              {selectedMember.unique_id && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-semibold">
                    ID: {selectedMember.unique_id}
                  </span>
                </div>
              )}
              </>
            )}

              {/* Name */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className="text-white text-lg font-semibold">
                  Name: {selectedMember.name}
                </span>
              </div>

              {/* Amount */}
              {/* <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text-white text-lg font-semibold">
                  Amount: {selectedMember.amount}
                </span>
              </div> */}

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={selectedMember.status === 'Active' ? 'text-green-400' : 'text-red-400'}>
                    {selectedMember.status === 'Active' ? (
                      <>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22,4 12,14.01 9,11.01"></polyline>
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </>
                    )}
                  </svg>
                </div>
                <span className="text-white text-lg font-semibold">
                  Status: <span className={selectedMember.status === 'Active' ? 'text-green-400' : 'text-red-400'}>{selectedMember.status}</span>
                </span>
              </div>

              {/* Level (for team members) */}
              {activeTab === "team" && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M3 3h18v18H3zM9 9h6v6H9z"></path>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-semibold">
                    Level: {selectedMember.level}
                  </span>
                </div>
              )}

              {/* Date & Time */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <span className="text-white text-lg font-semibold">
                  Joining Date: {selectedMember.date}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-center">
            <button
              onClick={() => setShowTransactionPopup(false)}
              className="w-[130px] py-2 bg-gradient-to-b from-[#A800F7] to-[#E9ABFF34] text-white font-bold text-lg rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 border-2 border-white/30"
            >
              Close
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamReport;