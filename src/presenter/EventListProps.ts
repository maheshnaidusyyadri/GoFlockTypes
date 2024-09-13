import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { DeviceContext } from "../models/context/DeviceContext";

export interface EventListProps {
  profile: Profile;
  deviceContext: DeviceContext;
  events: Event[];

  openEvent: (eventId: string) => void;
}
