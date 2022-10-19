import Link from "next/link";
import Image from "next/image";
import ConnectWallet from "./ConnectWallet/ConnectWallet";

const Navbar = () => {
  return (
    <div className="bg-yellow-100">
      <nav className="flex items-center justify-between pt-1">
        <div className="bg-yellow-100 ml-5">
          <Image src="/Banana.png" width={50} height={50} />
        </div>
        <div className="flex w-11/12 justify-between my-2">
          <div className="ml-5 text-2xl font-bold">
            <Link href="/">BananaSwap</Link>
          </div>
          <div className="flex">
            <div className="text-xl mr-5">
              <Link href="/about">About</Link>
            </div>
            <div className="text-xl mr-5">
              <Link href="/swap">Swap</Link>
            </div>
          </div>
        </div>
        <div className="group items-center flex mr-5">
          <div className="my-2">
            <ConnectWallet />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//additions: add logo
