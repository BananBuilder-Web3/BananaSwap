import { ethers } from "ethers";
import TransactionItem from "../Transactions/TransactionItem";

const TransactionModal = (props) => {

  const dateConversion = (seconds) => {
    let t = new Date(1970, 0, 1);
    t.setSeconds(seconds);
    return JSON.stringify(t);;
  }

  if (!props.show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={props.onClose}>
      <div className="bg-white p-5 border-2 border-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center">{props.count}</div>
        {props.list.length === 0 ? (
          <div>No Transactions</div>
        ) : (
          props.list.map((i, index) => <TransactionItem key={index} receiver={i.receiver} amount={ethers.utils.formatEther(i.amount)} message={i.message} timeStamp={dateConversion(i.timeStamp)}/>)
        )}
      </div>
    </div>
  );
};

export default TransactionModal;

//Get these to go in descending order
//Clean up the look of the date
