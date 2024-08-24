import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
export interface EventProps {
    profile: Profile;
    event: Event;
}
