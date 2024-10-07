import { EventMember } from "./EventMember";
import { EventSettings } from "./EventSettings";
import { EventTime } from "./EventTime";
import { EventType } from "./EventType";
import { EventVisibility } from "./EventVisibility";
import { LocationInfo } from "./LocationInfo";

export interface DraftEvent {
  name: string;
  type: EventType;
  description?: string;
  location?: LocationInfo;
  time?: EventTime;
  visibility?: EventVisibility;
  admins?: EventMember[];
  settings?: EventSettings;
  hostedBy?: string;
}
