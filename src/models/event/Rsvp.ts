export interface RSVP {
  response: "attending" | "not-attending" | "maybe" | "not-answered";
  count: number;
  comment?: string;
  uniqueDeviceId?: string;
  kidsCount?: number;
  adultsCount?: number;
  name?: string;
}
