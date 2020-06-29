import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityLevelComponent } from './ability-level.component';

describe('AbilityLevelComponent', () => {
  let component: AbilityLevelComponent;
  let fixture: ComponentFixture<AbilityLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AbilityLevelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
