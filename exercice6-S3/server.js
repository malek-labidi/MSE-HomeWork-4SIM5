import express from 'express';
import usersRoutes from './routes/User.js';
import gamesRoutes from './routes/Game.js';
import achatRoutes from './routes/Achat.js';

const app = express();

const port = process.env.PORT || 9090;



app.use(express.json());

app.use('/user',usersRoutes);
app.use('/game',gamesRoutes);
app.use('/achat',achatRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})
