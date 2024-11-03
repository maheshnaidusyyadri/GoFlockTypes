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
    description: string;
    location: LocationInfo;
    time: EventTime;
    visibility: EventVisibility;
    memberInvitationContactReference: string[];
    members: EventMember[];
    invitationCard?: InvitationCard;
    settings: EventSettings;
    checkListQuestions: CheckListItem[];
    checkListResponses: CheckListItem[];
    counters?: Counters;
    media: Media[];
    transactions: Transaction[];
    deleted: boolean;
    createdAt?: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
    };
}
