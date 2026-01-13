import React, { useContext, useState } from 'react';
import { ChevronLeft, Wallet, AlertCircle, CheckCircle, Zap, Copy, ExternalLink } from 'lucide-react';

const DirectDeposit = () => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [walletConnected] = useState(true);
  const [walletAddress] = useState('0x1234...5678');
  const [copied, setCopied] = useState(false);

  const TARGET_WALLET = '0x6A5DD142F16e565E51a66EF03870a88365Cb6CaB';
  const MIN_DEPOSIT = 1;

  const handleDeposit = async () => {
    if (!walletConnected) {
      setMessage({ type: 'error', text: 'Please connect your wallet first' });
      return;
    }

    if (!amount || parseFloat(amount) < MIN_DEPOSIT) {
      setMessage({ type: 'error', text: `Minimum deposit is ${MIN_DEPOSIT} USDT` });
      return;
    }

    setIsProcessing(true);
    setMessage({ type: '', text: '' });

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setMessage({
        type: 'success',
        text: `✓ Deposit of ${amount} USDT submitted successfully. Transaction hash: 0x7f8c...a3b9`,
      });
      setAmount('');
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <button className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline text-sm font-medium">Back</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Deposit Funds
              </h1>
              <p className="text-white/60 text-lg">
                Add USDT to your DeAlra wallet
              </p>
            </div>

            {/* Status Messages */}
            {message.text && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  message.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{message.text}</p>
              </div>
            )}

            {/* Wallet Connection Status Card */}
            <div className={`p-6 rounded-2xl border backdrop-blur transition-all ${
              walletConnected
                ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/30'
                : 'bg-gradient-to-r from-red-600/20 to-pink-600/20 border-red-500/30'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${walletConnected ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    <Wallet className={`w-6 h-6 ${walletConnected ? 'text-green-400' : 'text-red-400'}`} />
                  </div>
                  <div>
                    <p className={`font-semibold ${walletConnected ? 'text-green-300' : 'text-red-300'}`}>
                      {walletConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
                    </p>
                    <p className={`text-sm ${walletConnected ? 'text-green-200/70' : 'text-red-200/70'}`}>
                      {walletConnected ? walletAddress : 'Please connect your wallet to proceed'}
                    </p>
                  </div>
                </div>
                <button className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  walletConnected
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  {walletConnected ? 'Disconnect' : 'Connect Wallet'}
                </button>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Amount Input */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <label className="block text-white font-semibold mb-3">
                    Deposit Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min={MIN_DEPOSIT}
                      step="0.01"
                      disabled={!walletConnected || isProcessing}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 font-semibold">
                      USDT
                    </span>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-white/60 text-sm">
                      Minimum: {MIN_DEPOSIT} USDT
                    </p>
                    <div className="flex gap-2">
                      {[10, 50, 100].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setAmount(preset.toString())}
                          className="px-3 py-1 text-xs bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/30 rounded-lg text-purple-300 transition-all"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deposit Address Card */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                    Deposit Address
                  </h3>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-xs mb-2">Send USDT to:</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-green-400 font-mono text-sm break-all">
                        {TARGET_WALLET}
                      </p>
                      <button
                        onClick={() => copyToClipboard(TARGET_WALLET)}
                        className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-all"
                        title="Copy to clipboard"
                      >
                        <Copy className={`w-5 h-5 ${copied ? 'text-green-400' : 'text-white/60'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Deposit Button */}
                <button
                  onClick={handleDeposit}
                  disabled={!walletConnected || !amount || isProcessing || parseFloat(amount) < MIN_DEPOSIT}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    walletConnected && amount && parseFloat(amount) >= MIN_DEPOSIT
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                >
                  {isProcessing && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {isProcessing
                    ? 'Processing...'
                    : !walletConnected
                    ? 'Connect Wallet First'
                    : !amount || parseFloat(amount) < MIN_DEPOSIT
                    ? 'Enter Valid Amount'
                    : `Deposit ${amount} USDT`}
                </button>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-6">
                {/* AI Community Card */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="text-white font-bold mb-2">
                      AI Investor Network
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      Be part of DeAlra's advanced AI-based community and get exclusive benefits.
                    </p>
                    <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-all">
                      Join Now
                    </button>
                  </div>
                </div>

                {/* Important Info Cards */}
                <div className="space-y-4">
                  {/* Gas Fees */}
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-amber-300 font-semibold mb-1">Gas Fees</p>
                        <p className="text-amber-200/70">
                          Ensure you have enough BNB in your wallet for transaction fees.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Purchase USDT */}
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-blue-300 font-semibold mb-1">Get USDT</p>
                        <p className="text-blue-200/70 mb-3">
                          Buy USDT from Binance, KuCoin, OKX or any exchange.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-cyan-300 font-semibold mb-1">Need Help?</p>
                        <p className="text-cyan-200/70">
                          Contact our support team if funds don't arrive within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectDeposit;