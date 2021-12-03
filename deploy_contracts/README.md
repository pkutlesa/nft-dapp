# Deploy Contracts

### install dependencies 

run ```npm install``` in the deploy_contracts directory to install the project dependencies 

### Add .env file 

To deploy a contract using this code, you need to create a .env file in this directory (i.e., ```touch .env```). The dot env file requires the API_URL of an Alchemy application, and public and private keys of a meta mask wallet. Add the following to the .env file with your information: 

```
API_URL = "https://eth-ropsten.alchemyapi.io/v2/<YOUR-ALCHEMY-APP-API-KEY>"
PRIVATE_KEY = "<METAMASK-PRIVATE-KEY>"
PUBLIC_KEY = "<METAMASK-PUBLIC-KEY>"
```

### How to deploy contract 

* first compile contract with ```npx hardhat compile```
* deploy contract to Ropsten test network with ```npx hardhat run scripts/deploy.js --network ropsten``` 