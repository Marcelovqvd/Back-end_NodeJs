import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  value: number;

  description: string;

  type: 'debit' | 'credit' | 'installment_credit';

  installments: null;

  card: {
    number: string,
		expiry: string,
		cvv: string,
		holder: string
  };

  constructor({value, description, type, installments, card}: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.value = value;
    this.description = description;
    this.type = type;
    this.installments = installments;
    this.card = card;
  }
}

export default Transaction;
