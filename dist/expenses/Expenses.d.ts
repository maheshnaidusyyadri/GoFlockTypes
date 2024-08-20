import { Expense } from "./Expense";
import { Transaction } from "./Transaction";
export interface Expenses {
    summary: Expense[];
    transactions: Transaction[];
}
