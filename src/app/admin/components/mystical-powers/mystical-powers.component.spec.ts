import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticalPowersComponent } from './mystical-powers.component';

describe('MysticalPowersComponent', () => {
  let component: MysticalPowersComponent;
  let fixture: ComponentFixture<MysticalPowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysticalPowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticalPowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
