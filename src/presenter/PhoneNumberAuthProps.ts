import { DeviceContext } from "../models/context/DeviceContext";
import { Profile } from "../models/profile/Profile";

export interface PhoneNumberAuthProps {
  profile: Profile;
  deviceContext?: DeviceContext;
  sendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
  verifyOTP: (verificationCode: string) => Promise<boolean>;
  resendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
  onSuccessfulVerification: () => void;
}
