import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { DeviceContext } from "../models/context/DeviceContext";
import { ListType } from "../models/event/ListType";

export interface DashboardProps {
  profile: Profile;
  deviceContext: DeviceContext;
  activeEvents: Event[];
  pastEvents: Event[];
  myEvents: Event[];

  createNewEvent: () => void;
  openEvent: (eventId: string) => void;
  seeAllMyEvents: () => void;
  seeAllEvents: (listType: ListType) => void;
}
