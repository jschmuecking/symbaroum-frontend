import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoonsBurdensComponent } from './boons-burdens.component';

describe('BoonsBurdensComponent', () => {
  let component: BoonsBurdensComponent;
  let fixture: ComponentFixture<BoonsBurdensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoonsBurdensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoonsBurdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
