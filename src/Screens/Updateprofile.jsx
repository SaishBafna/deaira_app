import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Plus } from 'lucide-react';
import { FiEdit, FiUpload, FiChevronLeft, FiUser, FiPhone, FiMail, FiLock, FiCreditCard, FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Group305 from '../assets/Images/Group305.png';
import otp from '../assets/Images/otp.png';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;
  const API_IMG_BASE_URL = import.meta.env?.VITE_API_IMG_BASE_URL;

  // Get token and jwt_token from localStorage or context
  const walletAddress = localStorage.getItem('walletAddress');
  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  console.log("Encrypted wallet address:", encryptedWalletAddress)
  console.log('Wallet Address:', walletAddress);
  const jwt_token = localStorage.getItem('jwt_token');

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email1: '',
    gender: 'Male',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    profile_image: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    otp: '',
    usdt_address: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    // if (!token || !jwt_token) {
    //   alert('Please login first');
    //   navigate('/login');
    //   return;
    // }
    fetchUserData();
  }, []);

  // Fetch user data when component mounts
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/homepageapi/${encryptedWalletAddress}`, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data && response.data.user && response.data.user.user) {
        const user = response.data.user.user;
        console.log('Fetched User Data:', user);
        setUserData(user);

        // Set form data with user data
        setFormData({
          name: user.first_name || '',
          phone: user.mobile || '',
          email: user.email1 || '',
          password: '',
          otp: '',
          usdt_address: ''
        });
      } else {
        console.error('Invalid user data structure:', response.data);
        alert('Error loading user data. Please try logging in again.');
        // navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Error loading user data. Please try logging in again.');
      // navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  // Generate OTP
  const generateOTP = async () => {
    if (!formData.email) {
      alert('Please enter email address first');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/generate_otp/${encryptedWalletAddress}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt_token}`,
        }
      });

      if (response.ok) {
        setOtpSent(true);
        alert('OTP has been sent successfully to your email');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to generate OTP');
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
      alert('Error generating OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Update profile
  const updateProfile = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    if (!otpSent || !formData.otp) {
      alert('Please verify OTP first');
      return;
    }

    try {
      setUpdateLoading(true);

      const updateData = {
        name: formData.name,
        mobile: formData.phone,
        email: formData.email,
        otp: formData.otp,
        id: encryptedWalletAddress
      };
      console.log('Update Data:', updateData);

      // Add password to update data if provided
      if (formData.password) {
        updateData.password = formData.password;
      }

      const response = await axios.post(`${API_BASE_URL}/update`, updateData, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data.success) {
        alert('Profile updated successfully!');
        // Refresh user data
        await fetchUserData();
        // Reset OTP fields
        setFormData(prev => ({ ...prev, otp: '', password: '' }));
        setOtpSent(false);
      } else {
        alert(response.data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Error updating profile. Please try again.');
      }
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading && !userData.first_name) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-4 md:p-6 gap-4 md:gap-6 text-white">

      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between  mt-2">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center ">Update Profile</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-4xl rounded-2xl p-4 md:p-6 shadow-lg">
        <div
          className="flex items-center p-4 w-full h-[88px] mx-auto mb-4 md:mb-6"
          style={{
            background: 'linear-gradient(0deg, #130027 0%, #350C5E 100%)',
            border: '0.5px solid linear-gradient(180deg, #DDCDE5 0%, #A600F4 100%)',
            borderRadius: '10px',
          }}
        >
          {/* Image on the left side */}
          <div className="mr-3">
            <img
              src={userData.profile_image ? `${API_IMG_BASE_URL}/${userData.profile_image}` : Group305}
              alt="Profile"
              className="w-15 h-15 rounded-full object-cover border border-[#5B00F7]"
              onError={(e) => {
                e.target.src = Group305; // Fallback image
              }}
            />
          </div>

          {/* Text content on the right side */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {userData.first_name || 'Radhika'}
            </h2>
            <div className="flex items-center space-x-2 mt-1 text-white/80 text-xs md:text-sm">
              <p>{userData.mobile || 'Wallet Address Show'}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">

            {/* Personal Details Form */}
            <div className="space-y-4 md:space-y-6">
              <button className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium flex items-center gap-1">
                <h3 className='text-lg bold text-white'>Edit Profile</h3>
                <FiEdit size={14} />
              </button>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter Your Name"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                  <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                </div>
              </div>

              {/* <div>
                <div className="relative">
                  <FiPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Mobile Number"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div> */}

              <div>
                <div className="relative">
                  <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Email Address"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div>
{/* 
              <div>
                <div className="relative">
                  <label htmlFor="usdt_address" className="block mb-2 text-white font-medium">
                    Your USDT BEP20 Address
                  </label>
                  <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />

                  <input
                    id="usdt_address"
                    type="text"
                    name="usdt_address"
                    value={formData.usdt_address}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter your USDT (BEP20) address"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div> */}



              {/* <div>
                <div className="relative">
                  <FiLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Change Password (Optional)"
                    style={{ height: '44px', minHeight: '44px' }}
                  />
                </div>
              </div> */}
            </div>

            <div className="p-2 rounded-xl">
<h3 className="text-lg font-medium mb-2 md:mb-3">
  <span className="inline-flex items-center">
    Reset OTP
    <img src={otp} alt="OTP Icon" className="ml-1 w-5 h-5" />
    <span className="ml-1 text-white-500 ml-3 font-mono">00:00</span>
  </span>
</h3>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] pl-4 pr-16 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter OTP"
                    style={{ height: '44px', minHeight: '44px' }}
                    // disabled={!otpSent}
                  />
                  <button
                    onClick={generateOTP}
                    disabled={loading || otpSent}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white hover:text-[#4A00D1] p-1 md:p-2 text-l md:text-xl font-bold font-medium transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'SENDING...' : otpSent ? 'SENT' : 'Resend OTP'}
                  </button>
                </div>
              </div>
              {otpSent && (
                <p className="text-green-400 text-xs mt-2">
                  OTP sent successfully! Please check your email.
                </p>
              )}
            </div>


            <div className="p-2 rounded-xl">
  <h3 className="text-lg font-medium mb-2 md:mb-3">
    <span className="inline-flex items-center">
      KYC
    </span>
  </h3>

  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
    <div className="relative flex-grow">
      <input
        className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] pl-4 pr-16 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
        placeholder="Please Select Your Country"
        // disabled
        type="text"
        name="otp"
        style={{ height: '44px', minHeight: '44px' }}
      />

        <input
        className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] pl-4 mt-[13px] pr-16 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
        placeholder="Enter Identity Card Name"
        // disabled
        type="text"
        name="otp"
        style={{ height: '44px', minHeight: '44px' }}
      />

<div className="mt-7 space-y-4">
  {/* Upload Front Side */}
  <label className="block">
    <input type="file" className="hidden"  />
    <div
      className="flex items-center justify-center w-full py-3 rounded-xl cursor-pointer"
      style={{
        border: '1px dashed #DDCDE575',
        background: 'linear-gradient(180deg, #1B0F33 0%, #1B0F33 100%)',
      }}
    >
      <svg
        className="w-5 h-5 mr-2 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3 16a1 1 0 001 1h12a1 1 0 001-1v-4h-2v4H5v-4H3v4zM9 3v7.586L6.707 8.293 5.293 9.707 10 14.414l4.707-4.707-1.414-1.414L11 10.586V3H9z" />
      </svg>
      <span className="text-white">Upload Front Side</span>
    </div>
  </label>

  {/* OR Separator */}
  <div className="text-center text-white font-semibold">OR</div>

  {/* Upload Back Side (Optional) */}
  <label className="block">
    <input type="file" className="hidden"  />
    <div
      className="flex items-center justify-center w-full py-3 rounded-xl cursor-pointer"
      style={{
        border: '1px dashed #DDCDE575',
        background: 'linear-gradient(180deg, #1B0F33 0%, #1B0F33 100%)',
      }}
    >
      <svg
        className="w-5 h-5 mr-2 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3 16a1 1 0 001 1h12a1 1 0 001-1v-4h-2v4H5v-4H3v4zM9 3v7.586L6.707 8.293 5.293 9.707 10 14.414l4.707-4.707-1.414-1.414L11 10.586V3H9z" />
      </svg>
      <span className="text-white">Upload Back Side (Optional)</span>
    </div>
  </label>
</div>



   
    </div>
  </div>
</div>

          </div>

          

          
        </div>

        

        {/* Update Button */}
        <div className="mt-4 md:mt-6 flex justify-center mb-2">
          <button
            onClick={updateProfile}
            disabled={updateLoading || !otpSent || !formData.otp}
            className="font-medium transition-colors shadow-lg hover:opacity-90 active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              width: '140px',
              height: '36px',
              minHeight: '36px',
              borderRadius: '24px',
              border: '1px solid #D9D9D9',
              background: 'linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)',
            }}
          >
            {updateLoading ? 'UPDATING...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

