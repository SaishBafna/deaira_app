import { ChevronLeft, User, Wallet, Plus, Edit, Upload } from "lucide-react";
import React, { useState } from "react";
import { WalletContext } from "../context/walletcontext";
import { useContext } from "react";
import axios from "axios";

const Register = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);

  const [sponsorId, setSponsorId] = useState("");
  const [email, setemail] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post(`https://web.deaira.io/api/register`, {
        email: email,
        sponcer_id: sponsorId,
        walletAddress: walletAddress,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bgw-screen h-screen bg-[#100036] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
      {/* Background Pattern */}
      <div
        className="fixed w-[199px] h-[430px] left-[518px] top-[248px] bg-gradient-to-b from-[#A800F7] to-[#4C00AD] blur-[91.4px] transform rotate-180 opacity-70 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #A800F7 7.09%, #4C00AD 96.07%)",
          filter: "blur(91.4px)",
          transform: "rotate(180deg)",
        }}
      ></div>

      <div
        className="fixed w-[466.48px] h-[276.91px] left-[409px] top-[1357.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #00F798 0%, #6B37FF 100%)",
          filter: "blur(92.85px)",
          borderRadius: "813px",
          transform: "rotate(-166.71deg)",
        }}
      ></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <ChevronLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">Back</span>
          </button>
          <h2 className="text-xl font-semibold text-white">Registration</h2>
          <div className="w-16"></div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl mb-3 rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-white font-bold text-2xl">D</div>
            </div>
            {/* Brand Name */}
            <h1 className="text-2xl font-bold text-white mb-1">DEAIRA</h1>
          </div>
        </div>

        {/* Header */}

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Sponsor ID Input */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Sponsor ID
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                  size={18}
                />
                <input
                  type="text"
                  value={sponsorId}
                  onChange={(e) => setSponsorId(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/40"
                  placeholder="Enter your sponsor ID"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email{" "}
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                  size={18}
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/40"
                  placeholder="Enter your sponsor ID"
                />
              </div>
            </div>

            {/* Wallet Connection */}
            <div>
              <div
                onClick={walletAddress ? handleRegister : connectWallet}
                className=" w-full font-medium py-2 transition-colors shadow-lg hover:opacity-90 active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #D9D9D9",
                  background:
                    "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  {walletAddress ? <User size={20} /> : <Wallet size={20} />}
                  <span
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {walletAddress ? "Register" : "Connect Wallet"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
        </div>

        {/* Security Notice */}
      </div>
    </div>
  );
};

export default Register;
