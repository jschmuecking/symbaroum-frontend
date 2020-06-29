import { Component } from '@angular/core';
import { TraitService } from './trait.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
  providers: [TraitService],
})
export class TraitsComponent {}
