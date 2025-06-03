// import { defineChain } from 'viem'

// export const coreDaoTestnet = defineChain({
//     id: 1115,
//     name: "Core DAO Testnet",
//     network: "coredao-testnet",
//     nativeCurrency: {
//       decimals: 18,
//       name: "Core",
//       symbol: "tCORE",
//     },
//     rpcUrls: {
//       default: {
//         http: ["https://rpc.test.btcs.network"],
//       },
//       public: {
//         http: ["https://rpc.test.btcs.network"],
//       },
//     },
//     blockExplorers: {
//       default: { name: "CoreDAO Explorer", url: "https://scan.test.btcs.network" },
//     },
//     testnet: true,
//   });


import { defineChain } from 'viem';

export const coreDaoMainnet = defineChain({
  id: 1116,
  name: 'Core DAO',
  network: 'coredao-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Core',
    symbol: 'CORE',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.coredao.org'],
    },
    public: {
      http: ['https://rpc.coredao.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'CoreDAO Explorer',
      url: 'https://scan.coredao.org',
    },
  },
  testnet: false,
});
