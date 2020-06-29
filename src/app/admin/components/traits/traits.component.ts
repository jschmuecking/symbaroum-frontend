import { Component } from '@angular/core';
import { TraitService } from './trait.service';

@Component({
  selector: 'sym-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  providers: [TraitService],
})
export class TraitsComponent {}
