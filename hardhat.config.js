require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "alfajores",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
    },
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
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: [process.env.PRIVATE_KEY],
      },
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [process.env.PRIVATE_KEY]
      }
    },
  },
  solidity: {
    version: "0.8.4",
  },
  namedAccounts: {
    deployer: 0,
  },
};
