import Transaction from '../models/Transaction';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public create(value: number, description: string, type: string, installments: number, date: Date): Transaction {

    const transaction = new Transaction(
      value,
      description,
      type,
      installments,
      date
    )

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
