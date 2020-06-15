import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  value: number,
  description: string,
  type: "debit" | "credit" | "installment_credit",
  installments: null,
  card: {
    number: string;
    expiry: string;
    cvv: string;
    holder: string;
  }
}

class CreateTransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute({value, description, type, installments, card}: Request): Transaction {

    const transaction = this.transactionRepository.create({value, description, type, installments, card})

    return transaction;
  }
}

export default CreateTransactionService;
