import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAssetsComponent } from './library-assets.component';

describe('LibraryAssetsComponent', () => {
  let component: LibraryAssetsComponent;
  let fixture: ComponentFixture<LibraryAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
