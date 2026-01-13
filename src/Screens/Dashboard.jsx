import React, { useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image2 from '../assets/Images/dash.png';
import Image3 from '../assets/Images/robot.png';
import { Banknote, Wallet, Users, Trophy, TrendingUp, DollarSign, ArrowUpRight, Calculator } from 'lucide-react';
import Image1 from '../assets/Images/i5.png';
import I1 from '../assets/Images/i6.png';
import I2 from '../assets/Images/i7.png';
import I4 from '../assets/Images/i9.png';
import Header1 from '../Header/header1.jsx';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = ({
  apiBaseUrl = import.meta.env?.VITE_API_BASE_URL,
  storage = localStorage,
  fetcher = axios
}) => {
  const navigate = useNavigate();

  const encryptedWalletAddress = storage.getItem('encryptedWalletAddress');
  const jwt_token = storage.getItem('jwt_token');

  const [user, setUser] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);

  const fetchWalletData = useCallback(async () => {
    try {
      const response = await fetcher.get(
        `${apiBaseUrl}/Walletpageapi/${encryptedWalletAddress}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`
          }
        }
      );

      setUser(response?.data?.user?.user);
      setWallet(response?.data?.wallet);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
    }
  }, [apiBaseUrl, encryptedWalletAddress, jwt_token, fetcher]);

  useEffect(() => {
    fetchWalletData();
  }, [fetchWalletData]);

  const handleDepositNavigate = () => navigate('/Deposit');

  return (
    <div
      className="w-full min-h-screen overflow-y-auto bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative flex flex-col items-center px-4 sm:px-6 py-4 gap-4"
      data-testid="dashboard"
    >
      {/* Blur BG */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      <Header1 title="Dashboard" />

      {/* Welcome */}
      <div className="flex items-center justify-between p-1 rounded-xl w-full max-w-xl lg:max-w-4xl mt-15">
        <div className="flex items-center">
          <img src={Image2} alt="Panel" className="w-16 h-16 rounded-lg" />
          <div className="flex flex-col ml-4">
            <p className="text-white text-sm">Welcome back,</p>
            <p className="text-white font-semibold text-lg" data-testid="welcome-user">
              {user?.first_name || 'Not Updated'}
            </p>
          </div>
        </div>

        <div>
          <button
            className="text-black px-4 py-1 rounded-full font-semibold transition"
            style={{ backgroundImage: 'linear-gradient(to right, #E0B9F2, #4E10FF)' }}
          >
            ID: DA{user?.id || '0'}
          </button>
        </div>
      </div>

      {/* AI Card */}
      <div className="w-full max-w-xl lg:max-w-4xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 flex items-center gap-4 shadow-lg">
        <div className="flex flex-col text-white w-[70%]">
          <h2 className="text-lg font-semibold leading-tight">Power Up with Our AI based Community</h2>
          <p className="text-sm mt-1 text-pink-500">Be part of DeAlra's AI investor network.</p>
          <button className="mt-3 self-start bg-purple-600 border border-white text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow hover:bg-purple-700 transition">
            Join Now
          </button>
        </div>
        <div className="w-[30%] flex justify-center">
          <img src={Image3} alt="AI Community" className="h-32 w-auto object-contain" />
        </div>
      </div>

      {/* Wallet Overview */}
      <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Wallet Overview</span>
          <img src={I1} alt="Lock" className="w-5 h-5" />
        </div>
      </div>

      {/* Wallet Card */}
      <div className="backdrop-blur-sm p-4 rounded-2xl w-full max-w-xl lg:max-w-4xl mx-auto font-sans border border-white/10">
        <div className="rounded-2xl p-6 shadow-2xl relative overflow-hidden bg-[#262424]">
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-gray-200 text-2xl font-medium mb-3">
                Wallet <span className="text-white font-semibold">Balance</span>
              </h3>

              <div className="mb-4 bg-gray-600 px-8 py-2 rounded-lg inline-block">
                <span className="text-white text-3xl font-bold tracking-tight" data-testid="wallet-balance">
                  ${wallet?.activation_wallet ?? 0}
                </span>
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-1.5 rounded-full font-semibold transition-all duration-200 border border-white"
                data-testid="deposit-button"
                onClick={handleDepositNavigate}
              >
                Add
              </button>
            </div>

            {/* Income Section */}
            <div className="border-t border-purple-600/50 pt-4">
              <h4 className="text-gray-200 text-2xl font-medium mb-2 text-center">Income Wallet</h4>
              <div className="text-center">
                <div className="bg-gray-600 inline-block px-8 py-2 rounded-lg">
                  <span className="text-white text-3xl font-bold">
                    ${wallet?.wallet_balance ?? 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-green-400 text-xs font-medium">Total</div>
              <div className="text-green-400 text-xs font-medium">Income</div>
              <div className="text-white text-sm font-semibold">${wallet?.total_income ?? 0}/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-blue-400 text-xs font-medium">Total</div>
              <div className="text-blue-400 text-xs font-medium">Withdraw</div>
              <div className="text-white text-sm font-semibold">${wallet?.total_withdrawal ?? 0}/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-orange-400 text-xs font-medium">Direct</div>
              <div className="text-orange-400 text-xs font-medium">Income</div>
              <div className="text-white text-sm font-semibold">${wallet?.direct_income ?? 0}/Token</div>
            </div>
          </div>

          <div className="bg-[#262424] rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-purple-400 text-xs font-medium">Level</div>
              <div className="text-purple-400 text-xs font-medium">Income</div>
              <div className="text-white text-sm font-semibold">${wallet?.level_income ?? 0}/Token</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Quick Actions</span>
          <img src={I2} alt="Lock" className="w-5 h-5" />
        </div>
      </div>

      <div className="mb-5 w-full max-w-xl lg:max-w-4xl">
        <div className="grid grid-cols-4 gap-6">
          <Link to="/Deposit" data-testid="quick-deposit">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                <Banknote className="text-white w-6 h-6" />
              </div>
              <span className="text-white text-xs mt-2">Deposit</span>
            </div>
          </Link>

          <Link to="/Withdraw" data-testid="quick-withdraw">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600">
                <Wallet className="text-white w-6 h-6" />
              </div>
              <span className="text-white text-xs mt-2">Withdraw</span>
            </div>
          </Link>

          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600">
              <Users className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Team</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs mt-2">Rewards</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-xl lg:max-w-4xl flex justify-center">
        <img src={Image1} alt="Panel" className="w-full" />
      </div>

      {/* Investment */}
      <div className="text-left w-full mt-2 max-w-xl lg:max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium text-lg">Investment Opportunities</span>
          <img src={I4} alt="Lock" className="w-8 h-8" />
        </div>
      </div>

      <div className="w-full max-w-xl lg:max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-[#0c10cc5c] to-indigo-900 rounded-xl p-6 text-white relative">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h2 className="text-xl font-bold text-white">Saving</h2>
            <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-yellow-200 text-xs font-bold">₹</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-cyan-400"></div>
                <span className="text-white font-medium"> Joining Token Value </span>
              </div>
              <div className="text-2xl font-bold text-[#A8FFD1] mb-3">$20.000</div>
              <div className="text-sm text-purple-200">
                <div className="mb-1">First Trade</div>
                <div>10:00 - 13:00</div>
              </div>
            </div>

            <div className="w-px bg-purple-400 mx-6"></div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-purple-400"></div>
                <span className="text-white font-medium">Current Day Token Value</span>
              </div>
              <div className="text-2xl font-bold text-[#A8FFD1] mb-3">$0.001</div>
              <div className="text-sm text-purple-200">
                <div className="mb-1">Second Trade</div>
                <div>18:00 - 23:00</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-10 py-1 rounded-full text-white font-semibold text-lg transition-colors shadow-lg border border-white">
              Trade
            </button>
          </div>

          <div className="text-center text-sm text-white mb-4 font-medium">
            Morning Window active(1000 - 1300)
          </div>

          <div className="text-xs text-purple-200 text-center leading-relaxed bg-[#3232335c] px-2">
            <span className="font-bold">Note:</span> All trader will be executed as per Indian Standard Time (IST)
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
