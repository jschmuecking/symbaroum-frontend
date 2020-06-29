import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Trait } from '../../../model/trait';
import { TraitService } from '../trait.service';

@Component({
  selector: 'app-trait-detail',
  templateUrl: './trait-detail.component.html',
  styleUrls: ['./trait-detail.component.scss'],
})
export class TraitDetailComponent implements OnInit {
  trait: Trait;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TraitService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.service.getTrait(params.get('id')))
      )
      .subscribe((trait) => {
        this.trait = trait;
      });
  }
}
