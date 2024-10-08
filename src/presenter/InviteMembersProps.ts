import { DeviceContext } from "../models/context/DeviceContext";
import { Contact } from "../models/event/Contact";
import { EventMember } from "../models/event/EventMember";
import { Profile } from "../models/profile/Profile";

export interface InviteMembersProps {
  profile: Profile;
  deviceContext: DeviceContext;
  eventId: string;
  admins: EventMember[];
  members: EventMember[];

  getMembersFromContactList: () => Promise<Contact[]>;

  addAdmin: (eventMember: EventMember) => Promise<EventMember>;
  removeAdmin: (eventMember: EventMember) => Promise<boolean>;

  addMember: (contact: Contact) => Promise<EventMember>;
  removeMember: (eventMember: EventMember) => Promise<boolean>;
}
