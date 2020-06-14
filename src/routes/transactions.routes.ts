import { Router, request, response } from 'express';
import { uuid } from 'uuidv4';

const transactionsRouter = Router();

const transactions = [];

transactionsRouter.get('/', (request, response) => {
  return response.json(transactions);
})

transactionsRouter.post('/', (request, response) => {
  const { consumer, type, value, date } = request.body;

  const transaction = {
    id: uuid(),
    consumer,
    type,
    value,
    date
  }

  transactions.push(transaction);

  return response.json(transaction)
})

export default transactionsRouter;
