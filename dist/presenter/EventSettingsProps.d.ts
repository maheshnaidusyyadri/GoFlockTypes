import { Event } from "../models/event/Event";
import { EventSettings } from "../models/event/EventSettings";
import { EventVisibility } from "../models/event/EventVisibility";
import { Currency } from "../models/settings/Currency";
export interface EventSettingsProps {
    event: Event;
    eventSettings: EventSettings;
    enableMediaSharing: (eventId: string) => Promise<EventSettings>;
    disableMediaSharing: (eventId: string) => Promise<EventSettings>;
    enableSplitBills: (eventId: string) => Promise<EventSettings>;
    disableSplitBills: (eventId: string) => Promise<EventSettings>;
    updateCurrency: (currency: Currency) => Promise<EventSettings>;
    updateEventVisibility: (eventVisibility: EventVisibility) => Promise<EventSettings>;
}
