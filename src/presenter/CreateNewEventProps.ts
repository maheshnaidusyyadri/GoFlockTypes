import { Profile } from "../models/profile/Profile";
import { DraftEvent } from "../models/event/DraftEvent";
import { LocationInfo } from "../models/event/LocationInfo";
import { Event } from "../models/event/Event";
import { DeviceContext } from "../models/context/DeviceContext";
import { CreateEventMode } from "../models/event/CreateEventMode";

export interface CreateNewEventProps {
  deviceContext: DeviceContext;
  profile: Profile;
  mode: CreateEventMode;
  isEditing?: boolean;
  eventType?: string | undefined;
  event?: DraftEvent;

  searchLocation: (query: string) => Promise<LocationInfo[]>;
  generateInvitationDescription: (draftEvent: DraftEvent) => Promise<string>;
  createEvent: (draftEvent: DraftEvent) => Promise<Event>;
  updateEvent: (draftEvent: DraftEvent) => Promise<Event>;
  goToEvent: (eventId: string, mode?: CreateEventMode) => void;
}
