type Asset = {
  Name: string;
  Type: string;
  Amount: number;
};

type Liability = {
  Name: string;
  Type: string;
  Amount: number;
};

type NetWorth = {
  TotalAssets: number;
  TotalLiabilites: number;
  NetWorth: number;
};

export {
  Asset,
  Liability,
  NetWorth
};