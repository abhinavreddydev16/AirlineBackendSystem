import express from 'express';
import {serverconfig , logger} from './config/index.js';
import apiroutes from './routes/index.js';
const app = express();


app.use('/api',apiroutes);

app.listen(serverconfig.PORT, () => {
  console.log(`Server is running on port ${serverconfig.PORT}`);
  logger.info("Successfully started server","root",{});
});
