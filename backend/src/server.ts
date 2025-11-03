import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Routes
app.use('/api/v1', routes);

const start = async () => {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'evelyn-portfolio' });
  app.listen(5000, () => console.log('API running on http://localhost:5000'));
};

start().catch((e) => {
  console.error('Error starting server:', e);
  process.exit(1);
});