
// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { ethers } from "ethers";
// import group from "../assets/Images/Group 415.png";
// import coin from "../assets/Images/Earning/dlogo.png";
// import Vector from "../assets/Images/vector.png";
// import early from "../assets/Images/early.png";
// import community from "../assets/Images/community.png";
// import secure from "../assets/Images/secure.png";
// import future from "../assets/Images/future.png";
// import Footer from "../Footer/Footer";
// import DLogo from "../assets/Images/Earning/dlogo.png";
// import USDT from "../assets/Images/Earning/usdt.png";
// import Group417 from "../assets/Images/Group 417.png";
// import { WalletContext } from "../context/walletcontext";
// import Header from "../Header/header1";

// // USDT Contract Configuration (BSC Mainnet)
// const USDTContractAddress = "0x55d398326f99059fF775485246999027B3197955"; // BSC Mainnet USDT Contract
// const RECEIVER_WALLET_ADDRESS = "0x6A5DD142F16e565E51a66EF03870a88365Cb6CaB"; // Replace with actual receiver address

// const minimalABI = [
//   "function transfer(address to, uint256 amount) external returns (bool)",
//   "function balanceOf(address owner) view returns (uint256)",
//   "function decimals() view returns (uint8)"
// ];

// const TokenPreSale = () => {
//   const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);

//   const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;

//   // States
//   const [selectedToken, setSelectedToken] = useState('DAIR');
//   const [payAmount, setPayAmount] = useState('');
//   const [receiveAmount, setReceiveAmount] = useState('');
//   const [isTransferring, setIsTransferring] = useState(false);
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     setIsConnected(!!walletAddress);
//   }, [walletAddress]);

//   // Check if user is on BSC Mainnet
//   const checkNetwork = async () => {
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const network = await provider.getNetwork();
//       const BSC_MAINNET_CHAIN_ID = 56n; // BSC Mainnet chain ID

//       if (network.chainId !== BSC_MAINNET_CHAIN_ID) {
//         try {
//           await window.ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId: '0x38' }], // BSC Mainnet (56 in hex)
//           });
//           return true;
//         } catch (switchError) {
//           if (switchError.code === 4902) {
//             // BSC Mainnet not added, add it
//             await window.ethereum.request({
//               method: 'wallet_addEthereumChain',
//               params: [{
//                 chainId: '0x38',
//                 chainName: 'BNB Smart Chain',
//                 nativeCurrency: {
//                   name: 'BNB',
//                   symbol: 'BNB',
//                   decimals: 18
//                 },
//                 rpcUrls: [
//                   'https://bsc-dataseed1.binance.org/',
//                   'https://bsc-dataseed2.binance.org/',
//                   'https://bsc-dataseed3.binance.org/'
//                 ],
//                 blockExplorerUrls: ['https://bscscan.com/']
//               }]
//             });
//             return true;
//           }
//           throw switchError;
//         }
//       }
//       return true;
//     } catch (error) {
//       console.error('Network check failed:', error);
//       alert('Please switch to BSC Mainnet');
//       return false;
//     }
//   };

//   // Transfer USDT function
//   const transferUSDT = async (receiverAddress, amount) => {
//     if (!window.ethereum) {
//       alert('BSC Network Wallet dApp not found!');
//       return { success: false, txHash: null };
//     }

//     if (!walletAddress) {
//       alert('Please connect your wallet first!');
//       return { success: false, txHash: null };
//     }

//     if (!receiverAddress || !ethers.isAddress(receiverAddress)) {
//       alert('Please enter a valid receiver address!');
//       return { success: false, txHash: null };
//     }

//     if (!amount || parseFloat(amount) <= 0) {
//       alert('Please enter a valid amount!');
//       return { success: false, txHash: null };
//     }

//     try {
//       // Check network first
//       const networkOk = await checkNetwork();
//       if (!networkOk) {
//         return { success: false, txHash: null };
//       }

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();

//       // Set up USDT contract instance
//       const usdtContract = new ethers.Contract(USDTContractAddress, minimalABI, signer);

//       const decimals = 18;
//       const amountInWei = ethers.parseUnits(amount.toString(), decimals);

