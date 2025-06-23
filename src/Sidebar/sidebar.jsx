import React, { useEffect, useState, useContext } from 'react';
import { WalletContext } from "../context/walletcontext";
import { FiSettings, FiX } from 'react-icons/fi';
import { IoMdSettings } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiMoneyBold } from "react-icons/pi";


import Image from '../assets/Images/logo.png';
import chevron from '../assets/Images/ca.png';
import Group from '../assets/Images/Group.png';
import telegram from '../assets/Images/social-media/telegram1.png';
import twitter from '../assets/Images/social-media/twitter.png';
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
    ChevronDown,
    Users
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
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] flex flex-col items-center px-4 sm:px-4 lg:px-16 py-6 text-white">
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
                    <IoMdSettings className="w-5 h-5 text-[#6B37FF]" />
                </div>
            </div>

            <div className="space-y-3 w-full bg-gradient-to-r from-[#02010B43] to-[#353E3D43]  border border-[#ffffff10] rounded-xl  p-5 backdrop-blur-md shadow-lg shadow-black/10 mt-4">
                <div>
                    <Link to="/TeamReport">
                        <button className="w-full bg-[#ffffff17] hover:from-[#2a0043] hover:via-[#1c1c6f] hover:to-[#10435d] transition-all duration-300 rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                    <RiTeamFill className="w-4 h-4 text-[#A8FFD1]" />
                                </div>
                                <span className="font-medium text-white">Team Members</span>
                            </div>
                            <div className="w-px h-6 bg-gradient-to-r from-[#3D3E67] to-[#5B00F7] mx-2"></div>
                            <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                        </button>
                    </Link>
                </div>

                {/* Activation */}
                <div>
                    <Link to="/Withdraw">
                        <button className="w-full bg-[#ffffff17] hover:from-[#2a0043] hover:via-[#1c1c6f] hover:to-[#10435d] transition-all duration-300 rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                    <BiMoneyWithdraw className="w-4 h-4 text-[#A8FFD1]" />
                                </div>
                                <span className="font-medium text-white">Withdraw</span>
                            </div>
                            <div className="w-px h-6 bg-gradient-to-r from-[#3D3E67] to-[#5B00F7] mx-2"></div>
                            <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Earnings">
                        <button className="w-full bg-[#ffffff17] hover:from-[#2a0043] hover:via-[#1c1c6f] hover:to-[#10435d] transition-all duration-300 rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                    <PiMoneyBold className="w-4 h-4 text-[#A8FFD1]" />
                                </div>
                                <span className="font-medium text-white">Earnings</span>
                            </div>
                            <div className="w-px h-6 bg-gradient-to-r from-[#3D3E67] to-[#5B00F7] mx-2"></div>
                            <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                        </button>
                    </Link>
                </div>
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/ActivationPackage">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                <Info className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Activation</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}

                <div className="space-y-2 w-full">
                    {/* Main Button */}
                    <button
                        onClick={toggleMenu}
                        className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
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
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                            <Clock className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Activation History</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}

                {/* Withdraw History */}
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
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
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                <FileText className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Terms And Conditions</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Privacy Policy */}
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/kyc">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                <Shield className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">Kyc</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}

                <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <Link to="/PrivacyPolicy">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
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
                            <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                                <HelpCircle className="w-4 h-4 text-[#A8FFD1]" />
                            </div>
                            <span className="font-medium">FAQs</span>
                        </div>
                    </Link>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button>

                {/* Logout */}
                {/* <button className="w-full bg-white/5 hover:bg-white/10 transition-all rounded-xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3" onClick={disconnectWallet}>
                        <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] border-2 border-black rounded-full text-white">
                            <LogOut className="w-4 h-4 text-[#A8FFD1]" />
                        </div>
                        <span className="font-medium">Disconnect Wallet</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/80 bg-white/10 rounded-full p-1" />
                </button> */}
            </div>

            <div className='mt-7 mb-7'>
                <div className="flex items-center gap-3" onClick={disconnectWallet}>
                    <div className="flex items-center justify-center w-9 h-9 p-[5px] bg-[#00000042] rounded-full text-white">
                        <LogOut className="w-4 h-4 text-[#A8FFD1]" />
                    </div>
                    <span className="font-medium">Disconnect Wallet</span>
                </div>
            </div>
            <div className='items-center'>

                <div className="flex justify-center items-center space-x-2">
                    {/* Telegram Icon */}
                    <div className=" rounded-full p-1 hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                        {/* <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-1.094 6.256-1.532 8.581-.185 1.007-.55 1.344-.905 1.376-.77.071-1.356-.507-2.102-.99-1.167-.755-1.824-1.223-2.953-1.96-1.309-.852-.46-1.32.285-2.087.195-.2 3.576-3.266 3.64-3.546.008-.035.016-.165-.062-.234-.078-.07-.193-.046-.275-.027-.116.027-1.975 1.25-5.578 3.67-.528.364-1.006.542-1.434.531-.472-.012-1.378-.266-2.051-.485-.824-.267-1.479-.408-1.422-.862.03-.236.354-.477.974-.723 3.808-1.648 6.347-2.733 7.617-3.258 3.627-1.506 4.378-1.766 4.87-1.775.108-.002.348.025.504.153.131.107.167.25.184.352.016.102.036.334.02.515z" />
                    </svg> */}
                        <img src={telegram} alt="Telegram" className="w-8 h-8" />
                    </div>

                    {/* X (Twitter) Icon */}
                    <div className="rounded-full hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                        {/* <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg> */}
                        <img src={twitter} alt="Twitter" className="w-8 h-8" />
                    </div>
                </div>
                {/* Text */}
                <span className="text-white font-small text-xs">
                    Catch us on social media
                </span>
            </div>

        </div>
    );
};

export default Sidebar;
