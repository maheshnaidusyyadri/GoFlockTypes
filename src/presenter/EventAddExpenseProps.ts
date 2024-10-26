import { DeviceContext } from "../models/context/DeviceContext";
import { Event } from "../models/event/Event";
import { Transaction } from "../models/expenses/Transaction";
import { Profile } from "../models/profile/Profile";

export interface EventAddExpenseProps {
  profile: Profile;
  deviceContext: DeviceContext;
  event: Event;

  addTransaction: (transaction: Transaction) => Promise<Transaction>;
  updateTransaction: (transaction: Transaction) => Promise<Transaction>;
}
