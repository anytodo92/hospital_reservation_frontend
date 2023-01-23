import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDetailComponent } from './special-detail.component';

describe('SpecialDetailComponent', () => {
  let component: SpecialDetailComponent;
  let fixture: ComponentFixture<SpecialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
