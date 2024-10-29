import { Currency } from "../settings/Currency";

export interface UserSplit {
  userId: string;
  amount: number;
  currency?: Currency;
}
