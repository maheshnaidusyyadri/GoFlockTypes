export interface ApiResponse<T = any> {
    status: "success" | "error";
    code: number;
    message: string;
    data?: T;
}
