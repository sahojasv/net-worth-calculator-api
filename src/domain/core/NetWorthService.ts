import INetWorthSvc from "../../appSvc/INetWorthSvc";
import { NetWorth, Asset, Liability } from "../models/NetWorth";
import INetworthRepo from '../../infra/interfaces/INetworthRepo';

class NetWorthService implements INetWorthSvc {
  networthRepo: INetworthRepo;

  constructor(networthRepo: INetworthRepo) {
    this.networthRepo = networthRepo;
  }

  private calculateTotalAssets(assets: Asset[]) : number {
    let totalAssets : number = 0;

    for (let i = 0 ; i < assets.length; i++) {
      const asset = assets[i];
      totalAssets = totalAssets + asset.Amount;
    }

    return totalAssets;
  }

  private calculateTotalLiabilites(liabilites: Liability[]) : number {
    let totalLiabilites : number = 0;

    for (let i = 0 ; i < liabilites.length; i++) {
      const liablity = liabilites[i];
      totalLiabilites = totalLiabilites + liablity.Amount;
    }

    return totalLiabilites;
  }

  calculateNetWorth(assets: Asset[], liabilites: Liability[]) : Promise<NetWorth> {
    return new Promise((resolve, reject) => {
      try {
        const totalAssets = this.calculateTotalAssets(assets);
        const totalLiabilites = this.calculateTotalLiabilites(liabilites);

        resolve({
          TotalAssets: totalAssets,
          TotalLiabilites: totalLiabilites,
          NetWorth: totalAssets - totalLiabilites
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  getAssetTypes() : Promise<string[]> {
    return this.networthRepo.getAssetTypes();
  }

  getLiablitiesTypes() : Promise<string[]> {
    return this.networthRepo.getLiablitiesTypes();
  }
}

export default NetWorthService;