import { DeviceContext } from "../models/context/DeviceContext";
import { Event } from "../models/event/Event";
import { EventRelation } from "../models/event/EventRelation";
import { Expense } from "../models/expenses/Expense";
import { Transaction } from "../models/expenses/Transaction";
import { Profile } from "../models/profile/Profile";
export interface EventExpenseSummaryProps {
    profile: Profile;
    deviceContext: DeviceContext;
    event: Event;
    eventRelation: EventRelation;
    transactions: Transaction[];
    expenses: Expense[];
    onCreateTransaction: (eventId: string) => void;
    onUpdateTransaction: (eventId: string, transactionId: string) => void;
    deleteTransaction: (eventId: string, transactionId: string) => Promise<boolean>;
}
