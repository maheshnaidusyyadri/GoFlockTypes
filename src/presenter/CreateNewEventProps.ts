import { Profile } from "../models/profile/Profile";
import { DraftEvent } from "../models/event/DraftEvent";
import { LocationInfo } from "../models/event/LocationInfo";

export interface CreateNewEventProps {
  profile: Profile;

  searchLocation: (query: string) => Promise<LocationInfo[]>;
  createEvent: (draftEvent: DraftEvent) => Promise<Event>;
  goToEvent: (eventId: string) => void;
}
