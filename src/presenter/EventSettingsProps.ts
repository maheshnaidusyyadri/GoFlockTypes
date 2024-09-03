import { Event } from "../models/event/Event";
import { EventSettings } from "../models/event/EventSettings";
import { EventVisibility } from "../models/event/EventVisibility";
import { Currency } from "../models/settings/Currency";

export interface EventSettingsProps {
  event: Event;
  eventSettings: EventSettings;

  enableMediaSharing: (eventId: string) => Promise<boolean>;
  disableMediaSharing: (eventId: string) => Promise<boolean>;

  enableSplitBills: (eventId: string) => Promise<boolean>;
  disableSplitBills: (eventId: string) => Promise<boolean>;

  updateCurrency: (currency: Currency) => Promise<boolean>;

  updateEventVisibility: (eventVisibility: EventVisibility) => Promise<boolean>;
}
