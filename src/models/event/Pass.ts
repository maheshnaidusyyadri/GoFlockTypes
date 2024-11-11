import { Contact } from "./Contact";

export interface Pass {
  id?: string;
  eventId: string;
  contact: Contact;
  addedByUid: string;
}
