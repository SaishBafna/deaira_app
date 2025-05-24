import React, { useState } from 'react';

function Kyc() {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const handleFrontImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
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
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

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

            {/* Content */}
            <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-8 mt-12">


                <h1 className="text-3xl font-bold">KYC Verification</h1>
                <p className="text-center text-gray-300">
                    Please upload the required documents for identity verification.
                </p>

                {/* File Inputs Container - Side by Side */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    {/* First File Input */}
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
                            />
                            {frontImage ? (
                                <div className="w-full h-full flex items-center justify-center p-2">
                                    <img
                                        src={frontImage}
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
                    </div>

                    {/* Second File Input */}
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
                            />
                            {backImage ? (
                                <div className="w-full h-full flex items-center justify-center p-2">
                                    <img
                                        src={backImage}
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
                    </div>
                </div>

                {/* Submit Button */}
                <button className="font-medium transition-colors shadow-lg hover:opacity-90 active:translate-x-[-4px] active:duration-300 active:ease-out text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                        width: '140px',
                        height: '36px',
                        minHeight: '36px',
                        borderRadius: '5px',
                        border: '1px solid #D9D9D9',
                        background: 'linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)',
                    }}
                >
                    Submit Verification
                </button>
            </div>
        </div >
    );
}

export default Kyc;