import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDescriptionComponent } from './admin-description.component';

describe('AdminDescriptionComponent', () => {
  let component: AdminDescriptionComponent;
  let fixture: ComponentFixture<AdminDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
