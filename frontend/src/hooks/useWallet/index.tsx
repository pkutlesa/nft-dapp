import { createContext, useState, useEffect, useContext } from "react";

import { connectWallet, getCurrentWalletConnected } from "../../utils/interact";

export const walletContext = createContext<any>({});
export const useWallet = () => useContext(walletContext);

export function WalletProvider({ children }) {
  const [walletAddress, setWallet] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function init() {
      try {
        const address = await getCurrentWalletConnected();

        setWallet(address);
        addWalletListener();
      } catch (err) {
        setWallet("");
        setError(err.message);
      }
    }
    if (window.ethereum) init();
  }, []);

  function addWalletListener() {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
      } else {
        setWallet("");
      }
    });
  }

  async function onConnectWallet() {
    //TODO: implement
    try {
      const walletResponse = await connectWallet();
      setWallet(walletResponse);
    } catch (err) {
      setWallet("");
      setError(err.message);
    }
  }

  return (
    <walletContext.Provider
      value={{
        walletAddress,
        error,
        hasMetamask: !!window.ethereum,
        onConnectWallet,
      }}
    >
      {children}
    </walletContext.Provider>
  );
}
