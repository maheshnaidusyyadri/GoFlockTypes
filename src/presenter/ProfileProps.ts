import { Profile } from "../models/profile/Profile";

export interface ProfileProps {
  profile: Profile;

  setPreferredName: (prefName: string) => Promise<boolean>;
  setIsIntroShown: (isIntroShown: boolean) => Promise<boolean>;
  setSMSPreference: (smsNotifications: boolean) => Promise<boolean>;
}
