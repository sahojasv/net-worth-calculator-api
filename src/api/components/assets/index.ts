import express, { Response } from 'express';
import httpStatus from 'http-status';
import Req from '../../types/Express';

const assetsRouter = express.Router({ mergeParams: true });

assetsRouter.get('/Types', async (req: Req, res: Response) => {
  try {
    const networthSvc = req.networthSvc;
    const assetTypes = await networthSvc.getAssetTypes();

    res.status(httpStatus.OK).send(assetTypes);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
});

export default assetsRouter;