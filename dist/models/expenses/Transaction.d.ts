import { Currency } from "../settings/Currency";
import { UserSplit } from "./UserSplit";
export interface Transaction {
    id?: string;
    eventId: string;
    paidUserId: string;
    addedByUserId: string;
    splitAmongUserIds?: UserSplit[];
    description: string;
    amount: number;
    date: string;
    deleted?: boolean;
    currency: Currency;
}
