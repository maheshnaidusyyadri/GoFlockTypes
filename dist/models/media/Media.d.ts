import { UserMediaMetadata } from "./UserMediaMetadata";
export interface Media {
  id: string;
  uploadedBy: string;
  eventId: string;
  type: string;
  path: string;
  downloadUrl?: string;
  createdAt: string;
  isDeleted: boolean;
  metadata?: UserMediaMetadata;
  width?: number;
  height?: number;
}
