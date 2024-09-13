import { Profile } from "../models/profile/Profile";
import { DraftEvent } from "../models/event/DraftEvent";
import { LocationInfo } from "../models/event/LocationInfo";
import { Event } from "../models/event/Event";
import { DeviceContext } from "../models/context/DeviceContext";

export interface CreateNewEventProps {
  deviceContext: DeviceContext;
  profile: Profile;

  searchLocation: (query: string) => Promise<LocationInfo[]>;
  createEvent: (draftEvent: DraftEvent) => Promise<Event>;
  goToEvent: (eventId: string) => void;
}
