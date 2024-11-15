import { Profile } from "../models/profile/Profile";
import { DraftEvent } from "../models/event/DraftEvent";
export interface CreateEventProps {
    profile: Profile;
    createEvent: (draftEvent: DraftEvent) => Promise<Event>;
}
