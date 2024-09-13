import { DeviceContext } from "../models/context/DeviceContext";
import { Event } from "../models/event/Event";
import { Expense } from "../models/expenses/Expense";
import { Transaction } from "../models/expenses/Transaction";
import { Profile } from "../models/profile/Profile";

export interface EventSplitBillProps {
  profile: Profile;
  deviceContext: DeviceContext;
  event: Event;
  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => Promise<Transaction>;
  updateTransaction: (transaction: Transaction) => Promise<Transaction>;
  deleteTransaction: (expenseId: string) => Promise<boolean>;
}
