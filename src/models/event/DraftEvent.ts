import { CheckListItem } from "../checklist/CheckListItem";
import { Media } from "../media/Media";
import { EventMember } from "./EventMember";
import { EventSettings } from "./EventSettings";
import { EventTime } from "./EventTime";
import { EventType } from "./EventType";
import { EventVisibility } from "./EventVisibility";
import { InvitationCard } from "./InvitationCard";
import { LocationInfo } from "./LocationInfo";
import { Transaction } from "../expenses/Transaction";

export interface DraftEvent {
  name: string;
  type: EventType;
  description?: string;
  location?: LocationInfo;
  time?: EventTime;
  visibility?: EventVisibility;
  admins?: EventMember[];
  settings?: EventSettings;
}
