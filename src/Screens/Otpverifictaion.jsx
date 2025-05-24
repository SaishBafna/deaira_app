import { ChevronLeft, User, Wallet, Plus, Edit, Upload } from "lucide-react";
import React, { useState } from "react";
import { WalletContext } from "../context/walletcontext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpVerifictaion = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);
  const navigate = useNavigate();
  const [otp, setotp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const handleverify = async () => {
    if (!walletAddress || !otp || isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post(`https://web.deaira.io/api/verifyMailOtp`, {
        email: walletAddress,
        otp: otp
      });
      console.log(response.data);
      navigate('/')
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendDisabled) return;
    
    setResendDisabled(true);
    // Start countdown timer
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    try {
      // Call your API to resend OTP here
      await axios.post(`https://web.deaira.io/api/SendMailOtp`, { email: walletAddress });
      console.log("OTP resent successfully");
    } catch (error) {
      console.log("Error resending OTP:", error);
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
          <h2 className="text-xl font-semibold text-white">Verify OTP</h2>
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

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-white/80 text-sm font-medium">
                  Enter OTP
                </label>
                <button 
                  onClick={handleResendOtp}
                  disabled={resendDisabled}
                  className={`text-sm ${resendDisabled ? 'text-white/50' : 'text-purple-300 hover:text-purple-400'} transition-colors`}
                >
                  {resendDisabled ? `Resend in ${resendTimer}s` : 'Resend OTP'}
                </button>
              </div>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                  size={18}
                />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/40"
                  placeholder="Enter your OTP"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Wallet Connection */}
            <div>
              <button
                onClick={handleverify}
                disabled={isLoading}
                className={`w-full font-medium py-2 transition-colors shadow-lg ${
                  isLoading ? 'opacity-70' : 'hover:opacity-90'
                } active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base disabled:cursor-not-allowed`}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #D9D9D9",
                  background:
                    "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  {isLoading && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {isLoading ? "Processing..." : "Verify OTP"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerifictaion;