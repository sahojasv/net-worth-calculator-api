interface INetworthRepo {
  getAssetTypes: () => Promise<string[]>;
  getLiablitiesTypes: () => Promise<string[]>;
}

export default INetworthRepo;