//       // Check balance before transfer
//       const balance = await usdtContract.balanceOf(walletAddress);
//       if (balance < amountInWei) {
//         alert('Insufficient USDT balance!');
//         return { success: false, txHash: null };
//       }

//       console.log(`Transferring ${amount} USDT to ${receiverAddress} on BSC Mainnet`);
//       console.log(`Amount in wei: ${amountInWei.toString()}`);

//       // Execute the transfer
//       const transferTx = await usdtContract.transfer(receiverAddress, amountInWei);

//       console.log("Transaction submitted:", transferTx.hash);
//       alert(`Transaction submitted on BSC Mainnet! Hash: ${transferTx.hash}`);

//       // Wait for transaction confirmation
//       const receipt = await transferTx.wait();

//       if (receipt.status === 1) {
//         console.log("Transfer successful!");
//         alert(`Transfer successful! View on BSC Explorer: https://bscscan.com/tx/${transferTx.hash}`);
//         return { success: true, txHash: transferTx.hash };
//       } else {
//         console.log("Transfer failed!");
//         alert("USDT transfer failed!");
//         return { success: false, txHash: transferTx.hash };
//       }

//     } catch (error) {
//       console.error('USDT Transfer Error:', error);

//       if (error.code === 'ACTION_REJECTED') {
//         alert('Transaction rejected by user');
//       } else if (error.code === -32603) {
//         alert('Internal JSON-RPC error. Please try again.');
//       } else if (error.message.includes('insufficient funds')) {
//         alert('Insufficient funds for gas fee (need BNB for mainnet)');
//       } else if (error.message.includes('User denied')) {
//         alert('Transaction cancelled by user');
//       } else if (error.message.includes('could not decode result data')) {
//         alert('Contract interaction failed. Please check if you are on BSC Mainnet.');
//       } else {
//         alert(`Transfer failed: ${error.message || 'Unknown error'}`);
//       }

//       return { success: false, txHash: null };
//     }
//   };

//   // API call to backend after successful transfer
//   const sendTransferData = async (amount, walletAddress, txHash, status) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/buy_token`, {
//         amount: amount,
//         wallet_address: walletAddress,
//         tHash: txHash,
//         // status: status
//       });

//       console.log('Transfer data sent successfully:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Failed to send transfer data:', error);
//       alert('Failed to record transaction data');
//     }
//   };

//   // Handle buy button click
//   const handleBuy = async () => {
//     if (!isConnected) {
//       await connectWallet();
//       return;
//     }

//     if (!payAmount || parseFloat(payAmount) <= 0) {
//       alert('Please enter a valid amount');
//       return;
//     }

//     setIsTransferring(true);

//     try {
//       // Execute USDT transfer
//       const transferResult = await transferUSDT(RECEIVER_WALLET_ADDRESS, payAmount);

//       if (transferResult.success) {
//         // Send data to backend API
//         await sendTransferData(
//           payAmount,
//           walletAddress,
//           transferResult.txHash,
//           'success'
//         );

//         alert('Purchase completed successfully!');

//         // Reset form
//         setPayAmount('');
//         setReceiveAmount('');
//       } else {
//         // Send failed transaction data to backend
//         if (transferResult.txHash) {
//           await sendTransferData(
//             payAmount,
//             walletAddress,
//             transferResult.txHash,
//             'failed'
//           );
//         }
//       }
//     } catch (error) {
//       console.error('Purchase error:', error);
//       alert('Purchase failed. Please try again.');
//     } finally {
//       setIsTransferring(false);
//     }
//   };

//   // Calculate receive amount based on pay amount
//   const handlePayAmountChange = (value) => {
//     setPayAmount(value);
//     if (value && !isNaN(value)) {
//       const rate = 3203; // DAIR rate from your component
//       const receiveValue = parseFloat(value) / rate;
//       setReceiveAmount(receiveValue.toFixed(6));
//     } else {
//       setReceiveAmount('');
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center px-3 pb-20">
//       {/* Glowing Background Circles */}
//       <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-purple-700 rounded-full blur-3xl top-0 right-4 sm:right-10 opacity-50 pointer-events-none"></div>
//       <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-cyan-500 rounded-full blur-3xl bottom-10 sm:bottom-20 left-0 opacity-40 pointer-events-none"></div>
//       <div className="fixed w-16 h-16 sm:w-36 sm:h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

