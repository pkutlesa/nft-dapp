# nft-dapp
In this project there are two directories. The first "deploy_contracts" is a directory that contains the code to deploy the ERC 721 NFT smart contracts to the Ropsten Ethereum test network. The second "frontend" contains the user interface that is able to interact with the smart contract deployed on the ethereum test network. Together, this dapp allows to mint NFTs. 

### Tech Stack 
Here is a high-level overview of the tech stack: 
* Alchemy (to interact with the Ropsten Ethereum Test Network)
* Hardhat (a framework to support the developement of solidity smart contracts)
* Alchemy Web3 (a wrapper library around traditional Web3 to transfer JSON/RPC requests with the blockchain)
* MetaMask (Ethereum software wallet to store Eth and NFTs, as well as to sign blockchain transactions via the frontend)
* Pinata (IPFS distributed filesystems to store NFTs and metadata)
* React (frontend developement framework)