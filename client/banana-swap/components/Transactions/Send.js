import { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Modal from "../Modal/Modal";

const Send = () => {
  const { setConfirmed } = useContext(TransactionContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="hover:bg-slate-100 pr-5 pl-1 py-1"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Send
      </div>
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setConfirmed(false);
        }}
      />
    </div>
  );
};

export default Send;

//add logic to eth
