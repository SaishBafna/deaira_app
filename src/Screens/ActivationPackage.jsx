import React, { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ActivationPackage = () => {
  const navigate = useNavigate();
  const [walletBalance] = useState(185.50); // Sample balance
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    package: '',
    agreeTerms: false
  });

  // Package options for select dropdown
  const packageOptions = [
    { value: '', label: 'Select a package', disabled: true },
    { value: 'basic', label: 'Basic Package - 50 USDT', price: 50 },
    { value: 'advanced', label: 'Advanced Package - 150 USDT', price: 150 },
    { value: 'professional', label: 'Professional Package - 300 USDT', price: 300 }
  ];

  // Package details for display
  const packageDetails = {
    basic: {
      name: "Basic Package",
      price: 50,
      features: [
        "Basic trading signals",
        "Daily market updates",
        "Email support"
      ]
    },
    advanced: {
      name: "Advanced Package",
      price: 150,
      features: [
        "Premium signals",
        "Real-time alerts",
        "Priority support",
        "Weekly webinars"
      ]
    },
    professional: {
      name: "Professional Package",
      price: 300,
      features: [
        "VIP signals",
        "1-on-1 coaching",
        "Advanced tools",
        "All lower tier benefits"
      ]
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (name === 'package') {
      setSelectedPackage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.package) {
      alert('Please select a package');
      return;
    }
    if (!formData.agreeTerms) {
      alert('You must agree to the terms');
      return;
    }
    alert(`Purchasing ${packageDetails[formData.package].name} for ${packageDetails[formData.package].price} USDT`);
    // Actual purchase logic would go here
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
        <h1 className="text-2xl font-bold text-center text-white">Activation Packages</h1>
        <div className="w-10"></div>
      </div>

      {/* Wallet Balance */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#1a1a40] to-[#3b007d] rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="font-semibold">Available Balance</h2>
            <p className="text-pink-300">Select and activate your package</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{walletBalance.toFixed(2)} USDT</p>
            <button 
              className="text-xs underline text-purple-300 hover:text-purple-100"
              onClick={() => navigate('/deposit')}
            >
              Deposit Funds
            </button>
          </div>
        </div>
      </div>

      {/* Package Selection Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
        {/* Package Selection Dropdown */}
        <div>
          <label htmlFor="package" className="block text-white font-semibold mb-2">
            Select Package
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a40] border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {packageOptions.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Package Details Display */}
        {selectedPackage && (
          <div className="bg-[#1a1a40]/50 border border-purple-500/30 rounded-lg p-4">
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              {packageDetails[selectedPackage].name} - {packageDetails[selectedPackage].price} USDT
            </h3>
            <ul className="space-y-2">
              {packageDetails[selectedPackage].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Terms Agreement */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded bg-[#1a1a40] border-white/30 focus:ring-purple-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeTerms" className="text-white">
              I agree to the <span className="text-purple-300 underline cursor-pointer">Terms of Service</span> and <span className="text-purple-300 underline cursor-pointer">Refund Policy</span>
            </label>
          </div>
        </div>

        {/* Purchase Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={!formData.package || !formData.agreeTerms || walletBalance < (packageDetails[selectedPackage]?.price || 0)}
            className={`w-full py-3 px-6 rounded-full font-bold text-lg ${
              formData.package && formData.agreeTerms && walletBalance >= (packageDetails[selectedPackage]?.price || 0)
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-600 cursor-not-allowed text-gray-300'
            }`}
          >
            {!formData.package ? 'Select a Package' : 
             !formData.agreeTerms ? 'Agree to Terms' :
             walletBalance < (packageDetails[selectedPackage]?.price || 0) ? 'Insufficient Balance' :
             `Purchase for ${packageDetails[selectedPackage].price} USDT`}
          </button>
        </div>
      </form>

      {/* Info Box */}
      <div className="w-full max-w-4xl mt-2 mb-20 p-4 bg-[#504949] rounded-lg border border-gray-200 text-sm text-[#F64AFF]">
        <p className="mb-2">
          <span className="font-semibold">Note:</span> Packages are activated immediately after successful payment.
        </p>
        <p>
          For any issues, please contact our support team within 24 hours of purchase.
        </p>
      </div>

    </div>
  )
}

export default ActivationPackage