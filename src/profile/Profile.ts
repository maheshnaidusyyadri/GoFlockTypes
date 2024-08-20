import { Preferences } from "./Preferences";

export interface Profile {
  id: string;
  prefName: string;
  isIntroShown: boolean;
  preferences: Preferences;
}
