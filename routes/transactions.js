import express from 'express';
import { getTransactions, createTransaction, getTransaction, deleteTransaction } from '../controllers/transactionController.js';

const transactionsRouter = express.Router();

// Get all transactions
transactionsRouter.get('/', getTransactions);

// Get a single transaction
transactionsRouter.get('/:id', getTransaction);


// Post a transaction 
transactionsRouter.post('/', createTransaction);

// Delete a transaction 
transactionsRouter.delete('/:id', deleteTransaction);

export default transactionsRouter;