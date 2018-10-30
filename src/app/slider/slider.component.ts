import { SliderItemComponent } from './slider-item/slider-item.component';
import { ArrowDirection } from './options';
import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mat-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  derivedStyle: Object;
  arrowDirection = ArrowDirection;
  itemWidth = 0;
  moveProps: Object;
  visibleSlidesCount = 0;
  noOfSlides = 0;
  initialNoOfSlides = 0;

  lastMovedDirection: ArrowDirection = ArrowDirection.RIGHT;

  private itemList: Map<number, SliderItemComponent> = new Map<number, SliderItemComponent>();
  private visibleElCount: Array<number> = new Array<number>();

  @ContentChildren(SliderItemComponent)
  items: QueryList<SliderItemComponent>;

  @ViewChild('slider', {read: ElementRef})
  slider: ElementRef;

  @ViewChild('list', {read: ElementRef})
  list: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let index = 1;
    this.items.forEach(item => {
      this.itemList.set(index++, item);
    });
    this.initialNoOfSlides = this.noOfSlides = index - 1;
    this.itemWidth = this.itemList.size > 0 ? this.itemList.get(1).width : 0;
    this.visibleSlidesCount = Math.ceil((this.slider.nativeElement.offsetWidth || 0) / this.itemWidth);

    for (let count = 1; count <= this.visibleSlidesCount; count++) {
      this.visibleElCount.push(count);
    }
  }

  navigate(event) {

    if (event === ArrowDirection.RIGHT) {
      // Move to Right

      if (this.visibleElCount[this.visibleSlidesCount - 1] < this.itemList.size) {
        // Adjusting the visible elems count
        this.visibleElCount.shift();
        let nextItem = this.visibleElCount[0] || 0;
        this.visibleElCount.push(++nextItem);

        // Asigning the appropriate left value
        if (this.visibleElCount[this.visibleElCount.length] === this.noOfSlides) {
          this.moveProps = {
            'left.px': 0,
          };
        } else {
          this.moveProps = {
            'left.px': `-${this.itemWidth * (this.visibleElCount[0] - 1)}`,
          };
        }
      } else {

        this.noOfSlides = this.noOfSlides + 1;

        let whichClone = this.noOfSlides - this.initialNoOfSlides;

        if (whichClone > this.initialNoOfSlides) {
          this.noOfSlides = (this.initialNoOfSlides + 1);
          // Re-calculate the clone number
          whichClone = this.noOfSlides - this.initialNoOfSlides;
        }

        this.visibleElCount.shift();
        let nextItem = this.visibleElCount[0] || 0;
        this.visibleElCount.push(++nextItem);

        // Clone element
        const clone = this.itemList.get(whichClone).sliderItem.nativeElement.cloneNode(true);
        clone.setAttribute('data-clone', true);
        this.list.nativeElement.appendChild(clone);

        // Asigning the appropriate left value
        if (this.visibleElCount[this.visibleElCount.length] === this.noOfSlides) {
          this.moveProps = {
            'left.px': 0,
          };
        } else {
          this.moveProps = {
            'left.px': `-${this.itemWidth * (this.visibleElCount[0] - 1)}`,
          };
        }
      }

    } else if (event === ArrowDirection.LEFT) {
      // Move to Left

      if (this.visibleElCount[0] > 1) {
        // Adjust the visiable elems count
        this.visibleElCount.reverse();
        this.visibleElCount.shift();
        let nextItem = this.visibleElCount[0] || 0;
        this.visibleElCount.push(--nextItem);
        this.visibleElCount.reverse();

        // Assigning the appropriate left value
        if (this.visibleElCount[0] === 1) {
          this.moveProps = {
            'left.px': 0,
          };
        } else {
          this.moveProps = {
            'left.px': (this.itemWidth / (this.visibleElCount[0] - 1))
          };
        }
      }
    }
  }

}
