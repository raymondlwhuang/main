import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactJsComponent } from './react-js.component';

describe('ReactJsComponent', () => {
  let component: ReactJsComponent;
  let fixture: ComponentFixture<ReactJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
