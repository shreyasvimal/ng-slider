import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider/slider-item/slider-item.component';
import { SliderArrowComponent } from './slider/slider-arrow/slider-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderItemComponent,
    SliderArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
