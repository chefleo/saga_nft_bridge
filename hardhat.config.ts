import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: "0.8.20",
  networks: {
    hyperbridgetest: {
      chainId: 55555,
      url: "https://hyperbridgetest-55555-1.jsonrpc.testnet-srv2.sagarpc.io",
      accounts: [PRIVATE_KEY as `0x${string}`], // Private Key of your metamask wallet
    },
    omegachain: {
      chainId: 1712771388991266,
      url: "https://omegachain-1712771388991266-1.jsonrpc.testnet.sagarpc.io",
      accounts: [PRIVATE_KEY as `0x${string}`],
    },
    sepolia: {
      chainId: 11155111,
      url: "https://rpc.sepolia.org/",
      accounts: [PRIVATE_KEY2 as `0x${string}`],
    },
  },
};

// command deploy: npx hardhat run scripts/deploy.ts --network omegachain
// command mint (after change smart contract address on mint.ts): npx hardhat run scripts/mint.ts --network omegachain

export default config;
