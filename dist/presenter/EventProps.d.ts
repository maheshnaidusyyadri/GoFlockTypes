import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { RSVP } from "../models/event/Rsvp";
import { DeviceContext } from "../models/context/DeviceContext";
export interface EventProps {
    profile: Profile;
    deviceContext: DeviceContext;
    event: Event;
    deleteEvent: (eventId: string) => void;
    submitRSVP: (eventId: string, rsvpUserId: string, rsvp: RSVP) => Promise<void>;
}
