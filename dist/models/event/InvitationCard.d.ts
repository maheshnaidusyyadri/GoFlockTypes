export interface InvitationCard {
    id: string;
    cardType: "image" | "animation" | "video" | "fabric";
    url: string;
    configuration: string;
    shared: boolean;
}