//       {/* Header */}
//       <Header title="Token Pre Sale" />

//       {/* Invite Banner */}
//       <div className="z-10 w-full flex justify-center pt-3 mt-8">
//         <img
//           src={group}
//           alt="Invite Banner"
//           className="w-full max-w-3xl h-auto rounded-xl"
//         />
//       </div>

//       {/* Token Presale Card */}
//       <div className="w-full max-w-[800px] mx-auto mt-2 p-4 sm:p-8 bg-gradient-to-br from-[#0d0d2b] to-[#012d3a] text-white rounded-2xl border border-[#134D61] shadow-2xl">
//         {/* Title */}
//         <h2 className="text-center text-[24px] font-bold mb-6">
//           Presale Ending In
//         </h2>

//         {/* Countdown Timer */}
//         <div
//           className="flex justify-between items-center text-center py-2 px-3 mb-2 rounded-xl"
//           style={{
//             background: "linear-gradient(90deg, #0a0a15 0%, #151528 100%)",
//             border: "1px dashed rgb(59, 88, 144)",
//           }}
//         >
//           {["Day", "Hours", "Minutes", "Seconds"].map((label, idx, arr) => (
//             <React.Fragment key={label}>
//               <div className="flex flex-col items-center px-1 sm:px-2">
//                 <p className="text-[11px] sm:text-sm text-gray-300">{label}</p>
//                 <p className="text-[#5B00F7] text-lg sm:text-xl font-extrabold">
//                   {[16, 12, 34, "05"][idx]}
//                 </p>
//               </div>
//               {idx < arr.length - 1 && (
//                 <div
//                   className="h-6 w-px mx-1 sm:mx-2 rounded-full"
//                   style={{
//                     background: "linear-gradient(to bottom, #9A00FF, #22004d)",
//                     opacity: 0.8,
//                   }}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Subtext */}
//         <p className="text-[11px] sm:text-sm text-center text-gray-400 mb-3">
//           Last chance to buy before major exchange listings
//         </p>

//         <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

//         {/* Progress Info */}
//         <div className="flex justify-between items-center text-[11px] mb-2">
//           <p className="text-gray-300">
//             DAIR Raised -{" "}
//             <span className=" text-gray-300 font-semibold">62%</span>
//           </p>
//           <p className="text-gray-400 font-medium">
//             $3,042,00,00 / 10,00,000,00
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-2 bg-gray-700 rounded-full mb-3 overflow-hidden">
//           <div className="h-2 bg-fuchsia-500 rounded-full w-[62%]"></div>
//         </div>

//         <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

//         {/* DAIR Rate */}
//         <div className="flex justify-center item-center text-center font-semibold mb-6 text-sm sm:text-base">
//           <img src={coin} alt="coin" className="inline-block w-5 h-5 mr-1" />
//           DAIR = <span className="text-white font-bold"> $3203</span>
//         </div>

//         {/* Token Toggle */}
//         <div className="flex mb-4 rounded-xl overflow-hidden shadow-inner border border-[#545454]">
//           <button 
//             className={`flex-1 border border-[#545454] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm ${
//               selectedToken === 'DAIR' ? 'bg-[#3D3E67]' : 'bg-[#00000000]'
//             }`}
//             onClick={() => setSelectedToken('DAIR')}
//           >
//             <img src={coin} alt="DAIR" className="w-5 h-5" />
//             DAIR
//           </button>
//           <button 
//             className={`flex-1 py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm ${
//               selectedToken === 'USDT' ? 'bg-[#3D3E67]' : 'bg-[#00000000]'
//             }`}
//             onClick={() => setSelectedToken('USDT')}
//           >
//             <img src={Vector} alt="USDT" className="w-5 h-5" />
//             USDT
//           </button>
//         </div>

