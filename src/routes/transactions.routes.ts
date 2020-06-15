import { Router, request, response } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionsRouter = Router();
const transactionRepository = new TransactionsRepository();

transactionsRouter.get('/', (request, response) => {
  try {
    const transactions = transactionRepository.all();

    return response.json(transactions);
  } catch(err){
    response.status(400).json({ error: err.message });
  }
});

transactionsRouter.post('/', (request, response) => {
  try {
    const { value, description, type, installments, card } = request.body;

    const createTransaction = new CreateTransactionService(transactionRepository);

    const transaction = createTransaction.execute({
      value,
      description,
      type,
      installments,
      card
    })

    return response.json(transaction)
  } catch (err) {
    return response.status(400).json({ error: 'Unexpected error'})
  }
})

export default transactionsRouter;
