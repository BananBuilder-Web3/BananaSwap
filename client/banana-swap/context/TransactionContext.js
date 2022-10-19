import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

//get smart contract
const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionContract;
};

const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();
  //const [dropdown, setDropdown] = useState({ buttonText: "Connect Wallet", networkName: "Network Name", balance: "Balance" });
  const [buttonData, setButtonData] = useState({ buttonText: "Connect Wallet", networkName: "Network", balance: "balance" });
  const [modalData, setModalData] = useState({ addressTo: "", amount: "", message: "" });
  const [sending, setSending] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  //Check wallet connection after connection
  //Maybe move into Connect Wallet component
  const checkWalletConnection = async () => {
    try {
      if (!window.ethereum) {
        alert("Please Install Metamask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length >= 1) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setConnectedAccount(accounts[0]);
        const accountDisplay = `0x...${accounts[0].slice(-4)}`;
        //Maybe a better way to do this?
        const balance = ethers.utils.formatEther(await provider.getBalance(accounts[0]));
        const networkName = provider.network.name;
        setButtonData({ buttonText: accountDisplay, networkName: networkName, balance: balance });
      } else {
        console.log("No Accounts Found");
      }
    } catch (error) {
      alert("Please Install Metamask");
    }
  };

  //connect wallet first time with button
  //Maybe move into Connect wallet component
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please Install Metamask");
      } else {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setConnectedAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);

      alert("Please Install Metamask");
    }
  };

  //Passed to modal to handle submit, sends eth from one account to another
  //move into send compoennt
  const sendTransaction = async () => {
    try {
      if (!window.ethereum) {
        alert("Please Install Metamask");
      }
      const transactionContract = getContract();
      const parsedAmount = ethers.utils.parseEther(modalData.amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: modalData.addressTo,
            gas: "100000",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.send(modalData.addressTo, parsedAmount, modalData.message);

      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setSending(false);
      setConfirmed(true);
      console.log(`Success - ${transactionHash.hash}`);
    } catch (error) {
      console.log(error);
    }
  };

  //check wallet connection after render
  //Move into connectWallet component
  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <TransactionContext.Provider value={{ buttonData, modalData, sending, confirmed, connectedAccount, setSending, setConfirmed, getContract, setModalData, connectWallet, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
