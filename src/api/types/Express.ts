import { Request } from 'express';
import INetWorthSvc from '../../appSvc/INetWorthSvc';

interface Req extends Request {
  networthSvc : INetWorthSvc,
}

export default Req;