//         {/* Input Fields */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
//             <p className="text-[12px] sm:text-sm mb-2">
//               Pay with USDT
//               <span className="float-right">
//                 <img src={Vector} alt="USDT" className="inline w-5 h-5" />
//               </span>
//             </p>
//             <input
//               type="number"
//               value={payAmount}
//               onChange={(e) => handlePayAmountChange(e.target.value)}
//               placeholder="0.0"
//               className="w-full bg-transparent text-white text-lg font-bold outline-none"
//               disabled={isTransferring}
//             />
//           </div>
//           <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
//             <p className="text-[12px] sm:text-sm mb-2">
//               You receive DAIR
//               <span className="float-right">
//                 <img src={coin} alt="DAIR" className="inline w-5 h-5" />
//               </span>
//             </p>
//             <input
//               type="number"
//               value={receiveAmount}
//               placeholder="0.0"
//               className="w-full bg-transparent text-white text-lg font-bold outline-none"
//               readOnly
//             />
//           </div>
//         </div>

//         {/* Wallet Status */}
//         {isConnected && (
//           <div className="text-center mb-4">
//             <p className="text-green-400 text-sm">
//               Wallet Connected: {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
//             </p>
//             {/* <p className="text-yellow-400 text-xs mt-1">
//               ⚠️ Using MAINNET - Real BNB & USDT required
//             </p> */}
//           </div>
//         )}



import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import group from "../assets/Images/Group 415.png";
import coin from "../assets/Images/Earning/dlogo.png";
import Vector from "../assets/Images/vector.png";
import early from "../assets/Images/early.png";
import community from "../assets/Images/community.png";
import secure from "../assets/Images/secure.png";
import future from "../assets/Images/future.png";
import Footer from "../Footer/Footer";
import DLogo from "../assets/Images/Earning/dlogo.png";
import USDT from "../assets/Images/Earning/usdt.png";
import Group417 from "../assets/Images/Group 417.png";
import { WalletContext } from "../context/walletcontext";
import Header from "../Header/header1";

// USDT Contract Configuration (BSC Testnet)
const USDTContractAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"; // BSC Testnet USDT Contract
const RECEIVER_WALLET_ADDRESS = "0x6A5DD142F16e565E51a66EF03870a88365Cb6CaB"; // Replace with actual receiver address

