import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiChevronLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

const WalletPage = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const jwt_token = localStorage.getItem('jwt_token');
  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');

  // State management
  const [data, setData] = useState(null);
  const [walletData, setWalletData] = useState({
    walletAddress: '',
    totalIncome: 0,
    availableBalance: 0,
    pendingWithdrawals: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [formData, setFormData] = useState({
    otp: '',
    withdrawalAmount: '',
    withdrawalAddress: '',
    currency: 'USDT',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  

  // Fetch all required data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. Fetch user data first
        const userResponse = await axios.get(
          `${API_BASE_URL}/homepageapi/${encryptedWalletAddress}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (!userResponse.data?.user?.user) {
          throw new Error('Failed to fetch user data');
        }

        const userData = userResponse.data.user.user;
        setData(userData);

        // 2. Then fetch wallet data using the user ID
        const walletResponse = await axios.get(
          `${API_BASE_URL}/Walletpageapi/${encryptedWalletAddress}`,
          {
            headers: {
              'Authorization': `Bearer ${jwt_token}`
            }
          }
        );

        setWalletData({
          walletAddress: walletResponse.data.user.user.usdt_address || '',
          totalIncome: walletResponse.data.wallet.total_income || 0,
          availableBalance: walletResponse.data.wallet.wallet_balance || 0,
          pendingWithdrawals: walletResponse.data.wallet.total_withdrawal_p || 0
        });

        // Set the withdrawal address to the user's wallet address by default
        setFormData(prev => ({
          ...prev,
          withdrawalAddress: walletResponse.data.user.user.usdt_address || ''
        }));

      } catch (err) {
        console.error('API Error:', err);
        setError(err.response?.data?.message || err.message || 'Failed to load data');
        toast.error(err.response?.data?.message || 'Failed to load wallet data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL, jwt_token, encryptedWalletAddress]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate OTP for withdrawal
  const generateOTP = async () => {
    try {
      setOtpLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/generate_otp/${encryptedWalletAddress}`,
        {
          headers: {
            'Authorization': `Bearer ${jwt_token}`
          }
        }
      );

      if (response.data) {
        setOtpSent(true);
        toast.success('OTP has been sent to your registered email');
      } else {
        throw new Error(response.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      console.error('OTP Error:', err);
      toast.error(err.response?.data?.message || err.message || 'Error generating OTP');
    } finally {
      setOtpLoading(false);
    }
  };

  // Validate withdrawal form
  const validateWithdrawal = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    // Validation
    if (!formData.otp || !formData.withdrawalAmount || !formData.withdrawalAddress) {
      toast.error('Please fill all fields and verify OTP');
      return;
    }

    const amount = parseFloat(formData.withdrawalAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (amount < 10) {
      toast.error('Minimum withdrawal amount is $10');
      return;
    }

    // if (amount > walletData.availableBalance) {
    //   toast.error('Withdrawal amount exceeds available balance');
    //   return;
    // }

    // If all validations pass, show confirmation
    setShowConfirmation(true);
  };

  // Handle withdrawal submission
  const handleWithdrawal = async () => {
    try {
      setLoading(true);
      const amount = parseFloat(formData.withdrawalAmount);
      
      const response = await axios.post(
        `${API_BASE_URL}/payment_withdraw`,
        {
          transfer_amount: amount,
          user_id: formData.withdrawalAddress,
          payment_type: formData.currency,
          otp: formData.otp
        },
        {
          headers: {
            'Authorization': `Bearer ${jwt_token}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Withdrawal request submitted successfully');

        // Refresh wallet data
        const walletResponse = await axios.get(
          `${API_BASE_URL}/Walletpageapi/${encryptedWalletAddress}`,
          {
            headers: {
              'Authorization': `Bearer ${jwt_token}`
            }
          }
        );

        setWalletData({
          walletAddress: walletResponse.data.user.user.usdt_address || '',
          totalIncome: walletResponse.data.wallet.total_income || 0,
          availableBalance: walletResponse.data.wallet.wallet_balance || 0,
          pendingWithdrawals: walletResponse.data.wallet.total_withdrawal_p || 0
        });

        // Reset form and state
        setFormData({
          otp: '',
          withdrawalAmount: '',
          withdrawalAddress: walletResponse.data.user.user.usdt_address || '',
          currency: 'USDT',
        });
        setOtpSent(false);
        setShowConfirmation(false);
      } else {
        throw new Error(response.data.message || 'Withdrawal failed');
      }
    } catch (err) {
      console.error('Withdrawal Error:', err);
      toast.error(err.response?.data?.message || err.message || 'Withdrawal error');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading && !walletData.walletAddress) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d]">
        <div className="text-white text-xl">Loading wallet data...</div>
      </div>
    );
  }

  // Error state
  // if (error) {
  //   return (
  //     <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d]">
  //       <div className="text-white text-xl text-center p-4 bg-red-900/50 rounded-lg">
  //         Error: {error}<br />
  //         <button
  //           onClick={() => window.location.reload()}
  //           className="mt-4 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700"
  //         >
  //           Try Again
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center p-6 gap-6">
      {/* Background elements */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4">
        <button
          className="flex items-center gap-2 text-white/80 hover:text-white"
          onClick={() => navigate(-1)}
        >
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center text-white">Wallet Dashboard</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Wallet Summary Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Income Card */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-4 shadow-lg">
          <h3 className="text-white/80 text-sm">Total Income</h3>
          <p className="text-2xl font-bold text-white mt-2">${walletData.totalIncome.toFixed(2)}</p>
          <p className="text-green-400 text-xs mt-1">All time earnings</p>
        </div>

        {/* Available Balance Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-4 shadow-lg">
          <h3 className="text-white/80 text-sm">Available Balance</h3>
          <p className="text-2xl font-bold text-white mt-2">${walletData.availableBalance.toFixed(2)}</p>
          <p className="text-yellow-400 text-xs mt-1">Ready to withdraw</p>
        </div>

        {/* Pending Withdrawals Card */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-4 shadow-lg">
          <h3 className="text-white/80 text-sm">Pending Withdrawals</h3>
          <p className="text-2xl font-bold text-white mt-2">${walletData.pendingWithdrawals.toFixed(2)}</p>
          <p className="text-blue-400 text-xs mt-1">Processing</p>
        </div>
      </div>

      {/* Wallet Address Section */}
      <div className="w-full max-w-4xl bg-[#1a1a40] rounded-xl p-4 mt-4">
        <h3 className="text-white font-semibold mb-2">Your Wallet Address</h3>
        <div className="flex items-center justify-between bg-[#00000040] p-3 rounded-lg">
          <p className="text-white font-mono truncate">{walletData.walletAddress}</p>
          <button
            className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700"
            onClick={() => {
              navigator.clipboard.writeText(walletData.walletAddress);
              toast.success('Wallet address copied to clipboard');
            }}
          >
            Copy
          </button>
        </div>
      </div>

      {/* Withdrawal Form */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-6 mt-4">
        <h2 className="text-xl font-bold text-white mb-4">Withdraw Funds</h2>

        <form onSubmit={validateWithdrawal}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Amount */}
            <div>
              <label className="block text-white font-semibold mb-1">Amount (USD)</label>
              <input
                type="number"
                name="withdrawalAmount"
                value={formData.withdrawalAmount}
                onChange={handleInputChange}
                placeholder="10.00"
                min="10"
                step="0.01"
                className="w-full px-4 py-2 rounded-md bg-[#00000040] border border-[#DDCDE575] text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
              <p className="text-xs text-gray-400 mt-1">Minimum: $10.00</p>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-white font-semibold mb-1">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[#00000040] border border-[#DDCDE575] text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              >
                <option value="USDT">USDT</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
            </div>

            {/* Withdrawal Address */}
            <div className="md:col-span-2">
              <label className="block text-white font-semibold mb-1">Withdrawal USDT BEP20 Address</label>
              <input
                type="text"
                name="withdrawalAddress"
                value={formData.withdrawalAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[#00000040] border border-[#DDCDE575] text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>

            {/* OTP Verification */}
            <div>
              <label className="block text-white font-semibold mb-1">OTP Verification</label>
              <div className="flex">
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter OTP"
                  className="flex-grow px-4 py-2 rounded-l-md bg-[#00000040] border border-[#DDCDE575] text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                  disabled={!otpSent}
                />
                <button
                  type="button"
                  onClick={generateOTP}
                  disabled={otpLoading || otpSent}
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {otpLoading ? 'Sending...' : otpSent ? 'Sent' : 'Get OTP'}
                </button>
              </div>
              {otpSent && (
                <p className="text-green-400 text-xs mt-1">OTP sent to your registered email</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Continue to Confirmation'}
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-[#00000040] rounded-lg border border-[#DDCDE575] text-sm text-[#ffb5b5]">
          <p className="mb-2">
            <span className="font-semibold">Note:</span> Withdrawals are processed within 5-30 minutes. Network fees apply.
          </p>
          <p>
            Ensure the wallet address matches the selected network to avoid loss of funds.
          </p>
        </div>
      </div>

      {/* Withdrawal Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-[#1a1a40] to-[#3b007d] rounded-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">Confirm Withdrawal</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-white/80 text-sm">Amount</p>
                <p className="text-white font-bold">${parseFloat(formData.withdrawalAmount).toFixed(2)} {formData.currency}</p>
              </div>
              
              <div>
                <p className="text-white/80 text-sm">Withdrawal Address</p>
                <p className="text-white font-mono break-all">{formData.withdrawalAddress}</p>
              </div>
              
              <div className="p-4 bg-[#00000040] rounded-lg border border-[#DDCDE575]">
                <p className="text-yellow-400 text-sm">
                  Please double-check the withdrawal address. Transactions cannot be reversed once submitted.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawal}
                disabled={loading}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Confirm Withdrawal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPage;