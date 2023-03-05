import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingSlidebarComponent } from './rating-slidebar.component';

describe('RatingSlidebarComponent', () => {
  let component: RatingSlidebarComponent;
  let fixture: ComponentFixture<RatingSlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingSlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
