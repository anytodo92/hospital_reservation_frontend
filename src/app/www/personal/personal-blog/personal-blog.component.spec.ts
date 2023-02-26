import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBlogComponent } from './personal-blog.component';

describe('PersonalBlogComponent', () => {
  let component: PersonalBlogComponent;
  let fixture: ComponentFixture<PersonalBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
