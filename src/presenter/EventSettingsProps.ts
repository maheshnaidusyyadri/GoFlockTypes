import { DeviceContext } from "../models/context/DeviceContext";
import { Event } from "../models/event/Event";
import { EventRelation } from "../models/event/EventRelation";
import { EventSettings } from "../models/event/EventSettings";
import { EventVisibility } from "../models/event/EventVisibility";
import { Profile } from "../models/profile/Profile";
import { Currency } from "../models/settings/Currency";

export interface EventSettingsProps {
  profile: Profile;
  deviceContext: DeviceContext;
  event: Event;
  eventSettings: EventSettings;
  eventRelation: EventRelation;

  enableMediaSharing: (eventId: string) => Promise<boolean>;
  disableMediaSharing: (eventId: string) => Promise<boolean>;

  enableSplitBills: (eventId: string) => Promise<boolean>;
  disableSplitBills: (eventId: string) => Promise<boolean>;

  updateCurrency: (currency: Currency) => Promise<boolean>;

  updateEventVisibility: (eventVisibility: EventVisibility) => Promise<boolean>;
}
