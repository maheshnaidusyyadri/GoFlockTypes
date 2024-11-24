import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
import { UserMediaMetadata } from "../models/media/UserMediaMetadata";
import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";
import { EventRelation } from "../models/event/EventRelation";
export interface EventMediaProps {
    profile: Profile;
    eventId: string;
    deviceContext: DeviceContext;
    event: Event;
    eventRelation: EventRelation;
    media: Media[];
    addMedia: (mediaFiles: string[], metadataList: UserMediaMetadata[], firestoreCollectionName: string) => Promise<Media[]>;
    deleteMedia: (mediaIds: string[]) => Promise<boolean>;
}
