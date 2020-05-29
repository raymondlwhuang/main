import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewExcerciseComponent } from './review-excercise.component';

describe('ReviewExcerciseComponent', () => {
  let component: ReviewExcerciseComponent;
  let fixture: ComponentFixture<ReviewExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewExcerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
