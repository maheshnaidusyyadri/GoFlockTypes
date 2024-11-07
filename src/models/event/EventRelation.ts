import { RoleType } from "./RoleType";
import { RSVP } from "./Rsvp";
import { VisitType } from "./VisitType";

export interface EventRelation {
  roles: RoleType[];
  visitType: VisitType;
  rsvp?: RSVP;
}
