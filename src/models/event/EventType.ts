export type EventType =
  | "birthday"
  | "get_togather"
  | "vacation"
  | "family_event"
  | "gender_reveal"
  | "baby_shower"
  | "anniversary"
  | "wedding"
  | "reunion"
  | "party"
  | "other";

export function toEventType(value: string): EventType | undefined {
  const eventTypes: EventType[] = [
    "birthday",
    "get_togather",
    "vacation",
    "family_event",
    "gender_reveal",
    "baby_shower",
    "anniversary",
    "wedding",
    "reunion",
    "party",
    "other",
  ];

  return eventTypes.includes(value as EventType)
    ? (value as EventType)
    : undefined;
}
