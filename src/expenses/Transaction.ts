export interface Transaction {
  id?: string;
  eventId: string;
  paidUserId: string;
  splitAmongUserIds?: string[];
  description: string;
  amount: number;
  date: string;
  deleted: boolean;
}
