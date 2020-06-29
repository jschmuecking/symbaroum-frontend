import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitLevelComponent } from './trait-level.component';

describe('TraitLevelComponent', () => {
  let component: TraitLevelComponent;
  let fixture: ComponentFixture<TraitLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitLevelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
