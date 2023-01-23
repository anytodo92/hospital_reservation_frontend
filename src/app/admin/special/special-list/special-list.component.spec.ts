import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialListComponent } from './special-list.component';

describe('SpecialListComponent', () => {
  let component: SpecialListComponent;
  let fixture: ComponentFixture<SpecialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
