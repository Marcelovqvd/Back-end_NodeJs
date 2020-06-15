import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  value: number;

  description: string;

  type: string;

  installments: number;

  date: Date;

  constructor(value: number, description: string, type: string, installments: number, date: Date) {
    this.id = uuid();
    this.value = value;
    this.description = description;
    this.type = type;
    this.installments = installments;
    this.date = date;
  }
}

export default Transaction;
