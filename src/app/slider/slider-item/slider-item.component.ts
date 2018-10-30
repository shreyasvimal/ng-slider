import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mat-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {

  @Input()
  width: number;

  derivedStyle: Object;

  @ViewChild('slideritem', {read: ElementRef})
  sliderItem: ElementRef;

  constructor() {}

  ngOnInit() {
    if (!this.width) {
       this.width = 240;
    }
    this.derivedStyle = {'width.px': this.width};
  }

}
