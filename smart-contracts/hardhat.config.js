require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/87f0a1e5d26e4eddb8c310624a77a8d6",
      }
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000,
      blockGasLimit: 80000000,
      accounts: {mnemonic: "eager legend lyrics grid crouch legend elite market visa harbor govern bachelor"}
    },
  },

};
