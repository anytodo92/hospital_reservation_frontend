import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSearchBarComponent } from './small-search-bar.component';

describe('SmallSearchBarComponent', () => {
  let component: SmallSearchBarComponent;
  let fixture: ComponentFixture<SmallSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
