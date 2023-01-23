import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCreateComponent } from './special-create.component';

describe('SpecialCreateComponent', () => {
  let component: SpecialCreateComponent;
  let fixture: ComponentFixture<SpecialCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
