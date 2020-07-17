import INetworthRepo from "../interfaces/INetworthRepo";
import { LiabilityTypes, AssetTypes } from "./mockData";

class NetworthRepo implements INetworthRepo {
  getAssetTypes() : Promise<string[]> {
    return Promise.resolve(AssetTypes);
  }

  getLiablitiesTypes() : Promise<string[]> {
    return Promise.resolve(LiabilityTypes);
  }  
}

export default NetworthRepo;