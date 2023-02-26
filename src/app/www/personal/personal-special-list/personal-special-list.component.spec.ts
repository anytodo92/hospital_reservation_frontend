import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSpecialListComponent } from './personal-special-list.component';

describe('PersonalSpecialListComponent', () => {
  let component: PersonalSpecialListComponent;
  let fixture: ComponentFixture<PersonalSpecialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSpecialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSpecialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