const minimalABI = [
  "function transfer(address to, uint256 amount) external returns (bool)",
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const TokenPreSale = () => {
  const { walletAddress, transferUSDT, connectWallet, disconnectWallet } = useContext(WalletContext);

  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL;

  // States
  const [selectedToken, setSelectedToken] = useState('DAIR');
  const [payAmount, setPayAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [isTransferring, setIsTransferring] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(!!walletAddress);
  }, [walletAddress]);

  // API call to backend after successful transfer
  const sendTransferData = async (amount, walletAddress, txHash, status) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/buy_token`, {
        amount: amount,
        wallet_address: walletAddress,
        tHash: txHash,
        // status: status
      });

      alert('Transfer data sent successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to send transfer data:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Failed to record transaction data');
      }
    }
  };

  // Handle buy button click
  const handleBuy = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }

    if (!payAmount || parseFloat(payAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setIsTransferring(true);

    try {
      // Execute USDT transfer
      const transferResult = await transferUSDT(RECEIVER_WALLET_ADDRESS, payAmount);

      if (transferResult.success) {
        // Send data to backend API
        await sendTransferData(
          payAmount,
          walletAddress,
          transferResult.txHash,
          'success'
        );

        // alert('Purchase completed successfully!');

        // Reset form
        setPayAmount('');
        setReceiveAmount('');
      } else {
        // Send failed transaction data to backend
        if (transferResult.txHash) {
          await sendTransferData(
            payAmount,
            walletAddress,
            transferResult.txHash,
            'failed'
          );
        }
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setIsTransferring(false);
    }
  };

  // Calculate receive amount based on pay amount
  const handlePayAmountChange = (value) => {
    setPayAmount(value);
    if (value && !isNaN(value)) {
      const rate = 3203; // DAIR rate from your component
      const receiveValue = parseFloat(value) / rate;
      setReceiveAmount(receiveValue.toFixed(6));
    } else {
      setReceiveAmount('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center px-3 pb-20">
      {/* Glowing Background Circles */}
      <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-purple-700 rounded-full blur-3xl top-0 right-4 sm:right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-cyan-500 rounded-full blur-3xl bottom-10 sm:bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-16 h-16 sm:w-36 sm:h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Header */}
      <Header title="Token Pre Sale" />

      {/* Invite Banner */}
      <div className="z-10 w-full flex justify-center pt-3 mt-8">
        <img
          src={group}
          alt="Invite Banner"
          className="w-full max-w-3xl h-auto rounded-xl"
        />
      </div>

      {/* Token Presale Card */}
      <div className="w-full max-w-[800px] mx-auto mt-2 p-4 sm:p-8 bg-gradient-to-br from-[#0d0d2b] to-[#012d3a] text-white rounded-2xl border border-[#134D61] shadow-2xl">
        {/* Title */}
        <h2 className="text-center text-[24px] font-bold mb-6">
          Presale Ending In
        </h2>

        {/* Countdown Timer */}
        <div
          className="flex justify-between items-center text-center py-2 px-3 mb-2 rounded-xl"
          style={{
            background: "linear-gradient(90deg, #0a0a15 0%, #151528 100%)",
            border: "1px dashed rgb(59, 88, 144)",
          }}
        >
          {["Day", "Hours", "Minutes", "Seconds"].map((label, idx, arr) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center px-1 sm:px-2">
                <p className="text-[11px] sm:text-sm text-gray-300">{label}</p>
                <p className="text-[#5B00F7] text-lg sm:text-xl font-extrabold">
                  {[16, 12, 34, "05"][idx]}
                </p>
              </div>
              {idx < arr.length - 1 && (
                <div
                  className="h-6 w-px mx-1 sm:mx-2 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #9A00FF, #22004d)",
                    opacity: 0.8,
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-[11px] sm:text-sm text-center text-gray-400 mb-3">
          Last chance to buy before major exchange listings
        </p>

        <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

        {/* Progress Info */}
        <div className="flex justify-between items-center text-[11px] mb-2">
          <p className="text-gray-300">
            DAIR Raised -{" "}
            <span className=" text-gray-300 font-semibold">62%</span>
          </p>
          <p className="text-gray-400 font-medium">
            $3,042,00,00 / 10,00,000,00
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full mb-3 overflow-hidden">
          <div className="h-2 bg-fuchsia-500 rounded-full w-[62%]"></div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

        {/* DAIR Rate */}
        <div className="flex justify-center item-center text-center font-semibold mb-6 text-sm sm:text-base">
          <img src={coin} alt="coin" className="inline-block w-5 h-5 mr-1" />
          DAIR = <span className="text-white font-bold"> $3203</span>
        </div>

        {/* Token Toggle */}
        <div className="flex mb-4 rounded-xl overflow-hidden shadow-inner border border-[#545454]">
          <button
            className={`flex-1 border border-[#545454] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm ${selectedToken === 'DAIR' ? 'bg-[#3D3E67]' : 'bg-[#00000000]'
              }`}
            onClick={() => setSelectedToken('DAIR')}
          >
            <img src={coin} alt="DAIR" className="w-5 h-5" />
            DAIR
          </button>
          <button
            className={`flex-1 py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm ${selectedToken === 'USDT' ? 'bg-[#3D3E67]' : 'bg-[#00000000]'
              }`}
          >
            <img src={Vector} alt="USDT" className="w-5 h-5" />
            USDT
          </button>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
            <p className="text-[12px] sm:text-sm mb-2">
              Pay with USDT
              <span className="float-right">
                <img src={Vector} alt="USDT" className="inline w-5 h-5" />
              </span>
            </p>
            <input
              type="number"
              value={payAmount}
              onChange={(e) => handlePayAmountChange(e.target.value)}
              placeholder="0.0"
              className="w-full bg-transparent text-white text-lg font-bold outline-none"
              disabled={isTransferring}
            />
          </div>
          <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
            <p className="text-[12px] sm:text-sm mb-2">
              You receive DAIR
              <span className="float-right">
                <img src={coin} alt="DAIR" className="inline w-5 h-5" />
              </span>
            </p>
            <input
              type="number"
              value={receiveAmount}
              placeholder="0.0"
              className="w-full bg-transparent text-white text-lg font-bold outline-none"
              readOnly
            />
          </div>
        </div>

        {/* Wallet Status */}
        {isConnected && (
          <div className="text-center mb-4">
            <p className="text-green-400 text-sm">
              Wallet Connected: {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
            </p>
          </div>
        )}


        {/* Buy Button */}
        <div className="flex justify-center">
          <button
            className={`w-40 border border-[#D9D9D9] bg-gradient-to-b from-[#A800F7] via-[#A800F7] to-[#ffffff50] text-white font-bold text-[15px] py-2.5 rounded-full shadow-md hover:scale-105 transition ${isTransferring ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            onClick={handleBuy}
            disabled={isTransferring}
          >
            {isTransferring ? 'Processing...' : isConnected ? 'Buy DAIR' : 'Connect Wallet'}
          </button>
        </div>
      </div>

      {/* Why Buy in Presale section */}
      <div className="w-full max-w-[800px] mx-auto px-2 py-2 bg-gradient-to-br from-[#0f1120] to-[#0b0d1a] rounded-xl shadow-md border border-[#134D61] mt-6">
        <h2 className="text-center text-white text-[24px] font-bold mb-3">
          Why Buy in Presale?
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 mx-2">
          {/* Card 1 */}
          <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
            <img src={early} alt="Early Access" className="mx-auto w-25 h-25" />
            <h3 className="font-semibold text-[16px] sm:text-base mb-1">
              Early Access
            </h3>
            <p className="text-[9px] text-[#969696]">
              Grab the lowest price before public launch. Secure your position early.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
            <img
              src={community}
              alt="Community Token"
              className="mx-auto w-20 h-20"
            />
            <h3 className="font-semibold text-[16px] sm:text-base mb-1">
              Community Token
            </h3>
            <p className="text-[9px] text-[#969696]">
              Driven by its holders — your vote, your value, your voice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
            <img
              src={secure}
              alt="Secure Contract"
              className="mx-auto w-25 h-25"
            />
            <h3 className="font-semibold text-[16px] sm:text-base mb-1">
              Secure Smart Contract
            </h3>
            <p className="text-[9px] text-[#969696]">
              Fully verified & transparent contract investments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
            <img
              src={future}
              alt="CEX Listings"
              className="mx-auto w-25 h-25"
            />
            <h3 className="font-semibold text-[16px] sm:text-base mb-1">
              Future CEX Listings
            </h3>
            <p className="text-[9px] text-[#969696]">
              Get in before the token lists on major centralized exchanges.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full flex justify-center pt-3">
        <img
          src={Group417}
          alt="Group 417"
          className="w-full max-w-3xl h-auto rounded-xl"
        />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
};

export default TokenPreSale;


// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import group from "../assets/Images/Group 415.png";
// import coin from "../assets/Images/Earning/dlogo.png";
// import Vector from "../assets/Images/vector.png";
// import early from "../assets/Images/early.png";
// import community from "../assets/Images/community.png";
// import secure from "../assets/Images/secure.png";
// import future from "../assets/Images/future.png";
// import Footer from "../Footer/Footer";
// import DLogo from "../assets/Images/Earning/dlogo.png";
// import USDT from "../assets/Images/Earning/usdt.png";
// import Group417 from "../assets/Images/Group 417.png";
// import { WalletContext } from "../context/walletcontext";

// import Header from "../Header/header1"


// const TokenPreSale = () => {

//   const { walletAddress, transferUSDT, connectWallet, disconnectWallet } = useContext(WalletContext);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center px-3 pb-20">
//       {/* Glowing Background Circles - Smaller for SE */}
//       <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-purple-700 rounded-full blur-3xl top-0 right-4 sm:right-10 opacity-50 pointer-events-none"></div>
//       <div className="fixed w-20 h-20 sm:w-52 sm:h-52 bg-cyan-500 rounded-full blur-3xl bottom-10 sm:bottom-20 left-0 opacity-40 pointer-events-none"></div>
//       <div className="fixed w-16 h-16 sm:w-36 sm:h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

//       {/* Header */}
//       < Header title="Token Pre Sale" />
//       {/* <div className="pt-4 sm:pt-10 text-center z-10">
//         <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mt-1">
//           Token Pre Sale
//         </h1>
//       </div> */}

//       {/* Invite Banner */}
//       <div className="z-10 w-full flex justify-center pt-3 mt-8">
//         <img
//           src={group}
//           alt="Invite Banner"
//           className="w-full max-w-3xl h-auto rounded-xl"
//         />
//       </div>

//       {/* Earnings Cards - Stack on small screens */}
//       {/* <div className="w-full max-w-[800px] mx-auto grid grid-cols-2 gap-2 mt-4 mb-4">
//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img
//                 src={DLogo}
//                 alt="DAIR Logo"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//             </div>
//             <div>
//               <p className="text-white text-[17px] font-medium">DAIR</p>
//               <p className="text-white text-[17px] font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$403500.00</p>
//         </div>

//         <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
//           <div className="flex items-center mb-3">
//             <div>
//               <img
//                 src={USDT}
//                 alt="DAIR Logo"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//             </div>
//             <div>
//               <p className="text-white text-[17px] font-medium">USDT</p>
//               <p className="text-white text-[17px] font-medium">Earnings</p>
//             </div>
//           </div>
//           <p className="text-white text-xl">$404800.00</p>
//         </div>
//       </div> */}

//       {/* Token Presale Card */}
//       <div className="w-full max-w-[800px] mx-auto mt-2 p-4 sm:p-8 bg-gradient-to-br from-[#0d0d2b] to-[#012d3a] text-white rounded-2xl border border-[#134D61] shadow-2xl">
//         {/* Title */}
//         <h2 className="text-center text-[24px] font-bold mb-6">
//           Presale Ending In
//         </h2>

//         {/* Countdown Timer */}
//         <div
//           className="flex justify-between items-center text-center py-2 px-3 mb-2 rounded-xl"
//           style={{
//             background: "linear-gradient(90deg, #0a0a15 0%, #151528 100%)",
//             border: "1px dashed rgb(59, 88, 144)",
//           }}
//         >
//           {["Day", "Hours", "Minutes", "Seconds"].map((label, idx, arr) => (
//             <React.Fragment key={label}>
//               <div className="flex flex-col items-center px-1 sm:px-2">
//                 <p className="text-[11px] sm:text-sm text-gray-300">{label}</p>
//                 <p className="text-[#5B00F7] text-lg sm:text-xl font-extrabold">
//                   {[16, 12, 34, "05"][idx]}
//                 </p>
//               </div>
//               {idx < arr.length - 1 && (
//                 <div
//                   className="h-6 w-px mx-1 sm:mx-2 rounded-full"
//                   style={{
//                     background: "linear-gradient(to bottom, #9A00FF, #22004d)",
//                     opacity: 0.8,
//                   }}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Subtext */}
//         <p className="text-[11px] sm:text-sm text-center text-gray-400 mb-3">
//           Last chance to buy before major exchange listings
//         </p>

//         <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

//         {/* Progress Info */}
//         <div className="flex justify-between items-center text-[11px] mb-2">
//           <p className="text-gray-300">
//             DAIR Raised -{" "}
//             <span className=" text-gray-300 font-semibold">62%</span>
//           </p>
//           <p className="text-gray-400 font-medium">
//             $3,042,00,00 / 10,00,000,00
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-2 bg-gray-700 rounded-full mb-3 overflow-hidden">
//           <div className="h-2 bg-fuchsia-500 rounded-full w-[62%]"></div>
//         </div>

//         <div className="w-full h-px bg-gradient-to-r from-[#06124a00] via-[#3D3E67] to-[#06124a00] mb-3"></div>

//         {/* DAIR Rate */}
//         <div className="flex justify-center item-center text-center font-semibold mb-6 text-sm sm:text-base">
//           <img src={coin} alt="coin" className="inline-block w-5 h-5 mr-1" />
//           DAIR = <span className="text-white font-bold"> $3203</span>
//         </div>

//         {/* Token Toggle */}
//         <div className="flex mb-4 rounded-xl overflow-hidden shadow-inner border border-[#545454]">
//           <button className="flex-1 border border-[#545454] bg-[#3D3E67] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm">
//             <img src={coin} alt="DAIR" className="w-5 h-5" />
//             DAIR
//           </button>
//           <button className="flex-1 bg-[#00000000] py-3 text-white font-semibold flex items-center justify-center gap-2 text-sm">
//             <img src={Vector} alt="USDT" className="w-5 h-5" />
//             USDT
//           </button>
//         </div>

//         {/* Input Fields */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
//             <p className="text-[12px] sm:text-sm">
//               Pay with DAIR
//               <span className="float-right">
//                 <img src={coin} alt="DAIR" className="inline w-5 h-5" />
//               </span>
//             </p>
//           </div>
//           <div className="bg-[#0d1933] border border-gray-700 rounded-xl py-4 px-3 text-xs text-gray-300">
//             <p className="text-[12px] sm:text-sm">
//               Your receive
//               <span className="float-right">
//                 <img src={Vector} alt="T" className="inline w-5 h-5" />
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Connect Wallet Button */}
//         <div className="flex justify-center">
//           <button className="w-40 border border-[#D9D9D9] bg-gradient-to-b from-[#A800F7] via-[#A800F7] to-[#ffffff50] text-white font-bold text-[15px] py-2.5 rounded-full shadow-md hover:scale-105 transition">
//             Buy
//           </button>
//         </div>
//       </div>

