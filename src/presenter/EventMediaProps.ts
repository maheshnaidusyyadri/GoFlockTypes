import { DeviceContext } from "../models/context/DeviceContext";
import { Media } from "../models/media/Media";
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

  addMedia: (files: FileList) => Promise<Media[]>;
  deleteMedia: (mediaIds: string[]) => Promise<boolean>;
}
