import { DeviceContext } from "../models/context/DeviceContext";
import { EventMember } from "../models/event/EventMember";
import { Profile } from "../models/profile/Profile";

export interface InviteMembersProps {
  profile: Profile;
  deviceContext: DeviceContext;
  eventId: string;
  admins: EventMember[];
  members: EventMember[];

  getMembersFromContactList: () => Promise<EventMember[]>;

  addAdmin: (eventMember: EventMember) => Promise<EventMember>;
  removeAdmin: (eventMember: EventMember) => Promise<boolean>;

  addMember: (eventMember: EventMember) => Promise<EventMember>;
  removeMember: (eventMember: EventMember) => Promise<boolean>;
}
