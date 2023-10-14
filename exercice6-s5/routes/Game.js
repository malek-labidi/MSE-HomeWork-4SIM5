import  express  from 'express';
import { createGame, UpdateGame,GetAllGames,GetGame } from '../controllers/Game.js';

const router = express.Router();

router
    .route('/')
    .get(GetAllGames)
    .post(createGame);
router
    .route('/:id')
    .put(UpdateGame)
    .get(GetGame);

export default router;