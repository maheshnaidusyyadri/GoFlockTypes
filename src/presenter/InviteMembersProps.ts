import { DeviceContext } from "../models/context/DeviceContext";
import { Contact } from "../models/event/Contact";
import { EventMember } from "../models/event/EventMember";
import { EventRelation } from "../models/event/EventRelation";
import { Profile } from "../models/profile/Profile";

export interface InviteMembersProps {
  profile: Profile;
  deviceContext: DeviceContext;
  eventId: string;
  members: EventMember[];
  contacts: Contact[];
  eventRelation: EventRelation;

  importContactsFromDevice: () => Promise<void>;

  addAdmin: (eventMember: EventMember) => Promise<EventMember>;
  removeAdmin: (eventMember: EventMember) => Promise<boolean>;

  addMembers: (contact: Contact[]) => Promise<number>;
  removeMember: (eventMember: EventMember) => Promise<boolean>;
}
