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
import { Counters } from "./Counters";

export interface Event {
  id: string;
  owner: string;
  name: string;
  hostedBy: string;
  type: EventType;
  image: string;
  description: string;
  location: LocationInfo;
  time: EventTime;
  visibility: EventVisibility;
  // memberInvitationContactReference contains the phone nos and emails.
  memberInvitationContactReference: string[];
  members: EventMember[];
  invitationCard: InvitationCard;

  settings: EventSettings;

  // TODO: create seperate type for templates?
  checkListQuestions: CheckListItem[];
  checkListResponses: CheckListItem[];

  counters?: Counters;

  media: Media[];
  transactions: Transaction[];
  deleted: boolean;
}
