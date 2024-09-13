import { DeviceContext } from "../models/context/DeviceContext";
import { Profile } from "../models/profile/Profile";

export interface IntroductionProps {
  profile: Profile;
  deviceContext: DeviceContext;
  introCompleted: () => void;
}
