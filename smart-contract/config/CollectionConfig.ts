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
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.07,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x5CB481e0c3E985d6A0A1Cb3dF0361bc7D8B55797",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
