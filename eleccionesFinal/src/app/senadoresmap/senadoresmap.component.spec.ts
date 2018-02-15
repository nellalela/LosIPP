import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenadoresmapComponent } from './senadoresmap.component';

describe('SenadoresmapComponent', () => {
  let component: SenadoresmapComponent;
  let fixture: ComponentFixture<SenadoresmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenadoresmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadoresmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
