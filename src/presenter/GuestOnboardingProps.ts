import { DeviceContext, Profile } from "@goflock/types";
import { EventMinDetails } from "../models/event/EventMinDetails";
import { EventRelation } from "../models/event/EventRelation";

export interface GuestOnboardingProps {
  profile: Profile;
  deviceContext: DeviceContext;
  eventRelation: EventRelation;

  eventMinDetails: EventMinDetails;
  sendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
  verifyOTP: (verificationCode: string) => Promise<boolean>;
  resendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
  onSuccessfulVerification: () => void;
}
