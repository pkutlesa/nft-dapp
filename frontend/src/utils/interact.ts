import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x84e88192A859E3fa628941199d2a86F0ce4e573c";

export const connectWallet = async (): Promise<string> => {
  try {
    const addressArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return addressArray[0];
  } catch (err) {
    throw err;
  }
};

export const getCurrentWalletConnected = async () => {
  if (!window.ethereum) return "";

  try {
    const addressArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addressArray.length > 0) {
      return addressArray[0];
    } else {
      return "";
    }
  } catch (err) {
    throw err;
  }
};

export const mintNFT = async (url, name, description) => {
  //make metadata
  const metadata = {
    name,
    url,
    description,
  };

  //make pinata call
  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    throw new Error("😢 Something went wrong while uploading your tokenURI.");
  }
  const tokenURI = pinataResponse.pinataUrl;
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(), //make call to NFT smart contract
  };
  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return txHash;
  } catch (error) {
    throw new Error(`😥 Something went wrong: ${error.message}`);
  }
};
