import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrotimelineComponent } from './filtrotimeline.component';

describe('FiltrotimelineComponent', () => {
  let component: FiltrotimelineComponent;
  let fixture: ComponentFixture<FiltrotimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrotimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrotimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
