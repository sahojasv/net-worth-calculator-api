import express, { Response } from 'express';
import httpStatus from 'http-status';
import Req from '../../types/Express';
import { Asset, Liability } from '../../../domain/models/NetWorth';

const networthRouter = express.Router({ mergeParams: true });

networthRouter.post('/calculator', async (req: Req, res: Response) => {
  try {
    const networthSvc = req.networthSvc;
    const assets = req.body.Assets as Asset[];
    const liabilites = req.body.Liabilites as Liability[];
    console.log(req.body);
    const networth = await networthSvc.calculateNetWorth(assets, liabilites);

    res.status(httpStatus.OK).send(networth);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
});

export default networthRouter;