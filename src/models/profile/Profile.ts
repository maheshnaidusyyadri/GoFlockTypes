import { Preferences } from "./Preferences";

export interface Profile {
  id: string;
  email?: string;
  phone?: string;
  prefName: string;
  isIntroShown: boolean;
  pictureUrl: string;
  preferences: Preferences;
}
