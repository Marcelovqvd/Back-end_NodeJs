import { Router } from 'express';
import { uuid } from 'uuidv4';

const transactionsRouter = Router();

const transactions = [];

transactionsRouter.post('/', (request, response) => {
    const { value, description, type, installments, date } = request.body;

    const transaction = {
      id: uuid(),
      value,
      description,
      type,
      installments,
      date,
    };

    transactions.push(transaction);
    return response.json(transaction);
});

export default transactionsRouter;
