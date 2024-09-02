import { Currency } from "../settings/Currency";
import { EventVisibility } from "./EventVisibility";
export interface EventSettings {
    shareMedia: boolean;
    splitBills: boolean;
    enableChats: boolean;
    allowCheckList: boolean;
    currency: Currency;
    eventVisibility: EventVisibility;
}
