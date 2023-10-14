import  express  from 'express';

import { createGame, UpdateGame,GetAllGames,GetGame } from '../controllers/Game.js';
import { body } from 'express-validator';

const router = express.Router();

router
    .route('/')
    .get(GetAllGames)
    .post(
        body('title').isLength({ min: 5 }),
        body('description').isLength({ min: 10 }),
        body('quantity').isNumeric(),
        body('price').isNumeric(),
        createGame);
router
    .route('/:id')
    .put(UpdateGame)
    .get(GetGame);

export default router;