import { Component, OnInit } from '@angular/core';
import { Trait } from '../../../model/trait';
import { TraitService } from '../trait.service';

@Component({
  selector: 'app-trait-list',
  templateUrl: './trait-list.component.html',
  styleUrls: ['./trait-list.component.scss'],
})
export class TraitListComponent implements OnInit {
  traitList: Trait[] = [];

  constructor(private traitService: TraitService) {}

  ngOnInit(): void {
    this.traitService.getTraitList().subscribe((traits) => {
      this.traitList = traits;
    });
  }
}
