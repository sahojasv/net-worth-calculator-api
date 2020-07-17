import Req from "../types/Express";
import { Response } from "express";
import NetWorthService from "../../domain/core/NetWorthService";
import NetworthRepo from "../../infra/repos/NetworthRepo";

const attachAppSvc = (req: Req, res: Response, next: Function) => {
  try {
    const networthRepo = new NetworthRepo();
    const networthService = new NetWorthService(networthRepo);

    req.networthSvc = networthService;
    next();
  } catch (error) {
    next(error);
  }
};

export default attachAppSvc;