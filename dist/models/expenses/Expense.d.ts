import { Currency } from "../settings/Currency";
export interface Expense {
    userId: string;
    name: string;
    amount: number;
    currency: Currency;
}
