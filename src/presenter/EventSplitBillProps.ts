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
  expenses: Expense[];

  deleteTransaction: (expenseId: string) => Promise<boolean>;
}
