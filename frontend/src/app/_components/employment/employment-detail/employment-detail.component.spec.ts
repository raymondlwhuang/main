import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailComponent } from "./employment-detail.component";

describe('EmploymentDetailComponent', () => {
  let component: EmploymentDetailComponent;
  let fixture: ComponentFixture<EmploymentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
