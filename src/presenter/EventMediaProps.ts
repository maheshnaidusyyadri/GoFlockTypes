import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
import { Profile } from "../models/profile/Profile";

export interface EventMediaProps {
  profile: Profile;
  eventId: string;
  deviceContext: DeviceContext;
  media: Media[];

  addMedia: (imageAsString: string) => Promise<Media>;
  deleteMedia: (mediaId: string) => Promise<Media>;
}
