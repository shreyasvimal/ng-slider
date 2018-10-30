import { ArrowDirection } from './../options';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mat-slider-arrow',
  templateUrl: './slider-arrow.component.html',
  styleUrls: ['./slider-arrow.component.scss']
})
export class SliderArrowComponent implements OnInit {

  @Input()
  private direction: ArrowDirection;

  arrowDirection = ArrowDirection;

  @Output()
  clickedDirection: EventEmitter<ArrowDirection> = new EventEmitter<ArrowDirection>();

  constructor() { }

  ngOnInit() {
  }

  navigate(event, dir: ArrowDirection) {
    event.preventDefault();
     this.clickedDirection.emit(dir);
  }
}
