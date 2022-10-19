const TokenSwap = () => {
  return (
    <div className="fixed top-1/3">
      <div className="p-5 border-2 border-black rounded-md">
        <div className="flex justify-center border-b-2 border-slate-300">
          <h1 className="mb-2 font-bold	text-lg">Token Swap</h1>
        </div>
        <div className="mt-2">
          <select className="border-2 border-slate-300 rounded-md p-1" name="tokenOne">
            <option>Select Token</option>
            <option value="ETH">ETH</option>
            <option value="Matic">Matic</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </select>
          <input className="ml-2 p-1 border-2 border-slate-300 rounded-md" placeholder="Amount" name="tokenOneAmount" type="number"></input>
        </div>
        <div className="mt-2">
          <select className="p-1 border-2 border-slate-300 rounded-md" name="tokenTwo">
            <option>Select Token</option>
            <option value="ETH">ETH</option>
            <option value="Matic">Matic</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </select>
          <input className="ml-2 p-1 border-2 border-slate-300 rounded-md" placeholder="Amount" name="tokenTwoAmount" type="number"></input>
        </div>
      </div>
    </div>
  );
};

export default TokenSwap;
