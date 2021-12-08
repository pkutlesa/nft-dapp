import { useWallet } from "../../hooks/useWallet";
import { MetadataForm } from "../metadataForm";
import { Preview } from "../preview";

export const MintMenu = () => {
  const { walletAddress } = useWallet();

  const Content = () => {
    return walletAddress ? (
      <div className="my-4">
        <h3>Your wallet address:</h3>
        <h3>{walletAddress}</h3>
        <MetadataForm />
      </div>
    ) : (
      <h1 className="text-xl tracking-wide text-white lg:text-2xl my-4">
        Connect your wallet to get started
      </h1>
    );
  };

  return (
    <div>
      <div className="container flex flex-col md:flex-row px-6 py-4 mx-auto lg:h-128 lg:py-16">
        <div className="flex justify-center items-center w-full lg:w-1/2 p-5">
          <div className="max-w-lg">
            <h1 className="text-3xl tracking-wide text-white lg:text-4xl">
              The easiest way to mint your NFTs
            </h1>
            <Content />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 p-5">
          <Preview />
        </div>
      </div>
    </div>
  );
};
