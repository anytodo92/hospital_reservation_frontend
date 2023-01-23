import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEditComponent } from './special-edit.component';

describe('SpecialEditComponent', () => {
  let component: SpecialEditComponent;
  let fixture: ComponentFixture<SpecialEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
