import { Plus } from 'lucide-react';
import React from 'react';
import { FiEdit, FiUpload, FiChevronLeft, FiUser, FiPhone, FiMail, FiLock, FiCreditCard, FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-4 md:p-6 gap-4 md:gap-6 text-white">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-center">Update Profile</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-4xl rounded-2xl p-4 md:p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            <div
              className="flex items-center p-4 w-full h-[88px] rounded-[5px] mx-auto"
              style={{
                background: 'linear-gradient(0deg, #130027 0%, #350C5E 100%)',
                border: '0.5px solid transparent',
                borderImage: 'linear-gradient(180deg, #DDCDE5 0%, #A600F4 100%) 1'
              }}
            >
              {/* Image on the left side (replaces FiUser) */}
              <div className="mr-3">
                <img
                  src="/path-to-your-image.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-[#5B00F7]"
                />
              </div>

              {/* Text content on the right side */}
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-white">Radhika</h2>
                <div className="mt-1 text-white/80 text-xs md:text-sm">
                  <p>+911234567890</p>
                </div>
              </div>
            </div>

            {/* Personal Details Form */}
            <div className="space-y-4 md:space-y-6">
              <button className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium flex items-center gap-1">
                <p className='text-white'>Edit Profile</p>
                <FiEdit size={14} />

              </button>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Enter Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Enter your name"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                  <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Mobile Number</label>
                <div className="relative">
                  <FiPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="tel"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Mobile number"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Email ID</label>
                <div className="relative">
                  <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="email"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Email address"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              <button className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium flex items-center gap-1">
                <FiEdit size={14} />
                <span>Change Password</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {/* OTP Verification */}
            <div className="p-2 rounded-xl">
              <h3 className="font-medium mb-2 md:mb-3">OTP Verification</h3>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] pl-4 pr-16 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Enter OTP"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white hover:text-[#4A00D1] p-1 md:p-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap">
                    GET OTP
                  </button>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-medium">Account Details</h3>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Account Number</label>
                <div className="relative">
                  <FiCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Account number"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Final Account Number</label>
                <div className="relative">
                  <FiCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Final account number"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Name</label>
                <div className="relative">
                  <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="Name as in bank"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">IFSC CODE</label>
                <div className="relative">
                  <FiFileText className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="text"
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7]"
                    placeholder="IFSC code"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>

              {/* Upload Section */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 text-white">Upload Passbook Details</label>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <div
                    className="flex items-center justify-between gap-2 md:gap-4 rounded-[10px] border-2 border-dashed relative px-3 md:px-4"
                    style={{
                      width: '100%',
                      height: '48px',
                      minHeight: '48px',
                      borderColor: '#DDCDE575',
                      background: 'linear-gradient(90deg, #0C0029 0%, #24007A 79.74%, #2A008F 100%)'
                    }}
                  >
                    <div className="flex items-center gap-2 md:gap-4">
                      <Plus className="text-[#5B00F7]" size={20} />
                      <span className="text-white/60 text-xs md:text-sm">Upload Passbook</span>
                    </div>
                    <button className="px-3 md:px-4 py-1 rounded-full text-white text-xs md:text-sm transition-colors">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-4 md:mt-6 flex justify-center mb-2 mb-7">
          <button
            className="font-medium transition-colors shadow-lg hover:opacity-90 active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base"
            style={{
              width: '140px',
              height: '36px',
              minHeight: '36px',
              borderRadius: '24px',
              border: '1px solid #D9D9D9',
              background: 'linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)',
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;