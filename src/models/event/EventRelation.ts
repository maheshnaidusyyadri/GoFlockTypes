import { RoleType } from "./RoleType";
import { VisitType } from "./VisitType";

export interface EventRelation {
  roles: RoleType[];
  visitType: VisitType;
}
