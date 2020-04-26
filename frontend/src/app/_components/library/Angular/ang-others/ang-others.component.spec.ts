import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngOthersComponent } from './ang-others.component';

describe('AngOthersComponent', () => {
  let component: AngOthersComponent;
  let fixture: ComponentFixture<AngOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
