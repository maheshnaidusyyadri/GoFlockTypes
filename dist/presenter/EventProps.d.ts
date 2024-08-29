import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { RSVP } from "../models/event/Rsvp";
export interface EventProps {
    profile: Profile;
    event: Event;
    deleteEvent: (eventId: string) => void;
    submitRSVP: (eventId: string, rsvpUserId: string, rsvp: RSVP) => Promise<void>;
}
