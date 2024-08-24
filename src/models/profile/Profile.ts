import { Preferences } from "./Preferences";

export interface Profile {
  id: string;
  prefName: string;
  isIntroShown: boolean;
  pictureUrl: string;
  preferences: Preferences;
}
