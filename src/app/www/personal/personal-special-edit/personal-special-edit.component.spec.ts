import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpecialEditComponent } from './personal-special-edit.component';

describe('PersonalSpecialEditComponent', () => {
  let component: PersonalSpecialEditComponent;
  let fixture: ComponentFixture<PersonalSpecialEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSpecialEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSpecialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
