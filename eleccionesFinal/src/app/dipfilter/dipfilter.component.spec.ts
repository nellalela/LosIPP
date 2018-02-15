import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipfilterComponent } from './dipfilter.component';

describe('DipfilterComponent', () => {
  let component: DipfilterComponent;
  let fixture: ComponentFixture<DipfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
