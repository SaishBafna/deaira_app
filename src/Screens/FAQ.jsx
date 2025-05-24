import React, { useState, useEffect } from "react";
import { ChevronLeft, Menu, X, ChevronDown, ChevronUp, Mail, ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [openQuestions, setOpenQuestions] = useState({});

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

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBackClick = () => {
        window.history.back();
    };

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      questions: [
        {
          id: 'gs1',
          question: 'What is DeAIra and how does it work?',
          answer: 'DeAIra is a decentralized platform that combines Web3 technology with artificial intelligence. It allows users to tokenize AI models as digital assets, deploy them on a decentralized network, and monetize them through a community-governed marketplace. The platform uses blockchain technology to ensure transparency and smart contracts to automate transactions and revenue sharing.'
        },
        {
          id: 'gs2',
          question: 'How do I create an account on DeAIra?',
          answer: 'To use DeAIra, you simply need to connect a compatible Web3 wallet (like MetaMask or WalletConnect). No traditional account creation is required. For enhanced features, you may optionally verify your email address through our verification system.'
        },
        {
          id: 'gs3',
          question: 'What wallets are supported by DeAIra?',
          answer: 'DeAIra supports all EVM-compatible wallets including MetaMask, WalletConnect, Coinbase Wallet, and Trust Wallet. We plan to expand support to additional wallets based on community demand.'
        }
      ]
    },
    {
      id: 'ai-models',
      title: 'AI Models',
      questions: [
        {
          id: 'ai1',
          question: 'How do I tokenize my AI model on DeAIra?',
          answer: 'To tokenize an AI model:\n1. Connect your wallet to DeAIra\n2. Navigate to the "Tokenize Model" section\n3. Upload your model files and specify parameters\n4. Set your pricing and licensing terms\n5. Confirm the transaction through your wallet\nYour model will be deployed on our decentralized network and represented as a digital asset on the blockchain.'
        },
        {
          id: 'ai2',
          question: 'What types of AI models can I deploy?',
          answer: 'DeAIra supports various AI model types including:\n- Machine learning models (TensorFlow, PyTorch)\n- Natural language processing models\n- Computer vision models\n- Generative AI models\nAll models must comply with our acceptable use policy and cannot be used for illegal or harmful purposes.'
        },
        {
          id: 'ai3',
          question: 'How is model performance maintained on a decentralized network?',
          answer: 'Our decentralized network uses a combination of:\n- Node reputation scoring\n- Performance-based incentives\n- Automatic failover systems\n- Regular model validation\nThis ensures consistent performance while maintaining the benefits of decentralization. Users can rate model performance, which affects node operators rewards.'
        }
      ]
    },
    {
      id: 'monetization',
      title: 'Monetization & Payments',
      questions: [
        {
          id: 'm1',
          question: 'How do I earn money from my AI models?',
          answer: 'You earn revenue whenever your model is used through:\n1. Pay-per-use transactions\n2. Subscription access\n3. Licensing fees\n4. Royalties from secondary market sales\nAll payments are automatically distributed via smart contracts to your connected wallet. Revenue splits are customizable for team-developed models.'
        },
        {
          id: 'm2',
          question: 'What cryptocurrencies does DeAIra accept?',
          answer: 'DeAIra primarily uses our native token (DAI) for platform transactions, but also accepts ETH and stablecoins like USDC. All payments are processed on-chain through smart contracts.'
        },
        {
          id: 'm3',
          question: 'What are the platform fees?',
          answer: 'DeAIra charges a 5% platform fee on all transactions, which goes to:\n- Platform maintenance (2%)\n- DAO treasury (2%)\n- Community rewards (1%)\nThese fees are subject to change through DAO governance votes.'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology & Security',
      questions: [
        {
          id: 't1',
          question: 'How does DeAIra ensure the security of my AI models?',
          answer: 'We implement multiple security measures:\n- Model encryption before deployment\n- Secure sandboxed execution environments\n- Blockchain-based access controls\n- Regular security audits\nHowever, remember that once deployed on blockchain, some model metadata will be permanently visible.'
        },
        {
          id: 't2',
          question: 'What blockchain does DeAIra use?',
          answer: 'DeAIra is currently built on Ethereum as an L2 solution, with plans for multi-chain expansion. Our smart contracts are open-source and audited by third-party security firms.'
        },
        {
          id: 't3',
          question: 'How decentralized is DeAIra really?',
          answer: 'DeAIra achieves decentralization through:\n- Fully on-chain governance (DAO)\n- Distributed model hosting\n- Community-curated marketplace\n- Open-source core protocols\nWhile some components use centralized services for performance, were continuously working to decentralize all aspects of the platform.'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community & Governance',
      questions: [
        {
          id: 'c1',
          question: 'How can I participate in DeAIra governance?',
          answer: 'Governance participation requires holding our governance token (DAI-G):\n1. Stake tokens to get voting power\n2. Create or vote on governance proposals\n3. Participate in community discussions\n4. Run for the DAO council\nAll major platform decisions are made through community voting.'
        },
        {
          id: 'c2',
          question: 'How are disputes resolved on the platform?',
          answer: 'Disputes are handled through:\n1. Community moderation for minor issues\n2. DAO voting for significant disputes\n3. Smart contract-based arbitration systems\n4. Escrow mechanisms for financial disputes\nOur goal is to create fair, transparent resolution processes.'
        },
        {
          id: 'c3',
          question: 'Can I contribute to DeAIra development?',
          answer: 'Absolutely! We welcome contributions:\n- Code contributions through our GitHub\n- Model development and curation\n- Community moderation\n- Documentation improvements\nAll contributors are eligible for rewards from our community fund.'
        }
      ]
    }
  ];

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
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about DeAIra, the decentralized AI platform
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              {/* Search Bar */}
              <div
                id="search"
                data-animate
                className={`mb-12 transform transition-all duration-600 ${
                  visibleSections.has('search') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search questions..."
                    className="w-full bg-white/5 border border-white/20 rounded-xl py-4 px-6 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 19L14.65 14.65"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* FAQ Categories */}
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  data-animate
                  className={`mb-12 transform transition-all duration-600 ${
                    visibleSections.has(category.id) ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
                      >
                        <button
                          className="w-full flex justify-between items-center p-6 text-left"
                          onClick={() => toggleQuestion(item.id)}
                        >
                          <h3 className="text-lg font-medium">{item.question}</h3>
                          {openQuestions[item.id] ? (
                            <ChevronUp className="text-gray-400" />
                          ) : (
                            <ChevronDown className="text-gray-400" />
                          )}
                        </button>
                        {openQuestions[item.id] && (
                          <div className="px-6 pb-6 pt-2 text-gray-300">
                            {item.answer.split('\n').map((paragraph, i) => (
                              <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Still Have Questions */}
              <div
                id="contact"
                data-animate
                className={`transform transition-all duration-600 ${
                  visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent mb-6">
                  Still Have Questions?
                </h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>Can't find the answer you're looking for? Our team is happy to help.</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                      <Mail size={18} />
                      Contact Support
                    </button>
                    <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                      <ExternalLink size={18} />
                      Join Our Discord
                    </button>
                  </div>
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
                Ready to <span className="bg-gradient-to-r from-[#A800F7] to-[#00F798] bg-clip-text text-transparent">Get Started</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution in decentralized AI and start tokenizing your models today.
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
                  Read Documentation
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
            <p>&copy; 2024 DeAIra. All rights reserved. Decentralizing AI for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;