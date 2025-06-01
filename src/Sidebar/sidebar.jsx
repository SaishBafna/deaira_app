import React, { useEffect, useState, useContext } from 'react';
import { WalletContext } from "../context/walletcontext";
import { FiSettings, FiX } from 'react-icons/fi';
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
import { useNavigate, Link } from 'react-router-dom';


const Sidebar = ({ onClose }) => {
    const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const goToDepositReport = () => {
        navigate('/DepositReport', {
            state: {
                reason: 'deposit',
            }
        });
    };
    const goToActivateReport = () => {
        navigate('/DepositReport', {
            state: {
                reason: 'activate_pacakage',
            }
        });
    };
    const goToWithdrawReport = () => {
        navigate('/DepositReport', {
            state: {
                reason: 'payment_withdraw',
            }
        });
    };
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
                    <img src={Image2} alt="Avatar" className="w-35 h-35 object-contain" />
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


            <div className="text-left w-full mt-8 max-w-xl lg:max-w-4xl">
                <div className="flex items-center gap-2 mb-0">
                    <span className="text-white font-medium text-lg">General Setting</span>
                    <FiSettings className="w-5 h-5 text-white" />
                </div>
            </div>

            <div className="space-y-3 w-full border border-white/35 rounded-xl bg-gradient-to-b from-[#02010B]/[0.43] to-[#353E3D]/[0.43] p-5 backdrop-blur-md shadow-lg shadow-black/10 mt-4">

                {/* Activation */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/Deposit">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <Info className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Deposit</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/ActivationPackage">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <Info className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Activation</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>
                {/* Withdraw */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/Withdraw">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <DollarSign className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Withdraw</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                <div className="space-y-2 w-full">
                    {/* Main Button */}
                    <button
                        onClick={toggleMenu}
                        className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <Info className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium text-white">Report</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                    </button>

                    {/* Submenu */}
                    {isOpen && (
                        <div className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                            <button
                                onClick={goToDepositReport}
                                className="w-full text-left px-4 py-3 hover:bg-white/10 transition text-white text-sm"
                            >
                                Deposit History
                            </button>
                            <button
                                onClick={goToActivateReport}
                                className="w-full text-left px-4 py-3 hover:bg-white/10 transition text-white text-sm"
                            >
                                Activation History
                            </button>
                            <button
                                onClick={goToWithdrawReport}
                                className="w-full text-left px-4 py-3 hover:bg-white/10 transition text-white text-sm"
                            >
                                Withdraw History
                            </button>

                        </div>
                    )}
                </div>

                {/* Activation History */}
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <Clock className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Activation History</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}

                {/* Withdraw History */}
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                            <History className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Withdraw History</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}

                {/* Terms and Conditions */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/TermsAndConditions">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <FileText className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Terms And Conditions</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Privacy Policy */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/kyc">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <Shield className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Kyc</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/PrivacyPolicy">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <Shield className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Privacy Policy</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* FAQs */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/FAQ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 rounded-full text-white">
                                <HelpCircle className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">FAQs</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Logout */}
                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3" onClick={disconnectWallet}>
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-black bg-opacity-50 border-2 border-black rounded-full text-white">
                            <LogOut className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Disconnect Wallet</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>
            </div>

        </div>
    );
};

export default Sidebar;
