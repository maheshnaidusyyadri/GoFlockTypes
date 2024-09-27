import { DeviceContext } from "../models/context/DeviceContext";
import { Profile } from "../models/profile/Profile";
export interface PhoneNumberAuthProps {
    profile: Profile;
    deviceContext?: DeviceContext;
    sendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
    verifyOTP: (phoneNumberWithCountryCode: string, otp: string) => Promise<boolean>;
    onSuccessfulVerification: () => void;
}
