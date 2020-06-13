import { Router, request, response } from 'express';

import Transactions from '../models/transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionsRouter = Router();
const transactionsRepository = new TransactionsRepository();

transactionsRouter.get('/', (request, response) => {
  const transactions = transactionsRepository.all();
  return response.json(transactions);
});

transactionsRouter.post('/', (request, response) => {
    const { value, description, type, installments, card, date } = request.body;

    const transaction = transactionsRepository.create({
      date,
      value,
      description,
      type,
      installments,
      card,
    })

    return response.json(transaction);
});

transactionsRouter.get('/', (request, response) => {
  return response.json({
    "value": 100.00, // Valor da transação
    "description": "Bicicleta ZXY Aro 21", // Descrição da transação
    "type": "debit", // Tipo de transação (`debit`, `credit`, `installment_credit`)
    "installments": null, // Número de parcelas, caso seja debito, passar `null`
    "card": {
      "number": "5200555500001234", // Número do cartão
      "expiry": "20/21", // Validade do cartão
      "cvv": "123", // Código de verificação do cartão
      "holder": "Fulano de tal" // Nome do portador do cartão
    }
  });
});

export default transactionsRouter;
