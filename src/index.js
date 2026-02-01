import express from 'express';
import config from './config/index.js';
import apiroutes from './routes/index.js';
const app = express();


app.use('/api',apiroutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
