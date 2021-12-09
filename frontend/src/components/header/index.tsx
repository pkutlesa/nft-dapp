import { useWallet } from "../../hooks/useWallet";
import { MintOutlineLink, MintOutlineButton } from "../buttons";

const HeaderButton = () => {
  const { hasMetamask, walletAddress, onConnectWallet } = useWallet();

  if (!hasMetamask) {
    return (
      <MintOutlineLink
        title="Install Metamask"
        link="https://metamask.io/download.html"
      />
    );
  }

  if (walletAddress.length > 0) {
    return (
      <div className="flex flex-row items-center">
        <img
          className="w-6 h-6 mx-2"
          src="https://img.icons8.com/emoji/50/000000/green-circle-emoji.png"
          alt="status"
        />
        <h1 className="text-green-500">Connected</h1>
      </div>
    );
  }

  return (
    <MintOutlineButton title={"Connect wallet"} action={onConnectWallet} />
  );
};

export const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-transparent py-6 px-10">
      <div className="flex text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight">ClipIt</span>
      </div>
      <div className="items-center">
        <div>
          <HeaderButton />
        </div>
      </div>
    </nav>
  );
};
