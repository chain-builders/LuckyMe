import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Safely get env variables
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const CORE_RPC_URL = process.env.RPC_URL || "";
if (!PRIVATE_KEY || !CORE_RPC_URL) {
  throw new Error("Please set your PRIVATE_KEY and RPC_URL in a .env file");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Core DAO Mainnet
    coredao: {
      url: CORE_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1116, // Core DAO Mainnet
    },
    // Optional: Base Sepolia testnet (keep if you're using it)
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [PRIVATE_KEY],
      chainId: 84532,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
