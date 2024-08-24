export interface InvitationCard {
    id: string;
    cardType: "image" | "animation" | "video" | "fabric";
    path: string;
    configuration: string;
    shared: boolean;
}
