import { Profile } from "../models/profile/Profile";
import { DraftEvent } from "../models/event/DraftEvent";
import { LocationInfo } from "../models/event/LocationInfo";
import { Event } from "../models/event/Event";
import { DeviceContext } from "../models/context/DeviceContext";
import { CreateEventMode } from "../models/event/CreateEventMode";
import { EventType } from "@goflock/types";
export interface CreateNewEventProps {
    deviceContext: DeviceContext;
    profile: Profile;
    mode: CreateEventMode;
    isEditing?: boolean;
    eventType?: EventType | undefined;
    searchLocation: (query: string) => Promise<LocationInfo[]>;
    createEvent: (draftEvent: DraftEvent) => Promise<Event>;
    goToEvent: (eventId: string, mode?: CreateEventMode) => void;
}
