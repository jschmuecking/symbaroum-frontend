import { Component, Input } from '@angular/core';
import { Ability } from '../../../model/ability';

@Component({
  selector: 'sym-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.scss'],
})
export class AbilityDetailComponent {
  @Input()
  ability: Ability;
}
