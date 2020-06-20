import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticalTraditionsComponent } from './mystical-traditions.component';

describe('MysticalTraditionsComponent', () => {
  let component: MysticalTraditionsComponent;
  let fixture: ComponentFixture<MysticalTraditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysticalTraditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticalTraditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
