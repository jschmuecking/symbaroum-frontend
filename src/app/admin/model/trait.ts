import { Ability } from './ability';
import { Race } from './race';

export interface Trait extends Ability {
  alwaysInRaces?: Race[];
  sometimesInRaces?: Race[];
}
