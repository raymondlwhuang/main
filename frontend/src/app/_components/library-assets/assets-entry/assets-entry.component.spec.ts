import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsEntryComponent } from './assets-entry.component';

describe('AssetsEntryComponent', () => {
  let component: AssetsEntryComponent;
  let fixture: ComponentFixture<AssetsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
