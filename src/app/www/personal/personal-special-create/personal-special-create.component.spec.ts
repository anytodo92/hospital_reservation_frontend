import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpecialCreateComponent } from './personal-special-create.component';

describe('PersonalSpecialCreateComponent', () => {
  let component: PersonalSpecialCreateComponent;
  let fixture: ComponentFixture<PersonalSpecialCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSpecialCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSpecialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
