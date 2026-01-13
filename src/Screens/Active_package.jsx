import React, { useState } from "react";
import { ChevronLeft, Check, AlertCircle, Zap } from "lucide-react";

const PackageActivation = () => {
  const [walletBalance] = useState(185.5);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const packages = [
    {
      id: "basic",
      name: "Basic",
      price: 50,
      description: "Perfect for beginners",
      features: ["Basic trading signals", "Daily market updates", "Email support"],
      icon: "📊",
    },
    {
      id: "advanced",
      name: "Advanced",
      price: 150,
      description: "For serious traders",
      features: [
        "Premium signals",
        "Real-time alerts",
        "Priority support",
        "Weekly webinars",
      ],
      icon: "⚡",
      popular: true,
    },
    {
      id: "professional",
      name: "Professional",
      price: 300,
      description: "Maximum benefits",
      features: [
        "VIP signals",
        "1-on-1 coaching",
        "Advanced tools",
        "All lower tier benefits",
      ],
      icon: "👑",
    },
  ];

  const currentPackage = packages.find((p) => p.id === selectedPackage);
  const hasInsufficientBalance = currentPackage && walletBalance < currentPackage.price;
  const canPurchase = selectedPackage && agreeTerms && !hasInsufficientBalance;

  const handlePurchase = () => {
    if (!canPurchase) return;

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: "success",
        text: `✓ Successfully purchased ${currentPackage.name} Package for ${currentPackage.price} USDT`,
      });
      setSelectedPackage("");
      setAgreeTerms(false);
    }, 1500);
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
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Activation Packages
              </h1>
              <p className="text-white/60 text-lg">
                Choose the perfect plan for your trading journey
              </p>
            </div>

            {/* Status Messages */}
            {message.text && (
              <div
                className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${
                  message.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-300"
                    : "bg-red-500/20 border border-red-500/50 text-red-300"
                }`}
              >
                {message.type === "success" ? (
                  <Check className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{message.text}</p>
              </div>
            )}

            {/* Wallet Balance Card */}
            <div className="mb-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white/70 text-sm font-medium mb-1">
                    Available Balance
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    {walletBalance.toFixed(2)} USDT
                  </p>
                </div>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-200">
                  + Deposit Funds
                </button>
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-8">
              {/* Package Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                      selectedPackage === pkg.id
                        ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                        Most Popular
                      </div>
                    )}

                    <div className="text-4xl mb-3">{pkg.icon}</div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-white">
                        {pkg.price}
                        <span className="text-lg text-white/60 ml-1">USDT</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-white/80 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {selectedPackage === pkg.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Selected Package Details */}
              {selectedPackage && (
                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <p className="text-blue-300 font-medium">
                      You're about to activate the {currentPackage.name} package
                    </p>
                  </div>
                  {hasInsufficientBalance && (
                    <p className="text-red-300 text-sm">
                      Insufficient balance. You need {(currentPackage.price - walletBalance).toFixed(2)} USDT more.
                    </p>
                  )}
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border border-white/30 bg-white/10 checked:bg-purple-600 checked:border-purple-600 cursor-pointer accent-purple-500"
                />
                <label htmlFor="terms" className="text-white/80 text-sm">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    Terms of Service
                  </button>
                  {" "}and{" "}
                  <button
                    type="button"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    Refund Policy
                  </button>
                </label>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handlePurchase}
                disabled={!canPurchase || isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  canPurchase
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70"
                    : "bg-white/10 text-white/50 cursor-not-allowed"
                }`}
              >
                {isLoading && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {isLoading
                  ? "Processing..."
                  : !selectedPackage
                  ? "Select a Package"
                  : !agreeTerms
                  ? "Agree to Terms"
                  : hasInsufficientBalance
                  ? `Need ${(currentPackage.price - walletBalance).toFixed(2)} USDT More`
                  : `Purchase for ${currentPackage.price} USDT`}
              </button>
            </div>

            {/* Info Section */}
            <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <div className="flex gap-4">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-200 space-y-2">
                  <p>
                    <span className="font-semibold">Note:</span> Packages are
                    activated immediately after successful payment.
                  </p>
                  <p>
                    For any issues, please contact our support team within 24
                    hours of purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageActivation;