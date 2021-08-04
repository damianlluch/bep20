require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonicPrivateKey = process.env["MNEMONIC_PRIVATEKEY"];
const mnemonicPrivateKeyTesnet = process.env["MNEMONIC_PRIVATEKEY_TESNET"];

module.exports = {
   networks: {
    local: {
      provider: () => new HDWalletProvider(mnemonicPrivateKey, "http://localhost:7545"),
      port: 7545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonicPrivateKeyTesnet, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
   },
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.5.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
}
