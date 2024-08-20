export interface RSVP {
    response: "attending" | "not-attending" | "maybe" | "not-answered";
    comment?: string;
    count: number;
}
