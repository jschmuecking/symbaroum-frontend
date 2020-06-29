import { Component, Input } from '@angular/core';
import { AbilityLevel } from '../../../model/ability-level';

@Component({
  selector: 'sym-ability-level',
  templateUrl: './ability-level.component.html',
  styleUrls: ['./ability-level.component.scss'],
})
export class AbilityLevelComponent {
  @Input()
  abilityLevel: AbilityLevel;
}
