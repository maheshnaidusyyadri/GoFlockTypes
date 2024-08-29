import { EventMember } from "../models/event/EventMember";
export interface InviteMembersProps {
    eventId: string;
    admins: EventMember[];
    members: EventMember[];
    getMembersFromContactList: () => Promise<EventMember>;
    addAdmin: (eventMember: EventMember) => Promise<EventMember>;
    removeAdmin: (eventMember: EventMember) => Promise<boolean>;
    addMember: (eventMember: EventMember) => Promise<EventMember>;
    removeMember: (eventMember: EventMember) => Promise<boolean>;
}
