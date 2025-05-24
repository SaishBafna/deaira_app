import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import Image from '../assets/Images/logo.png';
import chevron from '../assets/Images/ca.png';
import Group from '../assets/Images/Group.png';
import war from '../assets/Images/war.png';
import lo from '../assets/Images/lo.png';
import pr from '../assets/Images/pr.png';
import dow from '../assets/Images/dow.png';
import ch from '../assets/Images/ch.png';
import Image2 from '../assets/Images/dash.png';
import {
    Info,
    DollarSign,
    Clock,
    History,
    FileText,
    Shield,
    HelpCircle,
    LogOut,
    ChevronDown
} from "lucide-react";
const Sidebar = ({ onClose }) => {
    useEffect(() => {
        // Disable body scroll
        document.body.style.overflow = 'hidden';

        // Cleanup: Enable body scroll on component unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] flex flex-col items-center px-4 sm:px-8 lg:px-16 py-6 text-white">
            {/* Blur circles */}
            <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none -z-10"></div>
            <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none -z-10"></div>
            <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none -z-10"></div>

            {/* Top Row: Logo + Close */}
            <div className="w-full flex justify-between items-center mb-6">
                <img src={Image} alt="DEARA Logo" className="w-28" />
                <button onClick={onClose}>
                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                        <FiX />
                    </div>
                </button>
            </div>

            {/* Avatar */}
            <div className="relative flex flex-col items-center mb-4">
                <div className="p-0">
                    <img src={Image2} alt="Avatar" className="w-25 h-25 object-contain" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" width="18" height="18">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
                    </svg>
                </div>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mb-2">Radhika</h2>

            {/* ID Tag */}
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl text-sm font-semibold shadow-md">
                ID: CA120609
            </div>

            <div className="space-y-3 w-full border border-white/35 rounded-xl bg-gradient-to-b from-[#02010B]/[0.43] to-[#353E3D]/[0.43] p-5 backdrop-blur-md shadow-lg shadow-black/10 mt-10">

                {/* Activation */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <Info className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Activation</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Withdraw */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <DollarSign className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Withdraw</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Activation History */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <Clock className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Activation History</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Withdraw History */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <History className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Withdraw History</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Terms and Conditions */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <FileText className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Terms And Conditions</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Privacy Policy */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <Shield className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Privacy Policy</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* FAQs */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <HelpCircle className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">FAQs</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Logout */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 border-2 border-black rounded-full text-white">
                            <LogOut className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Logout</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>
            </div>

        </div>
    );
};

export default Sidebar;
