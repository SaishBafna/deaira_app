import React from 'react';
import {
  User,
  Users,
  Target,
  Star,
  Sprout,
  Copy,
  MessageCircle,
  BarChart3,
  TrendingUp,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  FileText,
  Shield,
  HelpCircle,
  LogOut,
  Bot
} from 'lucide-react';
import Footer from '../Footer/Footer';
import imageRo from '../assets/Images/robot.png';

const Profile = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Main Content */}
      <div className="w-full max-w-4xl pb-24">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Profile</h1>
        </div>

        {/* Welcome Section */}
        <div className="p-6 mb-6">
          {/* Top Row: Avatar + Welcome and ID */}
          <div className="flex justify-between items-center">
            {/* Left Side: Avatar + Welcome Message */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <p className="text-lg opacity-90">Welcome back,</p>
                <h2 className="text-2xl md:text-3xl font-bold">Radhika</h2>
              </div>
            </div>

            {/* Right Side: ID Display */}
            <div
              className=" w-[126px] h-[33px] top-[110px] left-[277px] rounded-[12px] border border-[#5401BD] bg-gradient-to-r from-[#E0B9F2] to-[#4E10FF] backdrop-blur-sm"
            >
              <p className="text-sm font-medium text-white text-center leading-[33px]">ID: CA120609</p>
            </div>
          </div>
        </div>

        {/* Join Now Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/10">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold">Empowered by</h2>
              <h2 className="text-xl font-bold">AI. Driven by You.</h2>
              <h3 className="text-sm font-medium text-[#F64AFF]">
                Smart Growth. Smarter Connections.
              </h3>
            </div>

            <div className="w-16 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center ml-auto overflow-hidden">
              <img
                src={imageRo}
                alt="AI Bot"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Join Button */}

          <button
            className=" w-[92px] h-[25px] top-[261px] left-[40px] rounded-[24px] border border-[#D9D9D9] bg-gradient-to-b from-[#A800F7] to-[rgba(233,171,255,0.34)] text-white font-semibold transition-all duration-300"
          >
            Join Now
          </button>
        </div>

        {/* Team Stats */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/10">
          {/* Team Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 relative">
            {/* Divider - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-[1px] h-[50px] bg-gradient-to-b from-[#3D3E67] via-[#5B00F7] to-[#3C3A60]"></div>
            <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 w-[1px] h-[50px] bg-gradient-to-b from-[#3D3E67] via-[#5B00F7] to-[#3C3A60]"></div>

            {/* Stats Items - Repeated 3 times */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-blue-400" />
                  <p className="text-sm opacity-70 whitespace-nowrap">Downline Team</p>
                </div>
                <div className="w-[95px] h-[34px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center">
                  <p className="text-sm font-bold">3</p>
                </div>
              </div>
            ))}
          </div>

          {/* Referral Link Section */}
          <div className="bg-black/30 rounded-2xl p-3 flex flex-col-2 sm:flex-row items-center justify-between mb-6 border-2 border-dashed border-white/30 gap-3">
            <span className="text-sm text-blue-300 truncate w-full sm:w-auto text-center sm:text-left">
              https://cryptocurq.pro/register?sponsors
            </span>
            <button className="text-purple-500 px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 border border-white/20 hover:bg-purple-500/20 whitespace-nowrap">
              <Copy size={16} />
              <span>Copy</span>
            </button>
          </div>

          {/* Total Team Business */}
          <div className="text-center">
            <div className="flex flex-col-2 sm:flex-row items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <Sprout size={16} className="text-green-400" />
                <p className="text-sm opacity-70 whitespace-nowrap">Total Team Business</p>
              </div>
              <div className="w-[95px] h-[34px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center mx-auto sm:mx-0">
                <p className="text-sm font-bold">3</p>
              </div>
            </div>
            <p className="text-purple-400 text-sm">Invite. Invest. Grow with Smart Trades.</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            Quick Actions <span className="ml-2 text-purple-400">▶▶</span>
          </h2>

          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
            {/* Update Profile */}
            <button className="p-4 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <User size={24} className="text-green-500" />
              </div>
              <p className="text-sm font-medium">Update Profile</p>
            </button>

            {/* Report */}
            <button className="p-4 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <BarChart3 size={24} className="text-orange-500" />
              </div>
              <p className="text-sm font-medium">Report</p>
            </button>

            {/* Team Analysis */}
            <button className="p-4 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <TrendingUp size={24} className="text-blue-500" />
              </div>
              <p className="text-sm font-medium">Team Analysis</p>
            </button>

            {/* Direct Teams */}
            <button className="p-4 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Target size={24} className="text-purple-500" />
              </div>
              <p className="text-sm font-medium">Direct Teams</p>
            </button>
          </div>
        </div>

        {/* Bonanza Business */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/10 text-white">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
            Bonanza Business <MessageCircle size={20} className="ml-2" />
          </h2>

          {/* Target & Progress */}
          <div className="rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2 rounded-2xl text-center bg-[#5D0093] border border-[#A800F7]">
              <div className="flex items-center gap-2 rounded-full p-2 w-full justify-center text-[#0EF479] font-bold">
                <ChevronDown size={20} className="text-[#0EF479]" />
                <h2>Target $25,000</h2>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {/* Progress bar */}
              <div className="w-full bg-black/30 rounded-full h-2 relative">
                <div
                  className="bg-white h-2 rounded-full absolute top-0 left-0"
                  style={{ width: '15%' }}
                ></div>
              </div>

              {/* Percentage */}
              <div className="text-xs opacity-70 w-10 text-right">15%</div>
            </div>

            <div className="text-center w-full mb-4">
              <div className="border border-dashed border-purple-600/60 rounded-[24px] py-3 inline-block px-8 w-[237px] h-[46px] bg-[#5D0093] border-[1px] flex items-center justify-center">
                <p className="text-2xl font-bold text-white m-0">$54</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <button className="bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 active:scale-95">
              <MessageCircle size={18} className="text-purple-200" />
              WhatsApp
            </button>
            <button className="bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 active:scale-95">
              <MessageCircle size={18} className="text-purple-200" />
              Telegram
            </button>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3 w-full  border border-transparent 
                bg-gradient-to-b from-[#02010B]/[0.43] to-[#353E3D]/[0.43] 
                p-5 backdrop-blur-md shadow-lg shadow-black/10
                [border-image:linear-gradient(261.7deg,rgba(255,255,255,0.54)_5.39%,rgba(0,0,0,0)_19.41%)_1]">

          {/* Change Password */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <RefreshCw size={20} className="text-blue-400" />
              <span className="font-medium">Change Password</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Downline Team */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-blue-400" />
              <span className="font-medium">Downline Team</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Terms And Conditions */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-green-400" />
              <span className="font-medium">Terms And Conditions</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Privacy Policy */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-purple-400" />
              <span className="font-medium">Privacy Policy</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* FAQs */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <HelpCircle size={20} className="text-yellow-400" />
              <span className="font-medium">FAQs</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Logout */}
          <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <LogOut size={20} className="text-red-400" />
              <span className="font-medium">Logout</span>
            </div>

            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;