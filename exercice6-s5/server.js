import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import usersRoutes from './routes/User.js';
import gamesRoutes from './routes/Game.js';
import achatRoutes from './routes/Achat.js';
import { notFoundError, errorHandler } from './middlewares/error-handler.js';



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

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img',express.static('public/images'));

//* Routes
app.use('/user',usersRoutes);
app.use('/game',gamesRoutes);
app.use('/achat',achatRoutes);

//*error handler
app.use(notFoundError);
app.use(errorHandler);




app.listen(port, () => {
    console.log(`server on http://localhost:${port}`);

})
