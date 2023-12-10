
require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};


/*
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig 
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "alfajores",
  networks: {
      alfajores: {
          url: "https://alfajores-forno.celo-testnet.org",
          accounts: [process.env.PRIVATE_KEY],
          chainId: 44787,
      },
      celo: {
          url: "https://forno.celo.org",
          accounts: [process.env.PRIVATE_KEY],
          chainId: 42220,
    
      },
  },
  etherscan: {
      apiKey: {
          alfajores: process.env.CELOSCAN_API_KEY,
          celo: process.env.CELOSCAN_API_KEY,
      },
      customChains: [
          {
              network: "alfajores",
              chainId: 44787,
              urls: {
                  apiURL: "https://api-alfajores.celoscan.io/api",
                  browserURL: "https://alfajores.celoscan.io",
              },
          },
          {
              network: "celo",
              chainId: 42220,
              urls: {
                  apiURL: "https://api.celoscan.io/api",
                  browserURL: "https://celoscan.io/",
              },
          },
      ],
  },
};
*/
