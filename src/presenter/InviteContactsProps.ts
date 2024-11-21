import { DeviceContext } from "../models/context/DeviceContext";
import { Contact } from "../models/event/Contact";
import { Event } from "../models/event/Event";
import { EventMember } from "../models/event/EventMember";
import { EventRelation } from "../models/event/EventRelation";
import { Profile } from "../models/profile/Profile";

export interface InviteContactsProps {
  profile: Profile;
  deviceContext: DeviceContext;
  eventId: string;
  event: Event;
  members: EventMember[];
  contacts: Contact[];
  eventRelation: EventRelation;

  importContactsFromDevice: () => Promise<void>;
  importContactsFromGoogleContacts: () => Promise<void>;

  sendMessageToContacts: (memberIds: string[]) => Promise<void>;

  addMembers: (contact: Contact[]) => Promise<number>;
  removeMember: (eventMember: EventMember) => Promise<boolean>;
}
