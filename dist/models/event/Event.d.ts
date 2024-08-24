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
export interface Event {
    id: string;
    owner: string;
    name: string;
    type: EventType;
    description: string;
    location: LocationInfo;
    time: EventTime;
    visibility: EventVisibility;
    admins: EventMember[];
    members: EventMember[];
    invitationCard: InvitationCard;
    settings: EventSettings;
    checkListQuestions: CheckListItem[];
    checkListResponses: CheckListItem[];
    media: Media[];
    transactions: Transaction[];
    deleted: boolean;
}
