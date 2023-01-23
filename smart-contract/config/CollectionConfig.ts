import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TradingZone',
  tokenName: 'Trading Zone',
  tokenSymbol: 'TZ',
  prefixUri: 'ipfs://QmUxmm6rxmZrbiZgBMpnffghXnGe1FuFUdXZPw1LB8nEau/',
  maxSupply: 500,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.15,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x07953A614933Dc9DE0B7a3A04B4C56E2A31ae2a6",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
