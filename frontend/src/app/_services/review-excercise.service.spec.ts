import { TestBed } from '@angular/core/testing';

import { ReviewExcerciseService } from './review-excercise.service';

describe('ReviewExcerciseService', () => {
  let service: ReviewExcerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewExcerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
