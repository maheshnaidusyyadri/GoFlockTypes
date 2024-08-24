export interface Media {
    id: string;
    uploadedBy: string;
    eventId: string;
    type: "image" | "pdf" | "video";
    path: string;
    createdAt: string;
    isDeleted: boolean;
}
