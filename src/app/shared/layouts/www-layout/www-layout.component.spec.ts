import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwwLayoutComponent } from './www-layout.component';

describe('WwwLayoutComponent', () => {
  let component: WwwLayoutComponent;
  let fixture: ComponentFixture<WwwLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwwLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwwLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
