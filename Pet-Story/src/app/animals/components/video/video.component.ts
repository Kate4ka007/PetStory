import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";


SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent {
  thumbsSwiper: any;

  @ViewChild('Tswiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper!.swiperRef.slideNext(500);
  }
  slidePrev() {
    this.swiper!.swiperRef.slidePrev(500);
  }
}
