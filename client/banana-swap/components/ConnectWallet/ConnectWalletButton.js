import { useContext } from "react";
import Send from "../Transactions/Send";
import Transactions from "../Transactions/Transactions";
import { TransactionContext } from "../../context/TransactionContext";

const ConnectWalletButton = () => {
  const { connectWallet, buttonData } = useContext(TransactionContext);

  return (
    <div className="text-lg whitespace-nowrap border-gray-400 border-2 rounded-xl p-1 bg-white hover:shadow-md hover:opacity-80">
      <button onClick={connectWallet}>{buttonData.buttonText}</button>
      <div className="group-hover:block group-hover:shadow-md hidden mt-3 text-md bg-white border-2 fixed right-0">
        <div className="hover:bg-slate-100 pr-5 pl-1 py-1">{buttonData.networkName}</div>
        <div className="hover:bg-slate-100 pr-5 pl-1 py-1">{buttonData.balance}</div>
        <Send />
        <Transactions />
      </div>
    </div>
  );
};

export default ConnectWalletButton;

//Figure out how to keep the button showing the values on refresh
//Could use useEffect but need to figure out how to store values in useState
//Can also use local Storage to set a isConnected value
