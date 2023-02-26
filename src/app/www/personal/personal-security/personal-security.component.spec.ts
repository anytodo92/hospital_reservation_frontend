import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSecurityComponent } from './personal-security.component';

describe('PersonalSecurityComponent', () => {
  let component: PersonalSecurityComponent;
  let fixture: ComponentFixture<PersonalSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
