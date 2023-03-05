import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialItemComponent } from './special-item.component';

describe('SpecialItemComponent', () => {
  let component: SpecialItemComponent;
  let fixture: ComponentFixture<SpecialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
