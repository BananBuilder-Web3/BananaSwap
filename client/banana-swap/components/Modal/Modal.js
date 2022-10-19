import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const Modal = (props) => {
  const { modalData, setModalData, sending, setSending, confirmed, sendTransaction } = useContext(TransactionContext);

  if (!props.show) {
    return null;
  }

  const handleSubmit = () => {
    setSending(true);
    sendTransaction();
    setModalData({ addressTo: "", amount: "", message: "" });
  };

  const handleChange = (e) => {
    e.preventDefault;
    const name = e.target.name;
    setModalData((prevState) => {
      return { ...prevState, [name]: e.target.value };
    });
  };

  if (confirmed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={props.onClose}>
        <div className="bg-white p-5 border-2 border-white" onClick={(e) => e.stopPropagation()}>
          <div>
            <h1>Sent!</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={props.onClose}>
        <div className="bg-white p-5 border-2 border-white" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-center border-b-2">
            <h1 className="text-xl font-semibold mb-3">Send</h1>
          </div>
          <div className="mt-4">
            <input className="px-1" placeholder="Address To" name="addressTo" type="text" value={modalData.addressTo} onChange={handleChange} />
          </div>
          <div className="mt-4">
            <input className="px-1" placeholder="Amount (Eth)" name="amount" type="number" value={modalData.amount} onChange={handleChange} />
          </div>
          <div className="my-4">
            <input className="px-1" placeholder="Enter Message" name="message" type="text" value={modalData.message} onChange={handleChange} />
          </div>
          {sending === false ? (
            <div className="flex justify-center mt-3 border-t-2">
              <button type="button" className="mt-5 border-2 p-1 rounded-lg" onClick={handleSubmit}>
                Confirm
              </button>
            </div>
          ) : (
            <div className="flex mt-3 border-t-2 justify-center">
              <div className=" flex border-2 p-1 rounded-lg mt-3">
                <div role="status">
                  <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                Sending
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Modal;

//change modal name -> SendModal
//See if maybe I can make more compoenents, Modal General and then render Send or Transaction info
