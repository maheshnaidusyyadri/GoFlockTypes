import { RSVP } from "./Rsvp";
export interface EventMember {
    id?: string;
    flockId?: string;
    eventId: string;
    rsvp: RSVP;
    name?: string;
    phoneNumber?: string;
    email?: string;
}
