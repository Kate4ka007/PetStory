import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";


SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-crocodile-video',
  templateUrl: './crocodile-video.component.html',
  styleUrls: ['./crocodile-video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrocodileVideoComponent {
  thumbsSwiper: any;

  @ViewChild('Tswiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper!.swiperRef.slideNext(500);
  }
  slidePrev() {
    this.swiper!.swiperRef.slidePrev(500);
  }

}
