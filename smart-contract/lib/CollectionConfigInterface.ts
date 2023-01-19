import NetworkConfigInterface from '../lib/NetworkConfigInterface';
import MarketplaceConfigInterface from '../lib/MarketplaceConfigInterface';

interface SaleConfig {
  price: number;
  maxMintAmountPerTx: number;
};

export default interface CollectionConfigInterface {
  testnet: NetworkConfigInterface;
  mainnet: NetworkConfigInterface;
  contractName: string;
  tokenName: string;
  tokenSymbol: string;
  prefixUri: string;
  maxSupply: number;
  whitelistSale: SaleConfig;
  preSale: SaleConfig;
  publicSale: SaleConfig;
  contractAddress: string|null;
  marketplaceIdentifier: string;
  marketplaceConfig: MarketplaceConfigInterface;
  whitelistAddresses: string[];
};
