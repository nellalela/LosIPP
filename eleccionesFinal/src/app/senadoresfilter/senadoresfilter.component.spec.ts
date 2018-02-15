import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenadoresfilterComponent } from './senadoresfilter.component';

describe('SenadoresfilterComponent', () => {
  let component: SenadoresfilterComponent;
  let fixture: ComponentFixture<SenadoresfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenadoresfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadoresfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
