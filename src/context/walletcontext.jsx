import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      if (isConnecting) {
        alert("Connection request already in progress.");
        return;
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
          console.log("wallet connected", accounts);
        }
      } catch (error) {
        console.error(error);
        if (error.code === -32002) {
          alert("Connection request is already in progress. Please wait.");
        } else {
          alert("Error connecting to wallet.");
        }
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("BSC Network Wallet dApp not found!");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setBalance("");
    setUsdtBalance("");
    localStorage.removeItem("walletAddress");
    // toast.success('Wallet Disconnected')
  };

  return (
    <>
      <WalletContext.Provider
        value={{ walletAddress, connectWallet, disconnectWallet }}
      >
        {children}
      </WalletContext.Provider>
      {/* <ToastContainer /> */}
    </>
  );
};
