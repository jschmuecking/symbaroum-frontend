import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitListItemComponent } from './trait-list-item.component';

describe('TraitListItemComponent', () => {
  let component: TraitListItemComponent;
  let fixture: ComponentFixture<TraitListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
