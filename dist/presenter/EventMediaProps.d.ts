import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
import { UserMediaMetadata } from "../models/media/UserMediaMetadata";
import { Profile } from "../models/profile/Profile";
export interface EventMediaProps {
    profile: Profile;
    eventId: string;
    deviceContext: DeviceContext;
    media: Media[];
    addMedia: (mediaFiles: string[], metadataList: UserMediaMetadata[]) => Promise<Media[]>;
    deleteMedia: (mediaId: string) => Promise<boolean>;
}
