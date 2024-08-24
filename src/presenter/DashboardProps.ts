import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";

export interface DashboardProps {
  profile: Profile;
  activeEvents: Event[];
  myEvents: Event[];
}
