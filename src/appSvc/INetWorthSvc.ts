import { Asset, Liability, NetWorth } from "../domain/models/NetWorth";
import INetworthRepo from "../infra/interfaces/INetworthRepo";

interface INetWorthSvc {
  networthRepo: INetworthRepo;

  getAssetTypes: () => Promise<string[]>;
  getLiablitiesTypes: () => Promise<string[]>;
  calculateNetWorth: (assets: Asset[], liabilites: Liability[]) => Promise<NetWorth>;
}

export default INetWorthSvc;