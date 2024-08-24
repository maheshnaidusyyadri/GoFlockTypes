export interface PhoneNumberAuthProps {
    sendOTP: (phoneNumberWithCountryCode: string) => Promise<boolean>;
    verifyOTP: (phoneNumberWithCountryCode: string, otp: string) => Promise<boolean>;
}
