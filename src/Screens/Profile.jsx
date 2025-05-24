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
import chevron from '../assets/Images/ca.png';
import probo from '../assets/Images/probo.png';
import Group305 from '../assets/Images/Group305.png';
import Group344 from '../assets/Images/Group344.png';
import Group from '../assets/Images/Group.png';
import Ellipse15 from '../assets/Images/Ellipse15.png';
import avatarpeople from '../assets/Images/avatarpeople.png';
import book from '../assets/Images/book.png';
import di from '../assets/Images/di.png';
import fi from '../assets/Images/fi.png';
import war from '../assets/Images/war.png';
import lo from '../assets/Images/lo.png';
import pr from '../assets/Images/pr.png';
import dow from '../assets/Images/dow.png';
import ch from '../assets/Images/ch.png';
import fast from '../assets/Images/fast.png';
import whatapp from '../assets/Images/whatapp.png';
import tele from '../assets/Images/tele.png';

import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import Header1 from '../Header/header1';
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-[#100036] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
      {/* Blur elements matching the design */}
      <div
        className="fixed w-[199px] h-[430px] left-[518px] top-[248px] bg-gradient-to-b from-[#A800F7] to-[#4C00AD] blur-[91.4px] transform rotate-180 opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #A800F7 7.09%, #4C00AD 96.07%)',
          filter: 'blur(91.4px)',
          transform: 'rotate(180deg)'
        }}
      ></div>

      <div
        className="fixed w-[466.48px] h-[276.91px] left-[409px] top-[1357.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
          filter: 'blur(92.85px)',
          borderRadius: '813px',
          transform: 'rotate(-166.71deg)'
        }}
      ></div>

      <div
        className="fixed w-[342.25px] h-[198.63px] left-[-160px] top-[428.66px] rounded-full blur-[92.85px] transform rotate-[-11.06deg] opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
          filter: 'blur(92.85px)',
          borderRadius: '813px',
          transform: 'rotate(-11.06deg)'
        }}
      ></div>

      <div
        className="fixed w-[466.48px] h-[276.91px] left-[631px] top-[1000.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #00F798 0%, #6B37FF 100%)',
          filter: 'blur(92.85px)',
          borderRadius: '813px',
          transform: 'rotate(-166.71deg)'
        }}
      ></div>

      {/* Main Content */}
      <div className="w-full max-w-4xl pb-24 z-10">
        {/* Header */}

        <Header1 title={"Profile"} />
        {/* <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4">
          <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
            <FiChevronLeft size={20} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h1 className=" text-3xl font-bold text-center text-white">Profile</h1>
          <div className="w-10">
            <Header />
          </div> {/* Spacer for alignment */}
        {/* </div> */} 

        {/* Welcome Section */}
        <div className=" mb-6 mt-15">
          {/* Top Row: Avatar + Welcome and ID */}
          <div className="flex justify-between items-center">
            {/* Left Side: Avatar + Welcome Message */}
            <div className="flex items-center gap-4">
              <div className=" rounded-full flex items-center justify-center">
                <img
                  src={Group305}
                  alt="AI Bot"
                  className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="text-lg ">Welcome back,</p>
                <p className="text-lg  ">Radhika</p>
              </div>
            </div>

            {/* Right Side: ID Display */}
            <div className="w-[120px] h-[33px] rounded-[12px] border border-[#5401BD] bg-gradient-to-r from-[#E0B9F2] to-[#4E10FF] backdrop-blur-sm">
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

            <div className="  rounded-2xl flex items-center justify-center ml-auto overflow-hidden">
              <img
                src={probo}
                alt="AI Bot"
                className="w-30 h-30 object-contain"
              />
            </div>
          </div>

          {/* Join Button */}
          <button className="w-[92px] h-[25px] rounded-[24px] border border-[#D9D9D9] bg-gradient-to-b from-[#A800F7] to-[rgba(233,171,255,0.34)] text-white font-semibold transition-all duration-300">
            Join Now
          </button>
        </div>

        {/* Team Stats */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/10">
          {/* Team Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6 relative">
            {/* Divider - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-[1px] h-[40px] bg-gradient-to-b from-[#3D3E67] via-[#5B00F7] to-[#3C3A60] z-0"></div>
            <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 w-[1px] h-[40px] bg-gradient-to-b from-[#3D3E67] via-[#5B00F7] to-[#3C3A60] z-0"></div>

            {/* Stats Items */}
            <div className="text-center flex flex-col items-center z-10">
              <div className="flex items-center gap-1 mb-2  h-20">
                <img src={Group344} alt="AI Bot" className="w-6 h-6 object-contain" />
                <p className="text-sm opacity-70">Direct Team</p>
              </div>
              <div className="w-[75px] h-[28px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center">
                <p className="text-sm font-bold">3</p>
              </div>
            </div>

            <div className="text-center flex flex-col items-center z-10">
              <div className="flex items-center gap-1 mb-1  h-20">
                <img src={Group344} alt="AI Bot" className="w-6 h-6 object-contain" />
                <p className="text-sm opacity-70">Downline Team</p>
              </div>
              <div className="w-[75px] h-[28px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center">
                <p className="text-sm font-bold ">3</p>
              </div>
            </div>

            <div className="text-center flex flex-col items-center z-10">
              <div className="flex items-center gap-1 mb-1 h-20">
                <img src={Group344} alt="AI Bot" className="w-6 h-6 object-contain" />
                <p className="text-sm opacity-70">Total Active Team</p>
              </div>
              <div className="w-[75px] h-[28px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center">
                <p className="text-sm font-bold">3</p>
              </div>
            </div>
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
                <img src={Group344} alt="AI Bot" className="w-10 h-10 object-contain" />
                <p className="text-sm opacity-70 whitespace-nowrap">Total Team Business</p>
              </div>
              <div className="w-[95px] h-[34px] rounded-[5px] border border-white bg-[#6B37FF5C] flex items-center justify-center mx-auto sm:mx-0">
                <p className="text-sm font-bold">3</p>
              </div>
            </div>
            <p className="text-purple-400 text-sm mb-2">Invite. Invest. Grow with Smart Trades.</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            Quick Actions  <img src={fast} alt="AI Bot" className="w-5 h-5 object-contain mx-2" />

          </h2>

          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
            {/* Update Profile */}
            <button className="p-4  h-30 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg" onClick={() => { navigate('/Updateprofile') }} >
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <img src={avatarpeople} alt="AI Bot" className="w-5 h-5 object-contain" />
              </div>
              <p className="text-sm font-medium">Update Profile</p>
            </button>

            {/* Report */}


            {/* Team Analysis */}
            <button className="p-4   h-30 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                <img src={book} alt="AI Bot" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-sm font-medium">Report</p>
            </button>

            <button className="p-4   h-30 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <img src={di} alt="AI Bot" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-sm font-medium">Team Analysis</p>
            </button>

            {/* Direct Teams */}
            <button className="p-4  h-30 text-center transition-all duration-300 hover:bg-gray-100/10 rounded-lg">
              <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <img src={fi} alt="AI Bot" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-sm font-medium">Direct Teams</p>
            </button>
          </div>
        </div>

        {/* Bonanza Business */}
        <div>
        {/* <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/10 text-white"> */}
          {/* <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
            Bonanza Business <img src={Ellipse15} alt="AI Bot" className="w-10 h-10  mx-2 object-contain" />

          </h2>

          <div
            className="w-full max-w-[327px] h-px mx-auto my-2"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #270251 50%, rgba(253, 253, 253, 0) 100%)",
              borderImageSlice: 1,
              transform: "rotate(0.35deg)",
            }}
          ></div> */}


          {/* Target & Progress */}
          {/* <div className="rounded-2xl p-2 "> */}
            {/* <div className="flex items-center justify-between mb-2 rounded-2xl text-center bg-[#5D0093] border border-[#A800F7]">
              <div className="flex items-center gap-2 rounded-full p-2 w-full justify-center text-[#0EF479] font-bold">
                <ChevronDown size={20} className="text-[#0EF479]" />
                <h2>Target $25,000</h2>
              </div>
            </div> */}

            {/* <div className="flex items-center gap-3 mb-4">

              <div className="w-full bg-[#4C00AD] rounded-full h-2 relative">
                <div
                  className="bg-white h-2 rounded-full absolute top-0 left-0"
                  style={{ width: '15%' }}
                ></div>
              </div>

              <div className="text-xs opacity-70 w-10 text-right">15%</div>
            </div> */}

            {/* <div className="text-center w-full mb-4">
              <div className="border border-dashed border-purple-900/60 rounded-[24px] py-3 inline-block px-8 w-[237px] h-[46px] bg-[#5D0093] border-[1px] flex items-center justify-center">
                <p className="text-2xl font-bold text-white m-0">$54</p>
              </div>
            </div> */}
          {/* </div> */}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <button className="bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 active:scale-95">
              <img src={whatapp} alt="AI Bot" className="w-5 h-5 object-contain" />
              WhatsApp
            </button>
            <button className="bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 active:scale-95">
              <img src={tele} alt="AI Bot" className="w-5 h-5 object-contain" />
              Telegram
            </button>
          </div>
        </div>

        {/* Settings Menu */}
        {/* <div className="space-y-3 w-full border  border-white/35 rounded-xl
                bg-gradient-to-b from-[#02010B]/[0.43] to-[#353E3D]/[0.43] 
                p-5 backdrop-blur-md shadow-lg shadow-black/10
                "
        > */}

          {/* Change Password */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img
                src={ch}
                alt="AI Bot"
                className="w-5 h-5 object-contain bg-black bg-opacity-50 rounded-full"
              />
              <span className="font-medium">Change Password</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button> */}

          {/* Downline Team */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={dow} alt="AI Bot" className="w-5 h-5 object-contain bg-black bg-opacity-50 rounded-full"
              />
              <span className="font-medium">Downline Team</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button> */}

          {/* Terms And Conditions */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={war} alt="AI Bot" className="w-5 h-5 object-contain bg-black bg-opacity-50 rounded-full"
              />
              <span className="font-medium">Terms And Conditions</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button> */}

          {/* Privacy Policy */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={pr} alt="AI Bot" className="w-5 h-5 object-contain bg-black bg-opacity-50 rounded-full"
              />
              <span className="font-medium">Privacy Policy</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button> */}

          {/* FAQs */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={Group} alt="AI Bot" className="w-5 h-5 object-contain bg-black bg-opacity-50 rounded-full"
              />
              <span className="font-medium">FAQs</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button> */}

          {/* Logout */}
          {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between 
                    border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <img src={lo} alt="AI Bot" className="w-5 h-5 object-contain bg-black bg-opacity-50 border-2 border-black rounded-full"
              />
              <span className="font-medium">Logout</span>
            </div>
            <img src={chevron} alt="AI Bot" className="w-5 h-5 object-contain" />
          </button>
        </div> */}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;