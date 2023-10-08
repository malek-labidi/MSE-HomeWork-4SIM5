import express from 'express';
import mongoose from 'mongoose';
import usersRoutes from './routes/User.js';
import gamesRoutes from './routes/Game.js';
import achatRoutes from './routes/Achat.js';


const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'homeWorkMSEDB';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
.then(() => {
    console.log(`connected to ${databaseName}`);
})
.catch((error) => {
    console.log(error);
});

app.use(express.json());

app.use('/user',usersRoutes);
app.use('/game',gamesRoutes);
app.use('/achat',achatRoutes);

app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})
