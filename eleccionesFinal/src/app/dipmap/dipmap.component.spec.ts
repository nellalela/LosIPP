import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipmapComponent } from './dipmap.component';

describe('DipmapComponent', () => {
  let component: DipmapComponent;
  let fixture: ComponentFixture<DipmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
