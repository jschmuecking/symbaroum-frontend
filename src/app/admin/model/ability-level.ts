export enum AbilityLevelType {
  NOVICE = 'NOVICE',
  ADEPT = 'ADEPT',
  MASTER = 'MASTER',
}

export enum ActionType {
  ACTIVE = 'ACTIVE',
  PASSIVE = 'PASSIVE',
  REACTION = 'REACTION',
  FREE = 'FREE',
  SPECIAL = 'SPECIAL',
  FULL_TURN = 'FULL_TURN',
  ONCE_PER_ADVENTURE = 'ONCE_PER_ADVENTURE',
}

export interface AbilityLevel {
  id: string;
  description: string;
  level: AbilityLevelType;
  type: ActionType;
}
