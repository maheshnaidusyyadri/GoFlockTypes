import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";

export interface EventListProps {
  profile: Profile;
  events: Event[];

  openEvent: (eventId: string) => void;
}
