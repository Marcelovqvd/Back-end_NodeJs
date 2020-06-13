import { uuid } from 'uuidv4';

interface TransactionConstructor {
  date: Date;
  value: number;
  description: string;
  type: string;
  installments: null;
  card: string;
}

class Transaction {
  id: string;
  date: Date;
  value: number;
  description: string;
  type: string;
  installments: null;
  card: string;

  constructor({ date, value, description, type, installments, card }: Omit<'Transactions', 'id' >) {
    this.id = uuid();
    this.date = date;
    this.value = value;
    this.description = description;
    this.type = type;
    this.installments = installments;
    this.card = card;
  }
}

export default Transaction;
