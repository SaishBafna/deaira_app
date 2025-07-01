import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Plus } from 'lucide-react';
import { FiEdit, FiUpload, FiChevronLeft, FiUser, FiPhone, FiMail, FiLock, FiCreditCard, FiFileText, FiEye, FiTrash2 } from 'react-icons/fi';
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
  const jwt_token = localStorage.getItem('jwt_token');

  const [userData, setUserData] = useState({
    first_name: '',
    mobile: '',
    email1: '',
    gender: 'Male',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    profile_image: '',
    id_card_name: '',
    id: null,
    id_front: '', // Added for existing front ID
    id_back: ''   // Added for existing back ID
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [kycData, setKycData] = useState({
    country: '',
    id_card_name: '',
    id_front: null,
    id_back: null
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [kycLoading, setKycLoading] = useState(false);

  // Modal state for viewing images
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalImageTitle, setModalImageTitle] = useState('');

  useEffect(() => {
    fetchUserData();
    fetchCountries();
  }, []);

  // Fetch countries
  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getCountry`, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'application/json'
        },
      });
      
      if (response.data.status && response.data.data) {
        setCountries(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
      alert('Error loading countries. Please refresh the page.');
    }
  };

  // Fetch user data when component mounts
  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      if (!encryptedWalletAddress) {
        alert('Wallet address not found. Please log in again.');
        navigate('/login');
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/getUser/${encryptedWalletAddress}`, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data) {
        const user = response.data.data;
        
        // Ensure user ID exists and is valid
        if (!user.id || user.id === null || user.id === undefined) {
          console.error('User ID is missing or invalid:', user.id);
          return;
        }

        setUserData({
          ...user,
          id: parseInt(user.id) // Ensure ID is a number
        });

        // Set form data with user data
        setFormData({
          name: user.first_name || '',
          phone: user.mobile || '',
        });

        // Set KYC data with user data (use id_name instead of id_card_name)
        setKycData({
          country: user.country || '',
          id_card_name: user.id_name || '', // Fixed: use id_name from API
          id_front: null,
          id_back: null
        });
      } else {
        console.error('No user data received:', response.data);
        alert('Error loading user data. Please try logging in again.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.response?.status === 401) {
        alert('Session expired. Please log in again.');
        navigate('/login');
      } else if (error.response?.status === 404) {
        alert('User not found. Please log in again.');
        navigate('/login');
      } else {
        alert('Error loading user data. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to view uploaded image
  const viewImage = (imageUrl, title) => {
    setModalImageUrl(imageUrl);
    setModalImageTitle(title);
    setShowImageModal(true);
  };

  // Function to delete uploaded file
  const deleteUploadedFile = async (fileType) => {
    if (!confirm(`Are you sure you want to delete the ${fileType === 'id_front' ? 'front' : 'back'} ID document?`)) {
      return;
    }

    try {
      // You can implement a delete API call here if your backend supports it
      // For now, we'll just clear the local state and update the profile
      const updatedUserData = { ...userData };
      updatedUserData[fileType] = '';
      setUserData(updatedUserData);
      
      alert(`${fileType === 'id_front' ? 'Front' : 'Back'} ID document removed. Click "Update Profile" to save changes.`);
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Error deleting file. Please try again.');
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

  // Handle KYC input changes
  const handleKycInputChange = (e) => {
    const { name, value } = e.target;
    setKycData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file input changes
  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size should not exceed 2MB');
        return;
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only image files (JPEG, PNG, GIF)');
        return;
      }
    }
    
    setKycData(prev => ({
      ...prev,
      [fileType]: file
    }));
  };

  // Update profile
  const updateProfile = async () => {
    // Validation
    if (!formData.name?.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!formData.phone?.trim()) {
      alert('Please enter your phone number');
      return;
    }

    if (!userData.id) {
      alert('User ID not found. Please refresh the page and try again.');
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      alert('Please enter a valid phone number (10-15 digits)');
      return;
    }

    try {
      setUpdateLoading(true);

      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Add required fields
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('mobile', formData.phone.trim());
      formDataToSend.append('id', userData.id);
      
      // Add KYC data only if provided
      if (kycData.country) {
        formDataToSend.append('country', kycData.country);
      }
      
      if (kycData.id_card_name?.trim()) {
        formDataToSend.append('id_name', kycData.id_card_name.trim());
      }
      
      if (kycData.id_front) {
        formDataToSend.append('id_front', kycData.id_front);
      }
      
      if (kycData.id_back) {
        formDataToSend.append('id_back', kycData.id_back);
      }

      for (let [key, value] of formDataToSend.entries()) {
        if (value instanceof File) {
          // console.log(key, '(File):', value.name);
        } else {
          // console.log(key, ':', value);
        }
      }

      const response = await axios.post(`${API_BASE_URL}/update`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'multipart/form-data'
        },
      });

      if (response.data.success) {
        alert('Profile updated successfully!');
        // Refresh user data
        await fetchUserData();
        // Reset file inputs
        setKycData(prev => ({
          ...prev,
          id_front: null,
          id_back: null
        }));
      } else {
        alert(response.data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const message = error.response.data?.message;
        
        if (status === 401) {
          alert('Session expired. Please log in again.');
          navigate('/login');
        } else if (status === 422) {
          alert(message || 'Validation error. Please check your input.');
        } else if (status === 413) {
          alert('File size too large. Please upload smaller files.');
        } else {
          alert(message || 'Server error occurred. Please try again.');
        }
      } else if (error.request) {
        // Network error
        alert('Network error. Please check your internet connection and try again.');
      } else {
        // Other error
        alert('An unexpected error occurred. Please try again.');
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
      <div className="w-full max-w-4xl flex items-center justify-between mt-2">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
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
              {userData.first_name || 'Not Updated'}
            </h2>
            <div className="flex items-center space-x-2 mt-1 text-white/80 text-[9px] overflow-hidden text-ellipsis whitespace-nowrap">
              <p>{userData.email || 'Not Updated'}</p>
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
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter Your Name"
                    style={{ height: '44px', minHeight: '44px' }}
                    maxLength={50}
                  />
                  <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 md:px-10 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter Phone Number"
                    style={{ height: '44px', minHeight: '44px' }}
                    maxLength={15}
                  />
                  <FiPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5B00F7]" size={15} />
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl">
              <h3 className="text-lg font-medium mb-2 md:mb-3">
                <span className="inline-flex items-center">
                  KYC
                </span>
              </h3>

              <div className="flex flex-col gap-4">
                {/* Country Dropdown */}
                <div className="relative">
                  <select
                    name="country"
                    value={kycData.country}
                    onChange={handleKycInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    style={{ height: '44px', minHeight: '44px' }}
                  >
                    <option value="">Please Select Your Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.nicename} className="bg-[#1a0033] text-white">
                        {country.nicename}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ID Card Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="id_card_name"
                    value={kycData.id_card_name}
                    onChange={handleKycInputChange}
                    className="w-full bg-[#00000040] border border-[#DDCDE575] rounded-[10px] px-4 py-2 md:py-3 focus:outline-none focus:ring-1 focus:ring-[#5B00F7] text-white"
                    placeholder="Enter Identity Card Name"
                    style={{ height: '44px', minHeight: '44px' }}
                    maxLength={100}
                  />
                </div>

                <div className="mt-4 space-y-4">
                  {/* Existing Front ID Display */}
                  {userData.id_front && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white mb-2">Current Front ID:</label>
                      <div className="flex items-center justify-between bg-[#00000040] border border-[#DDCDE575] rounded-[10px] p-3">
                        <div className="flex items-center gap-2">
                          <FiFileText className="text-[#5B00F7]" size={16} />
                          <span className="text-white text-sm">Front ID Document</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => viewImage(`${API_IMG_BASE_URL}/${userData.id_front}`, 'Front ID')}
                            className="p-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
                            title="View Image"
                          >
                            <FiEye size={14} />
                          </button>
                          <button
                            onClick={() => deleteUploadedFile('id_front')}
                            className="p-1 bg-red-600 hover:bg-red-700 rounded text-white"
                            title="Delete Image"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Upload Front Side */}
                  <label className="block">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'id_front')}
                    />
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
                      <span className="text-white">
                        {kycData.id_front ? kycData.id_front.name : 
                         userData.id_front ? 'Replace Front Side' : 'Upload Front Side'}
                      </span>
                    </div>
                  </label>

                  {/* OR Separator */}
                  <div className="text-center text-white font-semibold">OR</div>

                  {/* Existing Back ID Display */}
                  {userData.id_back && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white mb-2">Current Back ID:</label>
                      <div className="flex items-center justify-between bg-[#00000040] border border-[#DDCDE575] rounded-[10px] p-3">
                        <div className="flex items-center gap-2">
                          <FiFileText className="text-[#5B00F7]" size={16} />
                          <span className="text-white text-sm">Back ID Document</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => viewImage(`${API_IMG_BASE_URL}/${userData.id_back}`, 'Back ID')}
                            className="p-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
                            title="View Image"
                          >
                            <FiEye size={14} />
                          </button>
                          <button
                            onClick={() => deleteUploadedFile('id_back')}
                            className="p-1 bg-red-600 hover:bg-red-700 rounded text-white"
                            title="Delete Image"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Upload Back Side (Optional) */}
                  <label className="block">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'id_back')}
                    />
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
                      <span className="text-white">
                        {kycData.id_back ? kycData.id_back.name : 
                         userData.id_back ? 'Replace Back Side (Optional)' : 'Upload Back Side (Optional)'}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Update Buttons */}
        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-4 justify-center mb-2">
          {/* Update Profile Button */}
          <button
            onClick={updateProfile}
            disabled={updateLoading}
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
            {updateLoading ? 'UPDATING...' : 'Update Profile'}
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-black">{modalImageTitle}</h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-black hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img
                src={modalImageUrl}
                alt={modalImageTitle}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-gray-500 py-8">
                Image could not be loaded
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;