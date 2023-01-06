import {
  ChangeDetectorRef,
  ViewEncapsulation,
  Component,
  NgZone,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from 'rxjs';
import { cards } from 'src/assets/data/testimonails';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-testimonails',
  templateUrl: './testimonails.component.html',
  styleUrls: ['./testimonails.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonailsComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  cards = cards;
  content = 'leave feedback';

  show!: boolean;

  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }
}
