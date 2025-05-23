import React from 'react';
import { FiEdit, FiUpload, FiChevronLeft } from 'react-icons/fi';

const UpdateProfile = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white">
          <FiChevronLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Radhika</h2>
              <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                <FiEdit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="text-white/80">
              <p>+911234567890</p>
            </div>

            {/* Personal Details Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Enter Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email ID</label>
                <input 
                  type="email" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>

              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                <FiEdit size={14} />
                <span>Change Password</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-6">
            {/* OTP Verification */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="font-medium mb-3">OTP Verification</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter OTP"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  GET OTP
                </button>
              </div>
            </div>

            {/* Account Details */}
            <div className="space-y-6">
              <h3 className="font-medium">Account Details</h3>

              <div>
                <label className="block text-sm font-medium mb-1">Account Number</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Account number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Final Account Number</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Final account number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name as in bank"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">IFSC CODE</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="IFSC code"
                />
              </div>

              {/* Upload Section */}
              <div>
                <label className="block text-sm font-medium mb-1">Upload Passbook Details</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center justify-center p-4 border-2 border-dashed border-white/30 rounded-lg bg-white/5">
                    <span className="text-white/60">Choose file or drag here</span>
                  </div>
                  <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    <FiUpload size={16} />
                    <span>Upload</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium text-lg transition-colors shadow-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;