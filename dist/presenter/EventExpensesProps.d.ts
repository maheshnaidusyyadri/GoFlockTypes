import { Expense } from "../models/expenses/Expense";
export interface EventSplitBillProps {
    eventId: string;
    expenses: Expense[];
    addExpense: (expense: Expense) => Promise<Expense>;
    updateExpense: (expense: Expense) => Promise<Expense>;
    deleteExpense: (expenseId: string) => Promise<Expense>;
}
