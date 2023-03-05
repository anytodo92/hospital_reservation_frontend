import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenatorComponent } from './pagenator.component';

describe('PagenatorComponent', () => {
  let component: PagenatorComponent;
  let fixture: ComponentFixture<PagenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
