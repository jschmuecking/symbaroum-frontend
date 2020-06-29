import { AbilityLevel } from './ability-level';

export interface Ability {
  id: string;
  name: string;
  description: string;
  novice: AbilityLevel;
  adept: AbilityLevel;
  master: AbilityLevel;
}
