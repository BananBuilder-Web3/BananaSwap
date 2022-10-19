const TransactionItem = (props) => {
  return (
    <div className="mt-2 py-2 border-t-2">
      <div>Date: {props.timeStamp}</div>
      <div>Address: {props.receiver}</div>
      <div>Amount: {props.amount}</div>
      <div>Message: "{props.message}"</div>
    </div>
  );
};

export default TransactionItem;
