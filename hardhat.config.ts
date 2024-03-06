import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: "0.8.20",
  networks: {
    hyperbridgetest: {
      chainId: 55555,
      url: "https://hyperbridgetest-55555-1.jsonrpc.testnet-srv2.sagarpc.io",
      accounts: [PRIVATE_KEY as `0x${string}`], // Private Key of your metamask wallet
    },
  },
};

export default config;
