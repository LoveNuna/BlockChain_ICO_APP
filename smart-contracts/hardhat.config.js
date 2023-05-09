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
    }
  },
};
