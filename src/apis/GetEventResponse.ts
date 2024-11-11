import { Event } from "../models/event/Event";
import { EventRelation } from "../models/event/EventRelation";

export interface GetEventResponse {
  event: Event;
  eventRelation: EventRelation;
}
