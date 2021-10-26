import express from 'express';
import morgan from 'morgan';
import cors from 'cors'


import dotenv from 'dotenv'

dotenv.config();


import MovieRoutes from './routes/movie.routes'

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes

app.use(MovieRoutes);


app.listen(process.env.PORT || 3000);
console.log('Server on port', 3000);