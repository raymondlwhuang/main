import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreShowComponent } from './pre-show.component';

describe('PreShowComponent', () => {
  let component: PreShowComponent;
  let fixture: ComponentFixture<PreShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
