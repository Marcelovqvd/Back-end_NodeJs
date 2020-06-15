import { Router, request, response } from 'express';
import { uuid } from 'uuidv4';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionsRouter = Router();
const transactionRepository = new TransactionsRepository();

transactionsRouter.get('/', (request, response) => {
  // const { value, description, type, installments } = request.query;
  // const query = request.query;

  return response.json(transactions);
})

transactionsRouter.post('/', (request, response) => {
  const { value, description, type, installments, date } = request.body;

  const transaction = transactionRepository.create(
    value,
    description,
    type,
    installments,
    date
  )

  return response.json(transaction)
})

transactionsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { value, description, type, installments, date } = request.body;

  const transactionIndex = transactions.findIndex(transaction => transaction.id === id);

  const transaction = {
    id,
    value,
    description,
    type,
    installments,
    date
  }

  transactions[transactionIndex] = [transaction];

  return response.json(transaction);
});

export default transactionsRouter;
