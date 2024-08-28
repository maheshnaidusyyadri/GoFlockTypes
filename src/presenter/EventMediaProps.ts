import { Media } from "../models/media/Media";

export interface EventMediaProps {
  eventId: string;
  media: Media[];

  addMedia: (imageAsString: string) => Promise<Media>;
  deleteMedia: (mediaId: string) => Promise<Media>;
}
