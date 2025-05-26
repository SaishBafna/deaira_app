import { ChevronLeft, User, Wallet } from "lucide-react";
import React, { useState, useEffect } from "react";
import { WalletContext } from "../context/walletcontext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;
  const [sponsorId, setSponsorId] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [walletChecked, setWalletChecked] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Function to encode string to Base64
  const encodeToBase64 = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  // Check wallet status when walletAddress changes
  useEffect(() => {
    const checkWalletStatus = async () => {
      if (walletAddress && !walletChecked) {
        setIsLoading(true);
        try {
          // Encode wallet address to Base64
          const encodedWalletAddress = encodeToBase64(walletAddress);
          const response = await axios.get(
            `${API_BASE_URL}/WalletCheck/${encodedWalletAddress}`
          );


          

          if (response.data.status === "success"  && response.data.email1) {
            navigate("/");
            
          }  else {
            // No email found, stay on register page
            setWalletChecked(true);
          }
        } catch (error) {
          console.error("Error checking wallet status:", error);
          if (error.response?.status === 404) {
            // Wallet not found, show registration form
            setWalletChecked(true);
          } else {
            toast.error("Error checking wallet status");
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkWalletStatus();
  }, [walletAddress, walletChecked, navigate, API_BASE_URL]);

  const handleRegister = async () => {
    if (!walletAddress || !email || isLoading) return;

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      // Encode wallet address to Base64 before sending
      const response = await axios.post(`${API_BASE_URL}/register`, {
        email: email,
        sponcer_id: sponsorId,
        walletAddress: walletAddress,
      });

      if (response.data.message === "User created successfully") {
        toast.success("Registration successful! Sending OTP to your email.");
        await axios.post(`${API_BASE_URL}/SendMailOtp`, {
          email: email,
        });
        setUserEmail(email);
        toast.success("OTP sent to your email successfully!");
        navigate("/OtpVerifictaion", {
          state: {
            email: email,
            walletAddress: walletAddress
          }
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
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
          <button
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            onClick={() => navigate(-1)}
          >
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

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Form Fields */}
          <div className="space-y-6">
            {walletAddress && walletChecked ? (
              <>
                {/* Sponsor ID Input */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Sponsor ID (Optional)
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
                      placeholder="Enter sponsor ID (if any)"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                      size={18}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/40"
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Register Button */}
                <div>
                  <button
                    onClick={handleRegister}
                    disabled={isLoading || !email}
                    className={`w-full font-medium py-3 transition-colors shadow-lg rounded-lg ${isLoading || !email ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                      } active:scale-95 transition-transform text-sm md:text-base`}
                    style={{
                      background:
                        "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isLoading ? (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <User size={20} />
                      )}
                      <span className="text-lg">
                        {isLoading ? "Processing..." : "Register"}
                      </span>
                    </div>
                  </button>
                </div>
              </>
            ) : (
              // Connect Wallet Button
              <div>
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className={`w-full font-medium py-3 transition-colors shadow-lg rounded-lg ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                    } active:scale-95 transition-transform text-sm md:text-base`}
                  style={{
                    background:
                      "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Wallet size={20} />
                    )}
                    <span className="text-lg">
                      {isLoading ? "Connecting..." : "Connect Wallet"}
                    </span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;