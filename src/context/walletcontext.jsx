import React, { createContext, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import axios from "axios"; // Make sure to import axios
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

   // Helper function to encrypt wallet address using base64
  const encryptWalletAddress = (address) => {
    return btoa(address); // Base64 encode
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
          return address; // Return the connected address
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
      // Clear local state
      setWalletAddress('');
      localStorage.removeItem('walletAddress');
      
      // Clear any cached connection state
      if (typeof window.ethereum !== 'undefined') {
        // Request to disconnect (this will force MetaMask to show account selection on next connect)
        try {
          await window.ethereum.request({
            method: 'wallet_revokePermissions',
            params: [{
              eth_accounts: {}
            }]
          });
        } catch (revokeError) {
          // If revoke permissions fails, try alternative method
          console.log('Permissions revoke not supported, using alternative disconnect method');
        }
        
        // Additional cleanup - clear any cached accounts
        if (window.ethereum._state) {
          window.ethereum._state.accounts = null;
        }
      }
      
      console.log('Wallet disconnected completely');
      
    } catch (error) {
      console.log('Error during disconnect:', error);
      // Even if there's an error, clear the local state
      setWalletAddress('');
      localStorage.removeItem('walletAddress');
    }
  };

  return (
    <>
      <WalletContext.Provider
        value={{ walletAddress, connectWallet, disconnectWallet, isConnecting }}
      >
        {children}
      </WalletContext.Provider>
      {/* <ToastContainer /> */}
    </>
  );
};