import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { EventType } from "../models/event/EventType";

export interface DashboardProps {
  profile: Profile;
  activeEvents: Event[];
  myEvents: Event[];

  createNewEvent: () => void;
  openEvent: (eventId: string) => void;
  seeAllMyEvents: () => void;
  seeAllEvents: (eventType: EventType) => void;
}
