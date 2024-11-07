export interface Counters {
    attendingRSVP?: {
        total: number;
        adults: number;
        kids: number;
    };
    maybeRSVP?: {
        total: number;
        adults: number;
        kids: number;
    };
    declinedRSVP?: {
        total: number;
        adults: number;
        kids: number;
    };
    totalRSVP?: {
        total: number;
        adults: number;
        kids: number;
    };
}
