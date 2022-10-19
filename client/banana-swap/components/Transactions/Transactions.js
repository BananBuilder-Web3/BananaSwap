import { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import TransactionModal from "../Modal/TransactionModal";

const Transactions = () => {
  const { getContract, connectedAccount } = useContext(TransactionContext);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const newList = [];

  //passed to the TransactionModal component
  const getTransactionCount = async () => {
    try {
      const transactionContract = getContract();
      const transactionCount = parseInt(await transactionContract.transactionCount(ethereum.selectedAddress));
      if (connectedAccount === ethereum.selectedAddress) {
        setCount(transactionCount);
      }

      //setCount(transactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  //passed to the TrasnactionItem Model
  const getAllTransactions = async () => {
    try {
      const transactionContract = getContract();
      const transactions = await transactionContract.getAllTransactions();
      transactions.forEach((i) => {
        if (i.sender.toLowerCase() === connectedAccount) {
          newList.push(i);
        }
      });
      setList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="hover:bg-slate-100 pr-5 pl-1 py-1"
        onClick={() => {
          setShowModal(true);
          getTransactionCount();
          getAllTransactions();
        }}
      >
        Transactions
      </div>
      <TransactionModal
        show={showModal}
        count={count}
        list={list}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default Transactions;
