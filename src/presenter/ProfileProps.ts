import { DeviceContext } from "../models/context/DeviceContext";
import { Profile } from "../models/profile/Profile";

export interface ProfileProps {
  profile: Profile;
  deviceContext?: DeviceContext;

  setPreferredName: (prefName: string) => Promise<boolean>;
  setIsIntroShown: (isIntroShown: boolean) => Promise<boolean>;
  setSMSPreference: (smsNotifications: boolean) => Promise<boolean>;
  logout: () => void;
  deleteAccount: () => void;
}
