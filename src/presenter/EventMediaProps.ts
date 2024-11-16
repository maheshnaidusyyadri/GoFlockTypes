import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
import { UserMediaMetadata } from "../models/media/UserMediaMetadata";
import { Profile } from "../models/profile/Profile";
import { Event } from "../models/event/Event";

export interface EventMediaProps {
  profile: Profile;
  eventId: string;
  deviceContext: DeviceContext;
  event: Event;
  media: Media[];

  addMedia: (
    mediaFiles: string[],
    metadataList: UserMediaMetadata[]
  ) => Promise<Media[]>;

  deleteMedia: (mediaIds: string[]) => Promise<boolean>;
}
