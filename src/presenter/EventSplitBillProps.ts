import { Event } from "../models/event/Event";
import { Expense } from "../models/expenses/Expense";
import { Transaction } from "../models/expenses/Transaction";

export interface EventSplitBillProps {
  event: Event;
  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => Promise<Transaction>;
  updateTransaction: (transaction: Transaction) => Promise<Transaction>;
  deleteTransaction: (expenseId: string) => Promise<Expense>;
}
