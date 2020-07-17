import express from 'express';
import dotenv from 'dotenv';
import networthRouter from './components/networth';
import assetsRouter from './components/assets';
import liabilitesRouter from './components/liablities';

dotenv.config();

const router = express.Router();

router.use('/networth', networthRouter);
router.use('/assets', assetsRouter);
router.use('/liabilities', liabilitesRouter);

export { router };
