import express from 'express';
import Infocontrollers from '../../controllers/index.js'
const router = express.Router();

router.get('/info',Infocontrollers.info);


export default router;