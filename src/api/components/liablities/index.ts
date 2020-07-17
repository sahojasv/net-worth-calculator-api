import express, { Response } from 'express';
import httpStatus from 'http-status';
import Req from '../../types/Express';

const liabilitesRouter = express.Router({ mergeParams: true });

liabilitesRouter.get('/Types', async (req: Req, res: Response) => {
  try {
    const networthSvc = req.networthSvc;
    const liablityTypes = await networthSvc.getLiablitiesTypes();

    res.status(httpStatus.OK).send(liablityTypes);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
});

export default liabilitesRouter;