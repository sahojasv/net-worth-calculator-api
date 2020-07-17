import dotenv from 'dotenv';
import http from 'http';
import parser from 'body-parser';
import cors from 'cors';
import express from 'express';
import attachAppSvc from './api/middlewares/attachAppSvc';
import { router } from './api';

dotenv.config();

const app = express();
const server = http.createServer(app);

const { PORT } = process.env;

app.use(cors());
app.use(parser.json());
app.use(attachAppSvc);
app.use('/api', router);

server.listen(PORT || 3000, () => {
  console.log(`Server is running at ${PORT || 3000}`);
});