import { CheckListItemRequest } from "./CheckListItemRequest";
import { CheckListItemResponse } from "./CheckListItemResponse";
export interface CheckListItem {
    id?: string;
    userId?: string;
    eventId: string;
    type: "template" | "response";
    request: CheckListItemRequest;
    responses: CheckListItemResponse[];
    deleted: boolean;
}
