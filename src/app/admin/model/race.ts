import { Trait } from './trait';

export interface Race {
  id: string;
  name: string;
  mustHave?: Trait[];
  canHave?: Trait[];
}
