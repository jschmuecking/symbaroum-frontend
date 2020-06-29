import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trait } from '../../../model/trait';

@Component({
  selector: 'sym-trait-list-item',
  templateUrl: './trait-list-item.component.html',
  styleUrls: ['./trait-list-item.component.scss'],
})
export class TraitListItemComponent {
  @Input()
  trait: Trait;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToTraitDetail() {
    this.router.navigate([this.trait.id], { relativeTo: this.activatedRoute });
  }
}
