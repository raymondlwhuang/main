import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentUsedjsComponent } from './frequent-usedjs.component';

describe('FrequentUsedjsComponent', () => {
  let component: FrequentUsedjsComponent;
  let fixture: ComponentFixture<FrequentUsedjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentUsedjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentUsedjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
