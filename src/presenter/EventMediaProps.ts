import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
import { UserFile } from "../models/media/UserFile";
import { UserGallaryItem } from "../models/media/UserGallaryItem";
import { UserMediaMetadata } from "../models/media/UserMediaMetadata";
import { Profile } from "../models/profile/Profile";

export interface EventMediaProps {
  profile: Profile;
  eventId: string;
  deviceContext: DeviceContext;
  media: Media[];

  showGallary: () => Promise<UserGallaryItem[]>;
  showFiles: () => Promise<UserFile[]>;
  addMedia: (
    imageAsString: string,
    metadata: UserMediaMetadata
  ) => Promise<Media>;
  deleteMedia: (mediaId: string) => Promise<boolean>;
}
