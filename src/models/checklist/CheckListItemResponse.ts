export interface CheckListItemResponse {
  id?: string;
  userId?: string;
  title: string;
  isChecked?: boolean;
  type: "template" | "response";
}
