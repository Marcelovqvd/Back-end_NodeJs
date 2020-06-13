import Transaction from '../models/transaction';

interface CreateTransacionDTO {
  date: Date,
  value: string,
  description: string,
  type: string,
  installments: null,
  card: string
}

class TransactionsRepository {
  private transaction: Transaction[];

  constructor() {
    this.transaction = [];
  }

  public all(): Transaction[] {
    return this.transaction;
  }

  public create({ date, value, description, type, installments, card }: CreateTransacionDTO): Transaction {
    const transaction = new Transaction({
      date,
      value,
      description,
      type,
      installments,
      card,
    });

    this.transaction.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
