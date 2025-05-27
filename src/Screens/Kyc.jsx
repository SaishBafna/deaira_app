import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Kyc() {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontImageFile, setFrontImageFile] = useState(null);
    const [backImageFile, setBackImageFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [kycStatus, setKycStatus] = useState(null);

    const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
    const jwt_token = localStorage.getItem('jwt_token');

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const BASE_IMG_URL = import.meta.env.VITE_API_IMG_BASE_URL;

    const handleFrontImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFrontImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFrontImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBackImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!frontImageFile || !backImageFile) {
            setError('Please upload both front and back images');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const formData = new FormData();
            formData.append('f_image', frontImageFile);
            formData.append('b_image', backImageFile);
            formData.append('id', encryptedWalletAddress);

            const response = await axios.post(`${BASE_URL}/updatekyc`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${jwt_token}`
                }
            });

            if (response.data) {
                setSuccess(true);
                // Refresh user data after successful upload
                fetchUserData();
            } else {
                setError(response.data.message || 'Verification failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during verification');
            console.error('KYC submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/homepageapi/${encryptedWalletAddress}`, {
                headers: {
                    Authorization: `Bearer ${jwt_token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (response.data && response.data.user && response.data.user.user) {
                const user = response.data.user.user;
                console.log('User data fetched:', user);
                setUserData(user);
                setKycStatus(user.kyc_status);

                // Set existing KYC images if they exist
                if (user.adhar) {
                    setFrontImage(`${BASE_IMG_URL}/uploads/kyc/${user.adhar}`);
                }
                if (user.adhar_image) {
                    setBackImage(`${BASE_IMG_URL}/uploads/kyc/${user.adhar_image}`);
                }
            } else {
                console.error('Invalid user data structure:', response.data);
                alert('Error loading user data. Please try logging in again.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            alert('Error loading user data. Please try logging in again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen bg-[#100036] relative overflow-y-auto flex flex-col items-center p-6 gap-6 text-white font-sans">
            {/* Blur elements */}
            <div className="fixed w-[199px] h-[430px] left-[518px] top-[248px] bg-gradient-to-b from-[#A800F7] to-[#4C00AD] blur-[91.4px] transform rotate-180 opacity-70 pointer-events-none"></div>
            <div className="fixed w-[466.48px] h-[276.91px] left-[409px] top-[1357.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"></div>
            <div className="fixed w-[342.25px] h-[198.63px] left-[-160px] top-[428.66px] rounded-full blur-[92.85px] transform rotate-[-11.06deg] opacity-70 pointer-events-none"></div>
            <div className="fixed w-[466.48px] h-[276.91px] left-[631px] top-[1000.69px] rounded-full blur-[92.85px] transform rotate-[-166.71deg] opacity-70 pointer-events-none"></div>

            {/* Content */}
            <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-8 mt-12">
                <h1 className="text-3xl font-bold">KYC Verification</h1>

                {kycStatus && (
                    <div className={`w-full p-4 ${kycStatus === 'approved' ? 'bg-green-500/20 border-green-500' : 'bg-yellow-500/20 border-yellow-500'} border rounded-lg text-center`}>
                        KYC Status: <span className="font-bold">{kycStatus.toUpperCase()}</span>
                    </div>
                )}

                <p className="text-center text-gray-300">
                    Please upload the required documents for identity verification.
                </p>

                {/* Status messages */}
                {error && (
                    <div className="w-full p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="w-full p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
                        Verification submitted successfully!
                    </div>
                )}

                {/* File Inputs Container - Side by Side */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    {/* Front ID Input */}
                    <div className="w-full md:w-1/2">
                        <label className="block mb-2 text-sm font-medium">Front Side of ID</label>
                        <div className="relative w-full h-48 rounded-lg border-2 border-dashed"
                            style={{
                                background: 'linear-gradient(#100036, #100036) padding-box, linear-gradient(to right, #A800F7, #00F798) border-box',
                                border: '2px dashed transparent'
                            }}>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFrontImageChange}
                                accept="image/*"
                                disabled={isLoading || kycStatus === 'approved'}
                            />
                            {frontImage ? (
                                <div className="w-full h-full flex items-center justify-center p-2">
                                    <img
                                        src={frontImage}
                                        loading='lazy'
                                        alt="Front ID Preview"
                                        className="max-h-full max-w-full object-contain rounded-md"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                                    <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-400">Drag and drop your file here or click to browse</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, or PDF (max. 5MB)</p>
                                </div>
                            )}
                        </div>
                        {userData?.f_image && (
                            <p className="text-xs text-gray-400 mt-1">Uploaded: {userData.f_image}</p>
                        )}
                    </div>

                    {/* Back ID Input */}
                    <div className="w-full md:w-1/2">
                        <label className="block mb-2 text-sm font-medium">Back Side of ID</label>
                        <div className="relative w-full h-48 rounded-lg border-2 border-dashed"
                            style={{
                                background: 'linear-gradient(#100036, #100036) padding-box, linear-gradient(to right, #00F798, #6B37FF) border-box',
                                border: '2px dashed transparent'
                            }}>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleBackImageChange}
                                accept="image/*"
                                disabled={isLoading || kycStatus === 'approved'}
                            />
                            {backImage ? (
                                <div className="w-full h-full flex items-center justify-center p-2">
                                    <img
                                        src={backImage}
                                        loading='lazy'
                                        alt="Back ID Preview"
                                        className="max-h-full max-w-full object-contain rounded-md"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                                    <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-400">Drag and drop your file here or click to browse</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, or PDF (max. 5MB)</p>
                                </div>
                            )}
                        </div>
                        {userData?.b_image && (
                            <p className="text-xs text-gray-400 mt-1">Uploaded: {userData.b_image}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button - Only show if KYC is not approved */}
                {kycStatus !== 'approved' && (
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || !frontImageFile || !backImageFile}
                        className="font-medium transition-colors shadow-lg hover:opacity-90 active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            width: '140px',
                            height: '36px',
                            minHeight: '36px',
                            borderRadius: '5px',
                            border: '1px solid #D9D9D9',
                            background: 'linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)',
                        }}
                    >
                        {isLoading ? 'Uploading...' : 'Submit Verification'}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Kyc;