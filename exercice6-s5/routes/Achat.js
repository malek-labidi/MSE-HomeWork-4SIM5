import  express  from 'express';
import{ achatGame } from '../controllers/Achat.js';

const router = express.Router();

router
    .route('/:userId/:gameId')
    .post(achatGame);

export default router;