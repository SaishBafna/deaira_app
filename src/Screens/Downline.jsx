import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import {
    ChevronDownIcon,
    FunnelIcon,
    RotateCcw,
    ArrowDownIcon,
    UserIcon,
    MailIcon,
    HashIcon,
    TrendingUpIcon,
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DownLine = () => {
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
    const jwt_token = localStorage.getItem('jwt_token');
    // State for user data from homepage API
    const [userData, setUserData] = useState(null);
    // State for direct team data
    const [directTeam, setDirectTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    // Fetch user data from homepage API
    const fetchUserData = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/homepageapi/${encryptedWalletAddress}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (!response.data?.user?.user) {
                throw new Error('Failed to fetch user data');
            }

            return response.data.user.user;
        } catch (err) {
            console.error('User data fetch error:', err);
            throw err;
        }
    };

    // Fetch direct team data
    const fetchDirectTeam = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/my_downline1/${encryptedWalletAddress}`, {
                headers: {
                    Authorization: `Bearer ${jwt_token}`,
                },
            });
            return response.data || [];
        } catch (err) {
            console.error('Direct team fetch error:', err);
            throw err;
        }
    };

    // Combined data fetching function
    const loadData = async () => {
        setLoading(true);
        setError(null);

        try {
            // First fetch user data
            const user = await fetchUserData();
            setUserData(user);

            // Then fetch direct team using user ID
            const team = await fetchDirectTeam(user.id);
            setDirectTeam(team);

        } catch (err) {
            console.error('API Error:', err);
            setError(err.response?.data?.message || err.message || 'Failed to load data');
            toast.error(err.response?.data?.message || 'Failed to load data');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    // Handle refresh
    const handleRefresh = () => {
        setRefreshing(true);
        loadData();
    };

    // Initial data load
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center">
            {/* Blur Background Circles */}
            <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
            <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
            <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

            {/* Back Button & Title Header */}
            <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4 px-6 mt-6">
                <button
                    className="flex items-center gap-2 text-white/80 hover:text-white"
                    onClick={() => navigate(-1)}
                >
                    <FiChevronLeft size={20} />
                    <span className="hidden sm:inline">Back</span>
                </button>
                <h1 className="text-2xl font-bold text-center text-white">DownLine Team</h1>
                <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Date Selector and Actions */}
            <div className="w-full max-w-4xl px-6 mb-4 relative z-10 mt-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center bg-[#7033EA] text-white rounded-full px-4 py-1 space-x-2 shadow-md">
                        <span className="text-sm font-medium">Today</span>
                        <ChevronDownIcon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={handleRefresh} disabled={refreshing}>
                            <RotateCcw className={`w-5 h-5 ${refreshing ? 'text-gray-500 animate-spin' : 'text-white'}`} />
                        </button>
                        <FunnelIcon className="w-5 h-5 text-fuchsia-500" />
                    </div>
                </div>
            </div>

            {/* User Info Summary */}
            {userData && (
                <div className="w-full max-w-4xl px-6 mb-4">
                    <div className="bg-[#0f0f11] rounded-lg p-4 border border-[#2c2d31]">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-400 text-sm">Your ID</p>
                                <p className="text-white font-medium">{userData.id}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Direct Team</p>
                                <p className="text-white font-medium">{directTeam.length} members</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* List Container */}
            <div className="w-full max-w-4xl px-6 space-y-4 mb-10">
                {loading && !refreshing ? (
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : directTeam.length === 0 ? (
                    <p className="text-white text-center">No team members found.</p>
                ) : (
                    directTeam.map((member, index) => (
                        <div
                            key={index}
                            className="w-full bg-gradient-to-r from-[#0f0f23] via-[#101127] to-[#0f0f23] rounded-2xl p-5 border border-[#2c2d3f] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/30"
                        >
                            {/* Header Section */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                        <UserIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg font-semibold">
                                            {member.first_name || `Member ${index + 1}`}
                                        </h3>
                                        <div className="flex items-center space-x-1 text-purple-400">
                                            <HashIcon className="w-3 h-3" />
                                            <span className="text-sm">{member.first_name || `user_${index + 1}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 bg-green-500/10 rounded-lg px-3 py-1">
                                    <TrendingUpIcon className="w-4 h-4 text-green-400" />
                                    <span className="text-green-400 font-bold text-sm">
                                        {member.email1 || '0'}
                                    </span>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="bg-[#1a1a2e] p-4 rounded-xl shadow-inner w-full">
                                {/* Email Section */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-400 text-xs uppercase tracking-wide">Wallet Address</span>
                                    </div>
                                    <div className="relative group w-fit">
                                        <p className="text-white text-sm font-medium truncate max-w-[150px]">
                                            <span className="group-hover:hidden">
                                                {member.sponcer_id.slice(0, 4)}...{member.sponcer_id.slice(-4)}
                                            </span>
                                            <span className="hidden group-hover:inline">
                                                {member.sponcer_id}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Level Section */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <ArrowDownIcon className="w-5 h-5 text-yellow-400" />
                                        <span className="text-gray-400 text-xs uppercase tracking-wide">Level</span>
                                    </div>
                                    <p className="text-white text-sm font-semibold">{member.level}</p>
                                </div>
                            </div>

                            {/* Status & Join Date */}
                            <div className="mt-4 flex justify-between items-center">
                                
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`text-sm font-medium ${member?.is_active === 'inactive' ? 'text-red-400' : 'text-green-400'
                                            }`}
                                    >
                                        {member?.is_active}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default DownLine;