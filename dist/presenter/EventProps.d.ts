import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { RSVP } from "../models/event/Rsvp";
import { DeviceContext } from "../models/context/DeviceContext";
import { EventRelation } from "../models/event/EventRelation";
import { Media } from "@goflock/types";
export interface EventProps {
    profile: Profile;
    deviceContext: DeviceContext;
    event: Event;
    eventRelation: EventRelation;
    submitRSVP: (eventId: string, rsvp: RSVP) => Promise<boolean>;
    inviteMembers: (eventId: string) => void;
    editEvent: (eventId: string) => void;
    copyEventLink: (eventId: string) => void;
    navigateToEventLocation: (eventId: string) => void;
    deleteEvent: (eventId: string) => void;
    addInvitationCards: (files: FileList) => Promise<Media[]>;
    sendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
    verifyOTP: (phoneNumberWithCountryCode: string, otp: string) => Promise<boolean>;
}
