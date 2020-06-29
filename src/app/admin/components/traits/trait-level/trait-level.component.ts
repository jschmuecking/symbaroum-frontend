import { Component, Input } from '@angular/core';
import { AbilityLevel } from '../../../model/ability-level';

@Component({
  selector: 'app-trait-level',
  templateUrl: './trait-level.component.html',
  styleUrls: ['./trait-level.component.scss'],
})
export class TraitLevelComponent {
  @Input()
  abilityLevel: AbilityLevel;
}
