import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWriteComponent } from './blog-write.component';

describe('BlogWriteComponent', () => {
  let component: BlogWriteComponent;
  let fixture: ComponentFixture<BlogWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
