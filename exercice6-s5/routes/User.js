import express from 'express';
import { CreateUser,UpdateUser,SignUser } from '../controllers/User.js';

const router = express.Router();

router
    .route('/')
    .get(SignUser)
    .post(CreateUser);
router
    .route('/:id')
    .put(UpdateUser);

export default router;