import { Currency } from "../settings/Currency";

export interface Expense {
  userId: string;
  amount: number;
  currency: Currency;
  name: string;
}
