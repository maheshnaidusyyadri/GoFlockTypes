import { DeviceContext, Profile } from "@goflock/types";
import { EventMinDetails } from "../models/event/EventMinDetails";
import { EventRelation } from "../models/event/EventRelation";
export interface GuestOnboardingProps {
    profile: Profile;
    deviceContext: DeviceContext;
    eventRelation: EventRelation;
    eventMinDetails: EventMinDetails;
    sendOTP: (phoneNumber: string) => Promise<boolean>;
    verifyOTP: (phoneNumber: string, otp: string) => Promise<boolean>;
    onSuccessfulAuth: () => void;
}
