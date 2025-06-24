import React, { useState, useEffect } from "react";
import { ChevronLeft, Menu, X, Mail, ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [visibleSections, setVisibleSections] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleBackClick = () => {
        window.history.back();
    };
    return (
        <div className="min-h-screen bg-[#100036] relative overflow-x-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[199px] h-[430px] left-[518px] top-[248px] blur-[91.4px] transform rotate-180 opacity-70"
                    style={{
                        background: "linear-gradient(180deg, #A800F7 7.09%, #4C00AD 96.07%)",
                    }}
                />
                <div
                    className="absolute w-[466px] h-[277px] left-[409px] top-[1357px] rounded-full blur-[92px] transform rotate-[-166deg] opacity-70"
                    style={{
                        background: "linear-gradient(180deg, #00F798 0%, #6B37FF 100%)",
                    }}
                />
                <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
                <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-green-400/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
            </div>

            {/* Main Content */}
            <main className="relative z-10 pt-0">
                {/* Header Section */}
                <section className="py-5 text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            id="header"
                            data-animate
                            className={`transform transition-all duration-600 ${visibleSections.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}
                        >
                            <div className="flex items-center justify-center mb-8">
                                <button
                                    onClick={handleBackClick}
                                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group mr-auto">
                                    <ChevronLeft
                                        size={20}
                                        className="group-hover:-translate-x-1 transition-transform"
                                    />
                                    <span className="font-medium">Back</span>
                                </button>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent">
                                    Terms and Conditions
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Please read these terms and conditions carefully before using the DeAIra platform
                            </p>
                            <div className="mt-8 text-sm text-gray-400">
                                <p>Last updated: December 2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-5">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">

                            {/* Section 1: Agreement */}
                            <div
                                id="section1"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section1') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    1. Agreement to Terms
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>By accessing and using DeAIra ("the Platform", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                                    <p>If you do not agree to abide by the above, please do not use this service. These Terms of Service ("Terms") govern your use of our decentralized AI platform that enables users to tokenize, deploy, and monetize AI models.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 2: Platform Description */}
                            <div
                                id="section2"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section2') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    2. Platform Description
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>DeAIra is a decentralized platform that combines Web3 technology with artificial intelligence to enable:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Tokenization of AI models as digital assets</li>
                                        <li>Decentralized deployment and hosting of AI models</li>
                                        <li>Community-governed marketplace for AI services</li>
                                        <li>Transparent monetization through smart contracts</li>
                                        <li>DAO-based governance and decision making</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 3: User Accounts */}
                            <div
                                id="section3"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section3') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    3. User Accounts and Wallet Connection
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>To use DeAIra, you must:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Connect a compatible Web3 wallet (MetaMask, WalletConnect, etc.)</li>
                                        <li>Provide a valid email address for account verification</li>
                                        <li>Be at least 18 years old or have legal guardian consent</li>
                                        <li>Comply with all applicable laws and regulations</li>
                                    </ul>
                                    <p>You are responsible for maintaining the security of your wallet and private keys. DeAIra cannot recover lost access to your wallet or funds.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 4: AI Model Tokenization */}
                            <div
                                id="section4"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section4') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    4. AI Model Tokenization and Ownership
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>When you tokenize an AI model on DeAIra:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>You retain ownership rights to your original AI model</li>
                                        <li>You grant DeAIra a license to host and facilitate access to your model</li>
                                        <li>You warrant that you have the legal right to tokenize and monetize the model</li>
                                        <li>You agree that the tokenized representation is subject to blockchain immutability</li>
                                        <li>You understand that smart contract interactions are irreversible</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 5: Prohibited Activities */}
                            <div
                                id="section5"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section5') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    5. Prohibited Activities
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>You agree not to use DeAIra for:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Creating or deploying AI models that generate harmful, illegal, or malicious content</li>
                                        <li>Violating intellectual property rights of others</li>
                                        <li>Attempting to manipulate or exploit smart contracts</li>
                                        <li>Creating fake or duplicate AI models</li>
                                        <li>Engaging in market manipulation or fraudulent activities</li>
                                        <li>Bypassing platform security measures</li>
                                        <li>Using the platform for money laundering or illegal financial activities</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 6: Financial Terms */}
                            <div
                                id="section6"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section6') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    6. Financial Terms and Transactions
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>DeAIra operates on blockchain technology, which means:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>All transactions are processed through smart contracts</li>
                                        <li>Transaction fees (gas fees) are determined by the blockchain network</li>
                                        <li>DeAIra may charge platform fees for certain services</li>
                                        <li>Revenue sharing is automated through smart contracts</li>
                                        <li>Cryptocurrency values are volatile and subject to market risks</li>
                                        <li>You are responsible for tax obligations related to your earnings</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 7: DAO Governance */}
                            <div
                                id="section7"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section7') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    7. DAO Governance and Community Decisions
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>DeAIra operates as a Decentralized Autonomous Organization (DAO):</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Token holders can participate in governance decisions</li>
                                        <li>Voting power is proportional to token holdings</li>
                                        <li>Community proposals can change platform parameters</li>
                                        <li>DAO decisions are binding and implemented through smart contracts</li>
                                        <li>You acknowledge that governance decisions may affect your usage of the platform</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 8: Privacy */}
                            <div
                                id="section8"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section8') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    8. Privacy and Data Protection
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>DeAIra is committed to protecting your privacy:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>We collect minimal personal data necessary for platform operation</li>
                                        <li>Your wallet address and transaction history are publicly visible on the blockchain</li>
                                        <li>AI model data is processed according to your specified privacy settings</li>
                                        <li>We do not sell personal data to third parties</li>
                                        <li>You can request data deletion in accordance with applicable privacy laws</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 9: Disclaimers */}
                            <div
                                id="section9"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section9') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    9. Disclaimers and Limitations
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>DeAIra is provided "as is" without warranties:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>We do not guarantee the accuracy or performance of AI models</li>
                                        <li>Blockchain networks may experience downtime or congestion</li>
                                        <li>Smart contracts may contain bugs or vulnerabilities</li>
                                        <li>Cryptocurrency investments carry inherent risks</li>
                                        <li>We are not liable for losses due to market volatility or technical issues</li>
                                        <li>Maximum liability is limited to the amount of fees paid to DeAIra</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 10: Termination */}
                            <div
                                id="section10"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section10') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    10. Termination
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>Either party may terminate this agreement:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>You may stop using the platform at any time</li>
                                        <li>We may suspend accounts that violate these terms</li>
                                        <li>Tokenized assets remain accessible on the blockchain after termination</li>
                                        <li>Outstanding financial obligations survive termination</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Section 11: Legal */}
                            <div
                                id="section11"
                                data-animate
                                className={`mb-12 transform transition-all duration-600 ${visibleSections.has('section11') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    11. Legal and Jurisdiction
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>These terms are governed by the laws of [Jurisdiction] and disputes will be resolved through arbitration. By using DeAIra, you agree to these terms and acknowledge that you understand the risks associated with blockchain and AI technologies.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

                            {/* Contact Information */}
                            <div
                                id="contact"
                                data-animate
                                className={`transform transition-all duration-600 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                                    Contact Information
                                </h2>
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    <p>If you have questions about these Terms and Conditions, please contact us:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Email: legal@deaira.com</li>
                                        <li>Discord: Join our community server</li>
                                        <li>Website: www.deaira.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-6 text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            id="cta"
                            data-animate
                            className={`transform transition-all duration-600 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}
                        >
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to <span className="bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent">Decentralize AI</span> with Us?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                Join the revolution in decentralized intelligence. By using our platform, you agree to these terms and conditions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    className="font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                                    style={{
                                        background: "linear-gradient(180deg, #A800F7 0%, rgba(233, 171, 255, 0.34) 100%)",
                                        border: "1px solid #D9D9D9",
                                    }}
                                >
                                    Launch App
                                </button>
                                <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-300">
                                    Back to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 mb-8  border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-white/10   text-center text-gray-400 ">
                        <p className="mt-1">&copy; 2024 DeAIra. All rights reserved. Built for the decentralized future.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TermsAndConditions;