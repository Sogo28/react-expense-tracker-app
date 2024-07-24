import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import transactionsRouter from './routes/transactions.js';
import { connectDB } from './config/db.js';
import path from 'path';
import url from 'url';

// Connect to the database
connectDB();

// Env variables
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || "production";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser middlerware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan middleware to log http requests
if (NODE_ENV === 'development') app.use(morgan('dev'));

// Routes
app.use('/api/v1/transactions', transactionsRouter);

// Static server 
if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')));
}

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold);
});