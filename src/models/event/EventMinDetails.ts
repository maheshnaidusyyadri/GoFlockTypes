import { EventType } from "./EventType";
import { EventVisibility } from "./EventVisibility";

export interface EventMinDetails {
  id: string;
  name: string;
  hostedBy: string;
  type: EventType;
  visibility: EventVisibility;
}
