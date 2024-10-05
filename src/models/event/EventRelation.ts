import { RoleType } from "./RoleType";

export interface EventRelation {
  roles: RoleType[];
  visitType: "member" | "admin" | "owner" | "visitor" | "unauthorized";
}
