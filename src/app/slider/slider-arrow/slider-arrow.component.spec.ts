import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArrowComponent } from './slider-arrow.component';

describe('SliderArrowComponent', () => {
  let component: SliderArrowComponent;
  let fixture: ComponentFixture<SliderArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
