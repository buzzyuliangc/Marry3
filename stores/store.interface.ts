export enum StoreType {
  test = "test",
  marry = "marry",
  nft = "nft",
  offer = "offer",
  devorce = "devorce",
  web3modal = "web3modal",
  solpass = 'solpass',
}
export interface IStore {
  type: StoreType;
}
