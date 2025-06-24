import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import axios from "axios";

const TeamReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const encryptedWalletAddress = localStorage.getItem("encryptedWalletAddress");
  const jwt_token = localStorage.getItem("jwt_token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("team");

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "direct") {
      fetchData();
    }
  }, [activeTab]);

  const staticTeamMembers = [
    { name: "Kunal", date: "5 June", code: "CAI20609", status: "Active" },
    { name: "Reena", date: "3 June", code: "CAI20639", status: "Active" },
    { name: "Mukesh", date: "2 June", code: "CAI23609", status: "Active" },
  ];

  const staticDirectMembers = [
    { name: "Kunal", date: "5 May", code: "CAI20609", status: "Active" },
    { name: "Meena", date: "4 May", code: "CAI20699", status: "Active" },
    { name: "Mukesh", date: "2 May", code: "CAI23609", status: "Active" },
    { name: "Rahul", date: "2 May", code: "CAI13609", status: "Active" },
  ];

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
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            className="w-12 h-12 flex items-center justify-center text-white"
            onClick={fetchData}
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
                style={{ backgroundColor: "#08001a" }}
                className="appearance-none text-white text-sm font-semibold px-6 py-2 pr-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full hover:brightness-110"
              >
                <option className="text-white">Level : All</option>
                <option className="text-white">Level : 1</option>
                <option className="text-white">Level : 2</option>
                <option className="text-white">Level : 3</option>
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
        {(activeTab === "team" ? staticTeamMembers : staticDirectMembers).map(
          (member, idx) => (
            <div
              key={idx}
              className="flex items-center rounded-lg px-4 py-2 shadow-sm bg-white/10 backdrop-blur-sm w-full"
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
                <p className="text-green-400 text-sm font-medium">
                  {member.status}
                </p>
              </div>
            </div>
          )
        )}
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
