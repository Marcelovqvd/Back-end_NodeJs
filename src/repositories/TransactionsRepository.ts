import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  value: number,
  description: string,
  type: 'debit' | 'credit' | 'installment_credit',
  installments: null,
  card: {
    number: string;
    expiry: string;
    cvv: string;
    holder: string;
  }
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[]  {
    return this.transactions;
  }

  public create({ value, description, type, installments, card }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({value, description, type, installments, card})

    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
