import { ChevronLeft, User, Wallet, Check, X } from "lucide-react";
import React, { useState, useContext, useEffect } from "react";
import { WalletContext } from "../context/walletcontext";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Image from '../assets/Images/logo.png';

const Register = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;
  const [sponsorId, setSponsorId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [walletChecked, setWalletChecked] = useState(false);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [sponsorValidation, setSponsorValidation] = useState({
    isValid: null,  // null = not checked, true = valid, false = invalid
    isLoading: false,
    message: ""
  });

  // Function to encode string to Base64
  const encodeToBase64 = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  // Check for sponsor ID in URL parameters on component mount
  useEffect(() => {
    // Check for both possible parameter names
    const urlSponsorId = searchParams.get("sponsor_id") || searchParams.get("sponcer_id");
    if (urlSponsorId) {
      setSponsorId(urlSponsorId);
      validateSponsorId(urlSponsorId);
    }
  }, [searchParams]);

  // Check wallet status whenever walletAddress changes
  useEffect(() => {
    if (walletAddress) {
      checkWalletStatus();
      handleLogoClick();
    }
  }, [walletAddress]);

  // Function to validate sponsor ID
  const validateSponsorId = async (id) => {
    if (!id) {
      setSponsorValidation({
        isValid: null,
        isLoading: false,
        message: ""
      });
      return;
    }

    setSponsorValidation({
      isValid: null,
      isLoading: true,
      message: "Checking sponsor ID..."
    });

    try {
      const encodedId = encodeToBase64(id);
      const response = await axios.get(
        `${API_BASE_URL}/registercheck/${encodedId}`
      );

      if (response.data.status === "success") {
        setSponsorValidation({
          isValid: true,
          isLoading: false,
          message: "Valid sponsor"
        });
      } else {
        setSponsorValidation({
          isValid: false,
          isLoading: false,
          message: "Invalid sponsor ID"
        });
      }
    } catch (error) {
      console.error("Sponsor validation error:", error);
      setSponsorValidation({
        isValid: false,
        isLoading: false,
        message: "Error validating sponsor ID"
      });
    }
  };

  // Debounce the sponsor ID validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sponsorId) {
        validateSponsorId(sponsorId);
      } else {
        setSponsorValidation({
          isValid: null,
          isLoading: false,
          message: ""
        });
      }
    }, 500); // 500ms debounce delay

    return () => clearTimeout(timer);
  }, [sponsorId]);

  // Handle sponsor ID input blur
  const handleSponsorIdBlur = () => {
    if (sponsorId) {
      validateSponsorId(sponsorId);
    }
  };

  const handleConnectWallet = async () => {
    setIsConnectingWallet(true);
    try {
      const connect = await connectWallet();
      // toast.success("Wallet connected successfully!");
      // The useEffect will automatically trigger checkWalletStatus
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast.error(error.message || "Failed to connect wallet");
    } finally {
      setIsConnectingWallet(false);
    }
  };

  const checkWalletStatus = async () => {
    if (!walletAddress) return;
    setIsLoading(true);

    try {
      const encodedWalletAddress = encodeToBase64(walletAddress);
      const response = await axios.get(
        `${API_BASE_URL}/WalletCheck/${encodedWalletAddress}`
      );

      const { status } = response.data;

      if (status === "success") {
        // If wallet already registered, redirect to home
        setTimeout(() => {
          navigate("/TokenPresale");
        }, 3000);
      } else {
        setWalletChecked(true);
      }
    } catch (error) {
      console.error("Error checking wallet status:", error);
      if (error.response?.status === 404) {
        setWalletChecked(true);
      } else {
        toast.error(
          error.response?.data?.message || "Error checking wallet status"
        );
        // Still show registration form if check fails
        setWalletChecked(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        sponcer_id: sponsorId,
        walletAddress,
      });

      if (response.data.message === "User created successfully") {
        toast.success("Registration successful!");
        // Redirect to home or dashboard after successful registration
        setTimeout(() => {
          navigate("/TokenPresale");
        }, 2000);
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoClick = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/generateToken`, {
        email: walletAddress
      });
      localStorage.setItem("jwt_token", response.data.token);
    } catch (error) {
      console.error('Token generation failed:', error);
    }
  };

  return (
    <div className="min-h-screen bgw-screen h-screen bg-[#100036] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-16"></div>
          <h2 className="text-xl font-semibold text-white">Registration</h2>
          <div className="w-16"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div>
              <img src={Image} alt="DEAIRA Logo" className="w-34" />
            </div>
            {/* <h1 className="text-2xl font-bold text-white mb-1">DEAIRA</h1> */}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="space-y-6">
            {walletAddress && walletChecked ? (
              <>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Wallet size={16} className="text-purple-400" />
                    <span className="font-medium">Connected Wallet:</span>
                    <span className="text-white/80 truncate">
                      {walletAddress}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Sponsor ID
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
                    <input
                      type="text"
                      value={sponsorId}
                      onChange={(e) => setSponsorId(e.target.value)}
                      onBlur={handleSponsorIdBlur}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/40"
                      placeholder="Enter sponsor ID"
                      disabled={isLoading}
                    />
                  </div>
                  {sponsorValidation.isLoading && (
                    <div className="mt-1 text-xs text-purple-300 flex items-center">
                      <svg className="animate-spin h-3 w-3 mr-2 text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {sponsorValidation.message}
                    </div>
                  )}
                  {sponsorValidation.isValid === true && (
                    <div className="mt-1 text-xs text-green-400 flex items-center">
                      <Check size={14} className="mr-1" />
                      {sponsorValidation.message}
                    </div>
                  )}
                  {sponsorValidation.isValid === false && (
                    <div className="mt-1 text-xs text-red-400 flex items-center">
                      <X size={14} className="mr-1" />
                      {sponsorValidation.message}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleRegister}
                  disabled={isLoading}
                  className={`w-full font-medium py-3 transition-colors shadow-lg rounded-lg ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                    } active:scale-95 transition-transform`}
                  style={{
                    background: "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <User size={20} />
                    )}
                    <span>Register</span>
                  </div>
                </button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">
                    Connect Your Wallet
                  </h3>
                  <p className="text-white/70 text-sm">
                    Please connect your wallet to continue registration
                  </p>
                </div>

                <button
                  onClick={handleConnectWallet}
                  disabled={isConnectingWallet}
                  className={`w-full font-medium py-3 transition-colors shadow-lg rounded-lg ${isConnectingWallet ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                    } active:scale-95 transition-transform`}
                  style={{
                    background: "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    {isConnectingWallet ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Wallet size={20} />
                    )}
                    <span>{isConnectingWallet ? "Connecting..." : "Connect Wallet"}</span>
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