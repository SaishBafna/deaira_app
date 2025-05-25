import React, { createContext, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import axios from "axios";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  // USDT Contract Address (BSC Mainnet)
  const USDTContractAddress = "0x55d398326f99059fF775485246999027B3197955"; // BSC USDT

  // Minimal ABI for ERC20 token operations
  const minimalABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "transfer",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        { "internalType": "uint8", "name": "", "type": "uint8" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  // Helper function to encrypt wallet address using base64
  const encryptWalletAddress = (address) => {
    return btoa(address);
  };

  // Load wallet address from localStorage on component mount
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setWalletAddress(savedAddress);
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      if (isConnecting) {
        alert("Connection request already in progress.");
        return null;
      }

      try {
        setIsConnecting(true);

        // Trigger MetaMask popup
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          const address = accounts[0];
          setWalletAddress(address);
          localStorage.setItem("walletAddress", address);
          const encryptedWalletAddress = encryptWalletAddress(address);
          localStorage.setItem("encryptedWalletAddress", encryptedWalletAddress);
          console.log("wallet connected", accounts);
          return address;
        }
        return null;
      } catch (error) {
        console.error(error);
        if (error.code === -32002) {
          alert("Connection request is already in progress. Please wait.");
        } else {
          alert("Error connecting to wallet.");
        }
        return null;
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("BSC Network Wallet dApp not found!");
      return null;
    }
  };

  const disconnectWallet = async () => {
    try {
      setWalletAddress('');
      localStorage.removeItem('walletAddress');
      localStorage.removeItem('encryptedWalletAddress');

      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({
            method: 'wallet_revokePermissions',
            params: [{
              eth_accounts: {}
            }]
          });
        } catch (revokeError) {
          console.log('Permissions revoke not supported, using alternative disconnect method');
        }

        if (window.ethereum._state) {
          window.ethereum._state.accounts = null;
        }
      }

      console.log('Wallet disconnected completely');
    } catch (error) {
      console.log('Error during disconnect:', error);
      setWalletAddress('');
      localStorage.removeItem('walletAddress');
      localStorage.removeItem('encryptedWalletAddress');
    }
  };

  // Fixed getUSDTBalance function for ethers.js v6
  const getUSDTBalance = async (userAddress = null) => {
    try {
      // For ethers.js v6, use BrowserProvider instead of Web3Provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      const address = userAddress || walletAddress;

      if (!address) {
        throw new Error("No wallet address available");
      }

      const usdtContract = new ethers.Contract(USDTContractAddress, minimalABI, provider);
      const balance = await usdtContract.balanceOf(address);

      // USDT on BSC has 18 decimals (hardcoded to avoid decimals() call issues)
      const decimals = 18;

      // Fix for ethers.js v6 - use ethers.formatUnits instead of ethers.utils.formatUnits
      const formattedBalance = ethers.formatUnits(balance, decimals);
      console.log(`USDT Balance: ${formattedBalance}`);

      return formattedBalance;
    } catch (error) {
      console.error("Error getting USDT balance:", error);
      return "0";
    }
  };

  // Fixed Transfer USDT function for ethers.js v6
  const transferUSDT = async (receiverAddress, amount) => {
    if (!window.ethereum) {
      alert('BSC Network Wallet dApp not found!');
      return false;
    }

    if (!walletAddress) {
      alert('Please connect your wallet first!');
      return false;
    }

    // Fix for ethers.js v6 - use ethers.isAddress instead of ethers.utils.isAddress
    if (!receiverAddress || !ethers.isAddress(receiverAddress)) {
      alert('Please enter a valid receiver address!');
      return false;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount!');
      return false;
    }

    try {
      // Check network first
      const networkOk = await checkNetwork();
      if (!networkOk) {
        return false;
      }

      // For ethers.js v6, use BrowserProvider instead of Web3Provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Set up USDT contract instance
      const usdtContract = new ethers.Contract(USDTContractAddress, minimalABI, signer);

      // USDT on BSC has 18 decimals (hardcoded to avoid decimals() call issues)
      const decimals = 18;

      // Fix for ethers.js v6 - use ethers.parseUnits instead of ethers.utils.parseUnits
      const amountInWei = ethers.parseUnits(amount.toString(), decimals);

      // Check balance before transfer
      const balance = await usdtContract.balanceOf(walletAddress);
      if (balance < amountInWei) {
        alert('Insufficient USDT balance!');
        return false;
      }

      console.log(`Transferring ${amount} USDT to ${receiverAddress}`);
      console.log(`Amount in wei: ${amountInWei.toString()}`);

      // Execute the transfer
      const transferTx = await usdtContract.transfer(receiverAddress, amountInWei);

      console.log("Transaction submitted:", transferTx.hash);
      alert(`Transaction submitted! Hash: ${transferTx.hash}`);

      // Wait for transaction confirmation
      const receipt = await transferTx.wait();

      if (receipt.status === 1) {
        console.log("Transfer successful!");
        alert("USDT transfer successful!");

        // Update balance after successful transfer
        await getUSDTBalance();
        return true;
      } else {
        console.log("Transfer failed!");
        alert("USDT transfer failed!");
        return false;
      }

    } catch (error) {
      console.error('USDT Transfer Error:', error);

      // Handle specific error types
      if (error.code === 'ACTION_REJECTED') {
        alert('Transaction rejected by user');
      } else if (error.code === -32603) {
        alert('Internal JSON-RPC error. Please try again.');
      } else if (error.message.includes('insufficient funds')) {
        alert('Insufficient funds for gas fee');
      } else if (error.message.includes('User denied')) {
        alert('Transaction cancelled by user');
      } else if (error.message.includes('could not decode result data')) {
        alert('Contract interaction failed. Please check if you are on the correct network (BSC).');
      } else {
        alert(`Transfer failed: ${error.message || 'Unknown error'}`);
      }

      return false;
    }
  };

  // Check if wallet is connected to BSC network
  const checkNetwork = async () => {
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const bscChainId = '0x38'; // BSC Mainnet
      const bscTestnetChainId = '0x61'; // BSC Testnet

      if (chainId !== bscChainId && chainId !== bscTestnetChainId) {
        alert('Please switch to BSC network');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Network check error:', error);
      return false;
    }
  };

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        connectWallet,
        disconnectWallet,
        isConnecting,
        transferUSDT,
        getUSDTBalance,
        checkNetwork
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};