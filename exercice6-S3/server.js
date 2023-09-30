import express from 'express';
import usersRoutes from './routes/User.js';
import gamesRoutes from './routes/Game.js';

const app = express();

const port = process.env.PORT || 9090;



app.use(express.json());

app.use('/user',usersRoutes);
app.use('/game',gamesRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})
