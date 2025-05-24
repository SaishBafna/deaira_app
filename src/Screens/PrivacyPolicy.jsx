import React, { useState, useEffect } from "react";
import { ChevronLeft, Menu, X, Mail, ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      <main className="relative z-10 pt-2">
        {/* Header Section */}
        <section className="py-5 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="header"
              data-animate
              className={`transform transition-all duration-600 ${
                visibleSections.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center mb-8">
                <button onClick={handleBackClick} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group mr-auto">
                  <ChevronLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <span className="font-medium">Back</span>
                </button>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className="mt-8 text-sm text-gray-400">
                <p>Last updated: December 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              
              {/* Section 1: Introduction */}
              <div
                id="section1"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section1') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  1. Introduction
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>DeAIra ("we", "us", or "our") operates the decentralized AI platform that enables users to tokenize, deploy, and monetize AI models. We are committed to protecting your privacy while providing a powerful decentralized service.</p>
                  <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 2: Information We Collect */}
              <div
                id="section2"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section2') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  2. Information We Collect
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>We collect several types of information from and about users of our platform:</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">a. Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Wallet address and associated blockchain data</li>
                    <li>Email address (for account verification and communication)</li>
                    <li>Username or profile information (if provided)</li>
                    <li>Contact information for support requests</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">b. Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Smart contract interaction history</li>
                    <li>Platform usage patterns and preferences</li>
                    <li>AI model deployment and usage metrics</li>
                    <li>Transaction history and token movements</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">c. Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Network information and blockchain node data</li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 3: How We Use Information */}
              <div
                id="section3"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section3') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  3. How We Use Your Information
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To provide, maintain, and improve our platform services</li>
                    <li>To facilitate decentralized transactions and smart contract execution</li>
                    <li>To verify user identity and prevent fraudulent activity</li>
                    <li>To communicate with you about platform updates and security</li>
                    <li>To analyze usage patterns and optimize platform performance</li>
                    <li>To enforce our Terms of Service and other policies</li>
                    <li>To comply with legal obligations and regulatory requirements</li>
                    <li>To support community governance and DAO operations</li>
                  </ul>
                  <p className="mt-4">We do not sell your personal information to third parties.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 4: Blockchain and Data */}
              <div
                id="section4"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section4') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  4. Blockchain Technology and Data
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>As a decentralized platform, DeAIra operates on blockchain technology which has inherent privacy characteristics:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All blockchain transactions are public and immutable</li>
                    <li>Your wallet address and transaction history are visible on the blockchain</li>
                    <li>Smart contract interactions cannot be deleted or modified</li>
                    <li>We cannot control or modify data once recorded on the blockchain</li>
                    <li>Pseudonymous activity may potentially be linked to real identity through blockchain analysis</li>
                  </ul>
                  <p className="mt-4">Please consider these factors before using our platform.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 5: Data Sharing */}
              <div
                id="section5"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section5') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  5. Data Sharing and Disclosure
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With service providers who assist in platform operation (while maintaining confidentiality)</li>
                    <li>With the community for DAO governance purposes (in aggregated form when possible)</li>
                    <li>When required by law or to respond to legal process</li>
                    <li>To protect the rights, property, or safety of DeAIra, our users, or the public</li>
                    <li>In connection with any merger, sale of company assets, or acquisition</li>
                  </ul>
                  <p className="mt-4">We share only the minimum information necessary for these purposes.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 6: Data Security */}
              <div
                id="section6"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section6') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  6. Data Security
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>We implement appropriate technical and organizational measures to protect your information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure smart contract development practices</li>
                    <li>Regular security audits and vulnerability testing</li>
                    <li>Access controls and authentication measures</li>
                  </ul>
                  <p className="mt-4">However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, especially for data stored on public blockchains.</p>
                  <p>You are responsible for securing your wallet credentials and private keys. We cannot recover lost wallets or funds.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 7: Your Rights */}
              <div
                id="section7"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section7') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  7. Your Data Rights
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>Depending on your jurisdiction, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data where possible</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                  </ul>
                  <p className="mt-4">Note that blockchain data cannot be modified or deleted due to the immutable nature of distributed ledger technology.</p>
                  <p>To exercise these rights, please contact us at privacy@deaira.com.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 8: International Data */}
              <div
                id="section8"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section8') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  8. International Data Transfers
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>As a decentralized platform with global operations, your information may be transferred to and processed in countries other than your own. These countries may have data protection laws that are different from those in your jurisdiction.</p>
                  <p>We take appropriate safeguards to ensure your data remains protected in accordance with this Privacy Policy, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Standard contractual clauses where applicable</li>
                    <li>Data minimization principles</li>
                    <li>Encryption and security measures</li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 9: Children's Privacy */}
              <div
                id="section9"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section9') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  9. Children's Privacy
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn we have collected personal information from a child under 18, we will take steps to delete that information.</p>
                  <p>If you believe a child under 18 has provided us with personal information, please contact us at privacy@deaira.com.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Section 10: Changes */}
              <div
                id="section10"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('section10') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  10. Changes to This Policy
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                  <p>For significant changes, we may provide additional notice through our platform or via email.</p>
                  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#A800F7]/50 to-transparent my-8" />

              {/* Contact Information */}
              <div
                id="contact"
                data-animate
                className={`transform transition-all duration-600 ${
                  visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  Contact Us
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email: privacy@deaira.com</li>
                    <li>Discord: Join our community server for support</li>
                    <li>DAO Governance: Submit proposals through our governance portal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="cta"
              data-animate
              className={`transform transition-all duration-600 ${
                visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent">Privacy-First</span> Decentralized AI
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our platform knowing your privacy is respected and protected.
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
      <footer className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeAIra. All rights reserved. Protecting your privacy in the decentralized future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;