//       {/* why buy in presale box */}
//       <div className="w-full max-w-[800px] mx-auto px-2 py-2 bg-gradient-to-br from-[#0f1120] to-[#0b0d1a] rounded-xl shadow-md border border-[#134D61] mt-6">
//         <h2 className="text-center text-white text-[24px] font-bold mb-3">
//           Why Buy in Presale?
//         </h2>

//         <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 mx-2">
//           {/* Card 1 */}
//           <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
//             <img src={early} alt="Early Access" className="mx-auto w-25 h-25" />
//             <h3 className="font-semibold text-[16px] sm:text-base mb-1">
//               Early Access
//             </h3>
//             <p className="text-[9px] text-[#969696]">
//               Grab the lowest price before public launch. Secure your position early.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
//             <img
//               src={community}
//               alt="Community Token"
//               className="mx-auto w-20 h-20"
//             />
//             <h3 className="font-semibold text-[16px] sm:text-base mb-1">
//               Community Token
//             </h3>
//             <p className="text-[9px] text-[#969696]">
//               Driven by its holders — your vote, your value, your voice.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
//             <img
//               src={secure}
//               alt="Secure Contract"
//               className="mx-auto w-25 h-25"
//             />
//             <h3 className="font-semibold text-[16px] sm:text-base mb-1">
//               Secure Smart Contract
//             </h3>
//             <p className="text-[9px] text-[#969696]">
//               Fully verified & transparent contract investments.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-[#16193a] rounded-md p-2 text-white text-center flex flex-col justify-center border border-[#A800F7]">
//             <img
//               src={future}
//               alt="CEX Listings"
//               className="mx-auto w-25 h-25"
//             />
//             <h3 className="font-semibold text-[16px] sm:text-base mb-1">
//               Future CEX Listings
//             </h3>
//             <p className="text-[9px] text-[#969696]">
//               Get in before the token lists on major centralized exchanges.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* image */}
//       {/* <div>
//         <img src={Group417} alt="Group 417" className="w-full mt-3 rounded-xl" />
//       </div> */}
//       <div className=" w-full flex justify-center pt-3">
//         <img
//           src={Group417}
//           alt="Group 417"
//           className="w-full max-w-3xl h-auto rounded-xl"
//         />
//       </div>
//       {/* <div className="w-[800px] max-w-[95%] mx-auto bg-gradient-to-r from-[#240048] to-[#4a007d] rounded-xl px-8 py-3 flex items-center justify-between border border-[#6a1ab9] shadow-lg mt-4 mb-8">
//         <div className="flex-1 pr-2">
//           <h3 className="text-white text-lg font-bold leading-snug">
//             Earn 5% <br className="sm:hidden" /> in DAIR!
//           </h3>
//           <p className="text-[#b855f3] text-sm font-medium mt-1">
//             Invite friends and <br /> get rewarded.
//           </p>
//         </div>
//         <img src={coin} alt="DAIR Coin" className="w-23 h-23 sm:w-24 sm:h-24" />
//       </div> */}

//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default TokenPreSale;