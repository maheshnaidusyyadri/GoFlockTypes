import { DeviceContext } from "../models/context/DeviceContext";
import { Event } from "../models/event/Event";
import { Expense } from "../models/expenses/Expense";
import { Transaction } from "../models/expenses/Transaction";
import { Profile } from "../models/profile/Profile";

export interface EventExpenseSummaryProps {
  profile: Profile;
  deviceContext: DeviceContext;
  event: Event;
  transactions: Transaction[];
  expenses: Expense[];

  onCreateTransaction: (eventId: string) => void;
  onUpdateTransaction: (transactionId: string) => void;
  deleteTransaction: (transactionId: string) => Promise<boolean>;
}
