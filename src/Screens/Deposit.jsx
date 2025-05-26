import React, { useContext, useState } from 'react'
import Image3 from '../assets/Images/depositimg.png';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from "../context/walletcontext";
import axios from 'axios';
 
const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;

const Deposit = () => {
  const navigate = useNavigate();
  const { connectWallet, disconnectWallet, transferUSDT, checkNetwork } = useContext(WalletContext);
  const walletAddress = localStorage.getItem('walletAddress');
  
  // State for form handling
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Target wallet address where USDT will be sent
  const TARGET_WALLET = '0x6A5DD142F16e565E51a66EF03870a88365Cb6CaB';

  // Handle deposit/transfer
 const handleDeposit = async () => {
    // Validation checks
    if (!walletAddress) {
      alert('Please connect your wallet first!');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount!');
      return;
    }

    try {
      setIsProcessing(true);

      // Check if connected to BSC network
      const isCorrectNetwork = await checkNetwork();
      if (!isCorrectNetwork) {
        setIsProcessing(false);
        return;
      }

      // Show confirmation dialog
      const confirmTransfer = window.confirm(
        `Are you sure you want to deposit ${amount} USDT?\n\nThis will transfer USDT from your wallet to:\n${TARGET_WALLET}`
      );

      if (!confirmTransfer) {
        setIsProcessing(false);
        return;
      }

      // Execute the transfer and get the result object
      const result = await transferUSDT(TARGET_WALLET, amount);

      if (result.success) {
        // Reset form on success
        setAmount('');
        alert(`Deposit successful! Transaction hash: ${result.txHash}`);
        
        // You can now use result.txHash for any further processing
        console.log('Transaction hash:', result.txHash);
        const response = await axios.post(`${API_BASE_URL}/make_deposite`,{
          amount: amount,
          wallet_address: walletAddress,
          t_hash: result.txHash
        });

        console.log(response.data);
        // Optional: Navigate back or to success page
        // navigate('/dashboard');
      } else if (result.txHash) {
        // If there was a txHash but the transaction ultimately failed
        alert(`Deposit failed but transaction was submitted. Hash: ${result.txHash}`);
      }

    } catch (error) {
      console.error('Deposit error:', error);
      alert('Deposit failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle wallet connection
  const handleWalletAction = async () => {
    if (walletAddress) {
      await disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6">

      {/* Blur circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white" onClick={() => navigate(-1)}>
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center text-white">Deposit</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Wallet Connection Status */}
      <div className="w-full max-w-xl md:max-w-3xl">
        {!walletAddress ? (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-4">
            <p className="text-red-300 text-center">
              Please connect your wallet to make a deposit
            </p>
            <button 
              onClick={handleWalletAction}
              className="w-full mt-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-4">
            <p className="text-green-300 text-center text-sm">
              Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>
            <button 
              onClick={handleWalletAction}
              className="w-full mt-2 bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition text-sm"
            >
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>

      <div className="w-full max-w-xl md:max-w-3xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 flex items-center gap-4 shadow-lg">
        {/* Left Text Section - Wider */}
        <div className="flex flex-col text-white w-[70%]">
          <h2 className="text-lg font-semibold leading-tight">
            Power Up with Our AI based Community
          </h2>
          <p className="text-sm mt-1 text-pink-300">
            Be part of DeAlra's AI investor network.
          </p>
          <button className="mt-3 self-start bg-purple-600 border border-white text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow hover:bg-purple-700 transition">
            Join Now
          </button>
        </div>

        {/* Right Image Section - Narrower */}
        <div className="w-[30%] flex justify-center">
          <img
            src={Image3}
            alt="AI Community"
            className="h-32 w-auto object-contain"
          />
        </div>
      </div>

      {/* Form Fields Section - Wider on desktop */}
      <div className="w-full max-w-xl md:max-w-3xl space-y-4">
        {/* Enter Amount */}
        <div>
          <label className="block text-white font-semibold mb-1">Enter Amount (USDT)</label>
          <input
            type="number"
            placeholder="10"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="0.01"
            disabled={!walletAddress || isProcessing}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <p className="text-xs text-gray-300 mt-1">Minimum deposit: 1 USDT</p>
        </div>

        {/* Deposit Address Info */}
        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-600">
          <p className="text-white text-sm font-semibold mb-2">Deposit Address:</p>
          <p className="text-green-400 text-xs font-mono break-all">{TARGET_WALLET}</p>
        </div>

        <div className="w-full flex justify-center">
          <button 
            onClick={handleDeposit}
            disabled={!walletAddress || !amount || isProcessing || parseFloat(amount) <= 0}
            className="mt-3 bg-purple-600 border border-white text-white text-sm font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-600"
          >
            {isProcessing ? 'Processing...' : 'Confirm Deposit'}
          </button>
        </div>

        <div className="mt-4 mb-20 p-4 bg-[#504949] rounded-lg border border-gray-200 text-sm text-[#F64AFF]">
          <p className="mb-2">
            <span className="font-semibold">Hint:</span> You can purchase USDT from Binance, KuCoin, OKX or any other exchange and deposit to the given address.
          </p>
          <p className="mb-2">
            Make sure you have enough BNB in your wallet for gas fees (transaction fees).
          </p>
          <p>
            If your funds haven't reached your wallet, please contact online support.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Deposit