import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActiviyComponent } from './user-activiy.component';

describe('UserActiviyComponent', () => {
  let component: UserActiviyComponent;
  let fixture: ComponentFixture<UserActiviyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActiviyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActiviyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
