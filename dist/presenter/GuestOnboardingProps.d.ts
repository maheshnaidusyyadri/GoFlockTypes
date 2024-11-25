import { EventMinDetails } from "../models/event/EventMinDetails";
export interface GuestOnboardingProps {
    eventMinDetails: EventMinDetails;
    sendOTP: (phoneNumber: string) => Promise<boolean>;
    verifyOTP: (phoneNumber: string, otp: string) => Promise<boolean>;
}
